import type { Metadata, Viewport } from 'next';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SkipLink } from '@/components/layout/SkipLink';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { SITE } from '@/lib/site';
import { bodyFont, displayFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — 15-hour Drug Offender Education Program in Texas`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'A TDLR-licensed provider of the 15-hour Drug Offender Education Program. Live classes on Zoom over five evenings, with a certificate as soon as you finish.',
  applicationName: SITE.name,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — 15-hour Drug Offender Education Program`,
    description:
      'Live, instructor-led DOEP classes on Zoom over five evenings. Register in minutes and receive your certificate on completion.',
    locale: 'en_US',
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#f7f6f2',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-dvh bg-ground font-sans text-ink antialiased">
        <SkipLink />
        <SmoothScroll>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
