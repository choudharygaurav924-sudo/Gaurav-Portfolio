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
}          [gaurav, singh, roles, intro, scrollPrompt],
          {
            autoAlpha: 1,
            clearProps: "transform,filter",
          },
        );

        return;
      }

      const counter = { value: 0 };

      gsap.set(
        [gaurav, singh, roles, intro, scrollPrompt],
        {
          autoAlpha: 0,
        },
      );

      gsap.set(gaurav, {
        yPercent: 115,
        scale: 1.16,
        letterSpacing: "0.12em",
        filter: "blur(9px)",
      });

      gsap.set(singh, {
        yPercent: 115,
        scale: 1.16,
        letterSpacing: "0.12em",
        filter: "blur(9px)",
      });

      gsap.set(roles, {
        y: 24,
        letterSpacing: "0.48em",
        filter: "blur(5px)",
      });

      gsap.set(intro, {
        y: 28,
        filter: "blur(5px)",
      });

      gsap.set(scrollPrompt, {
        y: 12,
      });

      const sequence = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      sequence.to(counter, {
        value: 100,
        duration: 1.5,
        ease: "none",
        onUpdate: () => {
          number.textContent = String(
            Math.floor(counter.value),
          ).padStart(3, "0");
        },
      });

      sequence.to(
        numberBlock,
        {
          autoAlpha: 0,
          scale: 0.85,
          duration: 0.4,
        },
        "-=0.1",
      );

      sequence.to(
        gaurav,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          letterSpacing: "-0.075em",
          filter: "blur(0px)",
          duration: 1,
        },
        "-=0.1",
      );

      sequence.to(
        singh,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          letterSpacing: "-0.075em",
          filter: "blur(0px)",
          duration: 1,
        },
        "-=0.75",
      );

      sequence.to(
        roles,
        {
          autoAlpha: 1,
          y: 0,
          letterSpacing: "0.24em",
          filter: "blur(0px)",
          duration: 0.65,
        },
        "-=0.4",
      );

      sequence.to(
        intro,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.75,
        },
        "-=0.35",
      );

      sequence.to(
        scrollPrompt,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3",
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: stage,
        anticipatePin: 1,
      });

      const exit = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      exit.to(
        stage,
        {
          yPercent: -7,
          scale: 0.96,
          filter: "blur(1px)",
          ease: "none",
        },
        0,
      );

      exit.to(
        [gaurav, singh],
        {
          yPercent: -18,
          opacity: 0,
          letterSpacing: "0.16em",
          ease: "none",
        },
        0,
      );

      exit.to(
        [roles, intro],
        {
          opacity: 0,
          y: -20,
          ease: "none",
        },
        0.05,
      );

      exit.to(
        scrollPrompt,
        {
          opacity: 0,
          ease: "none",
        },
        0,
      );
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
      <div
        data-hero-stage
        className="title-sequence__stage"
      >
        <div
          data-hero-meta
          className="title-sequence__meta"
        >
          <span>GS / 001</span>
          <span>PORTFOLIO / 2026</span>
          <span>BASED — TORONTO / CANADA</span>
        </div>

        <div
          data-hero-number
          className="title-sequence__number"
          aria-hidden="true"
        >
          <span ref={numberRef}>000</span>
        </div>

        <div className="title-sequence__center">
          <p className="title-sequence__eyebrow">
            01 — CINEMATIC OPENING
          </p>

          <h1
            id="hero-title"
            className="title-sequence__name"
          >
            <span
              data-hero-gaurav
              className="title-sequence__word"
            >
              GAURAV
            </span>

            <span
              data-hero-singh
              className="title-sequence__word"
            >
              SINGH
            </span>
          </h1>

          <div
            data-hero-roles
            className="title-sequence__roles"
          >
            <span>MARKETING</span>
            <span>CREATIVE</span>
            <span>DIGITAL</span>
          </div>

          <p
            data-hero-intro
            className="title-sequence__statement"
          >
            {HERO.statementStrong}
          </p>
        </div>

        <div className="title-sequence__location">
          BASED — TORONTO / CANADA
        </div>

        <a
          data-hero-scroll
          className="title-sequence__scroll"
          href="#about"
        >
          <span className="title-sequence__line" />
          SCROLL TO ENTER
        </a>
      </div>
    </section>
  );
}
