import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://katherinetaylor.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [
        "/api/",
        "/_next/",
        "/opengraph-image", // image route, not a page
        "/dev-links", // development links
        "/admin", // admin areas
        "/*.json$", // JSON files
      ],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}