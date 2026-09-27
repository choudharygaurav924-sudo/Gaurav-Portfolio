"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { SplitText } from "@/components/ui/SplitText";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .utils
        .toArray<HTMLElement>(".work-image")
        .forEach((image) =>
          gsap.fromTo(
            image,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          )
        );
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={ref}
      id="work"
      className="shell editorial-section"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            (REAL / ACADEMIC WORK)
          </span>

          <SplitText
            as="h2"
            text="Selected work"
            className="text-display-md mt-5"
          />
        </div>

        <p className="section-intro">
          Marketing thinking, campaign development, and
          creative execution — grounded in real and academic work.
        </p>
      </div>

      <div className="work-list">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="work-item"
          >
            <div className="work-media">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="work-image object-cover"
              />
            </div>

            <div className="work-details">
              <span className="system-number">
                {project.index}
              </span>

              <p className="eyebrow mt-5">
                {project.year}
              </p>

              <h3>{project.title}</h3>

              <p className="text-muted mt-4 max-w-md">
                {project.blurb}
              </p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
