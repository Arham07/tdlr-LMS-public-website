import Link from 'next/link';
import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'onDark';

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Stretch to the container width; used for stacked mobile calls to action. */
  block?: boolean;
  className?: string;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  onClick?: never;
  type?: never;
  'aria-expanded'?: never;
  'aria-controls'?: never;
}

interface ActionButtonProps extends CommonProps {
  href?: never;
  onClick: () => void;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-label'?: string;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center font-semibold text-sm transition-colors duration-200 motion-reduce:transition-none';

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'bg-navy-700 text-white hover:bg-navy-500',
  secondary: 'border border-navy-700 text-navy-700 hover:bg-navy-50',
  ghost: 'text-navy-700 hover:bg-navy-50',
  onDark: 'bg-white text-navy-900 hover:bg-gold-100',
};

/**
 * The only interactive element in the app.
 *
 * Renders an anchor when given `href` (navigation, including `tel:` links) and
 * a real `<button type="button">` otherwise (in-page toggles), so the
 * semantics always match the behaviour.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', block = false, className } = props;
  const classes = cx(BASE, VARIANT_CLASS[variant], block && 'w-full', className);

  if (props.href !== undefined) {
    const isExternalScheme = /^(tel:|mailto:|https?:)/.test(props.href);
    if (isExternalScheme) {
      return (
        <a href={props.href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      aria-expanded={props['aria-expanded']}
      aria-controls={props['aria-controls']}
      aria-label={props['aria-label']}
      className={classes}
    >
      {children}
    </button>
  );
}
