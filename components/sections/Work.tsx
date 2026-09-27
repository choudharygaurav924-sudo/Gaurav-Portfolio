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

      <style jsx>{`
        .work-editorial {
          position: relative;
          padding: 12rem 4vw 10rem;
          background: #050505;
          color: #f3f1ec;
          overflow: hidden;
        }

        .work-editorial__top,
        .work-editorial__bottom {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          line-height: 1.2;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.45);
        }

        .work-editorial__top span:nth-child(2),
        .work-editorial__bottom span:nth-child(2) {
          text-align: center;
        }

        .work-editorial__top span:last-child,
        .work-editorial__bottom span:last-child {
          text-align: right;
        }

        .work-editorial__intro {
          max-width: 1000px;
          margin: 10rem 0 9rem;
        }

        .work-editorial__eyebrow {
          margin: 0 0 2rem;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.48);
        }

        .work-editorial__intro h2 {
          margin: 0;

          font-size: clamp(4rem, 8vw, 9rem);
          font-weight: 500;
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .work-editorial__intro h2 span {
          color: rgba(243, 241, 236, 0.34);
        }

        .work-editorial__intro-copy {
          max-width: 520px;
          margin: 3rem 0 0 auto;

          font-size: 15px;
          line-height: 1.7;
          color: rgba(243, 241, 236, 0.55);
        }

        .work-editorial__projects {
          display: flex;
          flex-direction: column;
        }

        .work-project {
          border-top: 1px solid rgba(243, 241, 236, 0.16);
        }

        .work-project:last-child {
          border-bottom: 1px solid rgba(243, 241, 236, 0.16);
        }

        .work-project__link {
          display: block;
          padding: 2rem 0 7rem;

          color: inherit;
          text-decoration: none;
        }

        .work-project__header {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          gap: 2rem;

          margin-bottom: 2rem;
        }

        .work-project__number {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          color: rgba(243, 241, 236, 0.5);
        }

        .work-project__meta {
          display: flex;
          gap: 2rem;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.48);
        }

        .work-project__arrow {
          font-size: 24px;
          font-weight: 300;
          color: rgba(243, 241, 236, 0.6);

          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            color 0.3s ease;
        }

        .work-project__media {
          position: relative;

          width: 100%;
          height: min(76vh, 820px);

          overflow: hidden;

          background: #111;
        }

        .work-project__image {
          position: absolute;
          inset: -2%;

          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          will-change: transform;

          transition:
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.5s ease;
        }

        .work-project__overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.05),
              transparent 45%,
              rgba(0, 0, 0, 0.42)
            );

          pointer-events: none;
        }

        .work-project__media-label {
          position: absolute;
          right: 2rem;
          bottom: 2rem;

          display: flex;
          align-items: center;
          gap: 0.8rem;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;

          color: rgba(255, 255, 255, 0.85);

          opacity: 0;
          transform: translateY(10px);

          transition:
            opacity 0.4s ease,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .work-project__content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;

          padding-top: 2.5rem;
        }

        .work-project__content h3 {
          margin: 0;

          font-size: clamp(2.4rem, 5vw, 5.5rem);
          font-weight: 500;
          line-height: 0.92;
          letter-spacing: -0.055em;
        }

        .work-project__role {
          margin: 1.5rem 0 0;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.45);
        }

        .work-project__description {
          align-self: end;
        }

        .work-project__description > p {
          max-width: 500px;
          margin: 0 0 1.5rem;

          font-size: 14px;
          line-height: 1.7;

          color: rgba(243, 241, 236, 0.58);
        }

        .work-project__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .work-project__tags span {
          padding: 0.5rem 0.7rem;

          border: 1px solid rgba(243, 241, 236, 0.16);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.52);
        }

        .work-project__link:hover
          .work-project__image {
          transform: scale(1.025);
          filter: brightness(1.04);
        }

        .work-project__link:hover
          .work-project__arrow {
          transform: translate(5px, -5px);
          color: #fff;
        }

        .work-project__link:hover
          .work-project__media-label {
          opacity: 1;
          transform: translateY(0);
        }

        .work-editorial__bottom {
          margin-top: 2rem;
        }

        @media (max-width: 800px) {
          .work-editorial {
            padding: 8rem 1rem;
          }

          .work-editorial__top,
          .work-editorial__bottom {
            grid-template-columns: 1fr 1fr;
          }

          .work-editorial__top span:nth-child(2),
          .work-editorial__bottom span:nth-child(2) {
            text-align: right;
          }

          .work-editorial__top span:last-child,
          .work-editorial__bottom span:last-child {
            display: none;
          }

          .work-editorial__intro {
            margin: 7rem 0 5rem;
          }

          .work-editorial__intro h2 {
            font-size: clamp(3.2rem, 13vw, 6rem);
          }

          .work-editorial__intro-copy {
            margin: 2rem 0 0;
          }

          .work-project__link {
            padding-bottom: 5rem;
          }

          .work-project__header {
            grid-template-columns: 50px 1fr auto;
            gap: 1rem;
          }

          .work-project__meta {
            display: block;
          }

          .work-project__meta span {
            display: block;
          }

          .work-project__meta span + span {
            margin-top: 0.4rem;
          }

          .work-project__media {
            height: 58vh;
            min-height: 430px;
          }

          .work-project__content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .work-project__content h3 {
            font-size: clamp(2.7rem, 12vw, 5rem);
          }

          .work-project__description {
            align-self: auto;
          }

          .work-project__media-label {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}              y: 70,
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
