import { SiteMenu } from "@/components/sections/SiteMenu";
import { Hero } from "@/components/sections/Hero";
import { InteractivePortrait } from "@/components/sections/InteractivePortrait";
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

        <InteractivePortrait />

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
              <span>07 — RESUME</span>
              <span>MARKETING / DIGITAL / STRATEGY</span>
            </div>

            <div className="experience-editorial__intro">
              <p className="experience-editorial__eyebrow">
                EXPERIENCE / EDUCATION
              </p>

              <h2>
                Where I&apos;ve
                <br />
                <span>built the work.</span>
              </h2>
            </div>

            <div className="experience-editorial__list">
              {EXPERIENCE.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="experience-editorial__item"
                >
                  <div className="experience-editorial__period">
                    {item.period}
                  </div>

                  <div className="experience-editorial__company">
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>

                  <div className="experience-editorial__details">
                    <span>{item.location}</span>

                    <p>{item.description}</p>

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
              <span>07 / 08</span>
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
