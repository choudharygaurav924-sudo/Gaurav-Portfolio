"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO, BRAND } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const markRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const counter = counterRef.current;
    const mark = markRef.current;
    const intro = introRef.current;

    if (!root || !counter || !mark || !intro) return;

    const ctx = gsap.context(() => {
      const counterObject = { value: 6 };

      const counterTween = gsap.to(counterObject, {
        value: 100,
        duration: 2.4,
        ease: "power2.out",

        onUpdate: () => {
          const value = Math.round(counterObject.value);

          if (value < 30) {
            counter.textContent = String(
              Math.max(6, value).toString().padStart(2, "0"),
            );
          } else if (value < 95) {
            counter.textContent = "81";
          } else {
            counter.textContent = "100";
          }
        },

        onComplete: () => {
          counter.textContent = "100";
        },
      });

      gsap.fromTo(
        mark,
        {
          opacity: 0,
          scaleX: 1.35,
          letterSpacing: "0.28em",
        },
        {
          opacity: 1,
          scaleX: 1,
          letterSpacing: "0em",
          duration: 1.6,
          delay: 0.5,
          ease: "power4.out",
        },
      );

      gsap.fromTo(
        intro,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 1.6,
          ease: "power3.out",
        },
      );

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(mark, {
            scale: 1 - progress * 0.45,
            y: -progress * 30,
          });

          gsap.set(intro, {
            opacity: 1 - progress * 1.4,
            y: progress * -30,
          });
        },
      });

      return () => {
        counterTween.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="hero-root relative min-h-[100svh] overflow-hidden bg-ink"
      data-name="Hero"
    >
      <div className="hero-stage relative flex min-h-[100svh] items-center justify-center">
        <div className="absolute left-6 top-6 z-20 font-mono text-[9px] uppercase tracking-[0.18em] text-muted md:left-10 md:top-10">
          BASED — TORONTO / CANADA
        </div>

        <div className="absolute right-6 top-6 z-20 font-mono text-[9px] uppercase tracking-[0.18em] text-muted md:right-10 md:top-10">
          <span ref={counterRef}>06</span>
        </div>

        <div className="hero-pin relative z-10 w-full">
          <h1
            ref={markRef}
            className="hero-mark select-none text-center font-display text-[18vw] uppercase leading-[0.78] tracking-[-0.055em] text-paper"
          >
            {BRAND.wordmark}
          </h1>

          <div
            ref={introRef}
            className="mx-auto mt-12 max-w-3xl px-6 text-center md:mt-16"
          >
            <p className="text-[9px] uppercase tracking-[0.22em] text-muted">
              MARKETING / STRATEGY / CREATIVE
            </p>

            <p className="mt-7 font-display text-xl uppercase leading-[1.05] tracking-wide text-paper md:text-3xl lg:text-4xl">
              {HERO.statementStrong}
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-light md:text-base">
              {HERO.statementMuted}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center md:bottom-10">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
