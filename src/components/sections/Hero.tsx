import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { HeroIntro } from '@/components/motion/HeroIntro';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import type { Hero as HeroContent } from '@/content/types';
import { ClassCardMock } from './ClassCardMock';

interface HeroProps {
  content: HeroContent;
  image: { src: StaticImageData; alt: string };
  cardRows: readonly { id: string; dates: string; detail: string; seats: string }[];
  cardPrice: string;
  licenseLabel: string;
}

/**
 * Full-bleed photograph behind the headline, with the proof points a
 * court-ordered student is actually checking for listed as ticks — the
 * structure of the provider sites PHSA gave as references.
 *
 * The photograph is decorative: it sits behind an opaque navy wash and the
 * headline carries the meaning, so it is marked `alt=""`.
 */
export function Hero({ content, image, cardRows, cardPrice, licenseLabel }: HeroProps) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      tabIndex={-1}
      className="on-dark relative isolate overflow-hidden bg-navy-900 outline-none"
    >
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        sizes="100vw"
        placeholder="blur"
        priority
        className="-z-10 absolute inset-0 size-full object-cover object-center"
      />
      {/* Two layers: a flat wash for predictable contrast, and a gradient that
          deepens the left side where the copy sits. */}
      <div aria-hidden="true" className="-z-10 absolute inset-0 bg-navy-900/70" />
      <div
        aria-hidden="true"
        className="-z-10 absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/75 to-navy-900/25"
      />

      <HeroIntro>
        <Container className="grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:pt-20 lg:pb-24">
          <div>
            <p
              data-hero="eyebrow"
              className="inline-flex items-center gap-2 rounded-full border border-gold-200/40 bg-navy-700/40 px-4 py-1.5 font-semibold text-eyebrow text-gold-200 uppercase"
            >
              <Icon name="shield-check" size={16} />
              {content.eyebrow}
            </p>

            <h1 data-hero="title" className="mt-6 text-display-xl text-white">
              {content.title}
            </h1>

            <p data-hero="sub" className="mt-6 max-w-prose text-lede text-navy-100">
              {content.lede}
            </p>

            <ul data-hero="trust" className="mt-8 space-y-3">
              {content.chips.map((chip) => (
                <li key={chip.id} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal-600">
                    <Icon name={chip.icon} size={15} className="text-white" />
                  </span>
                  {chip.label}
                </li>
              ))}
            </ul>

            <div data-hero="cta" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={content.primaryCta.href} variant="onDark">
                {content.primaryCta.label}
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="ghost"
                className="border border-navy-100/50 text-white hover:bg-navy-700"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-6 text-navy-100 text-sm">{licenseLabel}</p>
          </div>

          <div data-hero="media">
            <ClassCardMock
              title={content.cardTitle}
              footnote={content.cardFootnote}
              rows={cardRows}
              price={cardPrice}
              className="mx-auto max-w-md lg:max-w-none"
            />
          </div>
        </Container>
      </HeroIntro>
    </section>
  );
}
