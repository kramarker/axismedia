// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import React, { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnalyticsPinger } from "./analytics";
// IMPORTANT: use the client component version
import SiteShell from "./components/site-shell.client";

const ORIGIN = "https://axismediachicago.com";

export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title: "Axis Media — Digital Marketing that Moves the Needle",
  description:
    "Websites, SEO, and ads that turn searches into phone calls. Serving the Greater Chicago Area.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Axis Media — Websites, SEO & Ads for Chicago Service Businesses",
    description:
      "Fast, clean websites and campaigns that fill your calendar. Greater Chicago Area.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Axis Media — Digital Marketing" }],
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
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Build tag to verify the live build */}
        <meta name="build-tag" content="gsc-verify-3" />
        {/* Google Search Console verification (keep only ONE token overall) */}
        <meta
          name="google-site-verification"
          content="SK_REIr_mAHP6M3iDoGOjGQnwP5KjXS8Tj-H51LIxis"
        />
      </head>
      <body className="antialiased text-slate-900 bg-white">
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-0BQ9TET3XZ" />

        {/* Consent defaults (optional) */}
        <Script id="consent-defaults" strategy="afterInteractive">
          {`
            if (typeof gtag === 'function') {
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'granted',
                wait_for_update: 500
              });
            }
          `}
        </Script>

        {/* JSON-LD */}
        <Script
          id="axis-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": `${ORIGIN}#axis-media`,
              name: "Axis Media",
              url: ORIGIN,
              description:
                "Digital marketing for blue-collar and local service businesses in the Greater Chicago Area.",
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
              },
              priceRange: "$$"
            }),
          }}
        />

        {/* Put ALL client hooks inside Suspense */}
        <Suspense fallback={null}>
          <AnalyticsPinger />
          <SiteShell>{children}</SiteShell>
        </Suspense>
      </body>
    </html>
  );
}
