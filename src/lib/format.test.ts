import { describe, expect, it } from 'vitest';
import { formatDateRange, formatDaySpan, formatPrice, formatTimeRange } from './format';

describe('formatDateRange', () => {
  it('collapses the month when a class runs inside one month', () => {
    expect(formatDateRange('2026-09-21', '2026-09-25')).toBe('Sep 21 – 25, 2026');
  });

  it('keeps both months when a class spans a month boundary', () => {
    expect(formatDateRange('2026-09-28', '2026-10-02')).toBe('Sep 28 – Oct 2, 2026');
  });
});

describe('formatDaySpan', () => {
  it('names the first and last weekday of the class week', () => {
    expect(formatDaySpan('2026-09-21', '2026-09-25')).toBe('Monday to Friday');
  });
});

describe('formatTimeRange', () => {
  it('renders an evening class in Central Time', () => {
    expect(formatTimeRange('18:00', '21:00')).toBe('6:00 – 9:00 PM CT');
  });

  it('keeps minutes when a class does not start on the hour', () => {
    expect(formatTimeRange('17:30', '20:30')).toBe('5:30 – 8:30 PM CT');
  });
});

describe('formatPrice', () => {
  it('omits cents for whole-dollar fees', () => {
    expect(formatPrice(11000)).toBe('$110');
  });

  it('shows cents when the fee is not a whole dollar', () => {
    expect(formatPrice(10950)).toBe('$109.50');
  });
});
