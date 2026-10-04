"use client";

import Image from "next/image";

import { CREATIVE_LAB } from "@/lib/data";

export function Services() {
  return (
    <section
      id="lab"
      className="lab-section editorial-section"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              (CREATIVE LAB)
            </span>

            <h2 className="text-display-md mt-6">
              What if brands
              <br />
              were worlds?
            </h2>
          </div>

          <p className="section-intro">
            Self-initiated creative experiments exploring
            strategy, art direction, storytelling,
            AI-assisted production, and digital execution.
          </p>
        </div>

        <div className="lab-grid">
          {CREATIVE_LAB.map((item, index) => (
            <article
              key={item.title}
              className={`lab-card lab-card--${item.accent}`}
            >
              <div className="lab-number">
                0{index + 1}
              </div>

              <div className="lab-visual">
                <Image
                  src={item.image}
                  alt={`${item.title} campaign`}
                  fill
                  sizes="(min-width: 980px) 33vw, 100vw"
                  className="lab-image"
                />

                <div className="lab-image-overlay" />

                <div className="lab-visual-title">
                  {item.line}
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

                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
