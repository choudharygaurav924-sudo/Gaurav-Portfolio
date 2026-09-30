"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTA as CTA_DATA } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="cta"
      data-name="Contact"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>(CONTACT)</SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <p className="eyebrow">
              {CTA_DATA.blurb}
            </p>
          </Reveal>

          <Reveal variant="up">
            <h2 className="mt-8 max-w-6xl font-display text-display-lg uppercase leading-[0.82] tracking-display text-paper">
              {CTA_DATA.headingLine1}
              <br />
              {CTA_DATA.headingLine2}
            </h2>
          </Reveal>

          <Reveal variant="up">
            <div className="mt-12">
              <Link
                href={CTA_DATA.buttonHref}
                className="inline-flex border border-paper px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                {CTA_DATA.buttonLabel}
              </Link>
            </div>
          </Reveal>

          <Reveal variant="up">
            <div className="mt-20 border-t border-line pt-6">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {CTA_DATA.buttonHref.replace("mailto:", "")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
