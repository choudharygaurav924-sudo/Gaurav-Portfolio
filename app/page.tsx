"use client";

import Image from "next/image";
import Link from "next/link";

import { Hero } from "@/components/sections/Hero";
import { InteractivePortrait } from "@/components/sections/InteractivePortrait";

import {
  ABOUT,
  BRAND,
  CASE_STUDIES,
  CREATIVE_LAB,
  CREATIVE_SYSTEM,
  EXPERIENCE,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="site-shell">

      <header className="site-header">
        <Link href="/" className="site-logo">
          {BRAND.wordmark}
        </Link>

        <nav className="site-nav">
          <a href="#about">ABOUT</a>
          <a href="#mindset">MINDSET</a>
          <a href="#work">WORK</a>
          <a href="#lab">LAB</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a
          href={`mailto:${BRAND.email}`}
          className="site-header-contact"
        >
          LET&apos;S TALK ↗
        </a>
      </header>

      <Hero />

      <section className="portrait-section">
        <div className="section-label">
          <span>(01)</span>
          <span>PORTRAIT</span>
        </div>

        <InteractivePortrait />
      </section>

      <section
        id="about"
        className="editorial-section about-section"
      >
        <div className="section-label">
          <span>(02)</span>
          <span>{ABOUT.label}</span>
        </div>

        <div className="about-content">
          <h2 className="editorial-heading">
            {ABOUT.statementStrong}
          </h2>

          <p className="editorial-muted">
            {ABOUT.statementMuted}
          </p>

          <div className="about-location">
            <span>BASED</span>
            <span>{BRAND.location}</span>
          </div>
        </div>
      </section>

      <section
        id="mindset"
        className="editorial-section mindset-section"
      >
        <div className="section-label">
          <span>(03)</span>
          <span>MINDSET</span>
        </div>

        <div className="mindset-content">
          <div className="mindset-intro">
            <p>
              I work across strategy, digital marketing,
              outreach, campaign development and creative
              direction.
            </p>
          </div>

          <div className="creative-system">
            {CREATIVE_SYSTEM.map(
              ([number, title, description]) => (
                <div
                  className="system-row"
                  key={number}
                >
                  <span className="system-number">
                    {number}
                  </span>

                  <span className="system-title">
                    {title}
                  </span>

                  <span className="system-description">
                    {description}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-label">
          <span>(04)</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="work-list">
          {CASE_STUDIES.map((project) => (
            <Link
              key={project.anchor}
              href={`/work/${project.anchor}`}
              className="work-card"
            >
              <div className="work-card-media">
                <div className="work-card-number">
                  {project.index}
                </div>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 80vw"
                  className="work-card-image"
                />

                <div className="work-card-arrow">
                  ↗
                </div>
              </div>

              <div className="work-card-info">

                <div className="work-card-meta">
                  <span>{project.label}</span>
                  <span>{project.type}</span>
                </div>

                <div className="work-card-title-row">
                  <h3>{project.title}</h3>
                  <span>VIEW CASE STUDY ↗</span>
                </div>

                <p className="work-card-role">
                  {project.role}
                </p>

                <p className="work-card-description">
                  {project.description}
                </p>

                <div className="work-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="lab" className="lab-section">
        <div className="section-label">
          <span>(05)</span>
          <span>CREATIVE LAB</span>
        </div>

        <div className="lab-header">
          <h2>IDEAS WITHOUT A BRIEF.</h2>

          <p>
            Self-initiated creative experiments exploring
            art direction, campaign thinking and
            AI-assisted production.
          </p>
        </div>

        <div className="lab-grid">
          {CREATIVE_LAB.map((project) => (
            <article
              key={project.title}
              className="lab-card"
            >
              <div className="lab-card-media">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    className="lab-card-image"
                  />
                ) : (
                  <div className="lab-card-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="lab-card-info">
                <span>{project.label}</span>

                <h3>{project.title}</h3>

                <p>{project.copy}</p>

                <span className="lab-line">
                  {project.line}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="editorial-section experience-section"
      >
        <div className="section-label">
          <span>(06)</span>
          <span>EXPERIENCE</span>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((item) => (
            <div
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
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
      >
        <div className="section-label">
          <span>(07)</span>
          <span>CONTACT</span>
        </div>

        <div className="contact-content">
          <p className="contact-kicker">
            {BRAND.availability}
          </p>

          <h2>
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            MATTER.
          </h2>

          <a
            href={`mailto:${BRAND.email}`}
            className="contact-email"
          >
            {BRAND.email} ↗
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          © {BRAND.year} {BRAND.name}
        </div>

        <div>
          {BRAND.location}
        </div>

        <div>
          {BRAND.footerNote}
        </div>
      </footer>

    </main>
  );
}
