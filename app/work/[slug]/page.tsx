import Image from "next/image";
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

  const currentIndex = CASE_STUDIES.findIndex(
    (item) => item.anchor === slug
  );

  const nextProject =
    CASE_STUDIES[
      (currentIndex + 1) % CASE_STUDIES.length
    ];

  return (
    <main className="case-study-page">

      {/* HEADER */}
      <header className="case-study-header">
        <Link href="/" className="case-study-back">
          ← BACK TO WORK
        </Link>

        <span className="case-study-header__brand">
          GAURAV
        </span>

        <span className="case-study-header__index">
          {project.index} / 03
        </span>
      </header>

      {/* HERO */}
      <section className="case-study-hero">
        <div className="case-study-hero__meta">
          <span>{project.label}</span>
          <span>{project.type}</span>
        </div>

        <h1>{project.title}</h1>

        <div className="case-study-hero__bottom">
          <span>{project.role}</span>

          <p>{project.description}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="case-study-overview">
        <div className="section-meta">
          <span>01</span>
          <span>OVERVIEW</span>
        </div>

        <div className="case-study-overview__content">
          {project.story.map(([title, text]) => (
            <div
              className="case-study-story-row"
              key={title}
            >
              <span className="case-study-story-row__label">
                {title}
              </span>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAGS */}
      <section className="case-study-tags">
        <div className="section-meta">
          <span>02</span>
          <span>ROLE / SKILLS</span>
        </div>

        <div className="case-study-tags__list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {/* IMAGE GALLERY */}
      {project.images.length > 0 && (
        <section className="case-study-material">
          <div className="section-meta">
            <span>03</span>
            <span>SELECTED MATERIAL</span>
          </div>

          <div className="case-study-gallery">
            {project.images.map((image, index) => (
              <figure
                className={`case-study-gallery__item ${
                  index === 0
                    ? "case-study-gallery__item--large"
                    : ""
                }`}
                key={image}
              >
                <Image
                  src={image}
                  alt={`${project.title} project image ${
                    index + 1
                  }`}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}
      <section className="case-study-next">
        <span className="eyebrow">
          NEXT PROJECT
        </span>

        <Link href={`/work/${nextProject.anchor}`}>
          <span>{nextProject.index}</span>
          <h2>{nextProject.title}</h2>
          <span>VIEW CASE STUDY →</span>
        </Link>
      </section>

    </main>
  );
}
