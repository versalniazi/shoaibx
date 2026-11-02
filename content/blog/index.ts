import type { Post } from "./types";
import professionalWebsite from "./why-every-business-needs-a-professional-website";
import seoSmallBusiness from "./how-seo-helps-small-businesses-grow";
import adsVsSocial from "./google-ads-vs-social-media-advertising";
import designTrends from "./website-design-trends-for-modern-businesses";
import conversionRates from "./how-to-improve-website-conversion-rates";
import startupStrategies from "./digital-marketing-strategies-for-startups";

export type { Post, Block } from "./types";

export const posts: Post[] = [
  professionalWebsite,
  seoSmallBusiness,
  adsVsSocial,
  designTrends,
  conversionRates,
  startupStrategies,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
