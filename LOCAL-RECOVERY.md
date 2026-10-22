# Nadvi Publications website — local recovery notes

Canonical folder: C:\Development\Nadvi-Publications-Website
Repository: https://github.com/nadvipublications/nadvi-publications
Production branch: main
Vercel team: nadvipublications-3054s-projects
Vercel project: nadvi-publications
Live canonical origin: https://www.nadvipublications.online
App page: /jamal-ul-quran

The complete Git repository/history, current source, public images, SQL schema and migrations are saved here. The existing website is a demo storefront; source README describes optional external database/storage/payment services. A Git backup does not include future external database contents, Vercel account access or server-side secrets. No production secrets were downloaded or stored.

## Run on another computer
1. Install Node.js >=22.13 and Git.
2. Open this folder and run npm ci (the original package-lock.json is retained).
3. For the actual Vercel/Next.js workflow use npx next build, then npx next start.
4. For development use npx next dev.
5. Sign into the existing GitHub/Vercel accounts when publishing; production deploys from main.

Do not use npm run build for Vercel: the historical starter uses Vinext; existing vercel.json deliberately runs npx next build. Both original configurations are preserved.

## Quran app sharing
- Page content/metadata: app/jamal-ul-quran/page.tsx
- Scoped design: app/jamal-ul-quran/page.module.css
- Home callout: app/quran-app-link.tsx; home navigation/callout wired in app/page.tsx.
- Original unchanged logo: public/jamal-ul-quran-logo.svg.
- Social image: public/jamal-ul-quran-social-v1.png (1200x630).
- tests/quran-download.test.mjs checks raw HTTP responses without JavaScript.
- For a new social image, version its filename and update metadata; keep the page path stable.
- The source logo SHA-256 matches the owner's approved original: 4253deefc755ea0507e32c2e419e1d8a71a5136dade18c3d18ae1abfe55e0085.

## Local-only generated files
node_modules, .next and work are generated/ignored and can be rebuilt. work contains local package cache and QA evidence. pnpm-lock.yaml and pnpm-workspace.yaml were generated for this computer's bundled package manager; deployment continues to use the original npm lockfile.

## Domain checks
The plural domain (nadvipublications.online) is valid in Vercel. Non-www HTTPS redirects to www. Singular nadvipublication.online has invalid DNS configuration in Vercel and does not resolve in the current checks. No DNS or account-security configuration was changed.
