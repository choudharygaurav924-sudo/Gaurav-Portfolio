import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { InteractivePortrait } from "@/components/sections/InteractivePortrait";
import { CASE_STUDIES, CREATIVE_LAB, EXPERIENCE, BRAND, HERO } from "@/lib/data";

export default function Home() {
  return (
    <main className="portfolio-page">
      <header className="site-header">
        <Link href="/" className="site-header__logo">
          GAURAV <span>SINGH</span><i>.</i>
        </Link>

        <div className="site-header__right">
          <a href="#contact" className="site-header__contact">
            GET IN TOUCH
          </a>

          <a href="#work" className="site-header__menu">
            MENU <span>☰</span>
          </a>
        </div>
      </header>

      <Hero />

      <InteractivePortrait />

      <section id="about" className="editorial-section about-section">
        <div className="section-meta">
          <span>(ABOUT)</span>
          <span>02 — POINT OF VIEW</span>
          <span>{BRAND.location}</span>
        </div>

        <div className="about-section__grid">
          <div className="section-index">02 / 08</div>

          <div className="about-section__main">
            <p className="section-kicker">MARKETING / CREATIVE</p>

            <h2>
              Marketing strategy
              <br />
              <span>with a creative point of view.</span>
            </h2>

            <p className="about-section__lead">
              {HERO.statementStrong}
            </p>

            <p>
              {HERO.statementMuted}
            </p>

            <p>
              I turn audience insight into campaigns, content, and
              experiences people remember.
            </p>
          </div>
        </div>
      </section>

      <section id="mindset" className="editorial-section mindset-section">
        <div className="section-meta">
          <span>(MARKETING MINDSET)</span>
          <span>03 — HOW I THINK</span>
          <span>STRATEGY / CREATIVE / IMPACT</span>
        </div>

        <div className="mindset-section__content">
          <p className="section-kicker">THE WAY I APPROACH THE WORK</p>

          <h2>
            Ideas should have
            <br />
            <span>somewhere to go.</span>
          </h2>

          <p>
            Strategy gives creativity direction. Creativity gives
            strategy a reason to be remembered.
          </p>

          <div className="mindset-grid">
            <div>
              <span>01</span>
              <h3>INSIGHT</h3>
              <p>
                Start with the audience, the tension, and the truth
                behind the brief.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>STRATEGY</h3>
              <p>
                Find the sharpest direction and the reason for people
                to care.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>CONCEPT</h3>
              <p>
                Turn the strategy into a big idea with a distinct
                point of view.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>EXECUTION</h3>
              <p>
                Make the idea real across content, digital, social,
                and experience.
              </p>
            </div>

            <div>
              <span>05</span>
              <h3>IMPACT</h3>
              <p>
                Measure what moved, learn what matters, and sharpen
                the next idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-meta work-section__meta">
          <span>(SELECTED WORK)</span>
          <span>04 — WORK</span>
          <span>REAL / ACADEMIC</span>
        </div>

        <div className="work-section__intro">
          <p className="section-kicker">SELECTED PROJECTS</p>

          <h2>
            Work built around
            <br />
            <span>people, ideas &amp; outcomes.</span>
          </h2>

          <p>
            Real professional experience and academic work across
            digital marketing, campaigns, content, strategy and
            creative direction.
          </p>
        </div>

        <div className="work-list">
          {CASE_STUDIES.map((project) => (
            <Link
              key={project.anchor}
              href={`/work/${project.anchor}`}
              className="work-card"
            >
              <div className="work-card__top">
                <span>{project.index}</span>
                <span>{project.label}</span>
                <span>VIEW CASE STUDY ↗</span>
              </div>

              <div className="work-card__visual">
                <div className="work-card__visual-number">
                  {project.index}
                </div>

                <div className="work-card__visual-title">
                  {project.title}
                </div>

                <div className="work-card__visual-line" />
              </div>

              <div className="work-card__bottom">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                </div>

                <div>
                  <p>{project.description}</p>

                  <div className="work-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-bottom">
          <span>04 / 08</span>
          <span>CLICK A PROJECT TO EXPLORE</span>
        </div>
      </section>

      <section id="lab" className="lab-section">
        <div className="section-meta">
          <span>(CREATIVE LAB)</span>
          <span>05 — SELF-INITIATED</span>
          <span>CONCEPT / ART DIRECTION / DIGITAL</span>
        </div>

        <div className="lab-section__intro">
          <p className="section-kicker">
            SELF-INITIATED / FICTIONAL CAMPAIGNS
          </p>

          <h2>
            When there&apos;s
            <br />
            <span>no brief.</span>
          </h2>

          <p>
            A space for ideas I build because I want to explore a
            brand, a visual language, or a different way of
            communicating a product.
          </p>
        </div>

        <div className="lab-list">
          {CREATIVE_LAB.map((item, index) => (
            <article className="lab-item" key={item.title}>
              <div className="lab-item__number">
                0{index + 1}
              </div>

              <div className="lab-item__content">
                <p>SELF-INITIATED / FICTIONAL</p>
                <h3>{item.title}</h3>
                <strong>{item.line}</strong>
                <p>{item.copy}</p>
              </div>

              <div className="lab-item__arrow">↗</div>
            </article>
          ))}
        </div>

        <div className="section-bottom">
          <span>05 / 08</span>
          <span>IDEAS WITHOUT A CLIENT BRIEF</span>
        </div>
      </section>

      <section id="resume" className="experience-section">
        <div className="section-meta">
          <span>(EXPERIENCE)</span>
          <span>06 — RESUME</span>
          <span>MARKETING / DIGITAL / STRATEGY</span>
        </div>

        <div className="experience-section__intro">
          <p className="section-kicker">EXPERIENCE / EDUCATION</p>

          <h2>
            Where I&apos;ve
            <br />
            <span>built the work.</span>
          </h2>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((item) => (
            <article
              className="experience-item"
              key={`${item.company}-${item.period}`}
            >
              <div className="experience-item__period">
                {item.period}
              </div>

              <div className="experience-item__company">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>

              <div className="experience-item__details">
                <span>{item.location}</span>
                <p>{item.description}</p>

                <div className="work-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-bottom">
          <span>06 / 08</span>
          <span>EXPERIENCE / EDUCATION</span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-meta">
          <span>(CONTACT)</span>
          <span>07 — FINAL STOP</span>
          <span>{BRAND.availability}</span>
        </div>

        <div className="contact-section__content">
          <p className="section-kicker">
            HAVE A PROJECT, OPPORTUNITY, OR IDEA?
          </p>

          <h2>
            Let&apos;s make
            <br />
            <span>something people remember.</span>
          </h2>

          <a
            href={`mailto:${BRAND.email}`}
            className="contact-email"
          >
            {BRAND.email} ↗
          </a>
        </div>
      </section>

      <footer className="portfolio-footer">
        <div>
          <strong>GAURAV SINGH</strong>
          <p>{BRAND.footerNote}</p>
        </div>

        <div>
          <p>NAVIGATE</p>
          <a href="#about">About</a>
          <a href="#mindset">Mindset</a>
          <a href="#work">Work</a>
          <a href="#lab">Lab</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <p>ELSEWHERE</p>
          <a href="https://linkedin.com" target="_blank">
            LinkedIn ↗
          </a>
          <a href="https://instagram.com" target="_blank">
            Instagram ↗
          </a>
        </div>

        <div>
          <p>BASED — TORONTO / CANADA</p>
          <p>© {BRAND.year} GAURAV SINGH</p>
        </div>
      </footer>
    </main>
  );
}
