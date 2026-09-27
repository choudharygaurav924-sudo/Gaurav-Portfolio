import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="work-section editorial-section">
      <div className="shell">
        <div className="section-heading work-heading">
          <div>
            <span className="eyebrow">(REAL WORK)</span>

            <h2 className="text-display-md mt-6">
              Campaigns.
              <br />
              Systems.
              <br />
              Experiences.
            </h2>
          </div>

          <p className="section-intro">
            Selected real-world and academic work across marketing,
            digital outreach, campaign development, and strategy.
          </p>
        </div>

        <div className="project-list">
          {CASE_STUDIES.map((project) => (
            <article key={project.anchor} className="project">
              {project.image ? (
                <Link
                  href={`/work/${project.anchor}`}
                  className="project-image"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 90vw"
                    className="project-image-element"
                  />

                  <span className="project-image-number">
                    {project.index}
                  </span>

                  <span className="project-image-arrow">↗</span>
                </Link>
              ) : (
                <Link
                  href={`/work/${project.anchor}`}
                  className="project-text-only"
                >
                  <span className="project-image-number">
                    {project.index}
                  </span>

                  <span className="project-image-arrow">↗</span>
                </Link>
              )}

              <div className="project-content">
                <div className="project-meta">
                  <span>
                    {project.index} / {project.label}
                  </span>

                  <span>{project.type}</span>
                </div>

                <Link
                  href={`/work/${project.anchor}`}
                  className="project-title-link"
                >
                  <h3>{project.title}</h3>

                  <span>VIEW CASE STUDY ↗</span>
                </Link>

                <p className="project-role">
                  {project.role}
                </p>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 78%",
              end: "top 48%",
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          number,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top 75%",
              end: "top 55%",
              scrub: 0.7,
            },
          }
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="work-editorial"
    >
      <div className="work-editorial__top">
        <span>(SELECTED WORK)</span>
        <span>04 — WORK</span>
        <span>MARKETING / DIGITAL / CAMPAIGNS</span>
      </div>

      <div className="work-editorial__intro">
        <p className="work-editorial__eyebrow">
          SELECTED PROJECTS
        </p>

        <h2>
          Work built around
          <br />
          <span>people, ideas &amp; outcomes.</span>
        </h2>

        <p className="work-editorial__intro-copy">
          A selection of professional, academic, and
          marketing projects developed across digital,
          campaign, content, and strategy work.
        </p>
      </div>

      <div className="work-editorial__projects">
        {CASE_STUDIES.map((project) => (
          <article
            key={project.anchor}
            id={project.anchor}
            className="work-project"
            data-project
          >
            <Link
              href={`/work/${project.anchor}`}
              className="work-project__link"
              aria-label={`Open ${project.title} case study`}
            >
              <div className="work-project__header">
                <div className="work-project__number">
                  <span data-project-number>
                    {project.index}
                  </span>
                </div>

                <div className="work-project__meta">
                  <span>{project.label}</span>
                  <span>{project.type}</span>
                </div>

                <span className="work-project__arrow">
                  ↗
                </span>
              </div>

              <div className="work-project__media">
                <div
                  className="work-project__image"
                  data-project-image
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />

                <div className="work-project__overlay" />

                <div className="work-project__media-label">
                  <span>VIEW CASE STUDY</span>
                  <span>↗</span>
                </div>
              </div>

              <div
                className="work-project__content"
                data-project-content
              >
                <div>
                  <h3>{project.title}</h3>

                  <p className="work-project__role">
                    {project.role}
                  </p>
                </div>

                <div className="work-project__description">
                  <p>{project.description}</p>

                  <div className="work-project__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="work-editorial__bottom">
        <span>04 / 08</span>
        <span>CLICK A PROJECT TO EXPLORE</span>
      </div>
    </section>
  );
}
