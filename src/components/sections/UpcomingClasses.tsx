import { Container } from '@/components/ui/Container';
import { PlaceholderTag } from '@/components/ui/Placeholder';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Cta } from '@/content/types';
import { CallUsCallout } from './CallUsCallout';
import { ClassRow, type ClassRowData } from './ClassRow';

interface UpcomingClassesProps {
  eyebrow: string;
  title: string;
  lede: string;
  sessions: readonly ClassRowData[];
  callout: { title: string; body: string; cta: Cta };
  scheduleIsPlaceholder: boolean;
}

export function UpcomingClasses({
  eyebrow,
  title,
  lede,
  sessions,
  callout,
  scheduleIsPlaceholder,
}: UpcomingClassesProps) {
  return (
    <Section id="schedule" labelledBy="schedule-title" tone="surface">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="schedule-title" eyebrow={eyebrow} title={title} lede={lede} />
          {scheduleIsPlaceholder ? <PlaceholderTag>Sample schedule</PlaceholderTag> : null}
        </div>

        {/* Column labels for sighted users on wide screens; the per-row <dt>
            elements carry the same information for assistive technology. */}
        <div
          aria-hidden="true"
          className="mt-10 hidden grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_auto_auto_auto] gap-5 border-line border-b px-5 pb-3 font-medium text-muted text-xs uppercase tracking-wide md:grid"
        >
          <span>Dates</span>
          <span>Time</span>
          <span>Format</span>
          <span>Seats</span>
          <span>Fee</span>
          <span />
        </div>

        <ul className="mt-4 space-y-4 md:mt-0 md:divide-y md:divide-line md:space-y-0">
          {sessions.map((session) => (
            <ClassRow key={session.id} session={session} />
          ))}
        </ul>

        <CallUsCallout title={callout.title} body={callout.body} cta={callout.cta} />
      </Container>
    </Section>
  );
}
