import { BRAND } from "@/lib/data";

export function CTA() {
  return (
    <section id="contact" className="shell contact-section">
      <div>
        <span className="eyebrow">(CONTACT)</span>

        <p className="contact-kicker">
          {BRAND.availability}
        </p>

        <h2 className="contact-title">
          LET&apos;S MAKE
          <br />
          SOMETHING
          <br />
          MATTER.
        </h2>
      </div>

      <div className="contact-copy">
        <p>
          If you have a meaningful brief, a campaign to build,
          or an idea worth pushing further, let&apos;s talk.
        </p>

        <a href={`mailto:${BRAND.email}`}>
          {BRAND.email} ↗
        </a>
      </div>
    </section>
  );
}
