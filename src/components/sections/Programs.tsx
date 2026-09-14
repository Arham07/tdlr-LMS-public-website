import type { StaticImageData } from 'next/image';
import Image from 'next/image';
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
  image: { src: StaticImageData; alt: string };
}

/**
 * The course catalogue, laid out as the picture-led cards the reference
 * providers use.
 *
 * PHSA teaches one program at launch, so the enrolling card carries the
 * photograph and the detail while the planned card stays deliberately plain.
 * A visitor should never mistake a future program for one they can book.
 */
export function Programs({ eyebrow, title, lede, items, image }: ProgramsProps) {
  return (
    <Section id="programs" labelledBy="programs-title" tone="surface">
      <Container>
        <SectionHeading id="programs-title" eyebrow={eyebrow} title={title} lede={lede} />

        <ul className="mt-12 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          {items.map((item) => {
            const enrolling = item.status === 'enrolling';

            return (
              <li
                key={item.id}
                data-reveal
                className={cx(
                  'flex flex-col overflow-hidden rounded-card border',
                  enrolling ? 'border-line bg-surface shadow-card' : 'border-line border-dashed',
                )}
              >
                {enrolling ? (
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      placeholder="blur"
                      className="aspect-[16/7] w-full object-cover"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-3 py-1.5 font-semibold text-white text-xs uppercase tracking-wide">
                      <Icon name="check" size={14} />
                      {item.statusLabel}
                    </span>
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  {enrolling ? null : (
                    <span className="inline-flex w-fit items-center rounded-full bg-navy-50 px-3 py-1.5 font-semibold text-navy-700 text-xs uppercase tracking-wide">
                      {item.statusLabel}
                    </span>
                  )}

                  <p
                    className={cx(
                      'font-semibold text-sm uppercase tracking-wide',
                      enrolling ? 'text-gold-500' : 'mt-4 text-muted',
                    )}
                  >
                    {item.format}
                  </p>

                  <h3
                    className={cx('mt-2', enrolling ? 'text-display-md' : 'font-display text-xl')}
                  >
                    {item.title}
                  </h3>

                  {item.meta.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap items-center gap-2">
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
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
