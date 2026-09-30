"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BRAND, HERO } from "@/lib/data";

const MARK_LEADING = 0.78;
const MARK_FILL = 0.72;

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLAnchorElement>(null);
  const markInnerRef = useRef<HTMLSpanElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  /* ── RESPONSIVE WORDMARK SIZE ─────────────────────────────────────────── */

  useLayoutEffect(() => {
    const root = rootRef.current;
    const mark = markRef.current;
    const inner = markInnerRef.current;

    if (!root || !mark || !inner) return;

    const measure = () => {
      const padX = mark.getBoundingClientRect().left;
      const available = window.innerWidth - padX * 2;

      inner.style.fontSize = "100px";

      const naturalWidth = inner.getBoundingClientRect().width;

      inner.style.fontSize = "";

      if (naturalWidth <= 0 || available <= 0) return;

      const widthFit = ((available * MARK_FILL) / naturalWidth) * 100;

      const heightCap =
        (window.innerHeight * 0.22) / MARK_LEADING;

      root.style.setProperty(
        "--mark-giant",
        `${Math.min(widthFit, heightCap)}px`,
      );
    };

    measure();

    document.fonts?.ready.then(measure).catch(() => {});

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* ── CINEMATIC INTRO + SCROLL MORPH ───────────────────────────────────── */

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const intro = introRef.current;
    const counter = counterRef.current;

    if (!root || !stage || !intro || !counter) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /*
       * Initial state
       */
      gsap.set(intro, {
        opacity: 0,
        y: 24,
      });

      gsap.set(markRef.current, {
        opacity: 0,
        letterSpacing: "0.45em",
      });

      gsap.set(counter, {
        opacity: 1,
      });

      /*
       * Counter sequence:
       *
       * 06 → 81 → 100
       */
      const counterValues = {
        value: 6,
      };

      const counterAnimation = gsap.to(counterValues, {
        value: 100,

        duration: 2.2,

        ease: "power3.inOut",

        onUpdate: () => {
          const value = Math.round(counterValues.value);

          if (value < 30) {
            counter.textContent = String(
              Math.max(6, value).padStart(2, "0"),
            );
          } else if (value < 95) {
            counter.textContent = "81";
          } else {
            counter.textContent = "100";
          }
        },
      });

      /*
       * GAURAV arrives after the loading sequence.
       */
      gsap.to(markRef.current, {
        opacity: 1,
        letterSpacing: "0.02em",
        duration: 1.15,
        delay: 1.8,
        ease: "power4.out",
      });

      /*
       * Intro statement.
       */
      gsap.to(intro, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 2.35,
        ease: "power3.out",
      });

      /*
       * Once the intro is complete, normal scroll-driven morph begins.
       */
      if (reducedMotion) {
        gsap.set(counter, {
          opacity: 0,
        });

        gsap.set(markRef.current, {
          opacity: 1,
          letterSpacing: "0.02em",
        });

        gsap.set(intro, {
          opacity: 1,
          y: 0,
        });

        return;
      }

      const setT = (value: number) => {
        root.style.setProperty("--hero-t", String(value));

        document.documentElement.style.setProperty(
          "--sm-logo-opacity",
          String(gsap.utils.clamp(0, 1, 1 - value * 6)),
        );
      };

      setT(1);

      const trigger = ScrollTrigger.create({
        trigger: stage,

        start: "top top",

        end: "bottom top",

        scrub: 0.5,

        onUpdate: (self) => {
          const t = 1 - self.progress;

          setT(t);

          /*
           * Counter disappears once scrolling begins.
           */
          gsap.set(counter, {
            opacity: self.progress < 0.08 ? 1 : 0,
          });
        },

        onRefresh: (self) => {
          setT(1 - self.progress);
        },
      });

      return () => {
        counterAnimation.kill();
        trigger.kill();

        document.documentElement.style.removeProperty(
          "--sm-logo-opacity",
        );
      };
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div
      ref={rootRef}
      id="hero"
      data-name="Hero"
      className="hero-root"
    >
      <div
        ref={stageRef}
        className="hero-stage"
      >
        <div className="hero-pin">

          {/* ── COUNTER ─────────────────────────────────────────────── */}

          <div
            ref={counterRef}
            className="absolute left-6 top-6 z-30 font-mono text-[11px] tracking-[0.25em] text-paper/70 md:left-10 md:top-10"
            aria-hidden="true"
          >
            06
          </div>

          {/* ── BASED LOCATION ─────────────────────────────────────── */}

          <div className="absolute right-6 top-6 z-30 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60 md:right-10 md:top-10">
            BASED — TORONTO / CANADA
          </div>

          {/* ── HERO BACKDROP ──────────────────────────────────────── */}

          <div
            className="hero-backdrop"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[#0A0A0A]" />

            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                background:
                  "radial-gradient(circle at 50% 42%, rgba(255,255,255,0.16), transparent 48%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.15) 50%, rgba(10,10,10,0.95) 100%)",
              }}
            />
          </div>

          {/* ── WORDMARK ────────────────────────────────────────────── */}

          <a
            ref={markRef}
            href="#hero"
            className="hero-mark"
            aria-label={BRAND.name}
          >
            <span
              ref={markInnerRef}
              className="hero-mark-inner"
            >
              {BRAND.wordmark}
            </span>
          </a>

          {/* ── INTRO ───────────────────────────────────────────────── */}

          <div
            ref={introRef}
            className="absolute bottom-[9vh] left-6 z-20 max-w-[720px] md:left-10 lg:bottom-[11vh]"
          >
            <p className="font-display text-[clamp(1.6rem,3.2vw,3.4rem)] uppercase leading-[0.98] tracking-[-0.025em] text-paper">
              <span>
                {HERO.statementStrong}
              </span>
            </p>

            <p className="mt-5 max-w-[580px] text-sm leading-relaxed text-muted-light md:text-base">
              {HERO.statementMuted}
            </p>
          </div>

          {/* ── SMALL META ──────────────────────────────────────────── */}

          <div className="absolute bottom-6 right-6 z-20 text-right font-mono text-[9px] uppercase tracking-[0.18em] text-paper/40 md:bottom-10 md:right-10">
            MARKETING / STRATEGY / CREATIVE
          </div>
        </div>
      </div>
    </div>
  );
}
