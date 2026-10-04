import SiteMenu from "@/components/sections/SiteMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CreativeSystem from "@/components/sections/CreativeSystem";
import Work from "@/components/sections/Work";
import CreativeLab from "@/components/sections/CreativeLab";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <SiteMenu />

      <Hero />

      <About />

      <CreativeSystem />

      <Work />

      <CreativeLab />

      <Experience />

      <Services />

      <CTA />

      <Footer />
    </main>
  );
}
