import Link from "next/link";
import { BRAND, NAV_LINKS, SOCIALS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__statement">
            <span className="site-footer__eyebrow">
              (GAURAV SINGH)
            </span>

            <p>
              {BRAND.footerNote}
            </p>
          </div>

          <div className="site-footer__column">
            <span className="site-footer__eyebrow">
              NAVIGATE
            </span>

            <nav aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="site-footer__link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <span className="site-footer__eyebrow">
              ELSEWHERE
            </span>

            <nav aria-label="Social links">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="site-footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                  <span>↗</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="site-footer__email-row">
          <span className="site-footer__eyebrow">
            AVAILABLE FOR MEANINGFUL OPPORTUNITIES
          </span>

          <Link
            href={`mailto:${BRAND.email}`}
            className="site-footer__email"
          >
            {BRAND.email}
            <span>↗</span>
          </Link>
        </div>

        <div className="site-footer__wordmark">
          GAURAV
          <span>SINGH</span>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {BRAND.year} {BRAND.name}
          </span>

          <span>
            {BRAND.location}
          </span>

          <Link href="#hero">
            BACK TO TOP ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
