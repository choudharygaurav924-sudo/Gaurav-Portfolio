"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PRICING } from "@/lib/data";

export function Pricing() {
  return (
    <section
      id="pricing"
      data-name="What I Bring"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>(WHAT I BRING)</SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <h2 className="max-w-5xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
              Different skills. One point of view.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
            {PRICING.map((tier) => (
              <Reveal
                key={tier.name}
                variant="up"
                className="h-full bg-ink"
              >
                <article className="flex h-full flex-col p-7 lg:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {tier.name}
                    </span>

                    {tier.featured && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                        CORE
                      </span>
                    )}
                  </div>

                  <p className="mt-8 min-h-[72px] text-sm leading-relaxed text-muted-light">
                    {tier.blurb}
                  </p>

                  <div className="mt-8 border-t border-line pt-6">
                    <div className="flex flex-col gap-3">
                      {tier.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 text-[8px] text-muted">
                            +
                          </span>

                          <span className="text-[10px] uppercase tracking-[0.1em] text-paper/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-10">
                    <a
                      href="#cta"
                      className="text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                    >
                      {tier.cta} →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
