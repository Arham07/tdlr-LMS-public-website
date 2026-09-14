import { RevealController } from '@/components/motion/RevealController';
import { AttorneyBand } from '@/components/sections/AttorneyBand';
import type { ClassRowData } from '@/components/sections/ClassRow';
import { Eligibility } from '@/components/sections/Eligibility';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ProgramDetails } from '@/components/sections/ProgramDetails';
import { Programs } from '@/components/sections/Programs';
import { QuickFacts } from '@/components/sections/QuickFacts';
import { Testimonials } from '@/components/sections/Testimonials';
import { UpcomingClasses } from '@/components/sections/UpcomingClasses';
import { HOME } from '@/content/home';
import { IMAGES } from '@/content/images';
import type { ClassSession } from '@/content/types';
import { formatDateRange, formatDaySpan, formatPrice, formatTimeRange } from '@/lib/format';
import { SITE } from '@/lib/site';

const FORMAT_LABEL: Record<ClassSession['format'], string> = {
  'live-zoom': 'Live on Zoom',
};

/** Dates, times and fees are formatted here, on the server, so client
 *  components never run Intl and hydration can never disagree. */
function toRowData(session: ClassSession): ClassRowData {
  const almostFull = session.seatsLeft <= session.capacity / 2;

  return {
    id: session.id,
    dateRange: formatDateRange(session.startsOn, session.endsOn),
    daySpan: formatDaySpan(session.startsOn, session.endsOn),
    timeRange: formatTimeRange(session.startTime, session.endTime),
    format: FORMAT_LABEL[session.format],
    seatsLabel: almostFull ? `${session.seatsLeft} seats left` : 'Seats available',
    seatsTone: almostFull ? 'gold' : 'teal',
    price: formatPrice(session.priceCents),
    registerHref: session.registerHref,
    isPlaceholder: session.placeholder === true,
  };
}

export default function Home() {
  const sessions = HOME.schedule.sessions.map(toRowData);
  const firstSession = HOME.schedule.sessions[0];

  return (
    <>
      <Hero
        content={HOME.hero}
        image={IMAGES.hero}
        cardRows={sessions.slice(0, 2).map((session) => ({
          id: session.id,
          dates: session.dateRange,
          detail: `${session.format} · ${session.timeRange}`,
          seats: session.seatsLabel,
        }))}
        cardPrice={firstSession ? formatPrice(firstSession.priceCents) : ''}
        phoneIsPlaceholder={SITE.phone.placeholder}
      />

      <QuickFacts title={HOME.stats.title} items={HOME.stats.items} />

      <Programs
        eyebrow={HOME.programs.eyebrow}
        title={HOME.programs.title}
        lede={HOME.programs.lede}
        items={HOME.programs.items}
      />

      <HowItWorks
        eyebrow={HOME.howItWorks.eyebrow}
        title={HOME.howItWorks.title}
        lede={HOME.howItWorks.lede}
        steps={HOME.howItWorks.steps}
      />

      <UpcomingClasses
        eyebrow={HOME.schedule.eyebrow}
        title={HOME.schedule.title}
        lede={HOME.schedule.lede}
        sessions={sessions}
        callout={HOME.schedule.callout}
        scheduleIsPlaceholder={sessions.some((session) => session.isPlaceholder)}
      />

      <ProgramDetails
        eyebrow={HOME.program.eyebrow}
        title={HOME.program.title}
        lede={HOME.program.lede}
        topicsTitle={HOME.program.topicsTitle}
        topics={HOME.program.topics}
        featuresTitle={HOME.program.featuresTitle}
        features={HOME.program.features}
        rulesTitle={HOME.program.rulesTitle}
        rules={HOME.program.rules}
        image={IMAGES.program}
      />

      <Eligibility
        eyebrow={HOME.eligibility.eyebrow}
        title={HOME.eligibility.title}
        lede={HOME.eligibility.lede}
        items={HOME.eligibility.items}
        footnote={HOME.eligibility.footnote}
      />

      <Testimonials
        eyebrow={HOME.testimonials.eyebrow}
        title={HOME.testimonials.title}
        note={HOME.testimonials.note}
        items={HOME.testimonials.items}
        image={IMAGES.testimonials}
      />

      <AttorneyBand
        eyebrow={HOME.attorney.eyebrow}
        title={HOME.attorney.title}
        body={HOME.attorney.body}
        cta={HOME.attorney.cta}
        image={IMAGES.attorney}
      />

      <Faq
        eyebrow={HOME.faq.eyebrow}
        title={HOME.faq.title}
        lede={HOME.faq.lede}
        items={HOME.faq.items}
      />

      <FinalCta
        title={HOME.finalCta.title}
        body={HOME.finalCta.body}
        primaryCta={HOME.finalCta.primaryCta}
        secondaryCta={HOME.finalCta.secondaryCta}
      />

      <RevealController />
    </>
  );
}
