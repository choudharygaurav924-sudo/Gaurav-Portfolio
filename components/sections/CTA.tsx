import { BRAND } from "@/lib/data";

export function CTA() {
  return (
    <section id="contact" className="closing-shot">
      <div className="shell closing-shot-inner">
        <span className="eyebrow eyebrow--light">(CONTACT / FINAL SHOT)</span>
        <h2>
          LET&apos;S MAKE
          <br />
          SOMETHING MATTER.
        </h2>
        <p>{BRAND.availability}</p>
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
      </div>
    </section>
  );
}
