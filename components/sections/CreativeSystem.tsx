import { SectionLabel } from "@/components/ui/SectionLabel";
import { CREATIVE_SYSTEM } from "@/lib/data";

export function CreativeSystem() {
  return (
    <section id="mindset" className="shell editorial-section">
      <div className="section-heading">
        <div>
          <SectionLabel>(MARKETING MINDSET)</SectionLabel>
          <h2 className="text-display-md mt-6">Ideas with intent.</h2>
        </div>
        <p className="section-intro">
          Strategy is not separate from creativity. It is what gives creativity
          somewhere meaningful to go.
        </p>
      </div>

      <div className="system-list">
        {CREATIVE_SYSTEM.map(([number, title, copy]) => (
          <article key={title} className="system-row">
            <span className="system-number">{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
