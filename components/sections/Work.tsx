"use client";

import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="shell editorial-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">(REAL / ACADEMIC WORK)</span>
          <h2 className="text-display-md mt-5">Selected work.</h2>
        </div>
        <p className="section-intro">
          Marketing thinking, campaign development, and creative execution —
          grounded in real and academic work.
        </p>
      </div>

      <div className="work-list">
        {PROJECTS.map((project) => (
          <article key={project.title} className="work-item">
            <div className="work-media">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="work-image object-cover"
              />
            </div>

            <div className="work-details">
              <span className="system-number">{project.index}</span>
              <p className="eyebrow mt-5">{project.year}</p>
              <h3>{project.title}</h3>
              <p className="text-muted mt-4 max-w-md">{project.blurb}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
