"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/components/ui/SplitText";
import {
  PROJECTS,
  CASE_STUDIES,
  CREATIVE_CASE_STUDIES,
  Project,
} from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type WorkItem = Project & {
  caseStudyId: string;
};

function ProjectImage({
  project,
  isOpen,
}: {
  project: Project;
  isOpen: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const frame = frameRef.current;
    const img = imageInnerRef.current;

    if (!frame || !img) return;

    const ctx = gsap.context(() => {
      const isSmallScreen = window.innerWidth < 640;

      gsap.set(frame, {
        clipPath: isSmallScreen
          ? "inset(6% 4% 6% 4% round 8px)"
          : "inset(12% 7% 12% 7% round 12px)",
        scale: isSmallScreen ? 0.97 : 0.94,
      });

      gsap.to(frame, {
        clipPath:
          "inset(0% 0% 0% 0% round 0px)",
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: frame,
          start: "top 92%",
          end: "center 30%",
          scrub: 1.8,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        img,
        {
          scale: 1.12,
        },
        {
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: frame,
            start: "top 92%",
            end: "center 30%",
            scrub: 1.8,
          },
        },
      );
    }, frame);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div
      ref={frameRef}
      className="relative aspect-[16/10] overflow-hidden bg-surface"
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
          className={`object-cover transition-transform duration-700 ease-out ${
            isOpen
              ? "scale-[1.015]"
              : "group-hover:scale-[1.025]"
          }`}
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}

function CaseStudyDetails({
  caseStudyId,
}: {
  caseStudyId: string;
}) {
  const study = CASE_STUDIES.find(
    (item) => item.id === caseStudyId,
  );

  if (!study) return null;

  return (
    <div className="border-t border-line">
      <div className="grid gap-10 py-12 lg:grid-cols-[0.32fr_1fr] lg:gap-16 lg:py-16">
        <div className="space-y-8">
          <div>
            <p className="eyebrow">ROLE</p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-light">
              {study.role}
            </p>
          </div>

          <div>
            <p className="eyebrow">TYPE</p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-light">
              {study.type}
            </p>
          </div>

          <div>
            <p className="eyebrow">YEAR</p>

            <p className="mt-3 text-sm text-muted-light">
              {study.year}
            </p>
          </div>
        </div>

        <div>
          <p className="max-w-3xl text-base leading-[1.8] text-muted-light md:text-lg">
            {study.description}
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {study.story.map(([heading, body]) => (
              <div
                key={heading}
                className="border-t border-line pt-5"
              >
                <p className="eyebrow">{heading}</p>

                <p className="mt-4 max-w-md text-sm leading-[1.8] text-muted-light">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {study.images.length > 0 && (
            <div className="mt-14">
              <p className="eyebrow mb-6">
                SELECTED EXECUTION
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {study.images.map((image, index) => (
                  <div
                    key={image}
                    className="relative overflow-hidden bg-surface"
                  >
                    <Image
                      src={image}
                      alt={`${study.title} execution ${
                        index + 1
                      }`}
                      width={1600}
                      height={1100}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
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
    </div>
  );
}

function ProfessionalProject({
  project,
  isOpen,
  onToggle,
}: {
  project: WorkItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="group">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="block w-full text-left"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-12">
          <ProjectImage
            project={project}
            isOpen={isOpen}
          />

          <div className="pb-2">
            <div className="flex items-start justify-between gap-6">
              <span
                className={`font-display text-5xl leading-none transition-colors duration-300 ${
                  isOpen
                    ? "text-accent"
                    : "text-line-soft group-hover:text-paper"
                }`}
              >
                {project.index}
              </span>

              <span className="pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {project.year}
              </span>
            </div>

            <h3
              className={`mt-6 font-display text-4xl uppercase leading-[0.95] tracking-display transition-colors duration-300 lg:text-5xl ${
                isOpen
                  ? "text-accent"
                  : "text-paper group-hover:text-accent"
              }`}
            >
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

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-line" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                {isOpen
                  ? "Close Case Study"
                  : "View Case Study"}
              </span>

              <span
                className={`font-mono text-xs text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          isOpen
            ? "mt-12 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <CaseStudyDetails
            caseStudyId={project.caseStudyId}
          />
        </div>
      </div>
    </article>
  );
}

function CreativeDetails({
  id,
}: {
  id: string;
}) {
  const campaign = CREATIVE_CASE_STUDIES.find(
    (item) => item.id === id,
  );

  if (!campaign) return null;

  return (
    <div className="border-t border-line">
      <div className="grid gap-10 py-12 lg:grid-cols-[0.32fr_1fr] lg:gap-16 lg:py-16">
        <div className="space-y-8">
          <div>
            <p className="eyebrow">CATEGORY</p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-light">
              {campaign.label}
            </p>
          </div>

          <div>
            <p className="eyebrow">CAMPAIGN</p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-light">
              {campaign.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow">APPROACH</p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-light">
              {campaign.approach}
            </p>
          </div>
        </div>

        <div>
          <p className="max-w-3xl text-base leading-[1.8] text-muted-light md:text-lg">
            {campaign.description}
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {campaign.story.map(([heading, body]) => (
              <div
                key={heading}
                className="border-t border-line pt-5"
              >
                <p className="eyebrow">{heading}</p>

                <p className="mt-4 max-w-md text-sm leading-[1.8] text-muted-light">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="eyebrow mb-6">
              CAMPAIGN EXECUTIONS
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {campaign.images.map((image, index) => (
                <div
                  key={image}
                  className="relative overflow-hidden bg-surface"
                >
                  <Image
                    src={image}
                    alt={`${campaign.title} execution ${
                      index + 1
                    }`}
                    width={1600}
                    height={1100}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {campaign.tags.map((tag) => (
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
    </div>
  );
}

function CreativeProject({
  campaign,
  index,
  isOpen,
  onToggle,
}: {
  campaign: (typeof CREATIVE_CASE_STUDIES)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="group border-t border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full py-8 text-left lg:py-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.16fr_0.5fr_1fr_auto] lg:items-center lg:gap-8">
          <div>
            <span
              className={`font-display text-4xl leading-none transition-colors duration-300 ${
                isOpen
                  ? "text-accent"
                  : "text-line-soft group-hover:text-paper"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div>
            <p className="eyebrow">
              {campaign.label}
            </p>

            <h3
              className={`mt-3 font-display text-3xl uppercase leading-none tracking-display transition-colors duration-300 lg:text-4xl ${
                isOpen
                  ? "text-accent"
                  : "text-paper group-hover:text-accent"
              }`}
            >
              {campaign.title}
            </h3>
          </div>

          <div>
            <p className="font-display text-2xl uppercase tracking-display text-paper lg:text-3xl">
              {campaign.tagline}
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {campaign.description}
            </p>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              {isOpen ? "Close" : "Explore"}
            </span>

            <span
              className={`font-mono text-lg text-accent transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <CreativeDetails id={campaign.id} />
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [openId, setOpenId] = useState<string | null>(
    null,
  );

  const professionalProjects: WorkItem[] =
    PROJECTS.map((project) => ({
      ...project,
      caseStudyId: project.caseStudyId,
    }));

  return (
    <section
      id="work"
      data-name="Selected Work"
      className="shell bg-ink py-28 lg:py-40"
    >
      {/* HEADER */}
      <div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <SplitText
          as="h2"
          text="Selected Work"
          className="text-display-md tracking-wide"
          stagger={0.025}
        />

        <span className="eyebrow">
          (
          {String(
            professionalProjects.length,
          ).padStart(2, "0")}
          )
        </span>
      </div>

      {/* PROFESSIONAL WORK */}
      <div className="mt-16 lg:mt-24">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
              01 — PROFESSIONAL WORK
            </p>

            <h3 className="mt-4 font-display text-3xl uppercase tracking-display text-paper lg:text-4xl">
              Work I&apos;ve Actually Done
            </h3>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            Professional, internship and academic work.
            Click any project to explore the work.
          </p>
        </div>

        <div className="flex flex-col gap-28 lg:gap-36">
          {professionalProjects.map(
            (project) => (
              <ProfessionalProject
                key={project.caseStudyId}
                project={project}
                isOpen={
                  openId === project.caseStudyId
                }
                onToggle={() =>
                  setOpenId((current) =>
                    current ===
                    project.caseStudyId
                      ? null
                      : project.caseStudyId,
                  )
                }
              />
            ),
          )}
        </div>
      </div>

      {/* CREATIVE LAB */}
      <div
        id="creative-lab"
        className="relative mt-32 overflow-hidden border-t border-line lg:mt-44"
      >
        {/* BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(
                180deg,
                rgba(5,5,5,0.15),
                rgba(5,5,5,0.85)
              ),
              url("/images/insights-new-bg.png")
            `,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="relative z-10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">
                02 — PERSONAL CONTENT
              </p>

              <h3 className="mt-5 font-display text-4xl uppercase leading-none tracking-display text-paper lg:text-6xl">
                Creative Lab
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-[1.8] text-muted-light lg:justify-self-end">
              Self-initiated and fictional campaign
              concepts created to explore strategy,
              art direction, campaign systems and
              AI-assisted creative production.
            </p>
          </div>

          <div className="mt-14">
            {CREATIVE_CASE_STUDIES.map(
              (campaign, index) => (
                <CreativeProject
                  key={campaign.id}
                  campaign={campaign}
                  index={index}
                  isOpen={openId === campaign.id}
                  onToggle={() =>
                    setOpenId((current) =>
                      current === campaign.id
                        ? null
                        : campaign.id,
                    )
                  }
                />
              ),
            )}
          </div>

          <div className="pb-8 pt-10">
            <p className="eyebrow">
              SELF-INITIATED / FICTIONAL
            </p>
          </div>
        </div>
      </div>

      {/* END */}
      <div className="mt-24 border-t border-line pt-8 lg:mt-32">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">
            END — SELECTED WORK
          </p>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            Strategy, creativity and culture — presented
            as professional work, academic work or
            personal exploration.
          </p>
        </div>
      </div>
    </section>
  );
}
