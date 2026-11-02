import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given instead of appending the brand. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path, absoluteTitle, type = "website", publishedTime, noIndex }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  // Page-level openGraph replaces the parent's, so re-attach the default share image (blog posts provide their own).
  const images = type === "article" ? undefined : [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.legalName} — ${site.tagline}` }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: site.legalName,
      locale: site.locale,
      ...(images ? { images } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, ...(images ? { images: images.map((i) => i.url) } : {}) },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
