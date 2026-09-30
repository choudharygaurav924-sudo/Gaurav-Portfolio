import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FEATURED_TESTIMONIAL } from "@/lib/data";

export function TestimonialHighlight() {
  return (
    <section
      data-name="Perspective"
      className="relative overflow-hidden bg-ink"
    >
      <div className="shell py-28 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
          <Reveal variant="fade">
            <SectionLabel>(PERSPECTIVE)</SectionLabel>
          </Reveal>

          <div>
            <Reveal variant="up">
              <blockquote className="max-w-6xl font-display text-display-sm uppercase leading-[0.94] tracking-display text-paper">
                “{FEATURED_TESTIMONIAL.quote}”
              </blockquote>
            </Reveal>

            <Reveal variant="up" className="mt-10 block">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-surface">
                  <Image
                    src={FEATURED_TESTIMONIAL.avatar}
                    alt={FEATURED_TESTIMONIAL.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-paper">
                    {FEATURED_TESTIMONIAL.author}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                    {FEATURED_TESTIMONIAL.role}
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
