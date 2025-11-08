// sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://axismediachicago.com";
  return [
    { url: `${base}/`, priority: 1 },
    // You generally omit anchors in sitemaps:
    // { url: `${base}/#services` },
    // { url: `${base}/#contact` },
  ];
}
