import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-acm';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ses from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';

export interface WebsiteStackProps extends cdk.StackProps {
  certificateArn?: string;
}

export class WebsiteStack extends cdk.Stack {
  public readonly hostedZone: route53.PublicHostedZone;

  constructor(scope: Construct, id: string, props?: WebsiteStackProps) {
    super(scope, id, props);

    const domainName = 'supersolarenergy.com.au';
    const wwwDomainName = `www.${domainName}`;

    // ── Route53 Hosted Zone ──────────────────────────────────────
    this.hostedZone = new route53.PublicHostedZone(this, 'HostedZone', {
      zoneName: domainName,
      comment: 'Hosted zone for Super Solar Energy website',
    });

    // ── SES Domain Identity (auto DKIM/MX via Route53) ──────────
    new ses.EmailIdentity(this, 'SesEmailIdentity', {
      identity: ses.Identity.publicHostedZone(this.hostedZone),
      mailFromDomain: `mail.${domainName}`,
    });

    // ── Lambda: Contact form handler ─────────────────────────────
    const contactFunction = new lambda.Function(this, 'ContactFunction', {
      functionName: 'super-solar-contact',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/contact')),
      timeout: cdk.Duration.seconds(30),
      memorySize: 256,
      description: 'Receives contact form submissions and sends email via SES',
      environment: {
        TO_EMAIL: 'info@supersolarenergy.com.au',
        CC_EMAIL: 'manish.bvc@gmail.com',
        FROM_EMAIL: `noreply@${domainName}`,
      },
    });

    contactFunction.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['ses:SendEmail', 'ses:SendRawEmail'],
      resources: ['*'],
    }));

    // ── Lambda: Quote form handler ───────────────────────────────
    const quoteFunction = new lambda.Function(this, 'QuoteFunction', {
      functionName: 'super-solar-quote',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/quote')),
      timeout: cdk.Duration.seconds(30),
      memorySize: 256,
      description: 'Receives quote form submissions and sends email via SES',
      environment: {
        TO_EMAIL: 'info@supersolarenergy.com.au',
        CC_EMAIL: 'manish.bvc@gmail.com',
        FROM_EMAIL: `noreply@${domainName}`,
      },
    }));

    quoteFunction.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['ses:SendEmail', 'ses:SendRawEmail'],
      resources: ['*'],
    }));

    // ── Lambda: Google Reviews handler ───────────────────────────
    const reviewsFunction = new lambda.Function(this, 'ReviewsFunction', {
      functionName: 'super-solar-reviews',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/google-reviews')),
      timeout: cdk.Duration.seconds(30),
      memorySize: 256,
      description: 'Fetches Google My Business reviews',
      environment: {
        GOOGLE_MY_BUSINESS_API_KEY: '',
        GOOGLE_MY_BUSINESS_ACCOUNT_ID: '',
        GOOGLE_MY_BUSINESS_LOCATION_ID: '',
      },
    });

    // ── S3 Bucket ────────────────────────────────────────────────
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: `super-solar-energy-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // ── CloudFront URL rewrite ───────────────────────────────────
    const urlRewriteFunction = new cloudfront.Function(this, 'UrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
      `),
      functionName: 'SuperSolarUrlRewrite',
      comment: 'Rewrites URLs to append index.html for Next.js static export',
    });

    // ── ACM Certificate (imported from us-east-1) ────────────────
    const certificate = props?.certificateArn
      ? acm.Certificate.fromCertificateArn(this, 'ImportedCertificate', props.certificateArn)
      : undefined;

    // ── CloudFront Distribution ──────────────────────────────────
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
        functionAssociations: [{
          function: urlRewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
      },
      domainNames: certificate ? [domainName, wwwDomainName] : undefined,
      certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        { httpStatus: 404, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: cdk.Duration.minutes(5) },
        { httpStatus: 403, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: cdk.Duration.minutes(5) },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    });

    // ── HTTP API v2 with CORS ────────────────────────────────────
    const api = new apigatewayv2.HttpApi(this, 'Api', {
      apiName: 'super-solar-energy-api',
      description: 'Super Solar Energy API — contact, quote, reviews',
      corsPreflight: {
        allowOrigins: [
          `https://${domainName}`,
          `https://${wwwDomainName}`,
          `https://${distribution.distributionDomainName}`,
          'http://localhost:3000',
        ],
        allowMethods: [
          apigatewayv2.CorsHttpMethod.POST,
          apigatewayv2.CorsHttpMethod.GET,
          apigatewayv2.CorsHttpMethod.OPTIONS,
        ],
        allowHeaders: ['Content-Type'],
        maxAge: cdk.Duration.hours(24),
      },
    });

    // Rate limiting
    const defaultStage = api.defaultStage?.node.defaultChild as apigatewayv2.CfnStage;
    defaultStage.defaultRouteSettings = {
      throttlingBurstLimit: 10,
      throttlingRateLimit: 5,
    };

    api.addRoutes({
      path: '/api/contact',
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration('ContactIntegration', contactFunction),
    });

    api.addRoutes({
      path: '/api/quote',
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration('QuoteIntegration', quoteFunction),
    });

    api.addRoutes({
      path: '/api/google-reviews',
      methods: [apigatewayv2.HttpMethod.GET],
      integration: new integrations.HttpLambdaIntegration('ReviewsIntegration', reviewsFunction),
    });

    // ── Route53 A records (only when cert is attached) ───────────
    if (certificate) {
      new route53.ARecord(this, 'AliasRecord', {
        zone: this.hostedZone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
      new route53.ARecord(this, 'WwwAliasRecord', {
        zone: this.hostedZone,
        recordName: wwwDomainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
    }

    // ── Outputs ──────────────────────────────────────────────────
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name',
      exportName: 'SuperSolarBucketName',
    });
    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID',
      exportName: 'SuperSolarDistributionId',
    });
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront URL — accessible immediately',
    });
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: certificate ? `https://${domainName}` : `https://${distribution.distributionDomainName}`,
      description: 'Website URL',
    });
    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
      description: 'Route53 Hosted Zone ID',
      exportName: 'SuperSolarHostedZoneId',
    });
    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', this.hostedZone.hostedZoneNameServers || []),
      description: 'Nameservers — update these at Hostinger to point to Route53',
    });
    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.apiEndpoint,
      description: 'API Gateway base URL',
      exportName: 'SuperSolarApiEndpoint',
    });
  }
}
