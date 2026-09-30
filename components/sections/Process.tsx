"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PROCESS } from "@/lib/data";

export function Process() {
  return (
    <section
      id="process"
      data-name="Process"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>(PROCESS)</SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <h2 className="max-w-5xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
              From insight to impact.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-line">
            {PROCESS.map((step) => (
              <Reveal
                key={step.id}
                variant="up"
                className="block"
              >
                <article className="grid gap-8 border-b border-line py-12 lg:grid-cols-[100px_1fr_0.55fr] lg:gap-10">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-4xl uppercase leading-[0.95] tracking-display text-paper lg:text-5xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
                      {step.subtitle}
                    </p>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-light">
                      {step.body}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                      {step.subsections.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] uppercase tracking-[0.12em] text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7">
                      <p className="eyebrow">DELIVERABLES</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.deliverables.map((item) => (
                          <span
                            key={item}
                            className="border border-line px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-muted-light"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative hidden aspect-[4/3] overflow-hidden bg-surface lg:block">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="30vw"
                      className="object-cover opacity-75"
                    />
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
