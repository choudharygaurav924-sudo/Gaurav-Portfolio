"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const INTRODUCTION =
  "I like figuring out what makes people stop, look twice, and care. Somewhere between strategy, creativity and culture is where I do my best work.";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const number = numberRef.current;
    if (!section || !number) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const stage = section.querySelector<HTMLElement>("[data-hero-stage]");
      const numberBlock = section.querySelector<HTMLElement>("[data-hero-number]");
      const gaurav = section.querySelector<HTMLElement>("[data-hero-gaurav]");
      const singh = section.querySelector<HTMLElement>("[data-hero-singh]");
      const roles = section.querySelector<HTMLElement>("[data-hero-roles]");
      const intro = section.querySelector<HTMLElement>("[data-hero-intro]");
      const scrollPrompt = section.querySelector<HTMLElement>("[data-hero-scroll]");

      if (!stage || !numberBlock || !gaurav || !singh || !roles || !intro || !scrollPrompt) return;

      if (reducedMotion) {
        gsap.set(numberBlock, { autoAlpha: 0 });
        gsap.set([gaurav, singh, roles, intro, scrollPrompt], { autoAlpha: 1, clearProps: "transform,filter" });
        return;
      }

      const sequence = gsap.timeline({ defaults: { ease: "power4.out" } });
      const counter = { value: 0 };

      gsap.set([gaurav, singh, roles, intro, scrollPrompt], { autoAlpha: 0 });
      gsap.set(gaurav, { yPercent: 115, scale: 1.16, letterSpacing: "0.12em", filter: "blur(9px)" });
      gsap.set(singh, { yPercent: 115, scale: 1.16, letterSpacing: "0.12em", filter: "blur(9px)" });
      gsap.set(roles, { y: 24, letterSpacing: "0.48em", filter: "blur(5px)" });
      gsap.set(intro, { y: 28, filter: "blur(5px)" });
      gsap.set(scrollPrompt, { y: 12 });

      sequence.to(counter, {
        value: 100,
        duration: 1.15,
        ease: "none",
        onUpdate: () => {
          number.textContent = String(Math.floor(counter.value)).padStart(3, "0");
        },
      });
      sequence.to(numberBlock, { autoAlpha: 0, y: -14, duration: 0.42 }, "-=0.14");
      sequence.to(gaurav, { autoAlpha: 1, yPercent: 0, scale: 1, letterSpacing: "-0.075em", filter: "blur(0px)", duration: 1.15 }, "-=0.16");
      sequence.to(gaurav, { yPercent: -108, scale: 0.86, letterSpacing: "0.04em", filter: "blur(8px)", autoAlpha: 0, duration: 0.9, ease: "power3.inOut" }, "+=0.58");
      sequence.to(singh, { autoAlpha: 1, yPercent: 0, scale: 1, letterSpacing: "-0.075em", filter: "blur(0px)", duration: 1.05 }, "-=0.48");
      sequence.to(singh, { yPercent: -74, scale: 0.78, letterSpacing: "0.02em", filter: "blur(7px)", autoAlpha: 0, duration: 0.82, ease: "power3.inOut" }, "+=0.62");
      sequence.to(roles, { autoAlpha: 1, y: 0, letterSpacing: "0.28em", filter: "blur(0px)", duration: 0.9 }, "-=0.42");
      sequence.to(intro, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, "-=0.3");
      sequence.to(scrollPrompt, { autoAlpha: 1, y: 0, duration: 0.65 }, "-=0.35");

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: stage,
        scrub: false,
        anticipatePin: 1,
      });

      const exit = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });
      exit.to(stage, { yPercent: -7, scale: 0.96, filter: "blur(1px)", ease: "none" }, 0);
      exit.to(scrollPrompt, { autoAlpha: 0, ease: "none" }, 0.12);
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="hero" className="title-sequence" aria-labelledby="hero-title">
      <div data-hero-stage className="title-sequence__stage">
        <div className="title-sequence__meta" aria-hidden="true">
          <span>GS / 001</span>
          <span>MARKETING / CREATIVE / DIGITAL</span>
          <span>BASED — TORONTO / CANADA</span>
        </div>

        <div data-hero-number className="title-sequence__number" aria-hidden="true">
          <span ref={numberRef}>000</span>
        </div>

        <div className="title-sequence__center">
          <h1 id="hero-title" className="title-sequence__name" aria-label="Gaurav Singh">
            <span data-hero-gaurav className="title-sequence__word">GAURAV</span>
            <span data-hero-singh className="title-sequence__word">SINGH</span>
          </h1>
          <div data-hero-roles className="title-sequence__roles" aria-label="Marketing, Creative, Digital">
            <span>MARKETING</span><span>CREATIVE</span><span>DIGITAL</span>
          </div>
          <p data-hero-intro className="title-sequence__statement">{INTRODUCTION}</p>
        </div>

        <div className="title-sequence__location">BASED — TORONTO / CANADA</div>
        <a data-hero-scroll className="title-sequence__scroll" href="#about">
          <span className="title-sequence__line" />
          SCROLL TO ENTER
        </a>
      </div>
    </section>
  );
}
