import { FaqAccordion } from '@/components/interactive/FaqAccordion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { FaqItem } from '@/content/types';

interface FaqProps {
  eyebrow: string;
  title: string;
  lede: string;
  items: readonly FaqItem[];
}

export function Faq({ eyebrow, title, lede, items }: FaqProps) {
  return (
    <Section id="faq" labelledBy="faq-title" tone="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            id="faq-title"
            eyebrow={eyebrow}
            title={title}
            lede={lede}
            className="lg:sticky lg:top-[calc(var(--spacing-nav)+2rem)] lg:self-start"
          />
          <FaqAccordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
