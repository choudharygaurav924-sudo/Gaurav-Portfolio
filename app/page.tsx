import { SiteMenu } from "@/components/sections/SiteMenu";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CreativeSystem } from "@/components/sections/CreativeSystem";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SiteMenu />

      <main>
        <Hero />

        <div className="site-content">
          <About />

          <CreativeSystem />

          <Work />

          <Services />

          <section id="experience" className="shell editorial-section resume-section">
            <span className="eyebrow">(EXPERIENCE)</span>

            <div className="experience-heading">
              <h2 className="text-display-md">
                Marketing thinking.
                <br />
                <span className="text-muted">Creative execution.</span>
              </h2>

              <p className="section-intro">
                Experience across digital marketing, campaign development,
                outreach, audience thinking, creative direction, execution,
                and measurement.
              </p>
            </div>

            <div className="experience-list">
              <article className="experience-row">
                <span className="experience-date">AUG 2026 — PRESENT</span>

                <div>
                  <h3>SS TRADERS</h3>
                  <p className="experience-role">MARKETING SPECIALIST</p>
                  <p className="experience-location">
                    DELHI, INDIA / REMOTE
                  </p>
                  <p>
                    B2B marketing for a wholesale supplier of polycarbonate
                    roofing sheets, supporting marketing communication,
                    positioning, outreach, and business development activity.
                  </p>
                </div>
              </article>

              <article className="experience-row">
                <span className="experience-date">JAN 2026 — APR 2026</span>

                <div>
                  <h3>PHILER.AI</h3>
                  <p className="experience-role">
                    MARKETING SPECIALIST INTERN
                  </p>
                  <p className="experience-location">
                    ONTARIO / ALBERTA
                  </p>
                  <p>
                    Focused on prospect research, targeted digital outreach,
                    contact organization, engagement tracking, follow-ups,
                    and lead-generation support.
                  </p>
                </div>
              </article>

              <article className="experience-row">
                <span className="experience-date">JAN 2025 — APR 2025</span>

                <div>
                  <h3>LIFE IS A SPECIAL EVENT</h3>
                  <p className="experience-role">
                    MARKETING TEAM LEADER — CO-OP
                  </p>
                  <p className="experience-location">
                    SHERIDAN COLLEGE CO-OP
                  </p>
                  <p>
                    Led a five-person marketing team across digital campaigns,
                    social activity, event promotion, client work, and
                    campaign tracking.
                  </p>
                </div>
              </article>

              <article className="experience-row">
                <span className="experience-date">2022 — 2025</span>

                <div>
                  <h3>SHERIDAN COLLEGE</h3>
                  <p className="experience-role">
                    ADVERTISING &amp; DIGITAL MARKETING
                  </p>
                  <p className="experience-location">
                    ADVANCED DIPLOMA
                  </p>
                  <p>
                    Academic work across advertising, digital marketing,
                    strategic media planning, campaign development, analytics,
                    and creative direction.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <CTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
