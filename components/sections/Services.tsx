"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section
      id="services"
      data-name="Capabilities"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>(CAPABILITIES)</SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <h2 className="max-w-5xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
              Strategy meets creativity.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-line">
            {SERVICES.map((service) => (
              <Reveal
                key={service.index}
                variant="up"
                className="block"
              >
                <article className="group grid gap-8 border-b border-line py-10 lg:grid-cols-[80px_1fr_0.7fr] lg:items-center">
                  <span className="font-display text-4xl text-line-soft transition-colors duration-300 group-hover:text-paper">
                    {service.index}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl uppercase leading-none tracking-display text-paper transition-colors duration-300 group-hover:text-accent lg:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-light">
                      {service.blurb}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] uppercase tracking-[0.14em] text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative hidden aspect-[4/3] overflow-hidden bg-surface lg:block">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="30vw"
                      className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
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
