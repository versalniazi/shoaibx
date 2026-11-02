/**
 * Service packages. Prices are the proposed launch prices supplied by the company.
 * Turnaround times are typical estimates and are confirmed in writing before work starts.
 * OWNER TO REVIEW: turnaround, revisions and exclusions before publishing.
 */
export type Package = {
  id: string;
  name: string;
  price: number;
  priceFrom?: boolean;
  billing: string;
  summary: string;
  category: string;
  bestFor: string;
  deliverables: string[];
  turnaround: string;
  scope: string;
  revisions: string;
  exclusions: string[];
  cta: string;
  serviceValue: string;
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    id: "seo-quick-audit",
    name: "SEO Quick Audit",
    price: 15,
    billing: "One-time payment",
    category: "SEO",
    summary: "A short, practical review of your website's SEO basics with clear next steps.",
    bestFor: "Owners who want to know where their website stands before investing more.",
    deliverables: ["Basic website SEO review", "Initial keyword observations", "Basic metadata review", "Short recommendations report"],
    turnaround: "2–3 working days",
    scope: "Up to 5 key pages reviewed",
    revisions: "Not applicable (report)",
    exclusions: ["Implementation of changes", "Full technical crawl of large sites", "Ongoing monitoring"],
    cta: "Order SEO Audit",
    serviceValue: "seo",
  },
  {
    id: "website-health-check",
    name: "Website Health Check",
    price: 25,
    billing: "One-time payment",
    category: "Website",
    summary: "A broad health check covering mobile display, speed, links and basic SEO.",
    bestFor: "Businesses whose website feels slow, dated or is not generating enquiries.",
    deliverables: ["Basic website review", "Mobile responsiveness check", "Basic speed assessment", "Broken-link checks", "Basic SEO review"],
    turnaround: "3 working days",
    scope: "Up to 10 pages reviewed",
    revisions: "Not applicable (report)",
    exclusions: ["Fixes and development work", "Security penetration testing", "Hosting changes"],
    cta: "Order Health Check",
    serviceValue: "website-maintenance",
  },
  {
    id: "seo-starter",
    name: "SEO Starter",
    price: 49,
    billing: "One-time payment",
    category: "SEO",
    summary: "Hands-on on-page improvements to give key pages a stronger SEO foundation.",
    bestFor: "Small websites ready to improve how their main pages appear in search results.",
    deliverables: ["Basic keyword research", "On-page SEO improvements", "Page title optimisation", "Meta description optimisation", "Basic internal linking recommendations"],
    turnaround: "5–7 working days",
    scope: "Up to 5 pages optimised",
    revisions: "1 round of amendments",
    exclusions: ["Content writing of new pages", "Link building", "Ongoing SEO management", "Guaranteed rankings"],
    cta: "Start SEO Starter",
    serviceValue: "seo",
    highlight: true,
  },
  {
    id: "advertising-setup",
    name: "Advertising Setup",
    price: 59,
    billing: "One-time payment",
    category: "Advertising",
    summary: "One advertising platform set up properly, ready for you to launch with confidence.",
    bestFor: "Businesses starting with Google Ads, Facebook or Instagram advertising.",
    deliverables: ["One advertising platform setup", "Basic campaign configuration", "Audience research", "Initial campaign structure", "Basic ad copy preparation"],
    turnaround: "3–5 working days",
    scope: "1 platform, 1 campaign",
    revisions: "1 round of amendments to ad copy",
    exclusions: ["Advertising spend (paid directly to the platform)", "Ongoing campaign management", "Design of video or complex creative"],
    cta: "Order Ads Setup",
    serviceValue: "online-advertising",
  },
  {
    id: "landing-page",
    name: "Landing Page Design",
    price: 99,
    billing: "One-time payment",
    category: "Website",
    summary: "A single, conversion-focused landing page for a campaign, product or service.",
    bestFor: "Campaigns, launches and paid advertising that need a focused destination.",
    deliverables: ["One professional landing page", "Responsive design", "Contact form", "Basic on-page SEO", "Two revision rounds"],
    turnaround: "7–10 working days",
    scope: "1 page",
    revisions: "2 revision rounds",
    exclusions: ["Domain and hosting", "Copywriting beyond supplied content", "Stock imagery licences", "Third-party integrations"],
    cta: "Order Landing Page",
    serviceValue: "website-development",
  },
  {
    id: "business-website-starter",
    name: "Business Website Starter",
    price: 150,
    priceFrom: true,
    billing: "One-time payment",
    category: "Website",
    summary: "A compact starter website to give a new or small business a professional online home.",
    bestFor: "Startups and sole traders who need a credible first website.",
    deliverables: ["Starter business website", "Professional homepage", "Basic service sections", "Contact information", "Responsive layout", "Basic SEO setup"],
    turnaround: "10–15 working days",
    scope: "Single-page site with up to 4 sections",
    revisions: "2 revision rounds",
    exclusions: ["Additional pages", "E-commerce or booking functionality", "Blog setup", "Domain, hosting and email", "Copywriting and photography"],
    cta: "Request a Website",
    serviceValue: "website-development",
  },
];

export const starterLimitations = [
  "The starter price covers a compact website using a single page with up to four content sections (for example: introduction, services, about and contact).",
  "You supply the text, logo and images. Copywriting, photography and stock image licences can be quoted separately.",
  "Additional pages, e-commerce, online booking, blogs, multilingual content, custom integrations and advanced animations are available at a separately agreed price.",
  "Domain registration, hosting and business email are purchased separately from third-party providers.",
  "The final price is confirmed in a written quote once we understand your requirements. If your project needs more than the starter scope, we will tell you before any work begins.",
];

export const externalCosts = [
  "Domain name registration and renewal",
  "Website hosting",
  "Premium themes, plugins and software licences",
  "Third-party subscriptions and integrations",
  "Advertising spend on Google, Meta or other platforms",
  "Stock photography, fonts and other paid assets",
];

export function formatPrice(p: Package) {
  return `${p.priceFrom ? "From " : ""}£${p.price}`;
}
