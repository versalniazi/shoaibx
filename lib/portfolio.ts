/**
 * DEMONSTRATION PROJECTS
 * These are concept pieces created by SHOAIBX to illustrate the type of work we
 * deliver. They are NOT client projects and are labelled as such on the site.
 * Replace or supplement with real case studies (with client permission) when available.
 */
export type DemoProject = {
  slug: string;
  title: string;
  sector: string;
  type: string;
  services: string[];
  brief: string;
  approach: string[];
  demonstrates: string[];
  palette: { bg: string; primary: string; accent: string; ink: string };
  layout: "hero-split" | "shop-grid" | "landing" | "dashboard";
};

export const demoProjects: DemoProject[] = [
  {
    slug: "artisan-bakery-website",
    title: "Artisan Bakery Website",
    sector: "Hospitality",
    type: "Business website concept",
    services: ["Website Design", "Local SEO", "Social Media"],
    brief: "A fictional independent bakery wants a warm, mobile-friendly website that shows its menu, opening hours and location, and encourages local pre-orders.",
    approach: ["Mobile-first layout with menu and opening hours above the fold", "Local SEO structure with clear location information", "Pre-order enquiry form connected to email", "Instagram-friendly visual style for consistency with social media"],
    demonstrates: ["Small business website design", "Local SEO foundations", "Conversion-focused enquiry flow"],
    palette: { bg: "#FFF7ED", primary: "#C2410C", accent: "#FDBA74", ink: "#431407" },
    layout: "hero-split",
  },
  {
    slug: "sustainable-fashion-store",
    title: "Sustainable Fashion Store",
    sector: "Retail / E-commerce",
    type: "E-commerce concept",
    services: ["E-commerce Development", "Paid Social", "SEO"],
    brief: "A fictional sustainable clothing label needs an online shop with a clean product catalogue, simple checkout journey and campaign-ready collection pages.",
    approach: ["Product grid with filtering by category and size", "Collection landing pages designed for Instagram and Facebook campaigns", "Product schema and optimised product descriptions", "Streamlined basket and checkout journey"],
    demonstrates: ["E-commerce website development", "Campaign landing pages", "Product page SEO"],
    palette: { bg: "#F0FDF4", primary: "#166534", accent: "#86EFAC", ink: "#052E16" },
    layout: "shop-grid",
  },
  {
    slug: "accountancy-lead-generation",
    title: "Accountancy Lead Generation Page",
    sector: "Professional Services",
    type: "Landing page concept",
    services: ["Landing Page Design", "Google Ads", "Conversion Optimisation"],
    brief: "A fictional accountancy practice wants a focused landing page for a Google Ads campaign promoting its small business bookkeeping service.",
    approach: ["Single clear offer and headline matched to search intent", "Short enquiry form with clear validation", "Transparent service inclusions and FAQs", "Conversion tracking plan for form submissions"],
    demonstrates: ["Landing page design", "Google Ads alignment", "Form usability"],
    palette: { bg: "#EFF6FF", primary: "#1D4ED8", accent: "#93C5FD", ink: "#172554" },
    layout: "landing",
  },
  {
    slug: "marketing-reporting-dashboard",
    title: "Marketing Reporting Dashboard",
    sector: "Internal Tools",
    type: "Reporting template concept",
    services: ["Analytics", "Advertising Reporting", "SEO Reporting"],
    brief: "A demonstration of the clear, plain-English reporting format we use to summarise website, SEO and advertising performance for clients.",
    approach: ["One-page overview of agreed key metrics", "Channel breakdown for organic, paid and social traffic", "Commentary section explaining what changed and why", "Recommended next actions"],
    demonstrates: ["Transparent performance reporting", "Data-informed decision-making", "Client communication"],
    palette: { bg: "#F5F3FF", primary: "#5641EE", accent: "#45DAF7", ink: "#1E1B4B" },
    layout: "dashboard",
  },
];
