import { cx } from '@/lib/cx';
import { SHOW_PLACEHOLDER_TAGS } from '@/lib/site';

interface PlaceholderTagProps {
  /** What the tag describes, e.g. "Sample schedule". */
  children?: string;
  onDark?: boolean;
  className?: string;
}

/**
 * Marks invented content so nothing in the concept reads as fact.
 * Hidden by flipping SHOW_PLACEHOLDER_TAGS in `lib/site.ts`.
 */
export function PlaceholderTag({
  children = 'Sample',
  onDark = false,
  className,
}: PlaceholderTagProps) {
  if (!SHOW_PLACEHOLDER_TAGS) return null;

  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full border border-dashed px-2 py-0.5 font-medium text-xs uppercase tracking-wide',
        onDark ? 'border-gold-200 text-gold-200' : 'border-gold-500 text-ink',
        className,
      )}
    >
      {children}
    </span>
  );
}
