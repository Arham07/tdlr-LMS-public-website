import { StepsRail } from '@/components/motion/StepsRail';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Step } from '@/content/types';

interface HowItWorksProps {
  eyebrow: string;
  title: string;
  lede: string;
  steps: readonly Step[];
}

export function HowItWorks({ eyebrow, title, lede, steps }: HowItWorksProps) {
  return (
    <Section id="how-it-works" labelledBy="how-it-works-title">
      <Container>
        <SectionHeading id="how-it-works-title" eyebrow={eyebrow} title={title} lede={lede} />

        <StepsRail>
          <ol className="mt-14 grid gap-x-8 gap-y-10 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.id} data-reveal className="relative pl-16 lg:pr-6 lg:pl-0">
                {/* Connector: vertical on small screens, horizontal from lg. */}
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    data-rail
                    className="absolute top-12 bottom-[-2.5rem] left-[1.375rem] w-px bg-line lg:top-[1.375rem] lg:right-0 lg:bottom-auto lg:left-14 lg:h-px lg:w-auto"
                  />
                ) : null}

                <span className="absolute top-0 left-0 grid size-11 place-items-center rounded-full border border-line bg-surface font-display text-ink lg:relative lg:mb-4">
                  {index + 1}
                </span>

                <h3 className="flex items-start gap-2.5 text-display-md">
                  <Icon name={step.icon} className="mt-1.5 shrink-0 text-gold-500" size={20} />
                  <span>{step.title}</span>
                </h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </StepsRail>
      </Container>
    </Section>
  );
}
