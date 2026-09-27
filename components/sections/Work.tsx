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

        const title = card.querySelector<HTMLElement>(
          "[data-work-title]"
        );

        if (image) {
          gsap.fromTo(
            image,
            {
              scale: 1.12,
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
        }

        if (content) {
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
        }

        if (meta) {
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
        }

        if (title) {
          gsap.fromTo(
            title,
            {
              y: 35,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "top 45%",
                scrub: 0.7,
              },
            }
          );
        }
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
      {/* SECTION HEADER */}
      <div className="work-editorial__top">
        <span>(SELECTED WORK)</span>
        <span>04 — WORK</span>
        <span>MARKETING / DIGITAL / CAMPAIGNS</span>
      </div>

      {/* INTRO */}
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
          A selection of professional, campaign, digital,
          advertising, and academic work built through
          strategy, audience thinking, creative development,
          and execution.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="work-editorial__list">
        {CASE_STUDIES.map((project, index) => (
          <article
            key={project.anchor}
            id={project.anchor}
            className="work-editorial__card"
            data-work-card
          >
            {/* PROJECT META */}
            <div className="work-editorial__meta-bar">
              <span>
                {project.index} / 0{CASE_STUDIES.length}
              </span>

              <span>{project.label}</span>

              <span>{project.type}</span>
            </div>

            {/* IMAGE */}
            <div className="work-editorial__media">
              <div
                className="work-editorial__image"
                data-work-image
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
              />

              <div className="work-editorial__media-overlay" />

              <div
                className="work-editorial__project-number"
                data-work-meta
              >
                {project.index}
              </div>

              <div className="work-editorial__media-label">
                {project.label}
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="work-editorial__content"
              data-work-content
            >
              <div className="work-editorial__content-top">
                <span className="work-editorial__small-label">
                  CASE STUDY / {project.index}
                </span>

                <span className="work-editorial__small-label">
                  {project.type}
                </span>
              </div>

              <h3 data-work-title>
                {project.title}
              </h3>

              <p className="work-editorial__role">
                {project.role}
              </p>

              <p className="work-editorial__description">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="work-editorial__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* STORY */}
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

              {/* PROJECT LINK */}
              <a
                href={`#${project.anchor}`}
                className="work-editorial__link"
                aria-label={`Explore ${project.title}`}
              >
                <span>EXPLORE PROJECT</span>
                <span>↗</span>
              </a>
            </div>

            {/* PROJECT FOOTER */}
            <div className="work-editorial__card-footer">
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                {project.label === "ACADEMIC PROJECT"
                  ? "ACADEMIC / ADVERTISING"
                  : "PROFESSIONAL / MARKETING"}
              </span>

              <span>
                {project.title}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* SECTION FOOTER */}
      <div className="work-editorial__bottom">
        <span>04 / 08</span>
        <span>SELECTED WORK</span>
        <span>SCROLL TO CONTINUE</span>
      </div>
    </section>
  );
}
