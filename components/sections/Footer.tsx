import { BRAND } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <p className="footer-note">{BRAND.footerNote}</p>
            <Link href={`mailto:${BRAND.email}`} className="footer-link">
              {BRAND.email}
            </Link>
            <p className="eyebrow mt-4">{BRAND.location}</p>
          </div>

          <nav aria-label="Sections">
            <p className="eyebrow">Navigate</p>
            <ul className="footer-links">
              {[
                { label: "About", href: "#about" },
                { label: "Mindset", href: "#mindset" },
                { label: "Work", href: "#work" },
                { label: "Lab", href: "#lab" },
                { label: "Resume", href: "#resume" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social">
            <p className="eyebrow">Elsewhere</p>
            <ul className="footer-links">
              <li>
                <Link href="https://linkedin.com">LinkedIn</Link>
              </li>
              <li>
                <Link href="https://instagram.com">Instagram</Link>
              </li>
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
          <Link href="#hero">Back to top</Link>
        </div>
      </div>
    </footer>
  );
}
