"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { POSTS } from "@/lib/data";

export function Blog() {
  return (
    <section
      id="creative-lab"
      data-name="Creative Lab"
      className="shell bg-ink py-28 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[0.25fr_1fr] lg:gap-10">
        <Reveal variant="fade">
          <SectionLabel>(CREATIVE LAB)</SectionLabel>
        </Reveal>

        <div>
          <Reveal variant="up">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-5xl font-display text-display-sm uppercase leading-[0.95] tracking-display text-paper">
                Ideas outside the brief.
              </h2>

              <span className="eyebrow">
                SELF-INITIATED / FICTIONAL
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" className="mt-6 block">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-light">
              A collection of self-initiated campaign concepts exploring
              strategy, art direction, visual systems and AI-assisted creative
              production.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Reveal
                key={post.title}
                variant="up"
                className="block"
              >
                <Link
                  href={post.href}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-framer group-hover:scale-[1.04]"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                      aria-hidden
                    />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
                        {post.category}
                      </p>

                      <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-display text-white">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-muted">
                      {post.date}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-light">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
