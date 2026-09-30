"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQ as FAQ_ITEMS } from "@/lib/data";

export function FAQ() {
  return (
    <section
      id="faq"
      data-name="About Gaurav"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>(ABOUT / FAQ)</SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <h2 className="max-w-5xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
              A few things worth knowing.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-line">
            {FAQ_ITEMS.map((item, index) => (
              <Reveal
                key={item.question}
                variant="up"
                className="block"
              >
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-[9px] tracking-[0.16em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="max-w-2xl text-sm uppercase tracking-[0.08em] text-paper md:text-base">
                        {item.question}
                      </h3>
                    </div>

                    <span className="text-xl font-light text-muted transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="pb-7 pl-10 md:pl-[3.25rem]">
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-light">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
