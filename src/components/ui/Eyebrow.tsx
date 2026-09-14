import { cx } from '@/lib/cx';

interface EyebrowProps {
  children: string;
  /** Use on navy sections, where gold carries enough contrast for text. */
  onDark?: boolean;
  className?: string;
}

/** Small tracked label above a heading, with a short gold rule. */
export function Eyebrow({ children, onDark = false, className }: EyebrowProps) {
  return (
    <p
      className={cx(
        'flex items-center gap-2.5 font-semibold text-eyebrow uppercase',
        onDark ? 'text-gold-200' : 'text-navy-700',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-gold-500" />
      {children}
    </p>
  );
}
