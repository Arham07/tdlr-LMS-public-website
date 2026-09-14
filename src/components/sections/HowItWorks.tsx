import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Step } from '@/content/types';

type StepWithImage = Step & { image: { src: StaticImageData; alt: string } };

interface HowItWorksProps {
  eyebrow: string;
  title: string;
  lede?: string;
  steps: readonly StepWithImage[];
}

/**
 * Three picture-led steps.
 *
 * The equipment check stands alone as its own step rather than being folded
 * into registration: Texas online-delivery rules require the instructor to
 * confirm the student is present and taking part, and a working camera is how
 * that is met, so it is the step most worth showing.
 */
export function HowItWorks({ eyebrow, title, lede, steps }: HowItWorksProps) {
  return (
    <Section id="how-it-works" labelledBy="how-it-works-title">
      <Container>
        <SectionHeading id="how-it-works-title" eyebrow={eyebrow} title={title} lede={lede} />

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.id} data-reveal>
              <Image
                src={step.image.src}
                alt=""
                aria-hidden="true"
                sizes="(min-width: 768px) 22rem, 100vw"
                className="aspect-[3/2] w-full rounded-card bg-navy-50 object-cover"
              />

              <p className="mt-5 flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy-700 font-display font-semibold text-sm text-white">
                  {index + 1}
                </span>
                <Icon name={step.icon} className="text-gold-500" size={20} />
              </p>

              <h3 className="mt-3 text-display-md">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
