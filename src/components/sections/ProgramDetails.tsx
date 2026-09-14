import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Feature, Topic } from '@/content/types';

interface ProgramDetailsProps {
  eyebrow: string;
  title: string;
  lede: string;
  topicsTitle: string;
  topics: readonly Topic[];
  featuresTitle: string;
  features: readonly Feature[];
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
  featuresTitle,
  features,
  rulesTitle,
  rules,
  image,
}: ProgramDetailsProps) {
  return (
    <Section id="program" labelledBy="program-title">
      <Container>
        <SectionHeading id="program-title" eyebrow={eyebrow} title={title} lede={lede} />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h3 className="text-display-md">{topicsTitle}</h3>
            <ul className="mt-6 space-y-3">
              {topics.map((topic) => (
                <li key={topic.id} className="flex gap-3 text-ink">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-teal-600" />
                  {topic.label}
                </li>
              ))}
            </ul>

            <Image
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 45vw, 100vw"
              placeholder="blur"
              className="mt-8 aspect-[16/10] w-full rounded-card object-cover"
            />
          </div>

          <div data-reveal>
            <h3 className="text-display-md">{featuresTitle}</h3>
            <dl className="mt-6 space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-50">
                    <Icon name={feature.icon} size={20} className="text-navy-700" />
                  </span>
                  <div>
                    <dt className="font-semibold text-ink">{feature.title}</dt>
                    <dd className="mt-1 text-muted text-sm">{feature.body}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div role="note" className="mt-8 rounded-card border border-gold-500 bg-gold-100 p-5">
              <h4 className="font-semibold text-ink text-sm">{rulesTitle}</h4>
              <p className="mt-2 text-ink text-sm">{rules}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
