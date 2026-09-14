import 'server-only';
import { ROUTES, SITE } from '@/lib/site';
import type { HomeContent } from './types';

/**
 * All homepage copy and sample data.
 *
 * Mirrors the future Payload `Home` global. Everything marked
 * `placeholder: true` is invented for the proposal concept: the schedule, the
 * fee and the reviews. PHSA's real values replace them before launch.
 *
 * Two rules the copy has to keep:
 *
 * 1. It never claims a court "accepts" the certificate. It says PHSA is a
 *    TDLR-licensed provider and asks the student to confirm with their court.
 * 2. Only the DOEP is open for enrolment. Every other program is marked
 *    coming soon, carries no description and has nothing to click.
 */
export const HOME: HomeContent = {
  hero: {
    eyebrow: `TDLR-licensed provider · ${SITE.state}`,
    title: 'Your court-ordered drug education class, finished in five evenings.',
    lede: 'The 15-hour Drug Offender Education Program, taught live on Zoom, Monday to Friday from 6:00 to 9:00 PM Central.',
    primaryCta: { label: 'See upcoming classes', href: ROUTES.schedule },
    secondaryCta: { label: `Call ${SITE.phone.display}`, href: `tel:${SITE.phone.e164}` },
    cardTitle: 'Next class',
    cardFootnote: 'Live on Zoom',
  },

  stats: {
    title: 'At a glance',
    items: [
      { id: 'hours', numeric: 15, value: 'hours', label: 'Of instruction', icon: 'clock' },
      {
        id: 'evenings',
        numeric: 5,
        value: 'evenings',
        label: 'Three hours each',
        icon: 'calendar',
      },
      { id: 'online', value: '100% live', label: 'On Zoom', icon: 'video' },
      { id: 'certificate', value: 'Certificate', label: 'On completion', icon: 'award' },
    ],
  },

  programs: {
    eyebrow: 'Programs',
    title: 'Our court-ordered courses',
    note: 'Class dates below are for the Drug Offender Education Program. Call us for dates on the other programs. Prices shown are samples.',
    items: [
      {
        id: 'doep',
        status: 'enrolling',
        statusLabel: 'Enrolling now',
        title: 'Drug Offender Education Program',
        shortName: 'DOEP',
        bandLabel: 'DOEP',
        hoursLabel: '15 hour Zoom class',
        priceLabel: '$110',
        body: 'Ordered after many drug-related offences, and required to reinstate a licence suspended after a drug conviction.',
        imageKey: 'programDoep',
        cta: { label: 'See upcoming classes', href: ROUTES.schedule },
      },
      {
        id: 'dwi-education',
        status: 'offered',
        title: 'DWI Education Program',
        shortName: 'DWI-E',
        bandLabel: 'DWI-E',
        hoursLabel: '12 hour class',
        priceLabel: '$110',
        imageKey: 'programDwiEducation',
        cta: { label: 'Ask about dates', href: `tel:${SITE.phone.e164}` },
      },
      {
        id: 'dwi-intervention',
        status: 'offered',
        title: 'DWI Intervention Program',
        shortName: 'DWI-I',
        bandLabel: 'DWI-I',
        hoursLabel: '32 hour class, repeat offender',
        priceLabel: '$275',
        imageKey: 'programDwiIntervention',
        cta: { label: 'Ask about dates', href: `tel:${SITE.phone.e164}` },
      },
      {
        id: 'victim-impact',
        status: 'offered',
        title: 'Victim Impact Panel',
        shortName: 'VIP',
        bandLabel: 'VIP',
        hoursLabel: 'Single session',
        priceLabel: '$50',
        imageKey: 'programVictimImpact',
        cta: { label: 'Ask about dates', href: `tel:${SITE.phone.e164}` },
      },
      {
        id: 'minors-alcohol',
        status: 'offered',
        title: 'Alcohol Education Program for Minors',
        shortName: 'AEPM',
        bandLabel: 'AEPM',
        hoursLabel: '6 hour class',
        priceLabel: '$75',
        imageKey: 'programMinorsAlcohol',
        cta: { label: 'Ask about dates', href: `tel:${SITE.phone.e164}` },
      },
      {
        id: 'evaluation',
        status: 'coming-soon',
        statusLabel: 'Coming soon',
        title: 'Substance Abuse Evaluation',
        shortName: 'SAE',
        bandLabel: 'SAE',
        hoursLabel: 'By appointment',
        imageKey: 'programEvaluation',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Three steps to your certificate',
    steps: [
      {
        id: 'register',
        title: 'Pick a class and register',
        body: 'Choose your week, complete the intake form and pay by card.',
        icon: 'clipboard-check',
        imageKey: 'stepRegister',
      },
      {
        id: 'equipment',
        title: 'Check your camera and microphone',
        body: 'We confirm your equipment before you enrol, as Texas rules require.',
        icon: 'monitor-check',
        imageKey: 'stepEquipment',
      },
      {
        id: 'attend',
        title: 'Attend, then collect your certificate',
        body: 'Five evenings on Zoom. Your certificate appears in your portal.',
        icon: 'award',
        imageKey: 'stepAttend',
      },
    ],
  },

  schedule: {
    eyebrow: 'Upcoming classes',
    title: 'Pick the week that fits',
    lede: 'Seats are limited so every student can take part.',
    sessions: [
      {
        id: 'sep-21',
        programId: 'doep',
        startsOn: '2026-09-21',
        endsOn: '2026-09-25',
        startTime: '18:00',
        endTime: '21:00',
        format: 'live-zoom',
        seatsLeft: 6,
        capacity: 20,
        priceCents: 11000,
        registerHref: ROUTES.register,
        placeholder: true,
      },
      {
        id: 'sep-28',
        programId: 'doep',
        startsOn: '2026-09-28',
        endsOn: '2026-10-02',
        startTime: '18:00',
        endTime: '21:00',
        format: 'live-zoom',
        seatsLeft: 9,
        capacity: 20,
        priceCents: 11000,
        registerHref: ROUTES.register,
        placeholder: true,
      },
      {
        id: 'oct-05',
        programId: 'doep',
        startsOn: '2026-10-05',
        endsOn: '2026-10-09',
        startTime: '18:00',
        endTime: '21:00',
        format: 'live-zoom',
        seatsLeft: 17,
        capacity: 20,
        priceCents: 11000,
        registerHref: ROUTES.register,
        placeholder: true,
      },
      {
        id: 'oct-12',
        programId: 'doep',
        startsOn: '2026-10-12',
        endsOn: '2026-10-16',
        startTime: '18:00',
        endTime: '21:00',
        format: 'live-zoom',
        seatsLeft: 20,
        capacity: 20,
        priceCents: 11000,
        registerHref: ROUTES.register,
        placeholder: true,
      },
    ],
    callout: {
      title: "Can't find a class that fits your schedule?",
      body: 'Call us. If your deadline is close, say so.',
      cta: { label: `Call ${SITE.phone.display}`, href: `tel:${SITE.phone.e164}` },
    },
  },

  program: {
    eyebrow: 'The program',
    title: 'What the 15-hour program covers',
    topicsTitle: 'What you will cover',
    topics: [
      { id: 'laws', label: 'Texas drug and DWI laws' },
      { id: 'body', label: 'How drugs affect the body and mind' },
      { id: 'patterns', label: 'How patterns of use develop' },
      { id: 'costs', label: 'The real costs of use' },
      { id: 'plan', label: 'Your personal action plan' },
    ],
    rulesTitle: 'Before you register, please note',
    rules:
      'Attendance at every session is required, and your camera and microphone must stay on. Arrive on time.',
  },

  eligibility: {
    eyebrow: 'Who it is for',
    title: 'This class is for you if',
    items: [
      { id: 'court', title: 'A court ordered the class', icon: 'gavel' },
      { id: 'probation', title: 'It is a condition of probation', icon: 'scale' },
      { id: 'license', title: 'You need your licence back', icon: 'car' },
      { id: 'voluntary', title: 'You want to take it', icon: 'heart-handshake' },
    ],
    footnote: 'Not sure? Call us before you pay.',
  },

  testimonials: {
    eyebrow: 'What students say',
    title: 'Straightforward, respectful, done',
    items: [
      {
        id: 'one',
        quote: 'I was dreading it. The five evenings went quickly.',
        initials: 'JM',
        name: 'J. M.',
        attribution: 'Completed the DOEP',
        rating: 5,
        placeholder: true,
      },
      {
        id: 'two',
        quote: 'Registering took ten minutes on my phone.',
        initials: 'AR',
        name: 'A. R.',
        attribution: 'Completed the DOEP',
        rating: 5,
        placeholder: true,
      },
    ],
  },

  attorney: {
    eyebrow: 'Find an attorney',
    title: 'Need a Texas attorney?',
    body: 'A free directory of Texas attorneys who handle drug and DWI cases. We take nothing for a referral.',
    cta: { label: 'Browse the directory', href: ROUTES.findAnAttorney },
  },

  faq: {
    eyebrow: 'Common questions',
    title: 'Before you register',
    items: [
      {
        id: 'recognised',
        question: 'Will my court recognise this class?',
        answer:
          'We are a TDLR-licensed provider of the Drug Offender Education Program, and your certificate carries a serial number that identifies the program. Courts and probation departments differ in what they ask for, so confirm with your court or probation officer that this is the program they ordered before you pay.',
      },
      {
        id: 'camera',
        question: 'Do I really have to keep my camera on?',
        answer:
          'Yes. Texas rules for online delivery require the instructor to confirm that you are present and taking part, which means your camera and microphone need to work and stay on. We check your equipment during registration so there are no surprises on the first evening.',
      },
      {
        id: 'testing',
        question: 'Is there a test, and how long do I have?',
        answer:
          'There is a short test at the start of the program and another at the end, so your progress is documented. You have a set enrolment window from the day you register in which to finish all five sessions.',
      },
      {
        id: 'missed',
        question: 'What happens if I miss a session?',
        answer:
          'The program is 15 hours and every hour has to be accounted for, so a missed session has to be made up before your certificate can be released. Call us the same day and we will place you in the next available class for that session.',
      },
      {
        id: 'certificate',
        question: 'When and how do I get my certificate?',
        answer:
          'It appears in your student portal once your attendance, hours and testing are complete, so you can download it straight away. You can print it or send it on to your attorney or probation officer.',
      },
      {
        id: 'refunds',
        question: 'What does it cost, and can I get a refund?',
        answer:
          'The fee for the 15-hour program is shown with each class above, and you pay by card when you register. Our refund and transfer terms are set out in the class policies.',
      },
      {
        id: 'complaint',
        question: 'How do I make a complaint?',
        answer:
          'Tell us first and we will try to put it right. If you would rather raise it with the state, or you are not satisfied with our answer, our complaint procedure explains how to contact the Texas Department of Licensing and Regulation.',
      },
    ],
  },

  finalCta: {
    title: 'Ready to get this behind you?',
    body: 'Pick a class and register in a few minutes.',
    primaryCta: { label: 'See upcoming classes', href: ROUTES.schedule },
    secondaryCta: { label: `Call ${SITE.phone.display}`, href: `tel:${SITE.phone.e164}` },
  },
};
