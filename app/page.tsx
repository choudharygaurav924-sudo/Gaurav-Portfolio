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

      <style jsx>{`
        .case-study {
          min-height: 100vh;
          background: #050505;
          color: #f3f1ec;
        }

        .case-study__nav {
          position: relative;
          z-index: 10;

          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;

          padding: 1.5rem 4vw;

          border-bottom: 1px solid
            rgba(243, 241, 236, 0.14);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.5);
        }

        .case-study__nav span:nth-child(2) {
          text-align: center;
        }

        .case-study__nav span:last-child {
          text-align: right;
        }

        .case-study__back {
          color: inherit;
          text-decoration: none;

          transition: color 0.25s ease;
        }

        .case-study__back:hover {
          color: #fff;
        }

        .case-study__hero {
          padding: 8rem 4vw 0;
        }

        .case-study__hero-meta {
          display: flex;
          justify-content: space-between;
          gap: 2rem;

          margin-bottom: 3rem;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.45);
        }

        .case-study__hero h1 {
          max-width: 1300px;
          margin: 0 0 5rem;

          font-size: clamp(4rem, 11vw, 13rem);
          font-weight: 500;
          line-height: 0.82;
          letter-spacing: -0.075em;
        }

        .case-study__hero-image {
          width: 100%;
          height: min(75vh, 850px);

          overflow: hidden;
          background: #111;
        }

        .case-study__hero-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .case-study__overview {
          display: grid;
          grid-template-columns: 0.35fr 1fr;

          gap: 5rem;

          padding: 10rem 4vw;
        }

        .case-study__label,
        .case-study__gallery-heading,
        .case-study__story-row > span,
        .case-study__closing span {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.45);
        }

        .case-study__overview-copy {
          max-width: 850px;
        }

        .case-study__overview-copy > p {
          margin: 0;

          font-size: clamp(1.8rem, 3vw, 3.2rem);
          line-height: 1.15;
          letter-spacing: -0.035em;
        }

        .case-study__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          margin-top: 3rem;
        }

        .case-study__tags span {
          padding: 0.55rem 0.75rem;

          border: 1px solid
            rgba(243, 241, 236, 0.16);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: rgba(243, 241, 236, 0.5);
        }

        .case-study__story {
          padding: 0 4vw 10rem;
        }

        .case-study__story-row {
          display: grid;
          grid-template-columns: 0.35fr 1fr;

          gap: 5rem;

          padding: 3rem 0;

          border-top: 1px solid
            rgba(243, 241, 236, 0.14);
        }

        .case-study__story-row:last-child {
          border-bottom: 1px solid
            rgba(243, 241, 236, 0.14);
        }

        .case-study__story-row p {
          max-width: 850px;
          margin: 0;

          font-size: clamp(1.3rem, 2vw, 2rem);
          line-height: 1.4;

          color: rgba(243, 241, 236, 0.72);
        }

        .case-study__gallery {
          padding: 0 4vw 10rem;
        }

        .case-study__gallery-heading {
          display: flex;
          justify-content: space-between;

          padding-bottom: 1.5rem;

          border-bottom: 1px solid
            rgba(243, 241, 236, 0.14);
        }

        .case-study__gallery-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 3rem;

          margin-top: 3rem;
        }

        .case-study__gallery-item {
          overflow: hidden;
          background: #111;
        }

        .case-study__gallery-item img {
          width: 100%;
          display: block;
        }

        .case-study__gallery-note {
          align-self: end;
          padding-bottom: 1rem;
        }

        .case-study__gallery-note span {
          display: block;
          margin-bottom: 1rem;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          letter-spacing: 0.15em;

          color: rgba(243, 241, 236, 0.4);
        }

        .case-study__gallery-note p {
          margin: 0;

          font-size: 13px;
          line-height: 1.7;

          color: rgba(243, 241, 236, 0.5);
        }

        .case-study__closing {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 3rem 4vw;

          border-top: 1px solid
            rgba(243, 241, 236, 0.14);
        }

        .case-study__closing a {
          color: #f3f1ec;
          text-decoration: none;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
        }

        @media (max-width: 800px) {
          .case-study__nav {
            grid-template-columns: 1fr auto;
          }

          .case-study__nav span:last-child {
            display: none;
          }

          .case-study__hero {
            padding: 5rem 1rem 0;
          }

          .case-study__hero-meta {
            display: block;
          }

          .case-study__hero-meta span {
            display: block;
          }

          .case-study__hero-meta span + span {
            margin-top: 0.6rem;
          }

          .case-study__hero h1 {
            margin-bottom: 3rem;
          }

          .case-study__hero-image {
            height: 60vh;
            min-height: 420px;
          }

          .case-study__overview {
            grid-template-columns: 1fr;
            gap: 2rem;

            padding: 7rem 1rem;
          }

          .case-study__story {
            padding: 0 1rem 7rem;
          }

          .case-study__story-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .case-study__gallery {
            padding: 0 1rem 7rem;
          }

          .case-study__gallery-grid {
            grid-template-columns: 1fr;
          }

          .case-study__closing {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </main>
  );
}
