import { Fraunces, Manrope } from 'next/font/google';

/** Display face: headings, stat numbers and pull quotes. */
export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK', 'opsz'],
});

/** Text face: body copy, navigation, buttons and all UI. */
export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});
