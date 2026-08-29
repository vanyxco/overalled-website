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
3. Until the domain is verified on Resend, keep `RESEND_FROM` as `onboarding@resend.dev`. Quotes still land in Rocky’s inbox (`CONTACT_EMAIL`).

Without a Resend key the form still succeeds locally and logs the lead.

## Stack

- Next.js 16 / React 19 / Tailwind v4
- Motion (`useScroll` + `clip-path`) for the two-act wash hero
- Zod + Server Action for the quote form
