"use client";

import Image from "next/image";
import { CREATIVE_LAB } from "@/lib/data";

export function CreativeLab() {
  return (
    <section id="lab" className="creative-lab section-shell">
      <div className="section-heading">
        <span className="eyebrow">03 / CREATIVE LAB</span>

        <h2>
          CAMPAIGNS
          <br />
          BUILT TO <em>MOVE.</em>
        </h2>

        <p>
          Self-initiated campaign systems exploring strategy, visual
          direction, storytelling, and multi-channel execution.
        </p>
      </div>

      <div className="lab-grid">
        {CREATIVE_LAB.map((item) => (
          <article
            key={item.title}
            className={`lab-card lab-card--${item.accent} group`}
          >
            <div className="lab-visual">
              <Image
                src={item.image}
                alt={`${item.title} campaign`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="lab-image"
              />

              <div className="lab-image-overlay" />

              <div className="lab-number">
                {item.index}
              </div>

              <div className="lab-card-label">
                {item.label}
              </div>

              <div className="lab-card-title">
                {item.title}
              </div>
            </div>

            <div className="lab-copy">
              <p className="lab-label">
                {item.label}
              </p>

              <h3>{item.title}</h3>

              <p className="lab-line">
                {item.line}
              </p>

              <p>
                {item.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
