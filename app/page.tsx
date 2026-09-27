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

export default function HomePage() {
  return (
    <main className="site">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="site-header">
        <Link href="/" className="site-logo">
          GAURAV SINGH<span>.</span>
        </Link>

        <nav className="site-nav">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#lab">LAB</a>
          <a href="#resume">RESUME</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <Hero />

      {/* =====================================================
          INTERACTIVE PORTRAIT
      ===================================================== */}
      <section className="portrait-section">
        <InteractivePortrait />
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section id="about" className="editorial-section about-section">
        <div className="section-index">01</div>

        <div className="section-label">
          {ABOUT.label}
        </div>

        <div className="editorial-copy">
          <h2>
            {ABOUT.statementStrong}
          </h2>

          <p>
            {ABOUT.statementMuted}
          </p>
        </div>
      </section>

      {/* =====================================================
          MINDSET
      ===================================================== */}
      <section id="mindset" className="mindset-section">
        <div className="section-index">02</div>

        <div className="section-label">
          (MINDSET)
        </div>

        <div className="mindset-intro">
          <h2>
            I like the part of marketing where
            strategy becomes something people can
            actually see, feel, and respond to.
          </h2>
        </div>

        <div className="creative-system">
          {CREATIVE_SYSTEM.map(([number, title, description]) => (
            <div
              className="creative-system-row"
              key={number}
            >
              <span>{number}</span>

              <strong>{title}</strong>

              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
      ===================================================== */}
      <section id="work" className="work-section">

        <div className="section-index">03</div>

        <div className="section-label">
          (SELECTED WORK)
        </div>

        <div className="work-intro">
          <h2>
            Work built around
            <br />
            ideas that need to move.
          </h2>

          <p>
            Real professional experience, academic strategy,
            outreach systems, campaign development, and
            creative direction.
          </p>
        </div>

        <div className="work-list">

          {CASE_STUDIES.map((project) => (

            <Link
              href={`/work/${project.anchor}`}
              className="work-card"
              key={project.anchor}
            >

              {/* IMAGE FRAME */}
              <div className="work-card-media">

                <div className="work-card-number">
                  {project.index}
                </div>

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 90vw"
                    className="work-card-image"
                  />
                ) : (
                  <div className="work-card-placeholder">
                    <span>
                      {project.title}
                    </span>
                  </div>
                )}

                <div className="work-card-arrow">
                  ↗
                </div>

              </div>

              {/* TEXT BELOW IMAGE */}
              <div className="work-card-info">

                <div className="work-card-meta">
                  <span>
                    {project.label}
                  </span>

                  <span>
                    {project.type}
                  </span>
                </div>

                <div className="work-card-title-row">

                  <h3>
                    {project.title}
                  </h3>

                  <span className="work-card-view">
                    VIEW CASE STUDY
                  </span>

                </div>

                <p className="work-card-role">
                  {project.role}
                </p>

                <p className="work-card-description">
                  {project.description}
                </p>

                <div className="work-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* =====================================================
          CREATIVE LAB
      ===================================================== */}
      <section id="lab" className="lab-section">

        <div className="section-index">04</div>

        <div className="section-label">
          (CREATIVE LAB)
        </div>

        <div className="lab-intro">

          <h2>
            Concepts, experiments,
            <br />
            and creative direction.
          </h2>

          <p>
            Self-initiated concepts exploring branding,
            campaign thinking, visual direction, and
            AI-assisted creative production.
          </p>

        </div>

        <div className="lab-grid">

          {CREATIVE_LAB.map((item, index) => (

            <article
              className={`lab-card lab-card-${index + 1}`}
              key={item.title}
            >

              <div className="lab-card-top">

                <span>
                  0{index + 1}
                </span>

                <small>
                  {item.label}
                </small>

              </div>

              <div className="lab-card-content">

                <h3>
                  {item.title}
                </h3>

                <div className="lab-line">
                  {item.line}
                </div>

                <p>
                  {item.copy}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section id="resume" className="experience-section">

        <div className="section-index">05</div>

        <div className="section-label">
          (EXPERIENCE)
        </div>

        <div className="experience-intro">

          <h2>
            Where I've
            <br />
            been building.
          </h2>

        </div>

        <div className="experience-list">

          {EXPERIENCE.map((item) => (

            <article
              className="experience-row"
              key={`${item.company}-${item.period}`}
            >

              <div className="experience-period">
                {item.period}
              </div>

              <div className="experience-main">

                <h3>
                  {item.company}
                </h3>

                <div className="experience-role">
                  {item.role}
                </div>

                <div className="experience-location">
                  {item.location}
                </div>

                <p>
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

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section id="contact" className="contact-section">

        <div className="section-index">06</div>

        <div className="section-label">
          (CONTACT)
        </div>

        <div className="contact-content">

          <p className="contact-kicker">
            HAVE A PROJECT / ROLE / IDEA?
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
            {BRAND.email}
          </a>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="site-footer">

        <div>
          <strong>
            {BRAND.wordmark}
          </strong>

          <span>
            {BRAND.location}
          </span>
        </div>

        <div>
          <p>
            {BRAND.footerNote}
          </p>
        </div>

        <div>
          <span>
            © {BRAND.year}
          </span>
        </div>

      </footer>

    </main>
  );
}            {ABOUT.statementStrong}
          </h2>

          <p>
            {ABOUT.statementMuted}
          </p>
        </div>
      </section>


      {/* =====================================================
          MINDSET
      ===================================================== */}
      <section id="mindset" className="mindset-section">
        <div className="section-index">02</div>

        <div className="section-label">
          (MINDSET)
        </div>

        <div className="mindset-intro">
          <h2>
            I like the part of marketing where
            strategy becomes something people can
            actually see, feel, and respond to.
          </h2>
        </div>

        <div className="creative-system">
          {CREATIVE_SYSTEM.map(([number, title, description]) => (
            <div
              className="creative-system-row"
              key={number}
            >
              <span>{number}</span>

              <strong>{title}</strong>

              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* =====================================================
          WORK
      ===================================================== */}
      <section id="work" className="work-section">
        <div className="section-index">03</div>

        <div className="section-label">
          (SELECTED WORK)
        </div>

        <div className="work-intro">
          <h2>
            Work built around
            <br />
            ideas that need to move.
          </h2>

          <p>
            Real work, academic strategy, and hands-on
            marketing experience — presented through the
            thinking behind the work.
          </p>
        </div>


        <div className="work-list">
          {CASE_STUDIES.map((project) => (
            <Link
              href={`/work/${project.anchor}`}
              className="work-card"
              key={project.anchor}
            >

              {/* IMAGE */}
              <div className="work-card-media">

                <div className="work-card-number">
                  {project.index}
                </div>

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 90vw"
                    className="work-card-image"
                  />
                ) : (
                  <div className="work-card-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}

                <div className="work-card-arrow">
                  ↗
                </div>
              </div>


              {/* INFORMATION BELOW IMAGE */}
              <div className="work-card-info">

                <div className="work-card-meta">
                  <span>{project.label}</span>
                  <span>{project.type}</span>
                </div>

                <div className="work-card-title-row">
                  <h3>{project.title}</h3>

                  <span className="work-card-view">
                    VIEW CASE STUDY
                  </span>
                </div>

                <p className="work-card-role">
                  {project.role}
                </p>

                <p className="work-card-description">
                  {project.description}
                </p>

                <div className="work-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* =====================================================
          CREATIVE LAB
      ===================================================== */}
      <section id="lab" className="lab-section">
        <div className="section-index">04</div>

        <div className="section-label">
          (CREATIVE LAB)
        </div>

        <div className="lab-intro">
          <h2>
            Concepts, experiments,
            <br />
            and creative direction.
          </h2>

          <p>
            Self-initiated concepts exploring branding,
            campaign thinking, visual direction, and
            AI-assisted creative production.
          </p>
        </div>


        <div className="lab-grid">
          {CREATIVE_LAB.map((item, index) => (
            <article
              className={`lab-card lab-card-${index + 1}`}
              key={item.title}
            >
              <div className="lab-card-top">
                <span>
                  0{index + 1}
                </span>

                <small>
                  {item.label}
                </small>
              </div>

              <div className="lab-card-content">
                <h3>{item.title}</h3>

                <div className="lab-line">
                  {item.line}
                </div>

                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* =====================================================
          EXPERIENCE / RESUME
      ===================================================== */}
      <section id="resume" className="experience-section">
        <div className="section-index">05</div>

        <div className="section-label">
          (EXPERIENCE)
        </div>

        <div className="experience-intro">
          <h2>
            Where I've
            <br />
            been building.
          </h2>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((item) => (
            <article
              className="experience-row"
              key={`${item.company}-${item.period}`}
            >
              <div className="experience-period">
                {item.period}
              </div>

              <div className="experience-main">
                <h3>{item.company}</h3>

                <div className="experience-role">
                  {item.role}
                </div>

                <div className="experience-location">
                  {item.location}
                </div>

                <p>
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


      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section id="contact" className="contact-section">
        <div className="section-index">06</div>

        <div className="section-label">
          (CONTACT)
        </div>

        <div className="contact-content">
          <p className="contact-kicker">
            HAVE A PROJECT / ROLE / IDEA?
          </p>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            MATTER.
          </h2>

          <a
            href={`mailto:${BRAND.email}`}
            className="contact-email"
          >
            {BRAND.email}
          </a>
        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="site-footer">

        <div>
          <strong>{BRAND.wordmark}</strong>
          <span>{BRAND.location}</span>
        </div>

        <div>
          <p>{BRAND.footerNote}</p>
        </div>

        <div>
          <span>© {BRAND.year}</span>
        </div>

      </footer>

    </main>
  );
}
