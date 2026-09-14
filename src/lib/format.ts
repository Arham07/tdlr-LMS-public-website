import 'server-only';
import { SITE } from './site';

const LOCALE = 'en-US';

/** ISO date (YYYY-MM-DD) parsed as noon UTC so the CT day never shifts. */
function parseIsoDate(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`);
}

/**
 * Collapses the month when both dates share one:
 * "Sep 21 – 25, 2026" / "Sep 28 – Oct 2, 2026".
 */
export function formatDateRange(startIso: string, endIso: string): string {
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);
  const sameMonth = start.getUTCMonth() === end.getUTCMonth();

  const monthDay = new Intl.DateTimeFormat(LOCALE, {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  const dayOnly = new Intl.DateTimeFormat(LOCALE, { day: 'numeric', timeZone: 'UTC' });

  const endText = sameMonth ? dayOnly.format(end) : monthDay.format(end);
  return `${monthDay.format(start)} – ${endText}, ${end.getUTCFullYear()}`;
}

/** Weekday span for a class week, e.g. "Monday to Friday". */
export function formatDaySpan(startIso: string, endIso: string): string {
  const weekday = new Intl.DateTimeFormat(LOCALE, { weekday: 'long', timeZone: 'UTC' });
  return `${weekday.format(parseIsoDate(startIso))} to ${weekday.format(parseIsoDate(endIso))}`;
}

/** "6:00 – 9:00 PM CT" from two 24-hour "HH:MM" strings. */
export function formatTimeRange(start24: string, end24: string): string {
  const toParts = (value: string): { hour: number; minute: number } => {
    const [hourText = '0', minuteText = '0'] = value.split(':');
    return { hour: Number(hourText), minute: Number(minuteText) };
  };
  const label = ({ hour, minute }: { hour: number; minute: number }): string => {
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return minute === 0 ? `${hour12}:00` : `${hour12}:${String(minute).padStart(2, '0')}`;
  };

  const end = toParts(end24);
  const meridiem = end.hour >= 12 ? 'PM' : 'AM';
  return `${label(toParts(start24))} – ${label(end)} ${meridiem} ${SITE.timeZoneLabel}`;
}

/** Whole-dollar amounts print without cents: 11000 → "$110". */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}
