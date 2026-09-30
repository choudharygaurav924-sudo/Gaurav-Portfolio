"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/components/ui/SplitText";
import {
  PROJECTS,
  CREATIVE_CASE_STUDIES,
  Project,
} from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ProjectCardItem({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    const frame = frameRef.current;
    const img = imageInnerRef.current;

    if (!card || !frame || !img) return;

    const ctx = gsap.context(() => {
      const isSmallScreen = window.innerWidth < 640;

      gsap.set(frame, {
        clipPath: isSmallScreen
          ? "inset(6% 4% 6% 4% round 8px)"
          : "inset(12% 7% 12% 7% round 12px)",
        scale: isSmallScreen ? 0.97 : 0.94,
      });

      gsap.to(frame, {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 92%",
          end: "center 30%",
          scrub: 1.8,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        img,
        { scale: 1.16 },
        {
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "center 30%",
            scrub: 1.8,
          },
        },
      );
    }, card);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <article ref={cardRef} className="group">
      <Link
        href={project.href}
        className="block"
        aria-label={`Open ${project.title} case study`}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-12">
          <div
            ref={frameRef}
            className="relative aspect-[16/11] overflow-hidden bg-surface"
          >
            <div
              ref={imageInnerRef}
              className="relative h-full w-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1200px) 68vw, 100vw"
                className="object-cover transition-transform duration-700 ease-framer group-hover:scale-[1.025]"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                aria-hidden
              />

              <div className="absolute bottom-5 left-5 border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                  View Case Study →
                </span>
              </div>
            </div>
          </div>

          <div className="pb-2">
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-5xl leading-none text-line-soft transition-colors duration-300 group-hover:text-paper">
                {project.index}
              </span>

              <span className="pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {project.year}
              </span>
            </div>

            <h3 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-display text-paper transition-colors duration-300 group-hover:text-accent lg:text-5xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-light">
              {project.blurb}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-muted-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function CreativePreview({
  creative,
}: {
  creative: (typeof CREATIVE_CASE_STUDIES)[number];
}) {
  return (
    <Link
      href={`/personal/${creative.slug}`}
      className="group block"
      aria-label={`Open ${creative.title} personal project`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={creative.image}
          alt={creative.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-5 bottom-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                {creative.category}
              </p>

              <h3 className="mt-2 font-display text-4xl uppercase leading-none text-white">
                {creative.title}
              </h3>
            </div>

            <span className="font-mono text-xs text-white/70">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Work() {
  return (
    <section
      id="work"
      data-name="Selected Work"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <SplitText
          as="h2"
          text="Selected Work"
          className="text-display-md tracking-wide"
          stagger={0.025}
        />

        <span className="eyebrow">
          ({String(PROJECTS.length).padStart(2, "0")})
        </span>
      </div>

      <div className="mt-16 flex flex-col gap-24 lg:mt-24 lg:gap-36">
        {PROJECTS.map((project) => (
          <ProjectCardItem
            key={project.title}
            project={project}
          />
        ))}
      </div>

      <div className="mt-28 border-t border-line pt-8 lg:mt-40">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">
            NEXT — PERSONAL CONTENT
          </p>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            Self-initiated campaigns and creative experiments exploring
            strategy, art direction and AI-assisted production.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CREATIVE_CASE_STUDIES.map((creative) => (
            <CreativePreview
              key={creative.slug}
              creative={creative}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
