'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import type { FaqItem } from '@/content/types';
import { cx } from '@/lib/cx';

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

/**
 * Accessible disclosure list.
 *
 * Each question is a real button that owns its panel through
 * `aria-expanded`/`aria-controls`, so Enter and Space work without extra key
 * handling. The panel is a <section> named by its question, which gives it the
 * region role without an explicit ARIA attribute. Panels collapse by animating a grid row from 0fr to 1fr and switch
 * to `invisible`, which takes the hidden content out of the tab order and out
 * of the accessibility tree. Items open independently.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className="divide-y divide-line border-line border-y">
      {items.map((item) => {
        const questionId = `${baseId}-q-${item.id}`;
        const panelId = `${baseId}-a-${item.id}`;
        const isOpen = openId === item.id;

        return (
          <li key={item.id} data-reveal>
            <h3>
              <button
                type="button"
                id={questionId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left font-display text-ink text-lg"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.75}
                  className={cx(
                    'shrink-0 text-navy-700 transition-transform duration-300 motion-reduce:transition-none',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
            </h3>

            <section
              id={panelId}
              aria-labelledby={questionId}
              className={cx(
                'grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none',
                isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-muted">{item.answer}</p>
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  );
}
