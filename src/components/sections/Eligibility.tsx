import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { EligibilityItem } from '@/content/types';

interface EligibilityProps {
  eyebrow: string;
  title: string;
  lede?: string;
  items: readonly EligibilityItem[];
  footnote: string;
}

export function Eligibility({ eyebrow, title, lede, items, footnote }: EligibilityProps) {
  return (
    <Section id="eligibility" labelledBy="eligibility-title" tone="surface">
      <Container>
        <SectionHeading id="eligibility-title" eyebrow={eyebrow} title={title} lede={lede} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.id} data-reveal>
              <Card className="flex h-full items-center gap-4">
                <Icon name={item.icon} size={24} className="shrink-0 text-gold-500" />
                <h3 className="font-display text-ink text-lg">{item.title}</h3>
              </Card>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-8 text-lede text-muted">
          {footnote}
        </p>
      </Container>
    </Section>
  );
}
