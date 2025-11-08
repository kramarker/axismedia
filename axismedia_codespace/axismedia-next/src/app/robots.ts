import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = "https://axismedia-next.vercel.app";
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${base}/sitemap.xml` };
}