import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Friendly short URLs that people commonly type.
    return [
      { source: "/seo", destination: "/services/seo", permanent: true },
      { source: "/web-design", destination: "/services/website-design-development", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/work", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
