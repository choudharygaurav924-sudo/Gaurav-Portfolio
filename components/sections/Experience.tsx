import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="experience section-shell">
      <div className="section-heading">
        <span className="eyebrow">04 / EXPERIENCE</span>

        <h2>
          WHERE I&apos;VE
          <br />
          <em>WORKED.</em>
        </h2>
      </div>

      <div className="experience-list">
        {EXPERIENCE.map((item, index) => (
          <article
            key={`${item.company}-${index}`}
            className="experience-item"
          >
            <div className="experience-date">
              {item.date}
            </div>

            <div className="experience-company">
              {item.company}
            </div>

            <div className="experience-role">
              {item.role}
            </div>

            <div className="experience-location">
              {item.location}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
