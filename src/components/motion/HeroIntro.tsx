'use client';

import { type ReactNode, useRef } from 'react';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';
import { isMotionAllowed, MOTION_OK } from '@/lib/motion';

/** Longest we wait for webfonts before revealing the hero anyway. */
const FONT_TIMEOUT_MS = 1200;

/**
 * Choreographs the hero: the headline reveals line by line from behind a mask,
 * the supporting copy and buttons follow, and the media slides in. On large
 * screens the schedule card drifts slightly as the page scrolls.
 *
 * Nothing is hidden in CSS — the initial states are set here, after hydration,
 * so a visitor without JavaScript (or with reduced motion) sees the finished
 * hero immediately.
 */
export function HeroIntro({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = scope.current;
      if (!root || !contextSafe) return;

      const mm = gsap.matchMedia();

      mm.add({ motionOk: MOTION_OK, desktop: '(min-width: 64rem)' }, (context) => {
        const conditions = context.conditions;
        if (!conditions?.motionOk || !isMotionAllowed()) return;

        const title = root.querySelector<HTMLElement>('[data-hero="title"]');
        const supporting = root.querySelectorAll<HTMLElement>(
          '[data-hero="eyebrow"], [data-hero="sub"], [data-hero="cta"], [data-hero="trust"]',
        );
        const media = root.querySelector<HTMLElement>('[data-hero="media"]');
        if (!title || !media) return;

        gsap.set([title, media], { autoAlpha: 0 });
        gsap.set(supporting, { autoAlpha: 0, y: 14 });
        gsap.set(media, { y: 28, x: conditions.desktop ? 24 : 0 });

        // Splitting before the display face loads would measure the wrong
        // line breaks, so wait for fonts — but never longer than the timeout.
        const fontsReady = Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, FONT_TIMEOUT_MS)),
        ]);

        fontsReady.then(
          contextSafe(() => {
            SplitText.create(title, {
              type: 'lines',
              mask: 'lines',
              linesClass: 'hero-line',
              autoSplit: true,
              onSplit: (instance) =>
                gsap.from(instance.lines, {
                  yPercent: 110,
                  duration: 0.9,
                  stagger: 0.09,
                  ease: 'power4.out',
                }),
            });

            gsap
              .timeline()
              .set(title, { autoAlpha: 1 })
              .to(supporting, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.3)
              .to(media, { autoAlpha: 1, x: 0, y: 0, duration: 0.9 }, 0.45);
          }),
        );

        if (conditions.desktop) {
          const card = root.querySelector<HTMLElement>('[data-hero="card"]');
          if (card) {
            gsap.to(card, {
              yPercent: -9,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.6,
              },
            });
          }
        }
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
