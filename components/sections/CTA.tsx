import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="cta"
      data-name="Contact"
      className="relative overflow-hidden bg-ink"
    >
      <div className="shell py-32 lg:py-48">
        <Reveal variant="up">
          <p className="eyebrow">LET'S CONNECT</p>
        </Reveal>

        <Reveal variant="up" className="mt-8 block">
          <h2 className="max-w-7xl font-display text-[clamp(4rem,11vw,11rem)] uppercase leading-[0.78] tracking-[-0.04em] text-paper">
            {CTA.headingLine1}
            <br />
            <span className="text-muted">
              {CTA.headingLine2}
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <Reveal variant="up">
            <p className="max-w-lg text-sm leading-relaxed text-muted-light">
              {CTA.blurb}
            </p>
          </Reveal>

          <Reveal variant="up">
            <a
              href={CTA.buttonHref}
              className="inline-flex border border-paper px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:bg-paper hover:text-ink"
            >
              {CTA.buttonLabel}
              <span className="ml-4">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
