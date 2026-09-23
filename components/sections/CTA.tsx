import { CTA as CTA_CONTENT } from "@/lib/data";

export function CTA() {
  return (
    <section id="contact" className="shell contact-section">
      <div>
        <span className="eyebrow">(CONTACT)</span>
        <h2 className="contact-title">
          {CTA_CONTENT.headingLine1}
          <br />
          {CTA_CONTENT.headingLine2}
        </h2>
      </div>

      <div className="contact-copy">
        <p>{CTA_CONTENT.blurb}</p>
        <a href={CTA_CONTENT.buttonHref}>{CTA_CONTENT.buttonLabel} ↗</a>
      </div>
    </section>
  );
}
