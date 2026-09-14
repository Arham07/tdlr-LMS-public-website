import 'server-only';
import discussion from '@/assets/placeholders/discussion.webp';
import handsTogether from '@/assets/placeholders/hands-together.webp';
import heroPeople from '@/assets/placeholders/hero-people.webp';
import supportCircle from '@/assets/placeholders/support-circle.webp';
import type { ImageAsset } from './types';

/**
 * Every image used on the page, in one place.
 *
 * All four are PLACEHOLDERS taken from reference websites for the proposal
 * concept and are not licensed to PHSA. Replace the files in
 * `src/assets/placeholders/` and update the alt text here; no component needs
 * to change. See `src/assets/placeholders/CREDITS.md`.
 */
export const IMAGES = {
  hero: {
    src: heroPeople,
    alt: 'Three adults talking together on a sofa in a bright room',
    source: 'thinkific.com/wp-content/uploads/2025/05/customers-talking.jpg',
    placeholder: true,
  },
  program: {
    src: discussion,
    alt: 'A counsellor speaking with two adults around a table',
    source: 'alamocenter.org/wp-content/uploads/2024/04/Prevention.webp',
    placeholder: true,
  },
  testimonials: {
    src: supportCircle,
    alt: 'A small group seated in a circle during a group session',
    source: 'alamocenter.org/wp-content/uploads/2024/04/Recuperation-and-Remedy.webp',
    placeholder: true,
  },
  attorney: {
    src: handsTogether,
    alt: 'Several people placing their hands together in the centre of a circle',
    source: 'alamocenter.org/wp-content/uploads/2024/04/Empowerment.webp',
    placeholder: true,
  },
} as const satisfies Record<string, ImageAsset>;
