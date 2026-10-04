import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="resume-section section-shell">
      <div className="experience-heading">
        <div>
          <span className="eyebrow">04 / EXPERIENCE</span>

          <h2>
            WHERE I&apos;VE
            <br />
            <em>WORKED.</em>
          </h2>
        </div>

        <p>
          Marketing experience across B2B, digital campaigns, content,
          outreach, campaign leadership, and advertising.
        </p>
      </div>

      <div className="experience-list">
        {EXPERIENCE.map((item, index) => (
          <article
            key={`${item.company}-${index}`}
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
