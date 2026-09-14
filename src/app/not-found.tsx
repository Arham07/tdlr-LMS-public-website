import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ROUTES, SITE } from '@/lib/site';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <Container className="py-section">
      <div className="max-w-prose">
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="mt-4 text-display-lg">This page is not part of the concept yet</h1>
        <p className="mt-4 text-lede text-muted">
          The homepage is the first piece of the new {SITE.name} website. The pages it links to —
          fees, policies, the attorney directory and the student portal — are built in the later
          phases. Everything on the homepage itself works.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={ROUTES.home}>Back to the homepage</Button>
          <Button href={`tel:${SITE.phone.e164}`} variant="secondary">
            Call {SITE.phone.display}
          </Button>
        </div>
      </div>
    </Container>
  );
}
