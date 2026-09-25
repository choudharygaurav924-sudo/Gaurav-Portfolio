"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector<HTMLElement>(
        "[data-contact-eyebrow]"
      );
      const titleLines = gsap.utils.toArray<HTMLElement>(
        "[data-contact-line]"
      );
      const copy = section.querySelector<HTMLElement>(
        "[data-contact-copy]"
      );
      const email = section.querySelector<HTMLElement>(
        "[data-contact-email]"
      );
      const meta = gsap.utils.toArray<HTMLElement>(
        "[data-contact-meta]"
      );

      gsap.set(
        [eyebrow, ...titleLines, copy, email, ...meta],
        {
          opacity: 0,
          y: 45,
        }
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          end: "top 30%",
          scrub: 0.8,
        },
      });

      timeline
        .to(eyebrow, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          titleLines,
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          copy,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          email,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
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
          "-=0.25"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-editorial"
    >
      <div className="contact-editorial__top">
        <span>(CONTACT)</span>
        <span>07 — FINAL SHOT</span>
        <span>OPEN TO MEANINGFUL OPPORTUNITIES</span>
      </div>

      <div className="contact-editorial__main">
        <p
          className="contact-editorial__eyebrow"
          data-contact-eyebrow
        >
          HAVE A PROJECT, OPPORTUNITY, OR IDEA?
        </p>

        <h2 className="contact-editorial__title">
          <span data-contact-line>LET&apos;S MAKE</span>

          <span
            data-contact-line
            className="contact-editorial__muted"
          >
            SOMETHING PEOPLE
          </span>

          <span data-contact-line>REMEMBER.</span>
        </h2>

        <div className="contact-editorial__action">
          <p data-contact-copy>
            If you have something worth building, I&apos;d like
            to hear about it.
          </p>

          <a
            data-contact-email
            className="contact-editorial__email"
            href={`mailto:${BRAND.email}`}
          >
            {BRAND.email}
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="contact-editorial__bottom">
        <span data-contact-meta>07 / 08</span>

        <span data-contact-meta>
          {BRAND.location}
        </span>

        <span data-contact-meta>
          {BRAND.name}
        </span>
      </div>
    </section>
  );
}
