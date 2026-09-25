"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CREATIVE_SYSTEM } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CreativeSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(
        "[data-mindset-row]"
      );

      rows.forEach((row) => {
        const number = row.querySelector<HTMLElement>(
          "[data-mindset-number]"
        );
        const title = row.querySelector<HTMLElement>(
          "[data-mindset-title]"
        );
        const copy = row.querySelector<HTMLElement>(
          "[data-mindset-copy]"
        );
        const line = row.querySelector<HTMLElement>(
          "[data-mindset-line]"
        );

        gsap.set([number, title, copy], {
          opacity: 0,
          y: 35,
        });

        gsap.set(line, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            end: "top 45%",
            scrub: 0.8,
          },
        });

        timeline
          .to(line, {
            scaleX: 1,
            duration: 0.7,
            ease: "none",
          })
          .to(
            number,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            "-=0.35"
          )
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.25"
          )
          .to(
            copy,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.3"
          );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="mindset"
      className="mindset-editorial"
    >
      <div className="mindset-editorial__top">
        <span>(MARKETING MINDSET)</span>
        <span>03 — HOW I THINK</span>
        <span>STRATEGY / CREATIVE / IMPACT</span>
      </div>

      <div className="mindset-editorial__intro">
        <p className="mindset-editorial__eyebrow">
          THE WAY I APPROACH THE WORK
        </p>

        <h2>
          Ideas should have
          <br />
          <span>somewhere to go.</span>
        </h2>

        <p className="mindset-editorial__intro-copy">
          Strategy gives creativity direction. Creativity gives
          strategy a reason to be remembered.
        </p>
      </div>

      <div className="mindset-editorial__system">
        {CREATIVE_SYSTEM.map(([number, title, copy]) => (
          <article
            key={number}
            className="mindset-editorial__row"
            data-mindset-row
          >
            <div
              className="mindset-editorial__line"
              data-mindset-line
            />

            <span
              className="mindset-editorial__number"
              data-mindset-number
            >
              {number}
            </span>

            <h3
              className="mindset-editorial__title"
              data-mindset-title
            >
              {title}
            </h3>

            <p
              className="mindset-editorial__copy"
              data-mindset-copy
            >
              {copy}
            </p>
          </article>
        ))}
      </div>

      <div className="mindset-editorial__bottom">
        <span>03 / 08</span>
        <span>FROM INSIGHT TO EXECUTION</span>
      </div>
    </section>
  );
}
