import Image from "next/image";
import { CASE_STUDIES } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="shell editorial-section case-study-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">(SELECTED WORK)</span>
          <h2 className="text-display-md mt-5">Real / academic work.</h2>
        </div>
        <p className="section-intro">
          Case-study beginnings: the thinking, systems, and creative decisions
          behind the work.
        </p>
      </div>

      <div className="case-study-list">
        {CASE_STUDIES.map((project) => (
          <article key={project.title} className="case-study" id={project.anchor}>
            <div className="case-study-media">
              <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="case-study-image object-cover" />
              <span className="case-study-index">{project.index}</span>
            </div>
            <div className="case-study-details">
              <p className="eyebrow">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="case-study-type">{project.type}</p>
              <p className="case-study-role">{project.role}</p>
              <p className="text-muted">{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="case-study-story">
                {project.story.map(([heading, body]) => <div key={heading}><span>{heading}</span><p>{body}</p></div>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
