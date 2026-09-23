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
        <div className="relative z-10 bg-ink">
          <About />
          <CreativeSystem />
          <Work />
          <Services />
          <section id="resume" className="shell editorial-section resume-section">
            <span className="eyebrow">(RESUME / EXPERIENCE)</span>
            <h2 className="text-display-md mt-6">
              Marketing thinking.
              <br />
              <span className="text-muted">Creative execution.</span>
            </h2>
            <p className="section-intro mt-8">
              Experience across digital marketing, campaign development, content,
              audience thinking, creative direction, execution, and measurement.
            </p>
          </section>
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
