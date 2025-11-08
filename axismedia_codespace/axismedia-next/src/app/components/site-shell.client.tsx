"use client";

import React from "react";
import Link from "next/link";

type Props = { children: React.ReactNode };

export default function SiteShell({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold">Axis Media</Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/#services">Services</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#contact" className="font-medium underline underline-offset-4">
              Book a Call
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} Axis Media · Greater Chicago Area</div>
          <div className="mt-2">Websites, SEO & Ads that turn searches into phone calls.</div>
        </div>
      </footer>
    </div>
  );
}
