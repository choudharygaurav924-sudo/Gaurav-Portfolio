"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  TESTIMONIALS,
  TESTIMONIALS_INTRO,
} from "@/lib/data";

export function Testimonials() {
  return (
    <section
      data-name="Selected Experience"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>
            {TESTIMONIALS_INTRO.label}
          </SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <h2 className="max-w-5xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
              {TESTIMONIALS_INTRO.heading}
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-line">
            {TESTIMONIALS.map((item, index) => (
              <Reveal
                key={`${item.author}-${index}`}
                variant="up"
                className="block"
              >
                <article className="grid gap-8 border-b border-line py-10 md:grid-cols-[80px_1fr_0.65fr] md:items-start">
                  <span className="font-display text-4xl text-line-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="max-w-2xl font-display text-2xl uppercase leading-[1.05] tracking-wide text-paper lg:text-3xl">
                      {item.quote}
                    </p>

                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[0.14em] text-paper">
                        {item.author}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="relative hidden aspect-[4/3] overflow-hidden bg-surface md:block">
                    <Image
                      src={item.avatar}
                      alt=""
                      fill
                      sizes="25vw"
                      className="object-cover opacity-80"
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
