# Super Solar Energy

Website for **Super Solar Energy** — [supersolarenergy.com.au](https://supersolarenergy.com.au)

17 Short Street, Hampton East, Vic. 3188 | 1300 09 09 84 | info@supersolarenergy.com.au

---

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (static export), TypeScript, Tailwind CSS v4, Framer Motion |
| Hosting | AWS S3 + CloudFront |
| API | AWS HTTP API Gateway v2 → Lambda (Node.js 20) |
| Email | AWS SES (noreply@supersolarenergy.com.au) |
| DNS | AWS Route53 (hosted zone → Hostinger nameservers) |
| TLS | AWS ACM certificate (us-east-1, attached to CloudFront) |
| IaC | AWS CDK v2 (TypeScript) |
| CI/CD | GitHub Actions → AWS (zenith trends account, ap-southeast-2) |

---

## Project Structure

```
supersolar/
├── frontend/          # Next.js 15 app (static export)
│   ├── src/
│   │   ├── app/       # 41 pages (homepage, services, articles, city pages…)
│   │   └── components/
│   └── public/        # Images, favicon, robots.txt
├── cdk/               # AWS CDK infrastructure
│   ├── bin/app.ts     # CDK entry point
│   └── lib/
│       ├── website-stack.ts     # S3, CloudFront, API Gateway, Route53, SES
│       └── certificate-stack.ts # ACM certificate (us-east-1)
├── lambda/
│   ├── contact/       # Contact form → SES
│   ├── quote/         # Quote request → SES
│   └── google-reviews/# Google My Business reviews (with fallback)
├── .github/workflows/
│   └── deploy.yml     # CI/CD pipeline
└── run_all.sh         # Local dev script
```

---

## Local Development

```bash
./run_all.sh
```

Opens:
- **http://localhost:3000** — Next.js frontend
- **http://localhost:3001** — Mock API (contact, quote, reviews)

On first run, `frontend/.env.local` is created automatically. Add your Google Maps API key there to enable the map:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

---

## Deployment

Deployment is **always via GitHub Actions** — never run CDK manually.

Every push to `main` triggers the pipeline which:
1. Bootstraps CDK in `ap-southeast-2` and `us-east-1`
2. Deploys `SuperSolarWebsiteStack` (infra)
3. Builds the Next.js static site
4. Syncs to S3 with optimised cache headers
5. Invalidates the CloudFront cache

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | zenith trends IAM access key |
| `AWS_SECRET_ACCESS_KEY` | zenith trends IAM secret key |
| `AWS_ACCOUNT_ID` | account id |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key |
| `CERTIFICATE_ARN` | ACM certificate ARN (us-east-1) — add after nameservers are set |

### Custom Domain Setup (one-time)

1. Deploy once without `CERTIFICATE_ARN` — pipeline prints Route53 nameservers
2. Update nameservers at Hostinger to point to Route53
3. Create ACM certificate and add `CERTIFICATE_ARN` to GitHub secrets
4. Push any change to re-deploy with custom domain attached

---

## Infrastructure

### WebsiteStack (ap-southeast-2)
- **S3 bucket** — private, static site assets
- **CloudFront** — HTTPS, URL rewrite function for Next.js static export, price class 100
- **HTTP API Gateway v2** — rate limited (5 req/s, burst 10)
- **Lambda functions** — contact, quote, google-reviews (Node.js 20, 256 MB, 30s timeout)
- **SES EmailIdentity** — auto DKIM/MX via Route53
- **Route53 hosted zone** — A records added when certificate is attached

### CertificateStack (us-east-1)
- ACM certificate for `supersolarenergy.com.au` + `www.supersolarenergy.com.au`
- DNS validated via Route53

---

## API Endpoints

| Method | Path | Handler |
|--------|------|---------|
| `POST` | `/api/contact` | `lambda/contact/index.js` |
| `POST` | `/api/quote` | `lambda/quote/index.js` |
| `GET` | `/api/google-reviews` | `lambda/google-reviews/index.js` |

Emails are sent to `info@supersolarenergy.com.au` (CC: `manish.bvc@gmail.com`).
