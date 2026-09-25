// hooks/useFitText.ts
'use client';
import { useEffect, RefObject } from 'react';

interface FitTextOptions {
  max?: number;
  min?: number;
  padding?: number;
}

export function useFitText(
  ref: RefObject<HTMLElement>,
  { max = 17, min = 3, padding = 0.92 }: FitTextOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const parent = el.parentElement;
      if (!parent) return;
      let size = max;
      el.style.fontSize = `${size}rem`;
      const target = parent.clientWidth * padding;
      while (el.scrollWidth > target && size > min) {
        size -= 0.25;
        el.style.fontSize = `${size}rem`;
      }
    };

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [ref, max, min, padding]);
}
