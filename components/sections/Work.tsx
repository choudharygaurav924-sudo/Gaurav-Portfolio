"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CASE_STUDIES } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        "[data-work-card]"
      );

      cards.forEach((card) => {
        const image = card.querySelector<HTMLElement>(
          "[data-work-image]"
        );
        const content = card.querySelector<HTMLElement>(
          "[data-work-content]"
        );
        const meta = card.querySelector<HTMLElement>(
          "[data-work-meta]"
        );

        gsap.fromTo(
          image,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          content,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              end: "top 42%",
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          meta,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 55%",
              scrub: 0.7,
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
      id="work"
      className="work-editorial"
    >
      <div className="work-editorial__top">
        <span>(SELECTED WORK)</span>
        <span>04 — REAL WORK</span>
        <span>MARKETING / DIGITAL / CAMPAIGNS</span>
      </div>

      <div className="work-editorial__intro">
        <p className="work-editorial__eyebrow">
          SELECTED PROJECTS
        </p>

        <h2>
          Work built around
          <br />
          <span>people, ideas &amp; outcomes.</span>
        </h2>

        <p className="work-editorial__intro-copy">
          A selection of marketing, campaign, digital, and
          advertising work across professional and academic
          projects.
        </p>
      </div>

      <div className="work-editorial__list">
        {CASE_STUDIES.map((project) => (
          <article
            key={project.anchor}
            id={project.anchor}
            className="work-editorial__card"
            data-work-card
          >
            <div className="work-editorial__media">
              <div
                className="work-editorial__image"
                data-work-image
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />

              <div className="work-editorial__media-overlay" />

              <div
                className="work-editorial__project-number"
                data-work-meta
              >
                {project.index}
              </div>
            </div>

            <div
              className="work-editorial__content"
              data-work-content
            >
              <div className="work-editorial__meta">
                <span>{project.label}</span>
                <span>{project.type}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="work-editorial__role">
                {project.role}
              </p>

              <p className="work-editorial__description">
                {project.description}
              </p>

              <div className="work-editorial__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="work-editorial__story">
                {project.story.map(([label, copy]) => (
                  <div
                    className="work-editorial__story-row"
                    key={label}
                  >
                    <span>{label}</span>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>

              <a
                href={`#${project.anchor}`}
                className="work-editorial__link"
                aria-label={`View ${project.title} project`}
              >
                EXPLORE PROJECT <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="work-editorial__bottom">
        <span>04 / 08</span>
        <span>SELECTED REAL WORK</span>
      </div>
    </section>
  );
}
