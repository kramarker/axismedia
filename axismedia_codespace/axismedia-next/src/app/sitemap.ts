import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://axismedia-next.vercel.app";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/#services` }, // fine to include anchors or skip
    { url: `${base}/#contact` }
  ];
}
