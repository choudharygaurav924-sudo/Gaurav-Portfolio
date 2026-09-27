import Link from "next/link";
import {
  BRAND,
  NAV_LINKS,
  SOCIALS,
} from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <p className="footer-note">
              {BRAND.footerNote}
            </p>

            <Link
              href={`mailto:${BRAND.email}`}
              className="footer-link"
            >
              {BRAND.email}
            </Link>

            <p className="eyebrow footer-location">
              {BRAND.location}
            </p>
          </div>

          <nav aria-label="Sections">
            <p className="eyebrow">Navigate</p>

            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social">
            <p className="eyebrow">Elsewhere</p>

            <ul className="footer-links">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-wordmark">
          GAURAV<span>.</span>
        </div>

        <div className="footer-bottom">
          <span>
            © {BRAND.year} {BRAND.name}
          </span>

          <span>
            MARKETING × CREATIVE × DIGITAL
          </span>
        </div>
      </div>
    </footer>
  );
}
