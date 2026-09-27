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
    <main className="case-study-page">
      <header className="case-study-header">
        <Link href="/" className="case-study-back">
          ← BACK TO PORTFOLIO
        </Link>

        <span>
          {project.index} / {CASE_STUDIES.length}
        </span>

        <span>{project.label}</span>
      </header>

      <section className="case-study-hero">
        <div className="case-study-meta">
          <span>{project.type}</span>
          <span>{project.role}</span>
        </div>

        <h1>{project.title}</h1>

        <p>{project.description}</p>
      </section>

      <section className="case-study-overview">
        <div className="case-study-label">
          PROJECT OVERVIEW
        </div>

        <div>
          <p>{project.description}</p>

          <div className="work-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-story">
        {project.story.map(([label, copy]) => (
          <article key={label}>
            <span>{label}</span>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="case-study-material">
        <div className="section-meta">
          <span>PROJECT MATERIAL</span>
          <span>SELECTED VISUALS</span>
          <span>
            {project.index} / {CASE_STUDIES.length}
          </span>
        </div>

        <div className="case-study-material__frame">
          <div>{project.title}</div>

          <span>PROJECT MATERIAL</span>
        </div>
      </section>

      <section className="case-study-next">
        <span>NEXT</span>

        <Link href="/#work">
          VIEW ALL WORK ↗
        </Link>
      </section>
    </main>
  );
}
