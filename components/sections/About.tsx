import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="shell editorial-section about-section">
      <SectionLabel>(WHO I AM)</SectionLabel>
      <div className="about-editorial">
        <div><p className="about-name">GAURAV<br />SINGH</p><p className="about-role">MARKETING / CREATIVE / DIGITAL</p></div>
        <div className="about-portrait"><div className="about-portrait-image" role="img" aria-label="Editorial campaign image" /></div>
        <div className="about-copy"><p className="about-lead"><span>{ABOUT.statementStrong}</span><span className="text-muted">{ABOUT.statementMuted}</span></p><p>My work sits between marketing strategy and creative execution. I think about audiences, channels, culture, and outcomes — then turn that thinking into campaigns, content, and visual experiences with a point of view.</p></div>
      </div>
    </section>
  );
}
