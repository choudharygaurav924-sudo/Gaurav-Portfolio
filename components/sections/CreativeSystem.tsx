"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CREATIVE_SYSTEM } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CreativeSystem() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const triggers = CREATIVE_SYSTEM.map((_, index) =>
      ScrollTrigger.create({
        trigger: section.querySelector(`[data-system-index="${index}"]`),
        start: "top 62%",
        end: "bottom 38%",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      }),
    );
    return () => triggers.forEach((trigger) => trigger.kill());
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="mindset" className="shell editorial-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">(MARKETING MINDSET)</span>
          <h2 className="text-display-md mt-6">Ideas with intent.</h2>
        </div>
        <p className="section-intro">
          Strategy is not separate from creativity. It is what gives creativity
          somewhere meaningful to go.
        </p>
      </div>

      <div id="system" className="system-interaction" style={{ "--system-progress": `${((active + 1) / CREATIVE_SYSTEM.length) * 100}%` } as React.CSSProperties}>
        <div className="system-progress" aria-hidden><span /></div>
        <div className="system-list">
          {CREATIVE_SYSTEM.map(([number, title, copy], index) => (
            <button
              type="button"
              key={title}
              data-system-index={index}
              className={`system-row ${active === index ? "is-active" : ""}`}
              onClick={() => setActive(index)}
              aria-expanded={active === index}
            >
              <span className="system-number">{number}</span>
              <span className="system-title">{title}</span>
              <span className="system-copy">{copy}</span>
              <span className="system-open" aria-hidden>{active === index ? "—" : "+"}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
