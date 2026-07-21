# Nadvi Publications

A responsive multilingual digital bookstore for English, Urdu, Balochi, and Persian books. The included storefront runs in demo mode with an interactive catalogue, product detail experience, persistent cart, simulated verified checkout, customer library, and administration dashboard.

## Local setup

1. Install Node.js 22.13 or newer and PostgreSQL 16+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and replace the placeholder values.
4. Apply `db/schema.sql` to the database. PostgreSQL must have `pgcrypto` enabled for `gen_random_uuid()`.
5. Run `npm run dev:windows` on Windows or `npm run dev` on macOS/Linux.
6. Open the URL printed by the development server.

Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build:windows` before release.

## Production services

**Authentication:** connect Auth.js credentials/email providers to `users`, hash passwords with Argon2id, use secure HTTP-only cookies, verify email, rate-limit identity endpoints, and return the same response for known and unknown reset emails. Create the first administrator by inserting a verified user with an Argon2id password hash and `ADMIN` role. Keep editor and administrator authorization checks server-side.

**Stripe:** use test keys during development. Create Checkout Sessions on the server and store a unique idempotency key on each pending order. The webhook endpoint must verify the raw request with `STRIPE_WEBHOOK_SECRET`, deduplicate `event_id`, update payment/order state in one transaction, and grant `library_items` only for a verified successful event. A success-page visit never marks an order paid. Add the production endpoint in Stripe Workbench and subscribe to `checkout.session.completed`, async-payment, refund, and dispute events.

**Private storage:** create a private S3-compatible bucket. Store cover images and deliberately limited samples separately from masters. `book_assets` prevents a `MASTER` record being public. Downloads must authenticate the user, verify ownership and allowance in a transaction, log the attempt, then issue a short-lived signed URL. Never persist or log signed URLs. The watermark extension should render a new derivative from the untouched master in a background job using customer name, order number, email, and date.

**Email:** set `RESEND_API_KEY` or replace the provider adapter. In development, write redacted previews for welcome, verification, password reset, order/payment confirmation, library access, download help, and refund updates. Never log reset tokens.

## Content operations

Add books through the administrator area or database importer. Every book requires a language, original Unicode title, author, slug, status, and at least one format/price. Upload the public excerpt as an asset with kind `SAMPLE`; upload the complete file separately as `MASTER`. Do not reuse a master storage key for a sample. Urdu, Persian, and Balochi content should be entered in logical Unicode order; direction is derived from the language record.

The temporary logo is the `brand` component in `app/page.tsx`; replace its icon while retaining editable English and Urdu text. Interface strings are structured by locale in the application layer; book language remains independent from interface locale.

## Deployment checklist

Deploy to Vercel, Cloudflare, or another Node-compatible host with PostgreSQL and private object storage. Configure all environment variables in the host, use managed TLS, rotate secrets, enable database backups and point-in-time recovery, apply restrictive CSP/security headers, configure a trusted proxy-aware rate limiter, verify webhook signatures, configure allowed upload MIME types and byte limits, and test refund and download revocation. Disable `DEMO_MODE`, remove sample admin credentials, verify transactional email DNS, and complete privacy/cookie configuration before accepting real payments.

The present browser demo intentionally simulates checkout because no Stripe, database, storage, or email credentials were supplied. The schema and documented trust boundaries are ready for those server adapters.
