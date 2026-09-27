"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
      const projects =
        gsap.utils.toArray<HTMLElement>("[data-project]");

      projects.forEach((project) => {
        const image = project.querySelector<HTMLElement>(
          "[data-project-image]"
        );

        const content = project.querySelector<HTMLElement>(
          "[data-project-content]"
        );

        const number = project.querySelector<HTMLElement>(
          "[data-project-number]"
        );

        if (!image || !content || !number) return;

        gsap.fromTo(
          image,
          {
            scale: 1.08,
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
          content,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 78%",
              end: "top 48%",
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          number,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
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
        <span>04 — WORK</span>
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
          A selection of professional, academic, and
          marketing projects developed across digital,
          campaign, content, and strategy work.
        </p>
      </div>

      <div className="work-editorial__projects">
        {CASE_STUDIES.map((project) => (
          <article
            key={project.anchor}
            id={project.anchor}
            className="work-project"
            data-project
          >
            <Link
              href={`/work/${project.anchor}`}
              className="work-project__link"
              aria-label={`Open ${project.title} case study`}
            >
              <div className="work-project__header">
                <div className="work-project__number">
                  <span data-project-number>
                    {project.index}
                  </span>
                </div>

                <div className="work-project__meta">
                  <span>{project.label}</span>
                  <span>{project.type}</span>
                </div>

                <span className="work-project__arrow">
                  ↗
                </span>
              </div>

              <div className="work-project__media">
                <div
                  className="work-project__image"
                  data-project-image
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />

                <div className="work-project__overlay" />

                <div className="work-project__media-label">
                  <span>VIEW CASE STUDY</span>
                  <span>↗</span>
                </div>
              </div>

              <div
                className="work-project__content"
                data-project-content
              >
                <div>
                  <h3>{project.title}</h3>

                  <p className="work-project__role">
                    {project.role}
                  </p>
                </div>

                <div className="work-project__description">
                  <p>{project.description}</p>

                  <div className="work-project__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="work-editorial__bottom">
        <span>04 / 08</span>
        <span>CLICK A PROJECT TO EXPLORE</span>
      </div>
    </section>
  );
}
