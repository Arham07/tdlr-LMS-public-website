import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { PRIMARY_NAV, ROUTES, SITE } from '@/lib/site';
import { HeaderChrome } from './HeaderChrome';
import { MobileMenu } from './MobileMenu';

export function SiteHeader() {
  return (
    <HeaderChrome>
      <Container className="flex h-nav items-center justify-between gap-4">
        <Link href={ROUTES.home} className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-ui bg-navy-700 font-display font-semibold text-sm text-white"
          >
            {SITE.monogram}
          </span>
          <span className="hidden whitespace-nowrap font-display text-ink sm:inline sm:text-lg lg:text-base xl:text-lg">
            {SITE.name}
          </span>
          <span className="sr-only sm:hidden">{SITE.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-2.5 font-medium text-ink text-sm hover:bg-navy-50 hover:text-navy-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.e164}`}
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-3 font-medium text-navy-700 text-sm hover:bg-navy-50"
          >
            <Icon name="phone" size={18} />
            <span className="hidden 2xl:inline">{SITE.phone.display}</span>
            <span className="sr-only 2xl:hidden">Call {SITE.name}</span>
          </a>

          <span className="hidden xl:block">
            <Button href={ROUTES.login} variant="ghost">
              Student login
            </Button>
          </span>
          <span className="hidden sm:block">
            <Button href={ROUTES.schedule}>Find a class</Button>
          </span>

          <MobileMenu />
        </div>
      </Container>
    </HeaderChrome>
  );
}
