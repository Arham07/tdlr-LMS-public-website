import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ProgramCard } from '@/content/types';
import { cx } from '@/lib/cx';

interface ProgramsProps {
  eyebrow: string;
  title: string;
  lede: string;
  items: readonly ProgramCard[];
}

/**
 * The course catalogue.
 *
 * PHSA teaches one program at launch, so the enrolling card carries the detail
 * and the planned card shows how the catalogue grows. The two are laid out
 * asymmetrically rather than as equal tiles, so a visitor cannot mistake a
 * future program for one they can book today.
 */
export function Programs({ eyebrow, title, lede, items }: ProgramsProps) {
  return (
    <Section id="programs" labelledBy="programs-title">
      <Container>
        <SectionHeading id="programs-title" eyebrow={eyebrow} title={title} lede={lede} />

        <ul className="mt-12 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          {items.map((item) => {
            const enrolling = item.status === 'enrolling';

            return (
              <li
                key={item.id}
                data-reveal
                className={cx(
                  'flex flex-col rounded-card border p-6 sm:p-8',
                  enrolling
                    ? 'border-line bg-surface shadow-card'
                    : 'border-line border-dashed bg-transparent',
                )}
              >
                <span
                  className={cx(
                    'inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-semibold text-xs uppercase tracking-wide',
                    enrolling ? 'bg-teal-100 text-teal-600' : 'bg-navy-50 text-navy-700',
                  )}
                >
                  {enrolling ? <Icon name="check" size={14} /> : null}
                  {item.statusLabel}
                </span>

                <h3 className={cx('mt-4', enrolling ? 'text-display-md' : 'font-display text-xl')}>
                  {item.title}
                </h3>

                {item.meta.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {item.meta.map((fact) => (
                      <li
                        key={fact}
                        className="rounded-full bg-navy-50 px-3 py-1 font-medium text-navy-700 text-sm"
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <p className="mt-4 flex-1 text-muted">{item.body}</p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy-700 text-sm underline-offset-4 hover:underline"
                    >
                      {link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
