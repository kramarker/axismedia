// src/app/layout.tsx
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
      <body>{children}</body>
    </html>
  );
}
