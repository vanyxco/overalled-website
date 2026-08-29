# Overalled Pressure Washing

Marketing site for Overalled Pressure Washing LLC (Crosby / Lake Houston, TX).

```bash
git clone https://github.com/vanyxco/overalled-website.git
cd overalled-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Scroll the hero — the driveway washes, then the bank lot.

## Quote email

1. Create a free [Resend](https://resend.com) account.
2. Copy `.env.example` to `.env.local` and add `RESEND_API_KEY`.
3. Until the domain is verified on Resend, keep `RESEND_FROM` as `onboarding@resend.dev`. Quotes still land at `CONTACT_EMAIL`.

Without a Resend key the form still succeeds locally and logs the lead.

## Stack

- Next.js 16 / React 19 / Tailwind v4
- Motion (`useScroll` + `clip-path`) for the two-act wash hero
- Zod + Server Action for the quote form
- Cloudflare Workers via OpenNext (`npm run deploy`) for hosting

## Cloudflare preview (no custom domain)

This app is not a static export — the quote form is a server action — so it deploys as a **Worker** in the Workers & Pages dashboard. You still get a public `*.workers.dev` link to send Rocky. Custom domain later.

**From this machine (one-time login):**

```bash
npx wrangler login
npm run deploy
```

Wrangler prints the preview URL. Set `RESEND_API_KEY` later with `npx wrangler secret put RESEND_API_KEY` if quotes should email; without it the form still succeeds and logs the lead.

**From the dashboard (auto-deploys on push to `main`):**

1. Open [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) → Create → Import a Git repository.
2. Select `vanyxco/overalled-website`, production branch `main`.
3. Cloudflare reads `wrangler.jsonc`. Leave the OpenNext/Workers settings as detected.
4. Deploy, then copy the `*.workers.dev` URL for Rocky. Attach the custom domain later.
