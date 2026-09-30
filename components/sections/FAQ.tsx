"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQ } from "@/lib/data";

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
            {FAQ.map((item, index) => (
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
}                        {String(index + 1).padStart(2, "0")}
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
}          />
          <SectionLabel>(ANSWERS)</SectionLabel>
        </div>

        <div className="mt-16 border-t border-line">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === index;

            return (
              <Reveal key={item.question} variant="up" delay={index * 0.04}>
                <div
                  className="group border-b border-line"
                  onMouseEnter={() => setOpen(index)}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      onMouseEnter={() => setOpen(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-300 hover:text-accent group-hover:text-accent"
                    >
                      <span className="font-display text-xl uppercase tracking-display lg:text-2xl">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className={`shrink-0 text-2xl text-accent transition-transform duration-300 ease-framer ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    aria-hidden={!isOpen}
                    className="grid transition-all duration-500 ease-framer"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-8 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
