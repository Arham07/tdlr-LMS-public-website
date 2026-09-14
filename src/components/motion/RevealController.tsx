'use client';

import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { MOTION_OK } from '@/lib/motion';

/**
 * Reveals every `[data-reveal]` element as it enters the viewport and counts
 * up every `[data-count]` number.
 *
 * Mounted once, last in the page, so the whole server-rendered tree exists
 * before it runs. Sections opt in with an attribute and never import GSAP.
 * Elements are hidden here rather than in CSS, so without JavaScript — or with
 * reduced motion — the page renders complete.
 */
/** Elements reveal once their top passes this fraction of the viewport. */
const REVEAL_START = 0.88;

export function RevealController() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      gsap.set(items, { autoAlpha: 0, y: 24 });

      ScrollTrigger.batch(items, {
        start: `top ${REVEAL_START * 100}%`,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            overwrite: true,
            clearProps: 'transform',
          }),
      });

      // A deep link, a restored scroll position or a programmatic jump can put
      // elements past the trigger point without them ever entering from the
      // bottom. Reveal anything already at or above that point so nothing is
      // left invisible.
      const revealPassed = () => {
        const threshold = window.innerHeight * REVEAL_START;
        for (const item of items) {
          if (item.getBoundingClientRect().top < threshold) {
            gsap.set(item, { autoAlpha: 1, clearProps: 'transform' });
          }
        }
      };
      ScrollTrigger.addEventListener('refresh', revealPassed);

      ScrollTrigger.batch('[data-count]', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
          for (const element of batch) {
            const target = Number(element.getAttribute('data-count'));
            if (Number.isNaN(target)) continue;

            const counter = { value: 0 };
            gsap.to(counter, {
              value: target,
              duration: 1.1,
              ease: 'power1.out',
              onUpdate: () => {
                element.textContent = String(Math.round(counter.value));
              },
            });
          }
        },
      });

      return () => ScrollTrigger.removeEventListener('refresh', revealPassed);
    });

    // Webfonts change every measurement, so recalculate once they land.
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  });

  return null;
}
