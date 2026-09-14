import { cx } from '@/lib/cx';
import { Eyebrow } from './Eyebrow';

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  onDark?: boolean;
  className?: string;
}

/** Eyebrow, section heading and optional lede, as one measured block. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cx('max-w-prose', className)}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={cx('mt-4 text-display-lg', onDark ? 'text-white' : 'text-ink')}>
        {title}
      </h2>
      {lede ? (
        <p className={cx('mt-4 text-lede', onDark ? 'text-navy-100' : 'text-muted')}>{lede}</p>
      ) : null}
    </div>
  );
}
