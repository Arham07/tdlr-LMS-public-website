import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import type { Cta } from '@/content/types';

interface AttorneyBandProps {
  eyebrow: string;
  title: string;
  body: string;
  cta: Cta;
  image: { src: StaticImageData; alt: string };
}

export function AttorneyBand({ eyebrow, title, body, cta, image }: AttorneyBandProps) {
  return (
    <Section id="attorney" labelledBy="attorney-title" tone="navy">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow onDark>{eyebrow}</Eyebrow>
            <h2 id="attorney-title" className="mt-4 text-display-lg text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-prose text-lede text-navy-100">{body}</p>
            <Button href={cta.href} variant="onDark" className="mt-8">
              {cta.label}
            </Button>
          </div>

          <Image
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 35vw, 100vw"
            placeholder="blur"
            data-reveal
            className="aspect-[16/10] w-full rounded-card object-cover"
          />
        </div>
      </Container>
    </Section>
  );
}
