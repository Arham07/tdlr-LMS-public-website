import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

export type ChipTone = 'navy' | 'teal' | 'gold' | 'outline';

interface ChipProps {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
}

const TONE_CLASS: Record<ChipTone, string> = {
  navy: 'bg-navy-50 text-navy-700',
  teal: 'bg-teal-100 text-teal-600',
  gold: 'bg-gold-100 text-ink',
  outline: 'border border-line bg-surface text-muted',
};

/** Small status or trust pill. */
export function Chip({ children, tone = 'navy', className }: ChipProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium text-sm',
        TONE_CLASS[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
