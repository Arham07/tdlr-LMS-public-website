import type { StaticImageData } from 'next/image';
import type { IconName } from '@/lib/icons';
import type { ImageKey } from '@/lib/imageKeys';

export type { IconName, ImageKey };

/**
 * Content shapes for the public homepage.
 *
 * These mirror the collections planned for Payload CMS in Phase 1
 * (`Home` global, `Classes` collection), so the swap from this file to the CMS
 * changes only `app/page.tsx`, never a section component.
 */

/** Marks sample data invented for the concept, shown with a "sample" tag. */
export interface Placeholder {
  /** Payload: absent. Concept only. */
  placeholder?: true;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Hero {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  cardTitle: string;
  cardFootnote: string;
}

export interface Stat {
  id: string;
  /** Number that counts up; omitted when the value is not numeric. */
  numeric?: number;
  /** Text shown after the numeric part, e.g. "hours". */
  value: string;
  label: string;
  icon: IconName;
}

export interface Step {
  id: string;
  title: string;
  body: string;
  icon: IconName;
  imageKey: ImageKey;
}

/** Payload: one document in the `Classes` collection. */
export interface ClassSession extends Placeholder {
  id: string;
  /** The program this class teaches. Payload: a relationship to `Programs`. */
  programId: string;
  /** ISO date, first session. */
  startsOn: string;
  /** ISO date, final session. */
  endsOn: string;
  /** 24-hour "HH:MM" in {@link SITE.timeZone}. */
  startTime: string;
  endTime: string;
  format: 'live-zoom';
  seatsLeft: number;
  capacity: number;
  priceCents: number;
  registerHref: string;
}

/**
 * A course in the catalogue. Payload: one document in `Programs`.
 *
 * A card that is not open for enrolment carries no description and no call to
 * action, so nothing on it can read as an offer or be clicked.
 */
export interface ProgramCard {
  id: string;
  /**
   * `enrolling` has published class dates and links to the schedule.
   * `offered` is taught but has no published dates, so it points at the phone.
   * `coming-soon` is not taught yet and carries nothing to click.
   */
  status: 'enrolling' | 'offered' | 'coming-soon';
  /** Badge over the photo. Absent for an `offered` program, which needs none. */
  statusLabel?: string;
  title: string;
  /** Band across the photo. Set in CSS, never baked into the artwork. */
  bandLabel: string;
  /** e.g. "15 hour course". */
  hoursLabel: string;
  /** Absent only while a program is not yet taught. */
  priceLabel?: string;
  /** Short form used on schedule rows, e.g. "DOEP". */
  shortName: string;
  /** Absent for a coming-soon program. */
  body?: string;
  imageKey: ImageKey;
  /** Absent for a coming-soon program, so there is nothing to focus or click. */
  cta?: Cta;
}

export interface Topic {
  id: string;
  label: string;
}

export interface EligibilityItem {
  id: string;
  title: string;
  icon: IconName;
}

export interface Testimonial extends Placeholder {
  id: string;
  quote: string;
  initials: string;
  name: string;
  attribution: string;
  /** Whole stars out of five. */
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ImageAsset {
  src: StaticImageData;
  alt: string;
  /** Where the placeholder came from; removed when the client supplies art. */
  source: string;
  placeholder: true;
}

export interface HomeContent {
  hero: Hero;
  stats: {
    title: string;
    items: readonly Stat[];
  };
  programs: {
    eyebrow: string;
    title: string;
    /** One line under the grid naming what is actually bookable today. */
    note: string;
    lede?: string;
    items: readonly ProgramCard[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    lede?: string;
    steps: readonly Step[];
  };
  schedule: {
    eyebrow: string;
    title: string;
    lede: string;
    sessions: readonly ClassSession[];
    callout: { title: string; body: string; cta: Cta };
  };
  program: {
    eyebrow: string;
    title: string;
    lede?: string;
    topicsTitle: string;
    topics: readonly Topic[];
    rulesTitle: string;
    rules: string;
  };
  eligibility: {
    eyebrow: string;
    title: string;
    lede?: string;
    items: readonly EligibilityItem[];
    footnote: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: readonly Testimonial[];
  };
  attorney: {
    eyebrow: string;
    title: string;
    body: string;
    cta: Cta;
  };
  faq: {
    eyebrow: string;
    title: string;
    lede?: string;
    items: readonly FaqItem[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
}
