import { SiteMenu } from "@/components/sections/SiteMenu";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CreativeSystem } from "@/components/sections/CreativeSystem";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { EXPERIENCE } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteMenu />

      <main>
        <Hero />

        <div className="relative z-10 bg-ink">
          <About />

          <CreativeSystem />

          <Work />

          <Services />

          <section
            id="resume"
            className="experience-editorial"
          >
            <div className="experience-editorial__top">
              <span>(EXPERIENCE)</span>
              <span>06 — CAREER</span>
              <span>MARKETING / DIGITAL / CREATIVE</span>
            </div>

            <div className="experience-editorial__intro">
              <p className="experience-editorial__eyebrow">
                EXPERIENCE / EDUCATION
              </p>

              <h2>
                Marketing thinking.
                <br />
                <span>Creative execution.</span>
              </h2>

              <p className="experience-editorial__intro-copy">
                Experience across digital marketing, campaign
                development, content, audience thinking, creative
                direction, execution, and measurement.
              </p>
            </div>

            <div className="experience-editorial__timeline">
              {EXPERIENCE.map((item, index) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="experience-editorial__item"
                >
                  <div className="experience-editorial__index">
                    0{index + 1}
                  </div>

                  <div className="experience-editorial__period">
                    {item.period}
                  </div>

                  <div className="experience-editorial__main">
                    <div className="experience-editorial__company">
                      {item.company}
                    </div>

                    <h3>{item.role}</h3>

                    <p className="experience-editorial__location">
                      {item.location}
                    </p>

                    <p className="experience-editorial__description">
                      {item.description}
                    </p>

                    <div className="experience-editorial__tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="experience-editorial__bottom">
              <span>06 / 08</span>
              <span>EXPERIENCE / EDUCATION</span>
            </div>
          </section>

          <CTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
