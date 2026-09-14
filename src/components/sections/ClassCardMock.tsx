import { cx } from '@/lib/cx';

interface ClassCardMockProps {
  title: string;
  footnote: string;
  rows: readonly { id: string; dates: string; detail: string; seats: string }[];
  price: string;
  className?: string;
}

/**
 * A stylised preview of the schedule, shown beside the hero copy.
 *
 * Entirely decorative: it is hidden from assistive technology and contains no
 * focusable elements, because the real, operable schedule is the Upcoming
 * classes section further down the page.
 */
export function ClassCardMock({ title, footnote, rows, price, className }: ClassCardMockProps) {
  return (
    <div
      aria-hidden="true"
      data-hero="card"
      className={cx(
        'w-full rounded-card border border-line bg-surface p-5 shadow-float',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-ink text-lg">{title}</span>
        <span className="rounded-full bg-teal-100 px-2.5 py-1 font-medium text-teal-600 text-xs">
          Enrolling now
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex items-center justify-between gap-3 rounded-ui border border-line bg-ground px-3.5 py-3"
          >
            <span className="min-w-0">
              <span className="block truncate font-semibold text-ink text-sm">{row.dates}</span>
              <span className="block truncate text-muted text-xs">{row.detail}</span>
            </span>
            <span className="flex shrink-0 items-center gap-2.5">
              <span className="text-muted text-xs">{row.seats}</span>
              <span className="rounded-full bg-navy-700 px-3 py-1.5 font-semibold text-white text-xs">
                Register
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex items-center justify-between border-line border-t pt-4 text-muted text-xs">
        <span>{footnote}</span>
        <span className="font-semibold text-ink">{price}</span>
      </p>
    </div>
  );
}
