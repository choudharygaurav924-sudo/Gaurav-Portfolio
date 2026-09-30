import { SiteMenu } from "@/components/sections/SiteMenu";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { WhyUs } from "@/components/sections/WhyUs";
import { TestimonialHighlight } from "@/components/sections/TestimonialHighlight";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
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

          <Work />

          <WhyUs />

          <TestimonialHighlight />

          <Services />

          <Process />

          <Testimonials />

          <Pricing />

          <FAQ />

          <Blog />

          <CTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
