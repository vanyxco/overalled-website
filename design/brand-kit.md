# Overalled Pressure Washing — Brand Kit

Source: Facebook page (Aug 2026), logo, cover, reviews, and Cream of the Crop 2026 listing.

## Voice

Professional, owner-operated, specific. Warm Gulf Coast English without slang, mascot jokes, or punchlines. The company looks established; the Facebook gallery keeps the page’s own captions.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| navy | `#071525` | Dominant surfaces, hero overlays, footer |
| navy-2 | `#0E2744` | Elevated navy, cards on dark |
| orange | `#E07020` | Logo script, primary CTA, accent word |
| orange-hot | `#F4A261` | Hover, highlights |
| water | `#4DB8D4` | Spray line, links on dark, trust chips |
| canvas | `#F4EFE6` | Light sections |
| paper | `#FBFAF6` | Page background on light |
| ink | `#12151A` | Body text on light |
| mute | `#3D4652` | Secondary text (7:1+ on paper — older-eye floor) |
| line | `#D9D1C4` | Borders on light |
| brass | `#C4A35A` | Awards, fine lines |

Semantic: success `#2F6B4F`, danger `#B42318`.

On navy, secondary copy is at least 85% white (`text-white/85`). Never fade body or nav below 70% white.

## Typography

This site is read by neighbors, many of them older. Type is built for that first.

- Display: Fraunces (weight 600, optical size locked to text ~28 so stems stay thick at headline sizes). Headlines only. Line-height 1.18.
- Body / UI: Atkinson Hyperlegible Next (Braille Institute). Default face for everything you have to actually read.
- Script: Great Vibes — the wordmark and one accent word in a headline (`years`, `washed`). Never smaller than ~30px.
- Labels: Atkinson 600, 16px, 0.04em tracking, **sentence case**. No condensed fonts. No 9–12px all-caps.

Scale: 16 / 18 / 20 / 22 / 28 / 36 / 48 / 64 / 84.
Body: 18px / 1.65. Display line-height 1.18.
Floor: body 18px, UI 16px, buttons 18px.

## Spacing, radius, elevation, motion

- Base 4px. Section padding 96 desktop / 64 mobile.
- Radius: 0 (knives), 4 (inputs), 999 (pills). Prefer sharp over round.
- Shadows: none on navy cards. Light cards use a 1px `line` edge, not a drop shadow.
- Type on photography: navy scrim plus `--shadow-hero-type` (tight navy text-shadow). This is readability, not a card drop-shadow.
- Hero wash edge: a pressure-washer lance sits left of the water line, nozzle aimed at the line, spray traveling with it. Reduced motion: static split, no lance travel.
- Hairline: 1px brass (`#C4A35A`) as the only metal — under eyebrows, over the footer, never as a fat bar.
- Image hover: scale 1.04 over 700ms `cubic-bezier(0.22, 1, 0.36, 1)`.
- Form fields: bottom border only, transparent fill.
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)`, 180ms UI / 700ms page.
- Reduced motion: no pinned hero wipe — static 55/45 split.
- Primary controls: at least 44px tall.

## Rules

- One primary CTA per viewport.
- Light mode for reading sections, navy for cinematic/hero/footer. No auto dark inversion.
- Never use Inter, purple gradients, or generic contractor yellow-on-blue templates.
- Photography > illustration except the existing logo mascot.
- If type looks “designed” but you have to squint, it is wrong.
- Finish is expensive, not loud: brass hairlines, underline fields, slow image scale, no drop-shadow cards on navy, no boxed reviews. Hero type may use `--shadow-hero-type`.
- Nav hover is a brass underline from the left. Primary fill is orange; secondary is a 1px white/navy edge.
