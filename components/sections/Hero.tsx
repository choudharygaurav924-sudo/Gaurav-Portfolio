"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BRAND, HERO } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const countdown = stage.querySelector<HTMLElement>(
        "[data-hero-countdown]"
      );

      const countdownLabel = stage.querySelector<HTMLElement>(
        "[data-hero-countdown-label]"
      );

      const name = stage.querySelector<HTMLElement>(
        "[data-hero-name]"
      );

      const nameLetters = gsap.utils.toArray<HTMLElement>(
        "[data-hero-letter]"
      );

      const portrait = stage.querySelector<HTMLElement>(
        "[data-hero-portrait]"
      );

      const portraitGlow = stage.querySelector<HTMLElement>(
        "[data-hero-glow]"
      );

      const roles = stage.querySelector<HTMLElement>(
        "[data-hero-roles]"
      );

      const statement = stage.querySelector<HTMLElement>(
        "[data-hero-statement]"
      );

      const scrollPrompt = stage.querySelector<HTMLElement>(
        "[data-hero-scroll]"
      );

      /*
       * Initial state
       */

      gsap.set(countdown, {
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(countdownLabel, {
        opacity: 0,
        y: 12,
      });

      gsap.set(name, {
        opacity: 0,
      });

      gsap.set(nameLetters, {
        opacity: 0,
        x: 0,
        scaleX: 1,
      });

      gsap.set(portrait, {
        opacity: 0,
        scale: 1.12,
        y: 30,
      });

      gsap.set(portraitGlow, {
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(roles, {
        opacity: 0,
        y: 25,
      });

      gsap.set(statement, {
        opacity: 0,
        y: 30,
      });

      gsap.set(scrollPrompt, {
        opacity: 0,
        y: 15,
      });

      /*
       * Opening sequence
       */

      const intro = gsap.timeline();

      /*
       * Countdown
       */

      intro
        .to(countdown, {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        })
        .to(
          countdown,
          {
            textContent: "81",
            duration: 0.18,
            ease: "none",
          },
          "+=0.35"
        )
        .to(
          countdown,
          {
            textContent: "100",
            duration: 0.2,
            ease: "none",
          },
          "+=0.18"
        )
        .to(
          countdownLabel,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          },
          "-=0.05"
        )

        /*
         * Countdown exits
         */

        .to(
          [countdown, countdownLabel],
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "+=0.45"
        )

        /*
         * GAURAV appears
         */

        .to(
          name,
          {
            opacity: 1,
            duration: 0.25,
          },
          "-=0.05"
        )

        .to(
          nameLetters,
          {
            opacity: 1,
            duration: 0.45,
            stagger: 0.055,
            ease: "power3.out",
          },
          "-=0.1"
        )

        /*
         * Stretch the letters apart
         */

        .to(
          nameLetters,
          {
            x: (index) => {
              const direction = index < 3 ? -1 : 1;
              return direction * (index === 2 || index === 3 ? 170 : 250);
            },
            scaleX: 0.72,
            duration: 1.2,
            stagger: 0.035,
            ease: "power3.inOut",
          }
        )

        /*
         * Bring GAURAV back together
         */

        .to(
          nameLetters,
          {
            x: 0,
            scaleX: 1,
            duration: 1.15,
            stagger: 0.035,
            ease: "power4.inOut",
          }
        )

        /*
         * Portrait emerges behind the word
         */

        .to(
          portraitGlow,
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.75"
        )

        .to(
          portrait,
          {
            opacity: 0.78,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.85"
        )

        /*
         * Roles
         */

        .to(
          roles,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )

        /*
         * Statement
         */

        .to(
          statement,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.25"
        )

        /*
         * Scroll prompt
         */

        .to(
          scrollPrompt,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.15"
        );

      /*
       * Scroll-linked cinematic exit
       */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      scrollTimeline
        .to(
          name,
          {
            scale: 1.18,
            yPercent: -12,
            duration: 1,
            ease: "none",
          }
        )
        .to(
          portrait,
          {
            scale: 1.12,
            yPercent: -8,
            opacity: 0.35,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .to(
          [roles, statement],
          {
            yPercent: -25,
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .to(
          [countdown, countdownLabel],
          {
            opacity: 0,
          },
          "<"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="cinematic-hero"
      aria-labelledby="hero-title"
    >
      <div
        ref={stageRef}
        className="cinematic-hero__stage"
      >
        <div className="cinematic-hero__meta">
          <span>{BRAND.name}</span>
          <span>PORTFOLIO / {BRAND.year}</span>
          <span>{BRAND.location}</span>
        </div>

        <div
          className="cinematic-hero__countdown"
          data-hero-countdown
          aria-hidden="true"
        >
          06
        </div>

        <div
          className="cinematic-hero__countdown-label"
          data-hero-countdown-label
        >
          <span>GAURAV SINGH</span>
          <span>MARKETING × CREATIVE × DIGITAL</span>
        </div>

        <div
          className="cinematic-hero__portrait-glow"
          data-hero-glow
        />

        <div
          className="cinematic-hero__portrait"
          data-hero-portrait
          aria-hidden="true"
        />

        <div className="cinematic-hero__center">
          <h1
            id="hero-title"
            className="cinematic-hero__name"
            data-hero-name
            aria-label="GAURAV"
          >
            {"GAURAV".split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                data-hero-letter
              >
                {letter}
              </span>
            ))}
          </h1>

          <div
            className="cinematic-hero__roles"
            data-hero-roles
          >
            <span>MARKETING</span>
            <span>CREATIVE</span>
            <span>DIGITAL</span>
          </div>

          <p
            className="cinematic-hero__statement"
            data-hero-statement
          >
            <strong>{HERO.statementStrong}</strong>{" "}
            {HERO.statementMuted}
          </p>
        </div>

        <div
          className="cinematic-hero__scroll"
          data-hero-scroll
        >
          <span className="cinematic-hero__scroll-line" />
          <span>SCROLL TO ENTER</span>
        </div>
      </div>
    </section>
  );
}
