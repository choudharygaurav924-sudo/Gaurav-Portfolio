"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CREATIVE_LAB } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray<HTMLElement>(
        "[data-lab-project]"
      );

      projects.forEach((project) => {
        const image = project.querySelector<HTMLElement>(
          "[data-lab-image]"
        );

        const title = project.querySelector<HTMLElement>(
          "[data-lab-title]"
        );

        const copy = project.querySelector<HTMLElement>(
          "[data-lab-copy]"
        );

        const meta = project.querySelector<HTMLElement>(
          "[data-lab-meta]"
        );

        gsap.fromTo(
          image,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          [meta, title, copy],
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 75%",
              end: "top 42%",
              scrub: 0.8,
            },
          }
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
      id="lab"
      className="creative-lab"
    >
      <div className="creative-lab__top">
        <span>(CREATIVE LAB)</span>
        <span>05 — SELF-INITIATED</span>
        <span>CONCEPT / ART DIRECTION / DIGITAL</span>
      </div>

      <div className="creative-lab__intro">
        <p className="creative-lab__eyebrow">
          SELF-INITIATED / FICTIONAL CAMPAIGNS
        </p>

        <h2>
          When there&apos;s
          <br />
          <span>no brief.</span>
        </h2>

        <p className="creative-lab__intro-copy">
          A space for ideas I build because I want to explore
          a brand, a visual language, or a different way of
          communicating a product.
        </p>
      </div>

      <div className="creative-lab__projects">
        {CREATIVE_LAB.map((project, index) => (
          <article
            key={project.title}
            className={`creative-lab__project creative-lab__project--${project.accent}`}
            data-lab-project
          >
            <div className="creative-lab__media">
              <div
                className="creative-lab__image"
                data-lab-image
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />

              <div className="creative-lab__overlay" />

              <div
                className="creative-lab__number"
                data-lab-meta
              >
                0{index + 1}
              </div>

              <div
                className="creative-lab__label"
                data-lab-meta
              >
                SELF-INITIATED / FICTIONAL
              </div>
            </div>

            <div className="creative-lab__content">
              <p
                className="creative-lab__category"
                data-lab-meta
              >
                CREATIVE LAB / {project.accent.toUpperCase()}
              </p>

              <h3 data-lab-title>
                {project.title}
              </h3>

              <p
                className="creative-lab__line"
                data-lab-title
              >
                {project.line}
              </p>

              <p
                className="creative-lab__copy"
                data-lab-copy
              >
                {project.copy}
              </p>

              <div
                className="creative-lab__footer"
                data-lab-meta
              >
                <span>CONCEPT / ART DIRECTION</span>
                <span>EXPLORE ↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="creative-lab__bottom">
        <span>05 / 08</span>
        <span>IDEAS WITHOUT A CLIENT BRIEF</span>
      </div>
    </section>
  );
}
