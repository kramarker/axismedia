// src/app/layout.tsx
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Axis Media — Digital Marketing that Moves the Needle",
  description:
    "Axis Media is a Chicagoland digital marketing team offering websites, SEO, paid ads, and content that drives revenue for blue-collar and local service businesses.",
  openGraph: {
    title: "Axis Media — Digital Marketing that Moves the Needle",
    description:
      "Websites, SEO, ads, and content for local service businesses. Measurable results, zero fluff.",
    type: "website",
    url: "https://axismedia.co",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* JSON-LD structured data */}
        <Script
          id="axis-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Axis Media",
              description:
                "Digital marketing for blue-collar and local service businesses in the Greater Chicago Area.",
              url: "https://axismedia-next-kt65dbdit-kramarkers-projects.vercel.app",
              areaServed: [
                "Chicago",
                "Greater Chicago Area",
                "Evanston",
                "Schaumburg",
                "Naperville",
                "North Shore",
                "Arlington Heights",
                "Glenview",
                "Northbrook",
                "Wilmette",
                "Winnetka",
                "Highland Park",
                "Lake Forest",
                "Oak Brook",
                "Elmhurst",
                "Downers Grove",
                "Wheaton",
                "Orland Park",
                "Tinley Park",
                "Aurora"
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

        {/* Plausible analytics (optional—keep if you set it up) */}
        <Script
          id="plausible"
          strategy="afterInteractive"
          defer
          data-domain="axismedia-next-kt65dbdit-kramarkers-projects.vercel.app"
          src="https://plausible.io/js/script.js"
        />

        {children}
      </body>
    </html>
  );
}
