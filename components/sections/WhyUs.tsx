"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { STATS, WHY_US } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const numbers = section.querySelectorAll<HTMLElement>(
        "[data-stat-value]",
      );

      numbers.forEach((element) => {
        const target = Number(element.dataset.statValue ?? 0);

        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = Math.round(counter.value).toString();
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      data-name="Experience"
      className="relative overflow-hidden bg-ink"
    >
      {/* Background visual */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.28]"
        style={{
          backgroundImage: `url(${WHY_US.image})`,
        }}
        aria-hidden
      />

      {/* Dark editorial treatment */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, #0A0A0A 0%, rgba(10,10,10,0.72) 35%, rgba(10,10,10,0.9) 75%, #0A0A0A 100%)",
        }}
      />

      <div className="shell relative z-10 py-28 lg:py-40">
        <Reveal variant="fade">
          <SectionLabel>{WHY_US.label}</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal variant="up">
            <h2 className="max-w-xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
              {WHY_US.heading}
            </h2>
          </Reveal>

          <div>
            <Reveal variant="up">
              <p className="max-w-2xl text-base leading-relaxed text-muted-light lg:text-lg">
                I work across strategy, digital marketing and creative
                execution — starting with the audience and turning that
                understanding into work people can actually notice.
              </p>
            </Reveal>

            <div className="mt-16 grid border-t border-line md:grid-cols-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-line py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
                >
                  <div className="font-display text-6xl leading-none text-paper lg:text-7xl">
                    <span data-stat-value={stat.value}>
                      {reducedMotion ? stat.value : 0}
                    </span>
                    <span>{stat.suffix}</span>
                  </div>

                  <p className="mt-4 max-w-[180px] text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
