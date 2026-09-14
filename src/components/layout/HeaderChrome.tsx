'use client';

import { type ReactNode, useRef } from 'react';
import { ScrollTrigger, useGSAP } from '@/lib/gsap';

/**
 * Sticky header shell.
 *
 * Adds `is-scrolled` once the page has moved, which the `scrolled:` variant in
 * globals.css uses to bring in the border and blur. This runs regardless of
 * motion preference: toggling a class is a state change, not an animation.
 */
export function HeaderChrome({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const header = ref.current;
      if (!header) return;

      ScrollTrigger.create({
        start: 24,
        end: 'max',
        toggleClass: { targets: header, className: 'is-scrolled' },
      });
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      className="sticky top-0 z-40 border-transparent border-b bg-ground transition-colors duration-200 scrolled:border-line scrolled:bg-ground/85 scrolled:backdrop-blur-md motion-reduce:transition-none"
    >
      {children}
    </header>
  );
}
