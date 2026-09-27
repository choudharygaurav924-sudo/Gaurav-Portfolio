"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BRAND, HERO } from "@/lib/data";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;

    if (!root || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(root.querySelectorAll("[data-title]"), {
        yPercent: -24,
        opacity: 0,
        letterSpacing: "0.18em",
        filter: "blur(5px)",
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="title-sequence"
      aria-labelledby="hero-title"
    >
      <div className="title-sequence__meta">
        <span>{BRAND.name}</span>

        <span>
          {BRAND.headlineTop} /{" "}
          {BRAND.headlineBottom.split(" / ")[1]}
        </span>

        <span>{BRAND.location}</span>
      </div>

      <div className="title-sequence__center">
        <p data-title className="eyebrow">
          01 — CINEMATIC OPENING
        </p>

        <h1
          id="hero-title"
          className="title-sequence__name"
        >
          <span data-title>GAURAV</span>
          <span data-title>SINGH</span>
        </h1>

        <div
          data-title
          className="title-sequence__roles"
        >
          <span>MARKETING</span>
          <span>CREATIVE</span>
          <span>DIGITAL</span>
        </div>

        <p
          data-title
          className="title-sequence__statement"
        >
          {HERO.statementStrong} {HERO.statementMuted}
        </p>
      </div>

      <a
        className="title-sequence__scroll"
        href="#about"
      >
        <span className="title-sequence__line" />
        SCROLL TO ENTER
      </a>
    </section>
  );
}
