"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BRAND, HERO } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-title]");
      gsap.set(items, { willChange: "transform, opacity, filter" });
      gsap.from(items, {
        autoAlpha: 0,
        y: 32,
        scale: 1.04,
        filter: "blur(12px)",
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
      });
      gsap.to(items, {
        yPercent: -18,
        opacity: 0,
        filter: "blur(10px)",
        letterSpacing: "0.18em",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="title-sequence"
      aria-labelledby="hero-title"
    >
      <div className="title-sequence__meta">
        <span>{BRAND.name}</span>
        <span>
          {BRAND.headlineTop} / {BRAND.headlineBottom.split(" / ")[1]}
        </span>
        <span>{BRAND.location}</span>
      </div>

      <div className="title-sequence__center">
        <p data-title className="eyebrow eyebrow--light">
          01 — CINEMATIC OPENING
        </p>

        <h1 id="hero-title" className="title-sequence__name">
          <span data-title>GAURAV</span>
          <span data-title>SINGH</span>
        </h1>

        <div data-title className="title-sequence__roles">
          <span>MARKETING</span>
          <span>CREATIVE</span>
          <span>DIGITAL</span>
        </div>

        <p data-title className="title-sequence__statement">
          <span>{HERO.statementStrong}</span> {HERO.statementMuted}
        </p>
      </div>

      <a className="title-sequence__scroll" href="#about">
        <span className="title-sequence__line" />
        SCROLL TO ENTER
      </a>
    </section>
  );
}
