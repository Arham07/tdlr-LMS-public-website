import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { HeroIntro } from '@/components/motion/HeroIntro';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import { PlaceholderTag } from '@/components/ui/Placeholder';
import type { Hero as HeroContent } from '@/content/types';
import { ClassCardMock } from './ClassCardMock';

interface HeroProps {
  content: HeroContent;
  image: { src: StaticImageData; alt: string };
  cardRows: readonly { id: string; dates: string; detail: string; seats: string }[];
  cardPrice: string;
  phoneIsPlaceholder: boolean;
}

export function Hero({ content, image, cardRows, cardPrice, phoneIsPlaceholder }: HeroProps) {
  return (
    <section id="top" aria-labelledby="hero-title" tabIndex={-1} className="outline-none">
      <HeroIntro>
        <Container className="grid items-center gap-12 pt-12 pb-section lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-20">
          <div>
            <div data-hero="eyebrow">
              <Eyebrow>{content.eyebrow}</Eyebrow>
            </div>

            <h1 data-hero="title" className="mt-5 text-display-xl">
              {content.title}
            </h1>

            <p data-hero="sub" className="mt-6 max-w-prose text-lede text-muted">
              {content.lede}
            </p>

            <div data-hero="cta" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
              <Button href={content.secondaryCta.href} variant="secondary">
                {content.secondaryCta.label}
              </Button>
              {phoneIsPlaceholder ? (
                <PlaceholderTag className="self-start">Sample number</PlaceholderTag>
              ) : null}
            </div>

            <ul data-hero="trust" className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {content.chips.map((chip) => (
                <li key={chip.id} className="flex items-center gap-2 text-ink text-sm">
                  <Icon name={chip.icon} size={18} className="text-navy-700" />
                  {chip.label}
                </li>
              ))}
            </ul>
          </div>

          <div data-hero="media" className="relative lg:pb-10 lg:pl-10">
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 45vw, 100vw"
              placeholder="blur"
              priority
              className="aspect-[4/3] w-full rounded-card object-cover lg:aspect-[4/5]"
            />
            <ClassCardMock
              title={content.cardTitle}
              footnote={content.cardFootnote}
              rows={cardRows}
              price={cardPrice}
              className="-mt-16 relative mx-auto max-w-md lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:max-w-[20rem]"
            />
          </div>
        </Container>
      </HeroIntro>
    </section>
  );
}
