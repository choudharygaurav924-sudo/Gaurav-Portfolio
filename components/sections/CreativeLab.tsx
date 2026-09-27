"use client";

import Image from "next/image";
import { CREATIVE_LAB } from "@/lib/data";

export function CreativeLab() {
  return (
    <section
      id="lab"
      className="lab-section"
    >
      <div className="section-label">
        <span>(06)</span>
        <span>CREATIVE LAB</span>
      </div>

      <div className="lab-header">
        <h2>IDEAS WITHOUT A BRIEF.</h2>

        <p>
          Self-initiated creative experiments exploring
          art direction, campaign thinking and
          AI-assisted production.
        </p>
      </div>

      <div className="lab-grid">
        {CREATIVE_LAB.map((project) => (
          <article
            key={project.title}
            className="lab-card"
          >
            <div className="lab-card-media">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="lab-card-image"
                />
              ) : (
                <div className="lab-card-placeholder">
                  <span>{project.title}</span>
                </div>
              )}
            </div>

            <div className="lab-card-info">
              <span>{project.label}</span>

              <h3>{project.title}</h3>

              <p>{project.copy}</p>

              <span className="lab-line">
                {project.line}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
