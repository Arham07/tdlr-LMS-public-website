'use client';

import { type ReactNode, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { isMotionAllowed, MOTION_OK } from '@/lib/motion';

/**
 * Draws the connector between the numbered steps as the reader scrolls.
 *
 * Scaling works for both orientations: the segment is a 1px line that runs
 * vertically on small screens and horizontally from `lg`, so growing it from
 * its top-left corner reads correctly either way.
 */
export function StepsRail({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        if (!isMotionAllowed()) return;

        for (const segment of root.querySelectorAll<HTMLElement>('[data-rail]')) {
          const step = segment.parentElement;
          if (!step) continue;

          gsap.fromTo(
            segment,
            { scale: 0 },
            {
              scale: 1,
              ease: 'none',
              transformOrigin: 'top left',
              scrollTrigger: { trigger: step, start: 'top 70%', end: 'bottom 55%', scrub: true },
            },
          );
        }
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
