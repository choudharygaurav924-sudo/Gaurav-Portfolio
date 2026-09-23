import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="shell editorial-section">
      <SectionLabel>{ABOUT.label}</SectionLabel>

      <div className="about-grid">
        <p className="about-lead">
          <span>{ABOUT.statementStrong}</span>
          <span className="text-muted">{ABOUT.statementMuted}</span>
        </p>

        <div className="about-copy">
          <p>
            My work sits between the discipline of marketing and the instinct of
            creative direction.
          </p>
          <p>
            I think about audiences, channels, culture, and outcomes — then build
            the visual language that gives an idea momentum.
          </p>
        </div>
      </div>
    </section>
  );
}
