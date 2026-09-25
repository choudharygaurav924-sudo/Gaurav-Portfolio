"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BRAND, HERO } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const countdownRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const countdown = countdownRef.current;

    if (!section || !countdown || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>("[data-hero-letter]");
      const portrait = section.querySelector<HTMLElement>(
        "[data-hero-portrait]"
      );
      const portraitGlow = section.querySelector<HTMLElement>(
        "[data-hero-glow]"
      );
      const countdownWrap = section.querySelector<HTMLElement>(
        "[data-hero-countdown-wrap]"
      );
      const countdownLabel = section.querySelector<HTMLElement>(
        "[data-hero-countdown-label]"
      );
      const roles = section.querySelector<HTMLElement>("[data-hero-roles]");
      const statement = section.querySelector<HTMLElement>(
        "[data-hero-statement]"
      );
      const scrollHint = section.querySelector<HTMLElement>(
        "[data-hero-scroll]"
      );
      const meta = gsap.utils.toArray<HTMLElement>("[data-hero-meta]");

      const counter = { value: 6 };

      gsap.set(letters, {
        opacity: 0,
        scaleX: 3.8,
        y: 20,
        transformOrigin: "50% 50%",
      });

      gsap.set(
        [
          portrait,
          portraitGlow,
          roles,
          statement,
          scrollHint,
          ...meta,
        ].filter(Boolean),
        {
          opacity: 0,
        }
      );

      gsap.set(portrait, {
        scale: 1.08,
        x: 40,
        y: 20,
      });

      gsap.set(roles, {
        y: 20,
      });

      gsap.set(statement, {
        y: 35,
      });

      gsap.set(scrollHint, {
        y: 15,
      });

      gsap.set(meta, {
        y: -10,
      });

      const intro = gsap.timeline();

      intro
        .to(counter, {
          value: 81,
          duration: 0.7,
          ease: "none",
          onUpdate: () => {
            countdown.textContent = String(
              Math.round(counter.value)
            ).padStart(2, "0");
          },
        })
        .to(counter, {
          value: 100,
          duration: 0.7,
          ease: "power2.out",
          onUpdate: () => {
            countdown.textContent = String(
              Math.round(counter.value)
            ).padStart(2, "0");
          },
        })
        .to(
          countdownWrap,
          {
            opacity: 0,
            y: -20,
            duration: 0.45,
            ease: "power2.inOut",
          },
          "+=0.25"
        )
        .to(
          letters,
          {
            opacity: 1,
            scaleX: 3.8,
            y: 0,
            duration: 0.7,
            stagger: 0.045,
            ease: "power3.out",
          },
          "-=0.1"
        )
        .to(
          letters,
          {
            scaleX: 1,
            duration: 1.15,
            stagger: 0.025,
            ease: "expo.inOut",
          },
          "-=0.15"
        )
        .to(
          portrait,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        )
        .to(
          portraitGlow,
          {
            opacity: 0.5,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .to(
          roles,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          statement,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          scrollHint,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          meta,
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.35"
        );

      const exit = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      exit
        .to(
          letters,
          {
            yPercent: -18,
            opacity: 0,
            scale: 0.94,
            letterSpacing: "0.08em",
            stagger: 0.025,
            ease: "none",
          },
          0
        )
        .to(
          portrait,
          {
            yPercent: -10,
            opacity: 0,
            scale: 1.04,
            ease: "none",
          },
          0
        )
        .to(
          portraitGlow,
          {
            yPercent: -8,
            opacity: 0,
            ease: "none",
          },
          0
        )
        .to(
          roles,
          {
            yPercent: -25,
            opacity: 0,
            ease: "none",
          },
          0
        )
        .to(
          statement,
          {
            yPercent: -20,
            opacity: 0,
            ease: "none",
          },
          0
        );

      ScrollTrigger.refresh();
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
      <div className="cinematic-hero__stage">
        <div className="cinematic-hero__top">
          <span data-hero-meta>
            {BRAND.name}
          </span>

          <span data-hero-meta>
            {BRAND.year}
          </span>

          <span data-hero-meta>
            {BRAND.location}
          </span>
        </div>

        <div
          className="cinematic-hero__counter"
          data-hero-countdown-wrap
          aria-hidden="true"
        >
          <span
            ref={countdownRef}
            className="cinematic-hero__counter-number"
          >
            06
          </span>

          <span
            className="cinematic-hero__counter-label"
            data-hero-countdown-label
          >
            LOADING / PORTFOLIO
          </span>
        </div>

        <div className="cinematic-hero__portrait-wrap">
          <div
            className="cinematic-hero__portrait-glow"
            data-hero-glow
          />

          <img
            src="/assets/gaurav-portrait.jpg"
            alt=""
            className="cinematic-hero__portrait"
            data-hero-portrait
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="cinematic-hero__identity">
          <p className="cinematic-hero__eyebrow">
            01 — MARKETING / CREATIVE / DIGITAL
          </p>

          <h1
            id="hero-title"
            className="cinematic-hero__name"
            aria-label="GAURAV"
          >
            {"GAURAV".split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                data-hero-letter
                aria-hidden="true"
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
        </div>

        <div
          className="cinematic-hero__statement"
          data-hero-statement
        >
          <p>
            <span>{HERO.statementStrong}</span>{" "}
            {HERO.statementMuted}
          </p>
        </div>

        <a
          href="#about"
          className="cinematic-hero__scroll"
          data-hero-scroll
        >
          <span className="cinematic-hero__scroll-line" />
          <span>SCROLL TO ENTER</span>
        </a>

        <div className="cinematic-hero__bottom">
          <span>01 / 08</span>
          <span>PORTFOLIO / 2026</span>
          <span>{BRAND.location}</span>
        </div>
      </div>
    </section>
  );
}
