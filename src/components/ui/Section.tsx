import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

export type SectionTone = 'ground' | 'surface' | 'navy' | 'gold';

interface SectionProps {
  /** Anchor id; also links the section to its heading for assistive tech. */
  id: string;
  /** Id of the heading element that names this section. */
  labelledBy: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
}

const TONE_CLASS: Record<SectionTone, string> = {
  ground: 'bg-ground text-ink',
  surface: 'bg-surface text-ink',
  navy: 'on-dark bg-navy-900 text-white',
  gold: 'bg-gold-100 text-ink',
};

/**
 * A page section: a landmark with its own heading, vertical rhythm and tone.
 * `tabIndex={-1}` lets smooth-scrolled anchors move focus here.
 */
export function Section({ id, labelledBy, tone = 'ground', className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      tabIndex={-1}
      className={cx('py-section outline-none', TONE_CLASS[tone], className)}
    >
      {children}
    </section>
  );
}
