# Overalled Pressure Washing — Brand Kit

Source: official logo lockups (Aug 2026), Facebook page, reviews, and Cream of the Crop 2026 listing.

## Voice

Professional, owner-operated, specific. Warm Gulf Coast English without slang, mascot jokes, or punchlines. The Facebook gallery keeps the page’s own captions. The mascot lives in the logo — don’t invent extra characters in copy.

## Color

Sampled from the logo lockups.

| Token | Hex | Use |
| --- | --- | --- |
| blue | `#106CD0` | Brand blue — primary fills, underlines, dark-section accents |
| navy | `#061433` | Dominant surfaces, glass, header, footer (deep royal, not generic black) |
| navy-2 | `#0A2468` | Elevated navy, cards on dark |
| orange | `#E07020` | Secondary — overalls: accent word, thin hairlines, section labels |
| orange-hot | `#FAA437` | Hat-brim highlight — the one orange word in a headline |
| water | `#2CBAF5` | Wash line, mist, links that should feel like spray |
| canvas | `#F4EFE6` | Light sections |
| paper | `#FBFAF6` | Page background on light |
| ink | `#12151A` | Body text on light |
| mute | `#3D4652` | Secondary text (7:1+ on paper — older-eye floor) |
| line | `#D9D1C4` | Borders on light |
| brass | `#E08A2C` | Fine metal — same family as the logo’s orange dashes |

Semantic: success `#2F6B4F`, danger `#B42318`.

On navy, secondary copy is at least 85% white (`text-white/85`). Never fade body or nav below 70% white.

## Logos

- Wide lockup: `/brand/logo-wide.png` — nav, footer. Transparent field; black in the art (hat, gloves) stays black.
- Square / circle mark: `/brand/logo-mark.png` (also used for icons). Avatars, about, favicon, OG. On the home hero, the mark fades in as the wash copy fades out.

## Typography

This site is read by neighbors, many of them older. Type is built for that first — but it has to feel like the lockup: blocky, athletic, industrial sans. No serif display. No script wordmark (the logo is the wordmark).

- Display: Archivo Black. Headlines only — extra-bold poster sans, closer to the OVERALLED lockup than a condensed ticker. Line-height 1.08. Tracking -0.02em. Sentence case. The face is already black; do not faux-bold it.
- Body / UI: Barlow (400 body, 600 labels). Default face for everything you have to actually read.
- Accent: Archivo Black with an 8° lean in orange-hot — one word in a headline (`years`, `washed`), and step numerals. Never a script face.
- Labels: Barlow 600, 16px, 0.06em tracking, **sentence case**. No 9–12px all-caps.

Scale: 16 / 18 / 20 / 22 / 28 / 36 / 48 / 64 / 84.
Body: 18px / 1.65. Display line-height 1.12.
Floor: body 18px, UI 16px, buttons 18px.

## Spacing, radius, elevation, motion

- Base 4px. Section padding 96 desktop / 64 mobile.
- Radius: 24px surfaces (`--radius-surface`), 999 buttons/chips (`--radius-control`). Prefer round over sharp — overalls have rounded pockets; the square mark can sit in a circle.
- Shadows: none on navy cards. Light cards use a 1px `line` edge, not a drop shadow.
- Type on photography: a rounded (`--radius-surface`) glass panel — navy at ~48% with backdrop blur and a blue/white hairline. Copy lives in the panel; hero CTAs sit below it, not inside it. Do not wash the whole hero in a scrim.
- Hero wash edge: a pressure-washer lance sits left of the wash. White jet and droplets leave the nozzle; the vertical split is only a soft wet sheen. As copy fades, the square mark fades in over the wash. Reduced motion: static split, no lance travel, no mark crossfade, no particle animation.
- Hairline: 1px orange (`--brass`) as the only metal — under eyebrows, never as a fat bar. The lockup is a blue field with orange overalls; buttons follow the field, not the overalls.
- Image hover: scale 1.04 over 700ms `cubic-bezier(0.22, 1, 0.36, 1)`.
- Form fields: bottom border only, transparent fill.
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)`, 180ms UI / 700ms page.
- Reduced motion: no pinned hero wipe — static 55/45 split.
- Primary controls: at least 44px tall.

## Rules

- One primary CTA per viewport.
- Light mode for reading sections, navy for cinematic/hero/footer. No auto dark inversion.
- Never use Inter, purple gradients, or generic contractor yellow-on-blue templates.
- Photography > illustration except the official logo mascot.
- If type looks “designed” but you have to squint, it is wrong.
- Finish is expensive, not loud: orange hairlines, underline fields, slow image scale, no drop-shadow cards on navy, no boxed reviews. Hero copy sits in a glass panel, not a full-bleed overlay.
- Nav hover is a blue underline from the left. Primary fill is brand blue (`hover: navy-2`); secondary is a 1px white/navy edge. Orange is the spark, not the field.
