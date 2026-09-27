"use client";

import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/data";

export function Work() {
  return (
    <section className="work-section" id="work">
      <div className="work-section__header">
        <div className="section-label">(SELECTED WORK)</div>

        <p className="work-section__intro">
          A selection of marketing, digital, campaign, and creative work.
        </p>
      </div>

      <div className="work-list">
        {CASE_STUDIES.map((project, index) => (
          <article
            className="work-project"
            key={project.anchor}
          >
            <Link
              href={`/work/${project.anchor}`}
              className="work-project__link"
            >
              <div className="work-project__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="work-project__visual">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    className="work-project__image"
                  />
                ) : (
                  <div className="work-project__text-only">
                    <span className="project-text-only-title">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="work-project__info">
                <div className="work-project__meta">
                  <span>{project.year}</span>
                  <span>{project.role}</span>
                </div>

                <h2 className="work-project__title">
                  {project.title}
                </h2>

                <p className="work-project__description">
                  {project.description}
                </p>

                <div className="work-project__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="work-project__cta">
                  VIEW CASE STUDY →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
