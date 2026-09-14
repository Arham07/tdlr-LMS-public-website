import { Manrope, Poppins } from 'next/font/google';

/**
 * Display face: headings, stat numbers, the wordmark and card labels.
 *
 * Poppins is a geometric sans and gives the page the friendly, modern look of
 * the course providers PHSA referenced. It is not a variable font, so each
 * weight is a separate file: 400 for the wordmark, 600 for headings and
 * labels. Adding a weight here adds a download, so only add one the design
 * actually uses.
 */
export const displayFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-display-face',
});

/**
 * Text face: body copy, navigation, buttons and all UI.
 *
 * Kept separate from Poppins, which is wide and tiring in long paragraphs at
 * small sizes. Manrope is variable, so its whole weight range is one file.
 */
export const bodyFont = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-face',
});
