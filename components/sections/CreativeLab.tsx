"use client";

import Image from "next/image";
import { CREATIVE_LAB } from "@/lib/data";

export function CreativeLab() {
  return (
    <section id="creative-lab" className="creative-lab section-shell">
      <div className="section-heading">
        <span className="eyebrow">03 / CREATIVE LAB</span>

        <h2>
          CAMPAIGNS
          <br />
          BUILT TO <em>MOVE.</em>
        </h2>

        <p>
          Concept-driven campaign systems spanning outdoor, social, retail,
          lifestyle and print.
        </p>
      </div>

      <div className="lab-grid">
        {CREATIVE_LAB.map((item, index) => (
          <article key={item.title} className="lab-card group">
            <div className="lab-visual">
              <Image
                src={item.image}
                alt={`${item.title} campaign`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="lab-image"
              />

              <div className="lab-image-overlay" />

              <div className="lab-card-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="lab-card-label">
                {item.line}
              </div>

              <div className="lab-card-title">
                {item.title}
              </div>
            </div>

            <div className="lab-copy">
              <p>{item.copy}</p>

              <span className="lab-view">
                VIEW CAMPAIGN ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
