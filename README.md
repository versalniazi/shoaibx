# SHOAIBX LIMITED — Website

The official website for **SHOAIBX LIMITED** (Company No. 17475454), a UK digital marketing and technology services company offering website design and development, digital marketing, online advertising and SEO.

> **Status:** Production-ready source code. The site is **not deployed yet**. Before going live, work through the [owner checklist](#owner-checklist-before-launch).

---

## Contents
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Pages](#pages)
- [Editing content](#editing-content)
- [Contact form](#contact-form)
- [Cookie consent & analytics](#cookie-consent--analytics)
- [SEO](#seo)
- [Deployment](#deployment)
- [Google Search Console & Analytics setup](#google-search-console--analytics-setup)
- [Owner checklist before launch](#owner-checklist-before-launch)
- [Quality assurance performed](#quality-assurance-performed)

---

## Tech stack

| | |
| --- | --- |
| Framework | **Next.js 16** (App Router, React Server Components, static generation) |
| UI | **React 19**, **TypeScript** (strict) |
| Styling | **Tailwind CSS v4** with a custom design-token theme (`app/globals.css`) |
| Fonts | Plus Jakarta Sans + Inter, self-hosted (no third-party font requests) |
| Validation | **Zod** — one schema shared by the browser and the server |
| Email | Resend HTTP API **or** any SMTP server (Nodemailer) |
| Node | 20.9+ (22 LTS recommended, see `.nvmrc`) |

No CMS, database or UI framework is required. Every page except the contact API is pre-rendered as static HTML for speed.

## Quick start

```bash
npm install
```

```bash
cp .env.example .env.local
```

Edit `.env.local` (at minimum, configure an email provider so the form can send — see [Contact form](#contact-form)). Then run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

Useful scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (type-checks and pre-renders all pages) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | TypeScript check only (run after a build so route types exist) |

## Project structure

```
app/                         Routes (App Router)
  page.tsx                   Home
  about/ services/ pricing/ portfolio/ blog/ contact/
  services/[slug]/           Digital Marketing, Website Design & Development, Online Advertising, SEO, Maintenance
  blog/[slug]/               Article template (+ per-article Open Graph image)
  privacy-policy/ terms-and-conditions/ cookie-policy/
  api/contact/route.ts       Server-side enquiry handler (validation, spam protection, email)
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg apple-icon.tsx
components/
  brand/                     Logo + LogoMark (vector wordmark paths)
  layout/                    Header (responsive nav), Footer
  sections/                  PageHero, ServiceCard, PricingCard, FAQList, ProcessSteps, CTASection
  forms/ContactForm.tsx      Accessible enquiry form
  consent/                   Cookie banner, preferences dialog, consent-gated Analytics
  legal/                     Shared legal page layout (with draft notice)
  illustrations/             Hero visual, portfolio mock-ups (pure SVG/CSS)
  ui/                        Icon set, ButtonLink, SectionHeading, Breadcrumbs, JsonLd, RevealObserver
content/blog/                Blog articles as typed data + reusable _template.ts
lib/
  site.ts                    ← Company details, navigation (edit here first)
  services.ts                ← Service page content
  pricing.ts                 ← Packages, prices, turnaround, exclusions
  faqs.ts portfolio.ts       Home FAQs, demonstration projects
  contact-schema.ts          Form fields & validation rules
  schema.ts seo.ts           Structured data & metadata helpers
public/brand/                Logo files (SVG light/dark/mono, mark SVG/PNG)
docs/BRAND_GUIDELINES.md     Brand identity guidelines
```

## Pages

| # | Page | URL |
| --- | --- | --- |
| 1 | Home | `/` |
| 2 | About Us | `/about` |
| 3 | Our Services | `/services` |
| 4 | Digital Marketing | `/services/digital-marketing` |
| 5 | Website Design & Development | `/services/website-design-development` |
| 6 | Online Advertising | `/services/online-advertising` |
| 7 | SEO Services | `/services/seo` |
| 8 | Website Maintenance | `/services/website-maintenance` |
| 9 | Pricing and Packages | `/pricing` |
| 10 | Portfolio / Our Work | `/portfolio` |
| 11 | Blog / Insights | `/blog` and `/blog/[slug]` (6 articles) |
| 12 | Contact Us | `/contact` |
| 13 | Privacy Policy | `/privacy-policy` |
| 14 | Terms and Conditions | `/terms-and-conditions` |
| 15 | Cookie Policy | `/cookie-policy` |

Also: custom 404 page, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, generated Open Graph images. Short redirects: `/seo`, `/web-design`, `/insights`, `/work`.

## Editing content

| To change… | Edit |
| --- | --- |
| Company name, number, address, email, phone, social links | `lib/site.ts` |
| Service page text, features, FAQs | `lib/services.ts` |
| Package prices, deliverables, turnaround, exclusions | `lib/pricing.ts` |
| Homepage FAQs | `lib/faqs.ts` |
| Portfolio | `lib/portfolio.ts` (currently clearly-labelled **demonstration** projects) |
| Legal pages | `app/privacy-policy`, `app/terms-and-conditions`, `app/cookie-policy` |
| Colours, fonts, spacing tokens | `app/globals.css` (`@theme`) |

### Adding a blog article
1. Copy `content/blog/_template.ts` to `content/blog/my-new-article.ts` and fill it in.
2. Import it in `content/blog/index.ts` and add it to the `posts` array.

The article page, blog index, sitemap, Open Graph image and `BlogPosting` structured data are generated automatically.

### Adding testimonials or case studies
Only add **real** testimonials or case studies, with the client's written permission. Never present demonstration projects as client work.

## Contact form

The enquiry form (`/contact`) posts JSON to `/api/contact`, which:

1. Checks the request comes from the same origin.
2. Rate-limits by IP (5 submissions per 10 minutes per server instance).
3. Filters bots with a hidden **honeypot** field and a **minimum fill-time** check (and optionally **Cloudflare Turnstile**).
4. **Validates every field server-side** with the same Zod schema used in the browser.
5. Sends the enquiry to `CONTACT_TO_EMAIL` (default `shoibxlimited@gmail.com`) with **Reply-To** set to the enquirer.
6. Returns a real success or a clear error. If no email provider is configured, the form shows an error with the email/phone fallback — it never pretends to succeed.

Pre-filled links work, e.g. `/contact?service=seo&package=seo-starter` (used by every pricing button).

### Option A — Resend (recommended)
1. Create a free account at [resend.com](https://resend.com) and **verify your domain** (adds DNS records).
2. Create an API key and set `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to an address on the verified domain, e.g. `SHOAIBX Website <website@your-domain.co.uk>`.

### Option B — SMTP
Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` and `CONTACT_FROM_EMAIL`.
For a Gmail account: host `smtp.gmail.com`, port `465`, secure `true`, user = the Gmail address, password = a **Google App Password** (requires 2-Step Verification). `CONTACT_FROM_EMAIL` should be the same Gmail address.

> All credentials live in environment variables only. `.env*` files are git-ignored (except `.env.example`).

## Cookie consent & analytics

- A banner offers **Accept All**, **Reject Non-Essential** and **Manage Preferences** (per-category toggles).
- The choice is stored in the essential `shoaibx_consent` cookie for 180 days; visitors can reopen settings from the footer ("Cookie settings") or the Cookie Policy page.
- **Google Analytics 4** (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) loads **only after analytics consent**. **Meta Pixel** (`NEXT_PUBLIC_META_PIXEL_ID`) loads **only after marketing consent**. If consent is withdrawn, their cookies are cleared and the page reloads.
- Verified during QA: zero requests to Google before consent or after rejection.

## SEO

Implemented:
- Unique `<title>` and meta description on every page; canonical URLs; `en-GB` language.
- One `<h1>` per page with a logical heading hierarchy (checked automatically).
- Clean, keyword-relevant URLs and a dedicated landing page per core service.
- `sitemap.xml` (all pages + articles) and `robots.txt` (blocks `/api/`; `NEXT_PUBLIC_NOINDEX=true` blocks everything for staging).
- Open Graph + Twitter card metadata with generated branded share images (site-wide and per article).
- Structured data (JSON-LD): `Organization` (with company number), `WebSite`, `Service` (per service page), `FAQPage`, `BreadcrumbList`, `BlogPosting`.
- Visible breadcrumbs on internal pages; extensive internal linking (services ↔ packages ↔ articles ↔ contact).
- Performance: static pre-rendering, self-hosted variable fonts, inline SVG graphics (no heavy images), minimal client JavaScript, security headers.

Target terms are used naturally in titles, headings and copy (e.g. *Digital Marketing Agency UK*, *Website Development Services UK*, *Website Design Company UK*, *SEO Services UK*, *Google Ads Management*, *Online Advertising Agency*, *E-commerce Website Development*, *Business Website Design*). The site does not claim local offices it does not have.

## Deployment

### Vercel (recommended — built by the creators of Next.js)
1. Push this repository to GitHub.
2. In [vercel.com](https://vercel.com) → **Add New Project** → import the repository. The framework is detected automatically (build: `npm run build`).
3. Add environment variables from `.env.example` under **Settings → Environment Variables** (at least `NEXT_PUBLIC_SITE_URL` and one email provider).
4. Deploy. Then **Settings → Domains** → add your domain and follow the DNS instructions. HTTPS is automatic.
5. After the domain works, set `NEXT_PUBLIC_SITE_URL` to the final `https://` URL and **redeploy** (canonical URLs and the sitemap use it).
6. On preview/staging environments, set `NEXT_PUBLIC_NOINDEX=true`.

### Any Node.js host (VPS, Render, Railway, DigitalOcean App Platform, etc.)

```bash
npm ci
```

```bash
npm run build
```

```bash
npm start -- -p 3000
```

Run behind a reverse proxy (e.g. Nginx or Caddy) with HTTPS, and keep the process alive with a manager such as `pm2` or systemd. Set environment variables in the host's configuration (and set them **before** `npm run build`, because `NEXT_PUBLIC_*` values are embedded at build time).

### Notes
- The contact API needs a Node.js server runtime; a pure static export (`output: "export"`) is **not** supported without replacing the form backend.
- The in-memory rate limiter works per server instance. For high traffic on serverless platforms, replace `lib/server/rate-limit.ts` with a shared store (e.g. Upstash Redis) — the function signature can stay the same.

## Google Search Console & Analytics setup

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console) → **Add property**.
2. Recommended: **Domain** property (verify via a DNS TXT record at your domain registrar). Alternatively, choose **URL prefix** → **HTML tag**, copy only the `content="…"` value into `GOOGLE_SITE_VERIFICATION`, redeploy, then click **Verify**.
3. Open **Sitemaps** and submit `https://your-domain/sitemap.xml`.
4. Use **URL Inspection** on the homepage and key service pages → **Request indexing**.
5. Check **Pages**, **Core Web Vitals** and **Enhancements** (FAQ, breadcrumbs) reports regularly.

### Google Analytics 4
1. At [analytics.google.com](https://analytics.google.com) create a GA4 property and a **Web** data stream for your domain.
2. Copy the **Measurement ID** (`G-XXXXXXXXXX`) into `NEXT_PUBLIC_GA_MEASUREMENT_ID` and redeploy.
3. In GA4 **Admin → Data retention**, choose the shortest period that meets your needs (the Privacy Policy states up to 14 months).
4. Enhanced measurement captures page views on client-side navigation automatically.
5. Optional: mark the contact form submission as a key event (e.g. track visits to the success state or add a custom event).
6. Link GA4 with Search Console (**Admin → Product links**).

### Google Business Profile (optional)
If you serve customers at their location or have a customer-facing office, a Google Business Profile helps local search. Do **not** list the registered office as a customer-facing address unless it genuinely is one.

## Owner checklist before launch

These items need the owner's confirmation — the site uses clearly marked placeholders instead of invented facts:

- [ ] **Telephone number:** `+44 7473 64390` is reproduced exactly as supplied, but it has 9 digits after +44 (UK mobiles normally have 10). Confirm and update `lib/site.ts` (`phoneDisplay` and `phoneHref`).
- [ ] **Email address:** `shoibxlimited@gmail.com` (without the "a" in SHOAIBX) is used as supplied. Confirm the spelling is correct.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain and configure an email provider; send a test enquiry.
- [ ] Review **Privacy Policy**, **Terms and Conditions** and **Cookie Policy** — search for `[OWNER TO CONFIRM` and `[e.g.` placeholders (ICO registration, hosting/email providers, payment terms, cancellation/refund policy, retention periods). Remove the draft notice in `components/legal/LegalPage.tsx` once reviewed, ideally by a legal adviser.
- [ ] Confirm package **turnaround times, revision rounds, scope and exclusions** in `lib/pricing.ts`, and VAT status.
- [ ] Replace demonstration portfolio items with real case studies when available (with client permission).
- [ ] Add social profile URLs (optional) via the `NEXT_PUBLIC_SOCIAL_*` variables.
- [ ] Set up Google Search Console and GA4 as described above.

## Quality assurance performed

Run against the production build (`next build` + `next start`):

- ✅ Production build and TypeScript pass; ESLint passes with no warnings.
- ✅ All 21 sitemap pages return 200 at desktop (1366 px) and mobile (375 px) widths.
- ✅ No browser console errors or warnings; no horizontal overflow at 375 px.
- ✅ Exactly one `<h1>` per page, no skipped heading levels, all form inputs labelled, no images without alt text.
- ✅ 108 internal links checked — no broken links.
- ✅ Contact form: client validation and error focus, server validation, honeypot, timing check, cross-origin rejection, rate limiting (429), "not configured" error path, and **real email delivery** tested end-to-end against an SMTP server.
- ✅ Cookie consent: banner, preferences dialog (keyboard/Escape), and GA loads only after consent.
- ✅ Mobile navigation opens, closes and resets on navigation.
- ✅ No fake testimonials, statistics, awards, VAT numbers or guaranteed-results claims.

---

© SHOAIBX LIMITED. Registered in England and Wales, company number 17475454. Registered office: 103–105 Hammersmith Grove, London, England, W6 0NQ.
