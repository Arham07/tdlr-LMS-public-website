import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';

export interface ClassRowData {
  id: string;
  /** Short program name, e.g. "DOEP". Shown so a row read on its own says
   *  which course it teaches. */
  courseLabel: string;
  dateRange: string;
  daySpan: string;
  timeRange: string;
  format: string;
  seatsLabel: string;
  seatsTone: 'teal' | 'gold';
  price: string;
  registerHref: string;
  isPlaceholder: boolean;
}

/**
 * One class week.
 *
 * A description list of labelled values. The labels are screen-reader only at
 * every width: on wide screens a decorative header row labels the columns, and
 * on narrow screens the values read plainly enough without them. Every value
 * stays in the accessibility tree either way.
 */
export function ClassRow({ session }: { session: ClassRowData }) {
  return (
    <li
      data-reveal
      className="rounded-card border border-line bg-surface p-5 shadow-card md:grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_auto_auto_auto] md:items-center md:gap-5 md:rounded-ui md:px-5 md:py-4 md:shadow-none"
    >
      <dl className="contents">
        <div>
          <dt className="sr-only">Course</dt>
          <dd>
            <Chip tone="navy">{session.courseLabel}</Chip>
          </dd>

          <dt className="sr-only">Dates</dt>
          <dd className="mt-2">
            <h3 className="font-display text-ink text-lg">{session.dateRange}</h3>
            <p className="text-muted text-sm">{session.daySpan}</p>
          </dd>
        </div>

        <dt className="sr-only">Time</dt>
        <dd className="mt-2 text-ink text-sm md:mt-0">
          {session.timeRange}
          <span aria-hidden="true" className="md:hidden">
            {' · '}
          </span>
          <span className="md:hidden">{session.format}</span>
        </dd>

        <dt className="sr-only">Format</dt>
        <dd className="hidden text-ink text-sm md:block">{session.format}</dd>

        <dt className="sr-only">Seats</dt>
        <dd className="mt-3 inline-flex md:mt-0 md:justify-self-start">
          <Chip tone={session.seatsTone}>{session.seatsLabel}</Chip>
        </dd>

        <dt className="sr-only">Fee</dt>
        <dd className="ml-3 inline font-semibold text-ink md:ml-0 md:block">{session.price}</dd>
      </dl>

      <div className="mt-4 md:mt-0 md:justify-self-end">
        <Button href={session.registerHref} block className="md:w-auto">
          Register
          <span className="sr-only">
            {' '}
            for the {session.courseLabel} class starting {session.dateRange}
          </span>
        </Button>
      </div>
    </li>
  );
}
