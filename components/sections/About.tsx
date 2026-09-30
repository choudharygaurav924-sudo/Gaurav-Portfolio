import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      data-name="About"
      className="relative overflow-hidden bg-ink"
    >
      {/* Subtle editorial background */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 75% 30%, rgba(255,255,255,0.045), transparent 32%)",
        }}
      />

      {/* Fine vertical texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49.8%, rgba(255,255,255,0.5) 50%, transparent 50.2%)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="shell relative z-10 py-28 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
          <Reveal variant="fade">
            <SectionLabel>{ABOUT.label}</SectionLabel>
          </Reveal>

          <div>
            <Reveal variant="up" className="block">
              <p className="max-w-6xl font-display text-display-sm uppercase leading-[0.98] tracking-display">
                <span className="text-paper">
                  {ABOUT.statementStrong}
                </span>

                <span className="text-muted">
                  {ABOUT.statementMuted}
                </span>
              </p>
            </Reveal>

            <Reveal variant="up" className="mt-16 block">
              <div className="grid max-w-4xl gap-8 border-t border-line pt-6 md:grid-cols-2">
                <div>
                  <p className="eyebrow">BASED</p>
                  <p className="mt-3 text-sm text-paper">
                    Toronto / Canada
                  </p>
                </div>

                <div>
                  <p className="eyebrow">FOCUS</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-light">
                    Marketing strategy, digital campaigns, creative direction
                    and audience-focused communication.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
