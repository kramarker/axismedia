// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://axismedia-next.vercel.app"),
  title: "Axis Media — Digital Marketing that Moves the Needle",
  description:
    "Websites, SEO, and ads that turn searches into phone calls. Serving the Greater Chicago Area.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Axis Media — Websites, SEO & Ads for Chicago Service Businesses",
    description:
      "Fast, clean websites and campaigns that fill your calendar. Greater Chicago Area.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Axis Media — Digital Marketing" },
    ],
    locale: "en_US",
    siteName: "Axis Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axis Media — Digital Marketing for Chicago",
    description: "Websites, SEO, and ads that turn searches into phone calls.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics 4 — official Next helper renders the raw tag */}
        <GoogleAnalytics gaId="G-0BQ9TET3XZ" />

        {/* LocalBusiness JSON-LD (safe to keep) */}
        <Script
          id="axis-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Axis Media",
              description:
                "Digital marketing for blue-collar and local service businesses in the Greater Chicago Area.",
              url: "https://axismedia-next-kt65dbdit-kramarkers-projects.vercel.app",
              areaServed: [
                "Chicago","Greater Chicago Area","Evanston","Schaumburg","Naperville",
                "North Shore","Arlington Heights","Glenview","Northbrook","Wilmette",
                "Winnetka","Highland Park","Lake Forest","Oak Brook","Elmhurst",
                "Downers Grove","Wheaton","Orland Park","Tinley Park","Aurora"
              ],
              telephone: "+1-224-234-5689",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chicagoland",
                addressRegion: "IL",
                addressCountry: "US"
              }
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
