import { absoluteUrl, site } from "./site";
import type { FAQ, Service } from "./services";
import type { Post } from "@/content/blog/types";

const orgId = () => `${site.url}/#organization`;

export function organizationSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId(),
    name: site.legalName,
    legalName: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl("/brand/logo-mark.png"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    identifier: { "@type": "PropertyValue", propertyID: "UK Companies House company number", value: site.companyNumber },
    // Registered office (legal address) — not presented as a customer-facing office.
    address: {
      "@type": "PostalAddress",
      streetAddress: site.registeredOffice.street,
      addressLocality: site.registeredOffice.locality,
      postalCode: site.registeredOffice.postcode,
      addressCountry: site.registeredOffice.country,
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", email: site.email, areaServed: "GB", availableLanguage: ["English"] },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.legalName,
    inLanguage: "en-GB",
    publisher: { "@id": orgId() },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: absoluteUrl(service.path),
    provider: { "@id": orgId() },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.features.map((f) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: f.title, description: f.description } })),
    },
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "en-GB",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    author: { "@type": "Organization", name: post.author, url: site.url },
    publisher: { "@id": orgId() },
  };
}
