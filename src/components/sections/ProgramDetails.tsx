import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Topic } from '@/content/types';

interface ProgramDetailsProps {
  eyebrow: string;
  title: string;
  lede?: string;
  topicsTitle: string;
  topics: readonly Topic[];
  rulesTitle: string;
  rules: string;
  image: { src: StaticImageData; alt: string };
}

export function ProgramDetails({
  eyebrow,
  title,
  lede,
  topicsTitle,
  topics,
  rulesTitle,
  rules,
  image,
}: ProgramDetailsProps) {
  return (
    <Section id="program" labelledBy="program-title">
      <Container>
        <SectionHeading id="program-title" eyebrow={eyebrow} title={title} lede={lede} />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h3 className="text-display-md">{topicsTitle}</h3>
            <ul className="mt-5 space-y-2.5">
              {topics.map((topic) => (
                <li key={topic.id} className="flex gap-3 text-ink">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-teal-600" />
                  {topic.label}
                </li>
              ))}
            </ul>

            <div role="note" className="mt-8 rounded-card border border-gold-500 bg-gold-100 p-5">
              <h4 className="font-semibold text-ink text-sm">{rulesTitle}</h4>
              <p className="mt-2 text-ink text-sm">{rules}</p>
            </div>
          </div>

          <Image
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 45vw, 100vw"
            data-reveal
            className="aspect-[4/3] w-full rounded-card bg-navy-50 object-cover"
          />
        </div>
      </Container>
    </Section>
  );
}
