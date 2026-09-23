import Image from "next/image";
import { CREATIVE_LAB } from "@/lib/data";

export function Services() {
  return (
    <section id="lab" className="lab-section editorial-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">(CREATIVE LAB)</span>
            <h2 className="text-display-md mt-5">Made to explore.</h2>
          </div>
          <p className="section-intro">
            Self-initiated / fictional campaigns. These are creative exercises in
            brand worlds, campaign thinking, and art direction.
          </p>
        </div>

        <div className="lab-grid">
          {CREATIVE_LAB.map((item) => (
            <article key={item.title} className={`lab-card lab-card--${item.accent}`}>
              <div className="lab-media">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="lab-copy">
                <p className="lab-label">SELF-INITIATED / FICTIONAL CAMPAIGN</p>
                <h3>{item.title}</h3>
                <p className="lab-line">{item.line}</p>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
