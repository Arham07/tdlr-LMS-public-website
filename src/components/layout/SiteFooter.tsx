import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PlaceholderTag } from '@/components/ui/Placeholder';
import { FOOTER_NAV, ROUTES, SITE } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="on-dark bg-navy-900 py-16 text-navy-100">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div>
            <p className="font-display text-white text-xl">{SITE.name}</p>
            <p className="mt-3 max-w-xs text-sm">
              A {SITE.state} provider of the 15-hour Drug Offender Education Program, licensed by
              the Texas Department of Licensing and Regulation.
            </p>
            <p className="mt-4 text-sm">
              TDLR provider licence #{SITE.license.number}{' '}
              {SITE.license.placeholder ? <PlaceholderTag onDark>Sample</PlaceholderTag> : null}
            </p>
          </div>

          {FOOTER_NAV.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-sans font-semibold text-sm text-white uppercase tracking-wide">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm underline-offset-4 hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-navy-700 border-t pt-8 lg:grid-cols-[1.4fr_1fr]">
          <section aria-labelledby="tdlr-notice" className="max-w-prose">
            <h2 id="tdlr-notice" className="font-sans font-semibold text-sm text-white">
              Complaints <PlaceholderTag onDark>Awaiting official wording</PlaceholderTag>
            </h2>
            <p className="mt-2 text-sm">
              Complaints about this provider may be directed to the Texas Department of Licensing
              and Regulation. PHSA's own complaint procedure is published in the class policies. The
              exact notice text and contact details TDLR requires will be published here before
              launch.
            </p>
            <p className="mt-3 text-sm">
              <Link
                href={ROUTES.complaints}
                className="underline underline-offset-4 hover:text-white"
              >
                Read the complaint procedure
              </Link>
            </p>
          </section>

          <div className="space-y-3 text-sm lg:text-right">
            <p>
              <a
                href={`tel:${SITE.phone.e164}`}
                className="underline underline-offset-4 hover:text-white"
              >
                {SITE.phone.display}
              </a>{' '}
              {SITE.phone.placeholder ? <PlaceholderTag onDark>Sample</PlaceholderTag> : null}
            </p>
            <p>
              <span lang="es">Se habla español</span> — coming soon
            </p>
            <p>
              <Link
                href={ROUTES.accessibility}
                className="underline underline-offset-4 hover:text-white"
              >
                Accessibility statement
              </Link>
            </p>
            <p className="text-navy-100/80">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
