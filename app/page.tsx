import { SiteMenu } from "@/components/sections/SiteMenu";
import { Hero } from "@/components/sections/Hero";
import { InteractivePortrait } from "@/components/sections/InteractivePortrait";
import { About } from "@/components/sections/About";
import { CreativeSystem } from "@/components/sections/CreativeSystem";
import { Work } from "@/components/sections/Work";
import { CreativeLab } from "@/components/sections/CreativeLab";
import { Experience } from "@/components/sections/Experience";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteMenu />

      <main>
        {/* 01 — CINEMATIC OPENING */}
        <Hero />

        {/* 02 — PORTRAIT */}
        <section className="portrait-section">
          <div className="section-label">
            <span>(01)</span>
            <span>PORTRAIT</span>
          </div>

          <InteractivePortrait />
        </section>

        {/* 03 — ABOUT */}
        <About />

        {/* 04 — MINDSET / CREATIVE THINKING */}
        <CreativeSystem />

        {/* 05 — SELECTED REAL / ACADEMIC WORK */}
        <Work />

        {/* 06 — SELF-INITIATED CREATIVE LAB */}
        <CreativeLab />

        {/* 07 — EXPERIENCE */}
        <Experience />

        {/* 08 — CONTACT */}
        <CTA />
      </main>

      {/* 09 — FOOTER */}
      <Footer />
    </div>
  );
}
