"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(
        "[data-about-line]"
      );

      gsap.fromTo(
        lines,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-editorial"
    >
      <div className="about-editorial__top">
        <span>(ABOUT)</span>
        <span>02 — POINT OF VIEW</span>
        <span>BASED — TORONTO / CANADA</span>
      </div>

      <div className="about-editorial__content">
        <div className="about-editorial__label">
          <span>MARKETING / CREATIVE</span>
        </div>

        <div className="about-editorial__statement">
          <div className="about-editorial__line-mask">
            <span data-about-line>
              {ABOUT.statementStrong}
            </span>
          </div>

          <div className="about-editorial__line-mask">
            <span
              data-about-line
              className="about-editorial__muted"
            >
              {ABOUT.statementMuted}
            </span>
          </div>
        </div>
      </div>

      <div className="about-editorial__bottom">
        <div className="about-editorial__index">
          02 / 08
        </div>

        <div className="about-editorial__copy">
          <p>
            My work sits between the discipline of marketing
            and the instinct of creative direction.
          </p>

          <p>
            I think about audiences, channels, culture, and
            outcomes — then build the visual language that
            gives an idea momentum.
          </p>
        </div>
      </div>
    </section>
  );
}
