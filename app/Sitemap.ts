import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://katherinetaylor.com";
  const now = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/inquire`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rates`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    // Blog posts (add more here as you publish)
    { url: `${base}/blog/the-ethical-escort`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}