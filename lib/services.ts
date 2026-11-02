import type { IconName } from "@/components/ui/Icon";

export type ServiceFeature = { title: string; description: string; icon: IconName };
export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  icon: IconName;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroText: string;
  primaryCta: { label: string; service: string };
  introHeading: string;
  intro: string[];
  features: ServiceFeature[];
  audiences: string[];
  deliverablesHeading: string;
  deliverables: string[];
  approach: { title: string; description: string }[];
  honestyNote: string;
  relatedPackages: string[];
  faqs: FAQ[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    path: "/services/digital-marketing",
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    icon: "megaphone",
    cardSummary:
      "Strategy, social media management and content that builds awareness and turns attention into enquiries.",
    metaTitle: "Digital Marketing Agency UK | Social Media & Content",
    metaDescription:
      "UK digital marketing agency offering marketing strategy, social media management, content marketing and brand awareness campaigns for growing businesses.",
    heroEyebrow: "Digital Marketing",
    heroTitle: "Digital marketing built around",
    heroHighlight: "your business goals",
    heroText:
      "From a clear marketing strategy to consistent social media and content, we help startups and established businesses build visibility, trust and a steady flow of enquiries online.",
    primaryCta: { label: "Discuss Your Marketing", service: "digital-marketing" },
    introHeading: "A practical digital marketing partner for UK businesses",
    intro: [
      "Good digital marketing is not about being everywhere at once. It is about understanding who your customers are, where they spend their time online and what they need to hear before they choose you.",
      "We start by understanding your business, your audience and your objectives, then build a realistic plan across the channels that make sense for you — whether that is social media, content, email or a combination supported by paid advertising and SEO.",
    ],
    features: [
      { icon: "compass", title: "Digital marketing strategy", description: "A documented plan covering your audience, positioning, channels, content themes, budget priorities and how progress will be measured." },
      { icon: "users", title: "Social media marketing", description: "Platform-appropriate campaigns on channels such as Instagram, Facebook and LinkedIn, designed around your audience rather than vanity metrics." },
      { icon: "chat", title: "Social media account management", description: "Content calendars, post creation, scheduling and routine community monitoring, so your profiles stay active and on-brand." },
      { icon: "pen", title: "Content marketing", description: "Blog articles, guides, captions and website copy that answer customer questions and support your search visibility." },
      { icon: "sparkles", title: "Brand awareness campaigns", description: "Campaigns that introduce your business to new audiences with a consistent message, visual identity and clear next step." },
      { icon: "trend", title: "Marketing consultancy", description: "Independent advice on your current marketing, from quick reviews to ongoing guidance as your business grows." },
    ],
    audiences: ["Startups launching a new brand", "Small businesses building a consistent online presence", "Entrepreneurs and sole traders", "E-commerce businesses growing their audience", "Established companies refreshing their marketing"],
    deliverablesHeading: "What you can expect",
    deliverables: [
      "A written strategy or campaign plan agreed before work begins",
      "A content calendar you can review and approve",
      "Brand-consistent creative and copy",
      "Clear reporting on agreed metrics such as reach, engagement, website visits and enquiries",
      "Recommendations for what to keep, change or stop",
    ],
    approach: [
      { title: "Understand", description: "We review your business, competitors, audience and any existing marketing activity." },
      { title: "Plan", description: "We agree goals, channels, messaging and a realistic schedule." },
      { title: "Create & publish", description: "We produce and publish content or campaigns in line with the plan." },
      { title: "Review & improve", description: "We report on performance and refine the approach based on what the data shows." },
    ],
    honestyNote:
      "Marketing results depend on many factors, including your market, offer, pricing, budget and competition. We do not promise specific follower numbers, sales or revenue — we commit to doing professional, measurable work and reporting honestly on it.",
    relatedPackages: ["advertising-setup", "landing-page"],
    faqs: [
      { question: "Which social media platforms do you manage?", answer: "We typically work with Instagram, Facebook and LinkedIn, and can advise on other platforms where your audience is active. We will recommend focusing on the channels most relevant to your customers rather than trying to cover every platform." },
      { question: "Do I need a marketing strategy before running campaigns?", answer: "It is strongly recommended. Even a short strategy helps make sure campaigns target the right audience with the right message, and that you know how success will be measured." },
      { question: "How do you measure digital marketing performance?", answer: "We agree the measures that matter to your business at the start — for example website visits, enquiries, engagement or cost per lead — and report against them using the analytics tools available to us." },
      { question: "Can you work alongside our in-house team?", answer: "Yes. We can provide strategy and consultancy, fill specific gaps such as content creation, or manage channels day to day while your team focuses elsewhere." },
    ],
    keywords: ["Digital Marketing Agency UK", "social media marketing", "content marketing", "marketing strategy"],
  },
  {
    slug: "website-design-development",
    path: "/services/website-design-development",
    name: "Website Design & Development",
    shortName: "Website Development",
    icon: "code",
    cardSummary:
      "Fast, responsive business websites, e-commerce stores and landing pages designed to turn visitors into customers.",
    metaTitle: "Website Design & Development Services UK",
    metaDescription:
      "Website design and development services in the UK: responsive business websites, WordPress, e-commerce, landing pages, redesigns and custom builds.",
    heroEyebrow: "Website Design & Development",
    heroTitle: "Websites that look professional and",
    heroHighlight: "work hard for your business",
    heroText:
      "We design and build fast, mobile-responsive websites — from a focused landing page to a full corporate or e-commerce site — with clear messaging, solid technical foundations and SEO best practice built in.",
    primaryCta: { label: "Request a Website", service: "website-development" },
    introHeading: "A website design company focused on outcomes",
    intro: [
      "Your website is often the first place a potential customer meets your business. It needs to load quickly, look credible on every device, explain what you do in seconds and make it easy to get in touch or buy.",
      "Whether you need a brand-new business website, a redesign of an existing site, or an online shop, we plan the structure and content with you first, then design and develop a site that is easy to maintain and ready to grow.",
    ],
    features: [
      { icon: "building", title: "Business & corporate websites", description: "Professional multi-page websites that present your services, build trust and generate enquiries." },
      { icon: "cart", title: "E-commerce website development", description: "Online stores with product catalogues, secure checkout integrations and easy order management." },
      { icon: "rocket", title: "Landing page design", description: "Focused, conversion-led pages for campaigns, launches and paid advertising." },
      { icon: "layers", title: "WordPress development", description: "Flexible WordPress websites you can update yourself, built with performance and security in mind." },
      { icon: "code", title: "Custom website development", description: "Bespoke builds using modern frameworks when your project needs functionality beyond a standard theme." },
      { icon: "refresh", title: "Website redesign", description: "Modernise an outdated website while protecting existing search visibility and content." },
      { icon: "smartphone", title: "Mobile-responsive development", description: "Layouts that adapt cleanly to phones, tablets and desktops, tested on real screen sizes." },
      { icon: "wrench", title: "Maintenance & support", description: "Ongoing updates, backups, monitoring and content changes once your site is live." },
    ],
    audiences: ["New businesses that need their first website", "Companies with an outdated or slow website", "Retailers moving online", "Service businesses that need more enquiries", "Teams launching campaigns that need landing pages"],
    deliverablesHeading: "Every website project includes",
    deliverables: [
      "An agreed sitemap and page plan before design begins",
      "Responsive design tested on mobile, tablet and desktop",
      "Contact or enquiry forms connected to your email",
      "Basic on-page SEO: page titles, meta descriptions and heading structure",
      "Performance-minded build with optimised images",
      "A handover walkthrough so you know how to manage your site",
    ],
    approach: [
      { title: "Discovery", description: "We learn about your business, customers, competitors and goals for the website." },
      { title: "Plan & design", description: "We agree the sitemap, content and visual direction, then design key pages for your feedback." },
      { title: "Build & test", description: "We develop the site, connect forms and test across devices and browsers." },
      { title: "Launch & support", description: "We help you go live and offer optional maintenance afterwards." },
    ],
    honestyNote:
      "Domain registration, hosting, premium themes or plugins, paid integrations and third-party subscriptions are separate costs unless we specifically include them in your written quote.",
    relatedPackages: ["landing-page", "business-website-starter", "website-health-check"],
    faqs: [
      { question: "How long does it take to build a website?", answer: "A single landing page typically takes 7–10 working days and a starter business website around 10–15 working days once we have your content. Larger or custom projects are scheduled individually. Timelines depend on how quickly content and feedback are provided." },
      { question: "Do you build websites on WordPress?", answer: "Yes. WordPress is a good fit for many businesses that want to update their own content. For projects with specific performance or functionality needs we may recommend a custom build — we will explain the trade-offs." },
      { question: "Will my website work on mobile phones?", answer: "Yes. Every website we build is responsive and tested on mobile, tablet and desktop screen sizes." },
      { question: "Who owns the website once it is finished?", answer: "Once the project has been paid for in full, ownership of the bespoke design and content created for you transfers to you, subject to the licences of any third-party themes, plugins, fonts or images. See our Terms and Conditions for details." },
      { question: "Do you provide hosting and domains?", answer: "We can advise on and help set up hosting and domains, but these are purchased from third-party providers and are not included in our package prices unless agreed in writing." },
    ],
    keywords: ["Website Development Services UK", "Website Design Company UK", "E-commerce Website Development", "Business Website Design"],
  },
  {
    slug: "online-advertising",
    path: "/services/online-advertising",
    name: "Online Advertising",
    shortName: "Online Advertising",
    icon: "target",
    cardSummary:
      "Google Ads, Facebook and Instagram campaigns planned, built and optimised around your budget and objectives.",
    metaTitle: "Google Ads Management & Online Advertising UK",
    metaDescription:
      "Google Ads management, Facebook and Instagram advertising and PPC for UK businesses, with careful targeting, ongoing optimisation and clear reporting.",
    heroEyebrow: "Online Advertising",
    heroTitle: "Paid advertising that is planned,",
    heroHighlight: "tracked and improved",
    heroText:
      "We set up and manage Google Ads and paid social campaigns with sensible budgets, careful targeting and transparent reporting — so you can see where your money goes and what it achieves.",
    primaryCta: { label: "Plan Your Campaign", service: "online-advertising" },
    introHeading: "An online advertising agency that respects your budget",
    intro: [
      "Paid advertising can bring relevant visitors to your website quickly, but it can also spend money fast without careful planning. The difference is usually in the structure, targeting, ad copy, landing page and tracking.",
      "We help you choose the right platform for your goals, build campaigns properly from the start, and optimise them over time based on real data — not guesswork.",
    ],
    features: [
      { icon: "search", title: "Google Ads management", description: "Search and other Google campaign types structured around relevant keywords and clear conversion goals." },
      { icon: "users", title: "Facebook advertising", description: "Campaigns on Meta platforms using audience targeting that reflects your real customers." },
      { icon: "eye", title: "Instagram advertising", description: "Visual ad formats for feed, stories and reels, designed for mobile-first audiences." },
      { icon: "target", title: "PPC campaign management", description: "Ongoing bid, keyword, budget and ad management to make the most of your spend." },
      { icon: "compass", title: "Advertising strategy", description: "Choosing platforms, objectives, budgets and messaging before a single pound is spent." },
      { icon: "gauge", title: "Campaign optimisation", description: "Regular testing of ads, audiences and landing pages to improve results over time." },
      { icon: "chart", title: "Performance reporting", description: "Clear reports covering spend, clicks, conversions and cost per result, with plain-English commentary." },
      { icon: "layers", title: "Audience targeting", description: "Research into demographics, interests, intent and locations to reach the people most likely to buy." },
    ],
    audiences: ["Businesses launching a new product or service", "E-commerce stores wanting more sales traffic", "Local service businesses seeking enquiries", "Companies whose current ads feel expensive or unclear"],
    deliverablesHeading: "What our advertising service covers",
    deliverables: [
      "Platform and campaign recommendations based on your objectives",
      "Campaign, ad group and audience structure",
      "Ad copy and creative guidance",
      "Conversion tracking setup guidance (where access is provided)",
      "Regular performance reports and optimisation notes",
    ],
    approach: [
      { title: "Research", description: "We look at your offer, audience, competitors and landing pages." },
      { title: "Build", description: "We configure campaigns, targeting, ads and tracking." },
      { title: "Launch", description: "We go live with agreed budgets and monitor early performance closely." },
      { title: "Optimise", description: "We refine targeting, keywords, ads and budgets based on results." },
    ],
    honestyNote:
      "Advertising spend is paid directly to the platform (for example Google or Meta) and is never included in our management or setup fees. No agency can guarantee a specific number of clicks, leads or sales from advertising.",
    relatedPackages: ["advertising-setup", "landing-page"],
    faqs: [
      { question: "How much should I spend on Google Ads or social media ads?", answer: "It depends on your industry, competition, location and goals. We will recommend a realistic starting budget during consultation and explain what you can reasonably expect from it. Ad spend is always separate from our fees and paid directly to the platform." },
      { question: "Is my advertising budget included in your price?", answer: "No. Our packages cover setup or management work only. Advertising spend is billed to you directly by Google, Meta or the relevant platform." },
      { question: "Should I choose Google Ads or social media advertising?", answer: "Google Ads is usually stronger when people are actively searching for what you offer, while social media advertising is good for building awareness and reaching people based on interests. Many businesses use both. Read our article on Google Ads vs social media advertising for more detail." },
      { question: "Will I keep access to my advertising accounts?", answer: "Yes. We recommend that advertising accounts are created in your name, or that you are given owner-level access, so you always remain in control of your accounts and data." },
    ],
    keywords: ["Google Ads Management", "Online Advertising Agency", "PPC management UK", "Facebook advertising", "Instagram advertising"],
  },
  {
    slug: "seo",
    path: "/services/seo",
    name: "Search Engine Optimisation (SEO)",
    shortName: "SEO Services",
    icon: "search",
    cardSummary:
      "Technical, on-page and local SEO that helps search engines understand your website and customers find it.",
    metaTitle: "SEO Services UK | Technical, On-Page & Local SEO",
    metaDescription:
      "Search engine optimisation services for UK businesses: SEO audits, keyword research, technical, on-page and local SEO, with transparent reporting.",
    heroEyebrow: "SEO Services",
    heroTitle: "Search engine optimisation that",
    heroHighlight: "builds long-term visibility",
    heroText:
      "We improve the technical health, content and relevance of your website so search engines can understand it and the right customers can find it — with honest advice and clear reporting.",
    primaryCta: { label: "Get an SEO Audit", service: "seo" },
    introHeading: "SEO services grounded in best practice",
    intro: [
      "Search engine optimisation is the ongoing work of making your website easier for search engines to crawl, understand and trust — and more useful for the people searching. It covers technical foundations, on-page content and your wider online reputation.",
      "We start with an audit to understand where your website stands, then prioritise the improvements most likely to make a difference for your business and budget.",
    ],
    features: [
      { icon: "wrench", title: "Technical SEO", description: "Crawlability, indexing, site structure, page speed, mobile usability and structured data." },
      { icon: "file", title: "On-page SEO", description: "Page titles, meta descriptions, headings, internal links and content aligned to search intent." },
      { icon: "link", title: "Off-page SEO", description: "Guidance on earning relevant, quality links and mentions — never paid link schemes." },
      { icon: "search", title: "Keyword research", description: "Finding the terms your customers actually use, balanced by relevance, intent and competition." },
      { icon: "checkCircle", title: "Website SEO audits", description: "A prioritised review of technical, content and on-page issues with clear recommendations." },
      { icon: "mapPin", title: "Local SEO", description: "Google Business Profile guidance, local landing pages and consistent business information." },
      { icon: "eye", title: "Competitor analysis", description: "Understanding how competing websites approach search so you can find realistic opportunities." },
      { icon: "gauge", title: "Performance optimisation", description: "Improving load times and Core Web Vitals for a better experience for users and search engines." },
    ],
    audiences: ["Businesses that are hard to find in search results", "New websites that need solid SEO foundations", "Local businesses targeting nearby customers", "E-commerce stores with many product pages", "Companies planning a website redesign"],
    deliverablesHeading: "What SEO work with us includes",
    deliverables: [
      "An initial audit or review of your website",
      "Prioritised recommendations explained in plain English",
      "Agreed on-page and technical improvements",
      "Keyword and content guidance",
      "Regular reporting on visibility, traffic and agreed goals",
    ],
    approach: [
      { title: "Audit", description: "We review technical health, content, keywords and competitors." },
      { title: "Prioritise", description: "We agree which improvements to tackle first based on impact and effort." },
      { title: "Implement", description: "We make or guide the changes on your website." },
      { title: "Measure", description: "We track progress using Google Search Console, analytics and agreed metrics." },
    ],
    honestyNote:
      "No one can guarantee a particular Google ranking. Search engines decide rankings using many factors outside any agency's control, and results usually take months rather than weeks. We follow search engine guidelines and avoid practices that put your website at risk.",
    relatedPackages: ["seo-quick-audit", "website-health-check", "seo-starter"],
    faqs: [
      { question: "How long does SEO take to work?", answer: "SEO is a long-term activity. Some technical fixes can have an effect within weeks, but meaningful improvements in visibility commonly take several months, depending on competition, your website's history and how much work is involved." },
      { question: "Can you guarantee first-page rankings on Google?", answer: "No — and you should be cautious of anyone who does. Search engines control their own rankings. We focus on proven best practice, clear priorities and honest reporting." },
      { question: "What is the difference between technical SEO and on-page SEO?", answer: "Technical SEO deals with how search engines crawl and index your site — speed, structure, mobile usability and errors. On-page SEO focuses on the content of individual pages: titles, headings, copy and internal links." },
      { question: "Do you offer local SEO for businesses that serve a specific area?", answer: "Yes. Local SEO can include Google Business Profile guidance, location-relevant content and making sure your business details are consistent online." },
    ],
    keywords: ["SEO Services UK", "Search Engine Optimisation Services", "technical SEO", "local SEO", "SEO audit"],
  },
  {
    slug: "website-maintenance",
    path: "/services/website-maintenance",
    name: "Website Maintenance & Support",
    shortName: "Website Maintenance",
    icon: "wrench",
    cardSummary:
      "Updates, backups, security checks and content changes that keep your website fast, secure and up to date.",
    metaTitle: "Website Maintenance & Support Services UK",
    metaDescription:
      "Website maintenance and support for UK businesses: software and plugin updates, backups, security checks, performance reviews and content changes.",
    heroEyebrow: "Website Maintenance",
    heroTitle: "Keep your website secure, fast and",
    heroHighlight: "always up to date",
    heroText:
      "Websites need regular care. We take care of updates, backups, checks and small changes so your site keeps running smoothly and you can focus on your business.",
    primaryCta: { label: "Ask About Maintenance", service: "website-maintenance" },
    introHeading: "Website maintenance and support you can rely on",
    intro: [
      "Software, plugins and browsers change constantly. Without regular maintenance, websites can become slower, less secure and more likely to break when you need them most.",
      "Our maintenance support is flexible — from one-off fixes to ongoing care — and is tailored to the platform your website is built on.",
    ],
    features: [
      { icon: "refresh", title: "Software & plugin updates", description: "Applying core, theme and plugin updates carefully, with checks afterwards." },
      { icon: "shield", title: "Security checks", description: "Routine reviews for common vulnerabilities and suspicious activity." },
      { icon: "layers", title: "Backups", description: "Regular backups configured so your website can be restored if something goes wrong." },
      { icon: "gauge", title: "Performance reviews", description: "Monitoring loading speed and fixing common causes of slow pages." },
      { icon: "pen", title: "Content updates", description: "Text, image and page changes handled for you on request." },
      { icon: "link", title: "Broken link & error fixes", description: "Finding and fixing broken links, forms and display issues." },
    ],
    audiences: ["Businesses without in-house technical staff", "WordPress website owners", "Websites we have built for you", "Websites built by another provider (after an initial review)"],
    deliverablesHeading: "Maintenance support can include",
    deliverables: [
      "Scheduled updates and post-update checks",
      "Backup configuration and checks",
      "Uptime and security monitoring guidance",
      "A set allowance of small content changes (agreed per plan)",
      "Summary of work carried out",
    ],
    approach: [
      { title: "Review", description: "We check your current website, platform, hosting and any known issues." },
      { title: "Agree scope", description: "We agree what is covered, how requests are made and response times." },
      { title: "Maintain", description: "We carry out updates, backups and checks on a regular schedule." },
      { title: "Report", description: "We summarise the work done and flag anything that needs attention." },
    ],
    honestyNote:
      "Maintenance plans are quoted individually because every website, platform and hosting setup is different. Hosting, premium plugin licences and third-party services remain separate costs unless agreed in writing.",
    relatedPackages: ["website-health-check", "seo-quick-audit"],
    faqs: [
      { question: "Can you maintain a website that someone else built?", answer: "Usually, yes. We start with a review of the website, platform and hosting so we can understand its condition and agree a sensible scope before taking it on." },
      { question: "How much does website maintenance cost?", answer: "It depends on the platform, size and the level of support you need. We provide a written quote after an initial review. A one-off Website Health Check (£25) is a good starting point." },
      { question: "What happens if my website goes down?", answer: "Contact us by email or phone. If you have an agreed maintenance plan we will respond within the agreed timeframe. For websites not on a plan, we can help on an ad-hoc basis subject to availability." },
    ],
    keywords: ["website maintenance UK", "WordPress maintenance", "website support services"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
