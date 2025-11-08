"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function AxisLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Axis Media">
      <defs>
        <linearGradient id="axisGrad" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="axisStroke" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#axisGrad)" opacity="0.18" />
      <path
        d="M32 12 L50 52 H42.5 L37.8 42.2 H26.2 L21.5 52 H14 Z"
        fill="none"
        stroke="url(#axisStroke)"
        strokeWidth="4.2"
        strokeLinejoin="round"
      />
      <rect x="27" y="33.5" width="10" height="4" rx="2" fill="#9AE6B4" opacity="0.9" />
    </svg>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#services");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    LINKS.forEach(({ href }) => {
      const id = href.replace("#", "");
      sectionsRef.current[href] = document.getElementById(id);
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-30% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    Object.values(sectionsRef.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="container nav">
          <Link href="/" className="logo" aria-label="Axis Media Home">
            <span className="logo-mark">
              <AxisLogo size={28} />
            </span>
            <span className="logo-type">Axis Media</span>
          </Link>

          <nav aria-label="Primary">
            <div className="nav-links">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`nav-link ${active === l.href ? "is-active" : ""}`}>
                  {l.label}
                </a>
              ))}
            </div>

            <button
              className="mobile-menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className={`burger ${open ? "open" : ""}`} />
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE OVERLAY + DRAWER (moved OUTSIDE header so it’s not clipped) */}
      {open && <div className="backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}

      <div
        id="mobile-nav"
        className={`mobile-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`mobile-link ${active === l.href ? "is-active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Get a free audit
        </a>
      </div>

      {/* MAIN + FOOTER */}
      <main>{children}</main>

      <footer>
        <div className="container footerwrap">
          <div>© {new Date().getFullYear()} Axis Media</div>
          <div className="links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
