import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import type { Cta } from '@/content/types';

interface CallUsCalloutProps {
  title: string;
  body: string;
  cta: Cta;
}

/** The "call us" escape hatch for students whose deadline does not fit the grid. */
export function CallUsCallout({ title, body, cta }: CallUsCalloutProps) {
  return (
    <div
      data-reveal
      className="mt-10 flex flex-col gap-5 rounded-card bg-gold-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <div className="flex gap-4">
        <Icon name="phone" size={24} className="mt-1 shrink-0 text-gold-500" />
        <div>
          <h3 className="text-display-md">{title}</h3>
          <p className="mt-2 max-w-prose text-muted">{body}</p>
        </div>
      </div>
      <Button href={cta.href} className="shrink-0">
        {cta.label}
      </Button>
    </div>
  );
}
