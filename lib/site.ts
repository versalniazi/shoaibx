/**
 * Central company and site configuration.
 * Every page, the footer, structured data and legal pages read from here,
 * so company details only need updating in one place.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  name: "SHOAIBX",
  legalName: "SHOAIBX LIMITED",
  tagline: "Digital Solutions That Move Your Business Forward.",
  description:
    "SHOAIBX LIMITED is a UK digital marketing and technology company providing website design and development, digital marketing, online advertising and SEO services for startups and growing businesses.",
  url: resolveSiteUrl(),
  locale: "en_GB",
  companyNumber: "17475454",
  companyType: "Private Limited Company",
  registeredIn: "England and Wales",
  registeredOffice: {
    street: "103–105 Hammersmith Grove",
    locality: "London",
    region: "England",
    postcode: "W6 0NQ",
    country: "GB",
    countryName: "United Kingdom",
  },
  email: "shoibxlimited@gmail.com",
  // OWNER TO VERIFY: the number below is reproduced exactly as supplied.
  // UK mobile numbers normally have 10 digits after +44 — this one has 9.
  phoneDisplay: "+44 7473 64390",
  phoneHref: "tel:+44747364390",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/17475454",
  // Add real profile URLs here once the accounts exist; empty entries are not rendered.
  social: {
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X ?? "",
  },
  legalLastUpdated: "2 November 2026",
} as const;

export const registeredOfficeOneLine = `${site.registeredOffice.street}, ${site.registeredOffice.locality}, ${site.registeredOffice.region}, ${site.registeredOffice.postcode}`;

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export type NavItem = { label: string; href: string; description?: string };

export const serviceNav: NavItem[] = [
  { label: "Digital Marketing", href: "/services/digital-marketing", description: "Strategy, social media and content" },
  { label: "Website Design & Development", href: "/services/website-design-development", description: "Business, e-commerce and landing pages" },
  { label: "Online Advertising", href: "/services/online-advertising", description: "Google Ads, Facebook and Instagram" },
  { label: "SEO Services", href: "/services/seo", description: "Technical, on-page and local SEO" },
  { label: "Website Maintenance", href: "/services/website-maintenance", description: "Updates, backups and support" },
];

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
