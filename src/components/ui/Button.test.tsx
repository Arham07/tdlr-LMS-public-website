import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders a link for in-page navigation', () => {
    render(<Button href="#schedule">See upcoming classes</Button>);
    const link = screen.getByRole('link', { name: 'See upcoming classes' });
    expect(link).toHaveAttribute('href', '#schedule');
  });

  it('renders a plain anchor for tel: links rather than a router link', () => {
    render(<Button href="tel:+10000000000">Call us</Button>);
    expect(screen.getByRole('link', { name: 'Call us' })).toHaveAttribute(
      'href',
      'tel:+10000000000',
    );
  });

  it('renders an explicitly typed button for actions', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Open menu</Button>);

    const button = screen.getByRole('button', { name: 'Open menu' });
    expect(button).toHaveAttribute('type', 'button');

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('keeps a 44px minimum target so it is usable on a phone', () => {
    render(<Button href="/register">Register</Button>);
    expect(screen.getByRole('link', { name: 'Register' })).toHaveClass('min-h-11');
  });

  it('passes accordion ARIA through to the underlying button', () => {
    render(
      <Button onClick={() => {}} aria-expanded={false} aria-controls="panel-1">
        Question
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Question' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'panel-1');
  });
});
