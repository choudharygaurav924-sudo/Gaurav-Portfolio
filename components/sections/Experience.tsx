"use client";

import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="editorial-section experience-section"
    >
      <div className="section-label">
        <span>(07)</span>
        <span>EXPERIENCE</span>
      </div>

      <div className="experience-heading">
        <h2 className="text-display-md">
          Marketing thinking.
          <br />
          <span className="text-muted">
            Creative execution.
          </span>
        </h2>

        <p className="section-intro">
          Experience across digital marketing,
          campaign development, outreach, audience
          thinking, creative direction, execution,
          and measurement.
        </p>
      </div>

      <div className="experience-list">
        {EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="experience-row"
          >
            <div className="experience-date">
              {item.period}
            </div>

            <div className="experience-main">
              <h3>{item.company}</h3>

              <p className="experience-role">
                {item.role}
              </p>

              <p className="experience-location">
                {item.location}
              </p>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
