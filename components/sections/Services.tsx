import Image from "next/image";
import { CREATIVE_LAB } from "@/lib/data";

export function Services() {
  return (
    <section id="lab" className="lab-section editorial-section">
      <div className="shell">
        <div className="section-heading">
          <div><span className="eyebrow">(CREATIVE LAB)</span><h2 className="text-display-md mt-5">Campaign worlds.</h2></div>
          <p className="section-intro">Self-initiated / fictional campaigns. Creative exercises in brand worlds, campaign thinking, and art direction — not client work.</p>
        </div>
        <div className="lab-grid">
          {CREATIVE_LAB.map((item) => (
            <article key={item.title} className={`lab-card lab-card--${item.accent}`}>
              <div className="lab-media"><Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="lab-image object-cover" /></div>
              <div className="lab-copy"><p className="lab-label">SELF-INITIATED / FICTIONAL CAMPAIGN</p><h3>{item.title}</h3><p className="lab-line">{item.line}</p><p>{item.copy}</p>{item.accent === "nova" && <p className="lab-cta">TRY THE NEW COLD BREW</p>}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
