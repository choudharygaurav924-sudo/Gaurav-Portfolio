"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HERO } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const number = numberRef.current;

    if (!section || !number) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        number.textContent = "100";

        gsap.set("[data-hero-content]", {
          autoAlpha: 1,
          y: 0,
        });

        return;
      }

      const intro = gsap.timeline();

      gsap.set("[data-hero-meta]", {
        autoAlpha: 0,
        y: 10,
      });

      gsap.set("[data-hero-number]", {
        autoAlpha: 1,
        scale: 1,
      });

      gsap.set("[data-hero-gaurav]", {
        autoAlpha: 0,
        yPercent: 100,
        letterSpacing: "0.32em",
      });

      gsap.set("[data-hero-singh]", {
        autoAlpha: 0,
        yPercent: 100,
        letterSpacing: "0.32em",
      });

      gsap.set("[data-hero-roles]", {
        autoAlpha: 0,
        y: 20,
      });

      gsap.set("[data-hero-intro]", {
        autoAlpha: 0,
        y: 25,
      });

      gsap.set("[data-hero-scroll]", {
        autoAlpha: 0,
        y: 20,
      });

      intro
        .to("[data-hero-meta]", {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(
          number,
          {
            duration: 0.8,
            textContent: "06",
            snap: {
              textContent: 1,
            },
            ease: "none",
          },
          "-=0.2",
        )
        .to(number, {
          duration: 0.9,
          textContent: "81",
          snap: {
            textContent: 1,
          },
          ease: "none",
        })
        .to(number, {
          duration: 0.8,
          textContent: "100",
          snap: {
            textContent: 1,
          },
          ease: "none",
        })
        .to(number, {
          autoAlpha: 0,
          scale: 0.85,
          duration: 0.45,
          ease: "power2.inOut",
        })
        .to(
          "[data-hero-gaurav]",
          {
            autoAlpha: 1,
            yPercent: 0,
            letterSpacing: "0.02em",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.1",
        )
        .to(
          "[data-hero-singh]",
          {
            autoAlpha: 1,
            yPercent: 0,
            letterSpacing: "0.02em",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8",
        )
        .to(
          "[data-hero-roles]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          "[data-hero-intro]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          "[data-hero-scroll]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: "[data-hero-stage]",
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
        "[data-hero-stage]",
        {
          yPercent: -8,
          scale: 0.96,
          ease: "none",
        },
        0,
      );

      exit.to(
        "[data-hero-gaurav], [data-hero-singh]",
        {
          yPercent: -18,
          opacity: 0,
          letterSpacing: "0.16em",
          ease: "none",
        },
        0,
      );

      exit.to(
        "[data-hero-roles], [data-hero-intro]",
        {
          opacity: 0,
          y: -20,
          ease: "none",
        },
        0.05,
      );

      exit.to(
        "[data-hero-scroll]",
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
      <div data-hero-stage className="title-sequence__stage">
        <div data-hero-meta className="title-sequence__meta">
          <span>GS / 001</span>
          <span>PORTFOLIO / 2026</span>
          <span>BASED — TORONTO / CANADA</span>
        </div>

        <div
          data-hero-number
          className="title-sequence__number"
          aria-hidden="true"
        >
          <span ref={numberRef}>00</span>
        </div>

        <div className="title-sequence__center">
          <p className="title-sequence__eyebrow">
            01 — CINEMATIC OPENING
          </p>

          <h1 id="hero-title" className="title-sequence__name">
            <span data-hero-gaurav className="title-sequence__word">
              GAURAV
            </span>

            <span data-hero-singh className="title-sequence__word">
              SINGH
            </span>
          </h1>

          <div data-hero-roles className="title-sequence__roles">
            <span>MARKETING</span>
            <span>CREATIVE</span>
            <span>DIGITAL</span>
          </div>

          <p data-hero-intro className="title-sequence__statement">
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
}        !statement ||
        !portrait ||
        !scrollPrompt
      ) {
        return;
      }

      /*
       * ----------------------------------------------------
       * REDUCED MOTION
       * ----------------------------------------------------
       */

      if (reducedMotion) {
        gsap.set(counterBlock, {
          autoAlpha: 0,
        });

        gsap.set(name, {
          autoAlpha: 1,
          clearProps: "transform,filter,letterSpacing",
        });

        gsap.set(letters, {
          autoAlpha: 1,
          xPercent: 0,
          scaleX: 1,
          clearProps: "transform,filter,letterSpacing",
        });

        gsap.set(roles, {
          autoAlpha: 1,
          clearProps: "transform,filter",
        });

        gsap.set(statement, {
          autoAlpha: 1,
          clearProps: "transform,filter",
        });

        gsap.set(portrait, {
          autoAlpha: 0.65,
          clearProps: "transform,filter",
        });

        gsap.set(portraitGlow, {
          autoAlpha: 0,
        });

        gsap.set(scrollPrompt, {
          autoAlpha: 1,
          clearProps: "transform",
        });

        return;
      }

      /*
       * ----------------------------------------------------
       * INITIAL STATE
       * ----------------------------------------------------
       */

      gsap.set(counterBlock, {
        autoAlpha: 1,
      });

      gsap.set(name, {
        autoAlpha: 0,
      });

      gsap.set(letters, {
        autoAlpha: 0,
        xPercent: 0,
        scaleX: 3.4,
        letterSpacing: "0.02em",
        filter: "blur(3px)",
      });

      gsap.set(roles, {
        autoAlpha: 0,
        y: 28,
        filter: "blur(4px)",
      });

      gsap.set(statement, {
        autoAlpha: 0,
        y: 35,
        filter: "blur(5px)",
      });

      gsap.set(portrait, {
        autoAlpha: 0,
        scale: 1.08,
        yPercent: 3,
        filter: "grayscale(100%) contrast(1.15) brightness(0.72)",
      });

      if (portraitGlow) {
        gsap.set(portraitGlow, {
          autoAlpha: 0,
          scale: 0.8,
        });
      }

      gsap.set(scrollPrompt, {
        autoAlpha: 0,
        y: 15,
      });

      /*
       * ----------------------------------------------------
       * COUNTDOWN
       *
       * 06
       * pause
       * 81
       * pause
       * 100
       * hold
       * ----------------------------------------------------
       */

      const counter = {
        value: 6,
      };

      countdown.textContent = "06";

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /*
       * 06 → 81
       *
       * Slow enough to actually read.
       */

      intro.to(counter, {
        value: 81,
        duration: 1.8,
        ease: "power1.inOut",
        onUpdate: () => {
          countdown.textContent = String(
            Math.floor(counter.value)
          ).padStart(2, "0");
        },
      });

      /*
       * HOLD 81
       */

      intro.to({}, {
        duration: 0.9,
      });

      /*
       * 81 → 100
       */

      intro.to(counter, {
        value: 100,
        duration: 1.8,
        ease: "power1.inOut",
        onUpdate: () => {
          countdown.textContent = String(
            Math.floor(counter.value)
          ).padStart(3, "0");
        },
      });

      /*
       * HOLD 100
       */

      intro.to({}, {
        duration: 1.1,
      });

      /*
       * Fade countdown away.
       */

      intro.to(
        counterBlock,
        {
          autoAlpha: 0,
          y: -25,
          duration: 0.65,
          ease: "power3.inOut",
        },
        "+=0.15"
      );

      /*
       * ----------------------------------------------------
       * GAURAV
       * ----------------------------------------------------
       */

      intro.to(
        name,
        {
          autoAlpha: 1,
          duration: 0.15,
        },
        "-=0.15"
      );

      /*
       * Letters arrive extremely stretched.
       */

      intro.to(
        letters,
        {
          autoAlpha: 1,
          duration: 0.45,
          stagger: 0.045,
          ease: "power2.out",
        },
        "-=0.05"
      );

      /*
       * Stretch → normal.
       *
       * This is the important typography movement.
       */

      intro.to(
        letters,
        {
          scaleX: 1,
          letterSpacing: "-0.045em",
          filter: "blur(0px)",
          duration: 1.65,
          stagger: 0.035,
          ease: "expo.out",
        },
        "-=0.15"
      );

      /*
       * ----------------------------------------------------
       * PORTRAIT
       * ----------------------------------------------------
       */

      intro.to(
        portrait,
        {
          autoAlpha: 0.82,
          scale: 1,
          yPercent: 0,
          filter:
            "grayscale(100%) contrast(1.12) brightness(0.78)",
          duration: 1.25,
          ease: "power3.out",
        },
        "-=1.05"
      );

      if (portraitGlow) {
        intro.to(
          portraitGlow,
          {
            autoAlpha: 0.35,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=1"
        );
      }

      /*
       * ----------------------------------------------------
       * ROLES
       * ----------------------------------------------------
       */

      intro.to(
        roles,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.55"
      );

      /*
       * ----------------------------------------------------
       * INTRO STATEMENT
       * ----------------------------------------------------
       */

      intro.to(
        statement,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
        "-=0.35"
      );

      /*
       * ----------------------------------------------------
       * SCROLL PROMPT
       * ----------------------------------------------------
       */

      intro.to(
        scrollPrompt,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.45"
      );

      /*
       * ----------------------------------------------------
       * SCROLL EXIT
       * ----------------------------------------------------
       */

      const exitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      exitTimeline
        .to(
          name,
          {
            yPercent: -18,
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(
          portrait,
          {
            yPercent: -10,
            scale: 1.08,
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(
          roles,
          {
            y: -30,
            opacity: 0,
            duration: 0.8,
            ease: "none",
          },
          0
        )
        .to(
          statement,
          {
            y: -35,
            opacity: 0,
            duration: 0.8,
            ease: "none",
          },
          0
        )
        .to(
          scrollPrompt,
          {
            opacity: 0,
            duration: 0.5,
            ease: "none",
          },
          0
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
        className="cinematic-hero__stage"
        data-hero-stage
      >
        {/* TOP METADATA */}

        <div className="cinematic-hero__top">
          <span>{BRAND.name}</span>

          <span>
            PORTFOLIO / {BRAND.year}
          </span>

          <span>{BRAND.location}</span>
        </div>

        {/* COUNTDOWN */}

        <div
          className="cinematic-hero__counter"
          data-hero-counter
          aria-hidden="true"
        >
          <span
            ref={countdownRef}
            className="cinematic-hero__counter-number"
          >
            06
          </span>

          <span className="cinematic-hero__counter-label">
            LOADING
          </span>
        </div>

        {/* PORTRAIT */}

        <div
          className="cinematic-hero__portrait-wrap"
          aria-hidden="true"
        >
          <div
            className="cinematic-hero__portrait-glow"
            data-hero-glow
          />

          <img
            src="/assets/gaurav-portrait.jpg"
            alt=""
            className="cinematic-hero__portrait"
            data-hero-portrait
          />
        </div>

        {/* GAURAV */}

        <div className="cinematic-hero__identity">
          <p className="cinematic-hero__eyebrow">
            01 — CINEMATIC OPENING
          </p>

          <h1
            id="hero-title"
            className="cinematic-hero__name"
            data-hero-name
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

        {/* INTRODUCTION */}

        <div
          className="cinematic-hero__statement"
          data-hero-statement
        >
          <p>
            <span>{HERO.statementStrong}</span>{" "}
            {HERO.statementMuted}
          </p>
        </div>

        {/* SCROLL */}

        <a
          href="#about"
          className="cinematic-hero__scroll"
          data-hero-scroll
        >
          <span className="cinematic-hero__scroll-line" />
          SCROLL TO ENTER
        </a>

        {/* BOTTOM METADATA */}

        <div className="cinematic-hero__bottom">
          <span>01 / 08</span>

          <span>PORTFOLIO / {BRAND.year}</span>

          <span>{BRAND.location}</span>
        </div>
      </div>
    </section>
  );
}
