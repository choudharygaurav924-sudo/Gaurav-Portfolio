import { BRAND } from "@/lib/data";

export function CTA() {
  return <section id="contact" className="closing-shot"><div className="shell closing-shot-inner"><span className="eyebrow eyebrow--light">(CONTACT / FINAL SHOT)</span><h2>LET'S MAKE<br />SOMETHING MATTER.</h2><p>For marketing, creative, digital, and campaign opportunities.</p><a href="mailto:hello@gauravsingh.com">GET IN TOUCH ↗</a><div className="closing-meta"><span>{BRAND.name}</span><span>{BRAND.headlineTop} / {BRAND.headlineBottom.split(" / ")[1]}</span><span>{BRAND.location}</span></div></div></section>;
}
