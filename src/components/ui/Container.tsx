import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centres content at the page width with the standard gutters. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx('mx-auto w-full max-w-content px-5 sm:px-8', className)}>{children}</div>
  );
}
