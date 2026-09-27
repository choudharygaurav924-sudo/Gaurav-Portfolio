"use client";

import { BRAND, NAV_LINKS } from "@/lib/data";

export function SiteMenu() {
  return (
    <header className="site-menu">
      <a href="#hero" className="site-menu-logo">
        {BRAND.wordmark}
      </a>

      <nav className="site-menu-nav" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={`mailto:${BRAND.email}`}
        className="site-menu-cta"
      >
        LET&apos;S TALK ↗
      </a>
    </header>
  );
}
