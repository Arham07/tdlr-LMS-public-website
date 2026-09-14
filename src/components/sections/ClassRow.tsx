import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';

export interface ClassRowData {
  id: string;
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
 * A description list of labelled values: the labels are visible on small
 * screens, where each session becomes a card, and hidden from `md` where a
 * single decorative header row labels the columns instead.
 */
export function ClassRow({ session }: { session: ClassRowData }) {
  return (
    <li
      data-reveal
      className="rounded-card border border-line bg-surface p-5 shadow-card md:grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_auto_auto_auto] md:items-center md:gap-5 md:rounded-ui md:px-5 md:py-4 md:shadow-none"
    >
      <dl className="contents">
        <div className="md:contents">
          <dt className="font-medium text-muted text-xs uppercase tracking-wide md:sr-only">
            Dates
          </dt>
          <dd className="mt-1 md:mt-0">
            <h3 className="font-display text-ink text-lg">{session.dateRange}</h3>
            <p className="text-muted text-sm">{session.daySpan}</p>
          </dd>
        </div>

        <div className="mt-4 md:mt-0 md:contents">
          <dt className="font-medium text-muted text-xs uppercase tracking-wide md:sr-only">
            Time
          </dt>
          <dd className="mt-1 text-ink text-sm md:mt-0">{session.timeRange}</dd>
        </div>

        <div className="mt-4 md:mt-0 md:contents">
          <dt className="font-medium text-muted text-xs uppercase tracking-wide md:sr-only">
            Format
          </dt>
          <dd className="mt-1 text-ink text-sm md:mt-0">{session.format}</dd>
        </div>

        <div className="mt-4 flex items-center gap-3 md:mt-0 md:contents">
          <dt className="sr-only">Seats</dt>
          <dd className="md:justify-self-start">
            <Chip tone={session.seatsTone}>{session.seatsLabel}</Chip>
          </dd>
          <dt className="sr-only">Fee</dt>
          <dd className="font-semibold text-ink">{session.price}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center gap-3 md:mt-0 md:justify-self-end">
        <Button href={session.registerHref} block className="md:w-auto">
          Register
          <span className="sr-only"> for the class starting {session.dateRange}</span>
        </Button>
      </div>
    </li>
  );
}
