import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import type { FaqItem } from '@/content/types';
import { FaqAccordion } from './FaqAccordion';

const ITEMS: FaqItem[] = [
  { id: 'camera', question: 'Do I need my camera on?', answer: 'Yes, every session.' },
  { id: 'missed', question: 'What if I miss a class?', answer: 'Call us the same day.' },
];

describe('FaqAccordion', () => {
  it('renders every question as a button that starts collapsed', () => {
    render(<FaqAccordion items={ITEMS} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    for (const button of buttons) {
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    }
  });

  it('points each question at the panel it controls', () => {
    render(<FaqAccordion items={ITEMS} />);

    const button = screen.getByRole('button', { name: 'Do I need my camera on?' });
    const panelId = button.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();

    const panel = document.getElementById(panelId ?? '');
    expect(panel).not.toBeNull();
    expect(panel).toHaveAttribute('aria-labelledby', button.id);
  });

  it('opens and closes on click', async () => {
    render(<FaqAccordion items={ITEMS} />);
    const button = screen.getByRole('button', { name: 'Do I need my camera on?' });

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens with the keyboard, because the question is a real button', async () => {
    render(<FaqAccordion items={ITEMS} />);
    const button = screen.getByRole('button', { name: 'Do I need my camera on?' });

    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await userEvent.keyboard(' ');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('takes a collapsed answer out of the accessibility tree', async () => {
    render(<FaqAccordion items={ITEMS} />);
    const button = screen.getByRole('button', { name: 'Do I need my camera on?' });
    const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');

    expect(panel).toHaveClass('invisible');
    await userEvent.click(button);
    expect(panel).toHaveClass('visible');
  });

  it('lets two answers stay open at once so they can be compared', async () => {
    render(<FaqAccordion items={ITEMS} />);
    const first = screen.getByRole('button', { name: 'Do I need my camera on?' });
    const second = screen.getByRole('button', { name: 'What if I miss a class?' });

    await userEvent.click(first);
    await userEvent.click(second);

    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'true');
  });
});
