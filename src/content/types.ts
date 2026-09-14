import type { StaticImageData } from 'next/image';
import type { IconName } from '@/lib/icons';

export type { IconName };

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

export interface TrustChip {
  id: string;
  label: string;
  icon: IconName;
}

export interface Hero {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  chips: readonly TrustChip[];
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
}

/** Payload: one document in the `Classes` collection. */
export interface ClassSession extends Placeholder {
  id: string;
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

/** A course in the catalogue. Payload: one document in `Programs`. */
export interface ProgramCard {
  id: string;
  status: 'enrolling' | 'planned';
  /** Short badge shown above the title, e.g. "Enrolling now". */
  statusLabel: string;
  title: string;
  body: string;
  /** Quick facts printed as a single meta row; empty for a planned program. */
  meta: readonly string[];
  links: readonly Cta[];
}

export interface Feature {
  id: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface Topic {
  id: string;
  label: string;
}

export interface EligibilityItem {
  id: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface Testimonial extends Placeholder {
  id: string;
  quote: string;
  initials: string;
  attribution: string;
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
    lede: string;
    items: readonly ProgramCard[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    lede: string;
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
    lede: string;
    topicsTitle: string;
    topics: readonly Topic[];
    featuresTitle: string;
    features: readonly Feature[];
    rulesTitle: string;
    rules: string;
  };
  eligibility: {
    eyebrow: string;
    title: string;
    lede: string;
    items: readonly EligibilityItem[];
    footnote: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    note: string;
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
    lede: string;
    items: readonly FaqItem[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
}
