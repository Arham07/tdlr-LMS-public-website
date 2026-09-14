import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { PlaceholderTag } from '@/components/ui/Placeholder';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Testimonial } from '@/content/types';

interface TestimonialsProps {
  eyebrow: string;
  title: string;
  note: string;
  items: readonly Testimonial[];
  image: { src: StaticImageData; alt: string };
}

export function Testimonials({ eyebrow, title, note, items, image }: TestimonialsProps) {
  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading id="testimonials-title" eyebrow={eyebrow} title={title} />
            <p className="mt-4 flex flex-wrap items-center gap-2 text-muted text-sm">
              <PlaceholderTag />
              {note}
            </p>
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

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} data-reveal>
              <Card className="h-full">
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1">
                    <p className="text-ink">“{item.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-line border-t pt-5">
                    <span
                      aria-hidden="true"
                      className="grid size-10 place-items-center rounded-full bg-navy-50 font-display text-navy-700 text-sm"
                    >
                      {item.initials}
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-ink">{item.initials}</span>
                      <span className="block text-muted">{item.attribution}</span>
                    </span>
                  </figcaption>
                </figure>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
