#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/website-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID || '';
if (!account) {
  throw new Error('AWS account ID required. Set CDK_DEFAULT_ACCOUNT or AWS_ACCOUNT_ID.');
}

// Optional: once nameservers are pointed at Route53 and cert is issued,
// add CERTIFICATE_ARN to GitHub Secrets to enable the custom domain.
const certificateArn = process.env.CERTIFICATE_ARN || undefined;

new WebsiteStack(app, 'SuperSolarWebsiteStack', {
  env: { account, region: 'ap-southeast-2' },
  certificateArn,
  crossRegionReferences: true,
  description: 'Super Solar Energy — S3 + CloudFront + HTTP API + Route53',
  tags: {
    Project: 'SuperSolarEnergy',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});
