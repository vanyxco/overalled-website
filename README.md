# Overalled Pressure Washing

Marketing site for **Overalled Pressure Washing LLC** (Crosby / Lake Houston, TX). Not Overall Pressure Washing in San Antonio.

```bash
git clone https://github.com/vanyxco/overalled-website.git
cd overalled-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where things live (read this first)

| What | Status |
| --- | --- |
| **Source of truth** | GitHub `main` — https://github.com/vanyxco/overalled-website |
| **Live preview** | https://overalled-website.proud-cell-ae49.workers.dev |
| **GitHub → Cloudflare auto-deploy** | **Not connected.** Pushing to GitHub does not update the live URL. |
| **How the live URL got there** | Direct Wrangler deploy from this machine: `npx wrangler login` then `npm run deploy` |
| **Cloudflare account** | `admin@astropromarketing.com` (Worker name `overalled-website`) |
| **Custom domain** | Not attached. `overalledpressurewashing.com` is not purchased yet. |

GitHub is the repo. Cloudflare is the host. They are **not wired together**. To update the live preview after a Git push, run `npm run deploy` (or connect Git in the [Workers & Pages dashboard](https://dash.cloudflare.com/?to=/:account/workers-and-pages) later).

## Stack

- Next.js 16.3 App Router / React 19 / Tailwind v4 / Motion
- Quote form: Server Action + Zod + Resend (`app/actions/quote.ts`)
- Hosting: Cloudflare **Worker** via OpenNext — not a static Pages site (the form needs a server)
- Brand: `design/brand-kit.md`
- Copy and jobs: `lib/site.ts`

## Quote email

1. Copy `.env.example` to `.env.local`.
2. Add a [Resend](https://resend.com) `RESEND_API_KEY`.
3. Until the domain is verified, keep `RESEND_FROM` as `onboarding@resend.dev`.

Without a key the form still succeeds and logs the lead. Production email needs:

```bash
npx wrangler secret put RESEND_API_KEY
```

## Deploy (manual, current)

```bash
npx wrangler login   # once
npm run deploy
```

Optional later: dashboard → Import Git repo `vanyxco/overalled-website`, branch `main`. Cloudflare reads `wrangler.jsonc`.

## Do not invent

- No street address (service-area business, Crosby TX 77532)
- Owner is **Rocky** (first name only in public copy)
- No prices, hours, or insurance claims
- Keep Facebook captions/typos as posted
- Do not claim live Graph/Facebook sync — the `/work` feed is a hosted snapshot in `lib/site.ts` + `public/work/facebook/`
