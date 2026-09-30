import Link from "next/link";
import { BRAND, FOOTER_LINKS, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <div>
            <p className="font-display text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.75] tracking-[-0.04em] text-paper">
              {BRAND.wordmark}
            </p>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-light">
              {BRAND.footerNote}
            </p>
          </div>

          <div>
            <p className="eyebrow">NAVIGATE</p>

            <nav className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-xs uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow">CONNECT</p>

            <div className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-xs uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={BRAND.email ? `mailto:${BRAND.email}` : "#cta"}
                className="mt-3 w-fit text-xs uppercase tracking-[0.12em] text-paper"
              >
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[9px] uppercase tracking-[0.14em] text-muted md:flex-row md:items-center md:justify-between">
          <span>© {BRAND.year} {BRAND.name}</span>
          <span>{BRAND.location}</span>
        </div>
      </div>
    </footer>
  );
}
