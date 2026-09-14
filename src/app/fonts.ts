import { Figtree } from 'next/font/google';

/**
 * The page runs on one family, as the reference provider does.
 *
 * texascourtclasses.com sets everything in Avenir — Book for text, Black for
 * headings — which is where its cohesive, heavy-headline look comes from.
 * Avenir is a commercial Monotype face and cannot be used here, so this is
 * Figtree: the closest free geometric-humanist match, with the same generous
 * x-height and the heavy weights the headlines need.
 *
 * It is variable, so the whole 300–900 range arrives in a single file and the
 * contrast between body text and headings costs nothing extra.
 */
export const displayFont = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-face',
});

/**
 * Same family, exported under a second name so the design tokens keep their
 * separate display and body slots. Split them into two families here if the
 * two roles ever need to diverge.
 */
export const bodyFont = displayFont;
