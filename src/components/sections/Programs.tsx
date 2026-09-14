import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { PlaceholderTag } from '@/components/ui/Placeholder';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ProgramCard } from '@/content/types';
import { cx } from '@/lib/cx';

type ProgramCardWithImage = ProgramCard & {
  image: { src: StaticImageData; alt: string };
};

interface ProgramsProps {
  eyebrow: string;
  title: string;
  note: string;
  items: readonly ProgramCardWithImage[];
}

/**
 * The course catalogue, as the picture-card grid both reference providers use.
 *
 * Three states, because the programs genuinely differ. The DOEP has published
 * class dates, so its button goes to the schedule. Four programs are taught
 * but have no published dates, so theirs go to the phone rather than to a
 * dead registration link. The one that is not taught yet is desaturated,
 * badged, priced at nothing and carries no button at all, so there is nothing
 * on the card to focus or click.
 */
export function Programs({ eyebrow, title, note, items }: ProgramsProps) {
  return (
    <Section id="programs" labelledBy="programs-title" tone="surface">
      <Container>
        <SectionHeading id="programs-title" eyebrow={eyebrow} title={title} />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const comingSoon = item.status === 'coming-soon';

            return (
              <li
                key={item.id}
                data-reveal
                className="flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card"
              >
                <div className="relative bg-navy-50">
                  <Image
                    src={item.image.src}
                    alt=""
                    aria-hidden="true"
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    {...(item.status === 'enrolling' ? { placeholder: 'blur' as const } : {})}
                    className={cx(
                      'aspect-[3/2] w-full object-cover',
                      comingSoon && 'opacity-60 grayscale',
                    )}
                  />

                  {/* Opaque, because a translucent band over an arbitrary
                      photograph has no contrast ratio we can audit. Hidden from
                      assistive tech: the heading below carries the same name. */}
                  <p
                    aria-hidden="true"
                    className="-translate-y-1/2 absolute inset-x-0 top-1/2 bg-surface px-4 py-2 text-center font-display font-semibold text-ink tracking-wide"
                  >
                    {item.bandLabel}
                  </p>

                  {item.statusLabel ? (
                    <span
                      className={cx(
                        'absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold text-xs uppercase tracking-wide',
                        comingSoon ? 'bg-navy-50 text-navy-700' : 'bg-teal-600 text-white',
                      )}
                    >
                      {comingSoon ? null : <Icon name="check" size={14} />}
                      {item.statusLabel}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-ink text-lg">{item.title}</h3>
                  <p className="mt-1 text-muted text-sm">{item.hoursLabel}</p>

                  {item.priceLabel ? (
                    <p className="mt-2 font-semibold text-ink">{item.priceLabel}</p>
                  ) : null}

                  {item.body ? <p className="mt-3 text-muted text-sm">{item.body}</p> : null}

                  <div className="mt-5 flex flex-1 items-end">
                    {item.cta ? (
                      <Button href={item.cta.href} block>
                        {item.cta.label}
                      </Button>
                    ) : (
                      <p className="flex items-center gap-2 text-muted text-sm">
                        Not yet available
                        <PlaceholderTag>Planned</PlaceholderTag>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p data-reveal className="mt-8 text-muted">
          {note}
        </p>
      </Container>
    </Section>
  );
}
