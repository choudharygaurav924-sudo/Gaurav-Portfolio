"use client";

import { useRef } from "react";

export function InteractivePortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (!frame || !image) return;

    const rect = frame.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 7;

    const moveX = (x - 0.5) * 22;
    const moveY = (y - 0.5) * 16;

    image.style.transform = `
      translate3d(${moveX}px, ${moveY}px, 0)
      scale(1.08)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    frame.style.setProperty(
      "--mouse-x",
      `${x * 100}%`
    );

    frame.style.setProperty(
      "--mouse-y",
      `${y * 100}%`
    );
  };

  const resetPointer = () => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (!frame || !image) return;

    image.style.transform =
      "translate3d(0, 0, 0) scale(1.04) rotateX(0deg) rotateY(0deg)";

    frame.style.setProperty("--mouse-x", "50%");
    frame.style.setProperty("--mouse-y", "50%");
  };

  return (
    <section className="interactive-portrait">
      <div className="interactive-portrait__header">
        <span>(PORTRAIT / 001)</span>
        <span>GAURAV SINGH</span>
        <span>INTERACTIVE STUDY</span>
      </div>

      <div
        ref={frameRef}
        className="interactive-portrait__frame"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="interactive-portrait__image-wrap">
          <img
            ref={imageRef}
            src="/images/gaurav-portrait.jpg"
            alt="Gaurav Singh"
            className="interactive-portrait__image"
            draggable={false}
          />
        </div>

        <div className="interactive-portrait__light" />

        <div className="interactive-portrait__corner interactive-portrait__corner--tl" />
        <div className="interactive-portrait__corner interactive-portrait__corner--tr" />
        <div className="interactive-portrait__corner interactive-portrait__corner--bl" />
        <div className="interactive-portrait__corner interactive-portrait__corner--br" />

        <div className="interactive-portrait__cursor">
          <span />
          MOVE
        </div>

        <div className="interactive-portrait__number">
          001
        </div>
      </div>

      <div className="interactive-portrait__footer">
        <span>MARKETING / CREATIVE / DIGITAL</span>
        <span>BASED — TORONTO / CANADA</span>
      </div>

      <style jsx>{`
        .interactive-portrait {
          position: relative;
          width: 100%;
          padding: 12rem 4vw;
          background: #050505;
          color: #f3f1ec;
          overflow: hidden;
        }

        .interactive-portrait__header,
        .interactive-portrait__footer {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          line-height: 1.2;
          text-transform: uppercase;
          color: rgba(243, 241, 236, 0.48);
        }

        .interactive-portrait__header {
          margin-bottom: 2rem;
        }

        .interactive-portrait__header span:nth-child(2) {
          text-align: center;
          color: rgba(243, 241, 236, 0.8);
        }

        .interactive-portrait__header span:last-child,
        .interactive-portrait__footer span:last-child {
          text-align: right;
        }

        .interactive-portrait__frame {
          --mouse-x: 50%;
          --mouse-y: 50%;

          position: relative;
          width: min(100%, 1100px);
          height: min(76vh, 820px);
          min-height: 520px;
          margin: 0 auto;

          overflow: hidden;
          perspective: 1200px;
          transform-style: preserve-3d;

          background: #111;

          cursor: crosshair;
        }

        .interactive-portrait__image-wrap {
          position: absolute;
          inset: -3%;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .interactive-portrait__image {
          width: 100%;
          height: 100%;
          display: block;

          object-fit: cover;
          object-position: center 42%;

          filter:
            grayscale(100%)
            contrast(1.04)
            brightness(0.86);

          transform:
            translate3d(0, 0, 0)
            scale(1.04)
            rotateX(0deg)
            rotateY(0deg);

          transition:
            transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.6s ease;

          will-change: transform;
          user-select: none;
          pointer-events: none;
        }

        .interactive-portrait__frame:hover
          .interactive-portrait__image {
          filter:
            grayscale(100%)
            contrast(1.08)
            brightness(0.92);
        }

        .interactive-portrait__light {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle 28rem at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.1),
              transparent 55%
            );

          mix-blend-mode: screen;
          opacity: 0.75;

          transition: background 0.2s ease;
        }

        .interactive-portrait__frame::after {
          content: "";

          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.18),
              transparent 30%,
              transparent 70%,
              rgba(0, 0, 0, 0.2)
            );

          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.14),
            inset 0 -180px 180px rgba(0, 0, 0, 0.22);
        }

        .interactive-portrait__corner {
          position: absolute;
          width: 22px;
          height: 22px;
          pointer-events: none;
          z-index: 3;
        }

        .interactive-portrait__corner--tl {
          top: 18px;
          left: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.65);
          border-left: 1px solid rgba(255, 255, 255, 0.65);
        }

        .interactive-portrait__corner--tr {
          top: 18px;
          right: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.65);
          border-right: 1px solid rgba(255, 255, 255, 0.65);
        }

        .interactive-portrait__corner--bl {
          bottom: 18px;
          left: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.65);
          border-left: 1px solid rgba(255, 255, 255, 0.65);
        }

        .interactive-portrait__corner--br {
          bottom: 18px;
          right: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.65);
          border-right: 1px solid rgba(255, 255, 255, 0.65);
        }

        .interactive-portrait__cursor {
          position: absolute;
          left: 50%;
          top: 50%;

          display: flex;
          align-items: center;
          gap: 8px;

          transform: translate(-50%, -50%);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          letter-spacing: 0.22em;

          color: rgba(255, 255, 255, 0.72);

          pointer-events: none;
          opacity: 0;

          transition: opacity 0.3s ease;
        }

        .interactive-portrait__cursor span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fff;
        }

        .interactive-portrait__frame:hover
          .interactive-portrait__cursor {
          opacity: 1;
        }

        .interactive-portrait__number {
          position: absolute;
          right: 24px;
          bottom: 20px;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          letter-spacing: 0.2em;

          color: rgba(255, 255, 255, 0.5);

          pointer-events: none;
          z-index: 4;
        }

        .interactive-portrait__footer {
          margin-top: 1.5rem;
        }

        .interactive-portrait__footer span:nth-child(2) {
          grid-column: 3;
        }

        @media (max-width: 700px) {
          .interactive-portrait {
            padding: 7rem 1rem;
          }

          .interactive-portrait__header,
          .interactive-portrait__footer {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .interactive-portrait__header span:nth-child(2) {
            text-align: right;
          }

          .interactive-portrait__header span:last-child {
            display: none;
          }

          .interactive-portrait__footer span:first-child {
            grid-column: 1 / -1;
          }

          .interactive-portrait__footer span:last-child {
            grid-column: 1 / -1;
            text-align: left;
          }

          .interactive-portrait__frame {
            height: 70vh;
            min-height: 480px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .interactive-portrait__image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
