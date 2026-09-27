import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((project) => ({
    slug: project.anchor,
  }));
}

export default async function WorkCaseStudy({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = CASE_STUDIES.find(
    (item) => item.anchor === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="case-study">
      <header className="case-study__nav">
        <Link href="/" className="case-study__back">
          ← BACK TO PORTFOLIO
        </Link>

        <span>{project.index} / 03</span>

        <span>{project.label}</span>
      </header>

      <section className="case-study__hero">
        <div className="case-study__hero-meta">
          <span>{project.type}</span>
          <span>{project.role}</span>
        </div>

        <h1>{project.title}</h1>

        <div className="case-study__hero-image">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>
      </section>

      <section className="case-study__overview">
        <div>
          <span className="case-study__label">
            OVERVIEW
          </span>
        </div>

        <div className="case-study__overview-copy">
          <p>{project.description}</p>

          <div className="case-study__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study__story">
        {project.story.map(([label, copy]) => (
          <article
            className="case-study__story-row"
            key={label}
          >
            <span>{label}</span>

            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="case-study__gallery">
        <div className="case-study__gallery-heading">
          <span>PROJECT MATERIAL</span>
          <span>SELECTED VISUALS</span>
        </div>

        <div className="case-study__gallery-grid">
          <div className="case-study__gallery-item case-study__gallery-item--large">
            <img
              src={project.image}
              alt={`${project.title} project visual`}
            />
          </div>

          <div className="case-study__gallery-note">
            <span>01</span>

            <p>
              Selected project material, campaign assets,
              research, execution, and supporting work.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study__closing">
        <span>NEXT PROJECT</span>

        <Link href="/#work">
          VIEW ALL WORK ↗
        </Link>
      </section>
    </main>
  );
}
