import { Manrope, Source_Serif_4 } from 'next/font/google';

/**
 * Display face: headings, stat numbers and pull quotes.
 *
 * Source Serif 4 is drawn for screen reading at both text and display sizes
 * and reads as institutional rather than editorial, which suits a licensed
 * education provider. Only the weight axis is requested; asking for optical
 * size and the decorative axes more than doubles the file.
 */
export const displayFont = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-face',
});

/** Text face: body copy, navigation, buttons and all UI. */
export const bodyFont = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-face',
});
