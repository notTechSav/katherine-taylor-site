import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://katherinetaylorescort.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [
        "/api/",
        "/_next/",
        "/opengraph-image", // image route, not a page
      ],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}