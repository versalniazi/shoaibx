# SHOAIBX LIMITED — Brand Guidelines

Version 1.0 · November 2026

## 1. Brand positioning

**SHOAIBX LIMITED is a reliable digital growth partner for UK businesses.** We bring website development, digital marketing, online advertising and SEO together into one coherent, measurable plan.

| Attribute | What it means in practice |
| --- | --- |
| **Innovative** | Modern technology, current best practice, forward-looking design. |
| **Professional** | Clear structure, precise language, consistent visuals. |
| **Trustworthy** | Transparent pricing, honest claims, no guarantees we cannot keep. |
| **Growth-focused** | Every piece of work ties back to a business objective. |

**Tagline:** *Digital Solutions That Move Your Business Forward.*

### Tone of voice
- Plain English, confident and warm. Explain, don't impress.
- Specific over vague ("a landing page in 7–10 working days", not "lightning-fast delivery").
- Never promise rankings, sales, or results outside our control. Never invent statistics, awards or testimonials.
- British English spelling (optimisation, colour, organise).

## 2. Logo

### The symbol
A rounded square tile containing an **"X" whose rising stroke becomes an upward arrow** — the X of SHOAIBX transformed into a signal of growth. The second stroke passes "beneath" the arrow (shown with a gap and reduced opacity), suggesting layered, joined-up services.

### Files (`public/brand/`)
| File | Use |
| --- | --- |
| `logo-light.svg` | Primary logo for **light** backgrounds (dark wordmark). |
| `logo-dark.svg` | Primary logo for **dark** backgrounds (white wordmark). |
| `logo-mono-black.svg` | Single-colour version for print, stamps, fax, embossing. |
| `logo-mono-white.svg` | Single-colour reversed version for photos / dark single-colour use. |
| `logo-mark.svg` | Symbol only — social avatars, app icons, favicons. |
| `logo-mark.png` | 512 × 512 PNG of the symbol for platforms that do not accept SVG. |
| `app/icon.svg` | Website favicon (auto-served by Next.js). |
| `app/apple-icon.tsx` | Generates the 180 × 180 Apple touch icon. |

All wordmarks are **outlined vector paths**, so they render identically without fonts installed. In the website code, use the `<Logo variant="light|dark" />` and `<LogoMark />` React components (`components/brand/Logo.tsx`).

### Usage rules
- **Clear space:** keep at least the height of the "S" (≈ 0.5 × symbol height) clear on all sides.
- **Minimum size:** full logo 120 px wide on screen / 30 mm in print; symbol 16 px / 6 mm.
- **Do not** stretch, rotate, recolour, add shadows/outlines, or place the colour logo on busy images or low-contrast backgrounds.
- **Do not** separate "LIMITED" and set it in another typeface; it can be omitted in tight spaces (`showLimited={false}`).

## 3. Colour palette

### Primary
| Token | Hex | Use |
| --- | --- | --- |
| Ink 950 | `#070B1A` | Dark sections, footer, premium backgrounds |
| Ink 900 | `#0B1124` | Headings, wordmark on light |
| Brand 600 | `#5641EE` | Primary buttons, links |
| Brand 500 | `#6A55FF` | Symbol gradient start, accents |
| Accent 500 | `#14B4DC` | Symbol gradient end, highlights |

### Supporting
| Token | Hex | Use |
| --- | --- | --- |
| Brand 50 / 100 | `#F1EFFF` / `#E4E0FF` | Soft backgrounds, icon wells |
| Accent 300 / 400 | `#7EE6FA` / `#45DAF7` | Highlights on dark backgrounds |
| Growth 400 | `#B6F05C` | Tiny "positive" accents only (status dots) |
| Ink 600 / 500 | `#48516B` / `#5B6478` | Body text / secondary text |
| Ink 100 / 50 | `#EEF1F6` / `#F7F8FB` | Borders / section backgrounds |

**Signature gradient:** `linear-gradient(135deg, #6A55FF, #14B4DC)` — use for the symbol, key icons and highlighted words. Use sparingly: one gradient focal point per screen.

**Accessibility:** Body text uses Ink 600/700 on white (WCAG AA+). White text sits on Brand 600 or darker. Never place Accent 400 text on white.

The complete token set lives in `app/globals.css` under `@theme`.

## 4. Typography

| Role | Typeface | Weights |
| --- | --- | --- |
| Display & headings | **Plus Jakarta Sans** (variable) | 700–800, tight tracking (−0.02em) |
| Body & UI | **Inter** (variable) | 400–600 |

Both are open-source (SIL Open Font License) and self-hosted via `@fontsource-variable` — no requests to Google Fonts.

Scale (desktop): H1 56–68 px · H2 40–44 px · H3 20–24 px · Body 17–18 px · Small 14 px. Line-height 1.05–1.15 for headings, 1.6–1.7 for body.

## 5. Visual language
- **Shapes:** generous rounded corners (20 px cards, full-pill buttons).
- **Backgrounds:** subtle 44 px grid, soft blurred colour glows in brand/accent hues.
- **Icons:** single-weight line icons (1.75 stroke, 24 px grid), `components/ui/Icon.tsx`.
- **Motion:** gentle fade/rise on scroll, small hover lifts (≤ 4 px). Always respect "reduce motion".
- **Imagery:** product/UI-style illustrations; if photography is added, use real, natural images of the team or work — no generic stock "handshakes".

## 6. Applications
- **Email signature:** symbol (32 px) + name, role, `shoibxlimited@gmail.com`, phone, "SHOAIBX LIMITED · Company No. 17475454".
- **Social avatars:** `logo-mark.png` on its own gradient tile.
- **Documents/invoices:** `logo-light.svg` top-left, legal footer with company number and registered office.
