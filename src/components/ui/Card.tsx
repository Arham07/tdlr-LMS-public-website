import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Standard surface card: white, hairline border, soft shadow. */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cx('rounded-card border border-line bg-surface p-6 shadow-card sm:p-7', className)}
    >
      {children}
    </div>
  );
}
