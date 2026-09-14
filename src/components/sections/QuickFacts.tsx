import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import type { Stat } from '@/content/types';

interface QuickFactsProps {
  title: string;
  items: readonly Stat[];
}

export function QuickFacts({ title, items }: QuickFactsProps) {
  return (
    <section
      id="at-a-glance"
      aria-labelledby="at-a-glance-title"
      tabIndex={-1}
      className="border-line border-y bg-surface py-12 outline-none"
    >
      <Container>
        <h2 id="at-a-glance-title" className="sr-only">
          {title}
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} data-reveal>
              <Icon name={item.icon} className="text-gold-500" size={22} />
              <dt className="mt-3 font-display font-extrabold text-display-md text-ink">
                {item.numeric === undefined ? (
                  item.value
                ) : (
                  <>
                    {/* The digit animates, so it is hidden from assistive tech
                        and a static twin carries the real value. */}
                    <span aria-hidden="true" data-count={item.numeric}>
                      {item.numeric}
                    </span>
                    <span className="sr-only">{item.numeric}</span> {item.value}
                  </>
                )}
              </dt>
              <dd className="mt-1.5 text-muted text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
