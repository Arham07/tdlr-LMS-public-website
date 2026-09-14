import 'server-only';
import bandTexasMap from '@/assets/placeholders/band-texas-map.webp';
import courseDwiEducation from '@/assets/placeholders/course-dwi-education.webp';
import courseDwiIntervention from '@/assets/placeholders/course-dwi-intervention.webp';
import courseEvaluation from '@/assets/placeholders/course-evaluation.webp';
import courseMinorsAlcohol from '@/assets/placeholders/course-minors-alcohol.webp';
import courseVictimImpact from '@/assets/placeholders/course-victim-impact.webp';
import discussion from '@/assets/placeholders/discussion.webp';
import handsTogether from '@/assets/placeholders/hands-together.webp';
import heroPeople from '@/assets/placeholders/hero-people.webp';
import stepAttend from '@/assets/placeholders/step-attend.webp';
import stepEquipment from '@/assets/placeholders/step-equipment.webp';
import stepRegister from '@/assets/placeholders/step-register.webp';
import supportCircle from '@/assets/placeholders/support-circle.webp';
import type { ImageKey } from '@/lib/imageKeys';
import type { ImageAsset } from './types';

/**
 * Every image used on the page, in one place.
 *
 * All of these are PLACEHOLDERS taken from reference websites for the proposal
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
  programDoep: {
    src: discussion,
    alt: 'A counsellor speaking with two adults around a table',
    source: 'alamocenter.org/wp-content/uploads/2024/04/Prevention.webp',
    placeholder: true,
  },
  programDwiEducation: {
    src: courseDwiEducation,
    alt: 'A student working through a course on a laptop beside an open notebook',
    source: 'texascourtclasses.com/wp-content/uploads/DWI-Education-1.jpg',
    placeholder: true,
  },
  programDwiIntervention: {
    src: courseDwiIntervention,
    alt: 'A driver holding the steering wheel of a car',
    source: 'texascourtclasses.com/wp-content/uploads/suspended-drivers-license.jpg',
    placeholder: true,
  },
  programVictimImpact: {
    src: courseVictimImpact,
    alt: 'A judge holding a gavel at the bench in a courtroom',
    source:
      'texascourtclasses.com/wp-content/uploads/Have-you-been-court-ordered-to-take-classes.webp',
    placeholder: true,
  },
  programMinorsAlcohol: {
    src: courseMinorsAlcohol,
    alt: 'A roadside sign reading no alcohol beyond this point',
    source: 'texascourtclasses.com/wp-content/uploads/underage-drinking.jpg',
    placeholder: true,
  },
  programEvaluation: {
    src: courseEvaluation,
    alt: 'Two open hands holding letters spelling yes and no',
    source: 'texascourtclasses.com/wp-content/uploads/impulse-control.jpg',
    placeholder: true,
  },
  stepRegister: {
    src: stepRegister,
    alt: 'A student filling in a form on a laptop at a desk',
    source: 'texascourtclasses.com/wp-content/uploads/Online-Class.jpg',
    placeholder: true,
  },
  stepEquipment: {
    src: stepEquipment,
    alt: 'A student joining a video class on a tablet, with other participants on screen',
    source: 'texascourtclasses.com/wp-content/uploads/online-alcohol-awareness-class.jpg',
    placeholder: true,
  },
  stepAttend: {
    src: stepAttend,
    alt: 'A person sitting comfortably at home, smiling',
    source: 'texascourtclasses.com/wp-content/uploads/Complete-your-court-class-requirement.webp',
    placeholder: true,
  },
  programDetails: {
    src: supportCircle,
    alt: 'A small group seated in a circle during a class discussion',
    source: 'alamocenter.org/wp-content/uploads/2024/04/Recuperation-and-Remedy.webp',
    placeholder: true,
  },
  testimonials: {
    src: handsTogether,
    alt: 'Several people placing their hands together in the centre of a circle',
    source: 'alamocenter.org/wp-content/uploads/2024/04/Empowerment.webp',
    placeholder: true,
  },
  attorney: {
    src: bandTexasMap,
    alt: 'A road map of Texas showing Austin, Houston, Dallas and San Antonio',
    source: 'texascourtclasses.com/wp-content/uploads/texas-court-ordered-classes-in-tx.webp',
    placeholder: true,
  },
} as const satisfies Record<ImageKey, ImageAsset>;
