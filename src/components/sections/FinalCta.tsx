import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { Cta } from '@/content/types';

interface FinalCtaProps {
  title: string;
  body: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

export function FinalCta({ title, body, primaryCta, secondaryCta }: FinalCtaProps) {
  return (
    <Section id="contact" labelledBy="final-cta-title" tone="navy">
      <Container className="text-center">
        <div data-reveal className="mx-auto max-w-prose">
          <h2 id="final-cta-title" className="text-display-lg text-white">
            {title}
          </h2>
          <p className="mt-4 text-lede text-navy-100">{body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primaryCta.href} variant="onDark">
              {primaryCta.label}
            </Button>
            <Button
              href={secondaryCta.href}
              variant="ghost"
              className="border border-navy-100 text-white hover:bg-navy-700"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
