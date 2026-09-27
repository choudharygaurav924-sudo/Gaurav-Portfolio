import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="shell editorial-section about-section">
      <Reveal variant="fade">
        <SectionLabel>{ABOUT.label}</SectionLabel>
      </Reveal>

      <Reveal variant="up" className="mt-10 block">
        <div className="about-grid">
          <div className="about-lead">
            <p>
              <span>{ABOUT.statementStrong}</span>
            </p>

            <p className="text-muted">
              {ABOUT.statementMuted}
            </p>
          </div>

          <div className="about-copy">
            <p>
              I work between marketing strategy and creative execution,
              thinking about audiences, channels, culture, and the ideas that
              make people stop and pay attention.
            </p>

            <p>
              My work spans digital marketing, campaign development,
              outreach, audience thinking, creative direction, and visual
              storytelling.
            </p>

            <div className="about-meta">
              <span>BASED</span>
              <strong>TORONTO / CANADA</strong>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
