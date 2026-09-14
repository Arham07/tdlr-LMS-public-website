import 'server-only';
import { ROUTES, SITE } from '@/lib/site';
import type { HomeContent } from './types';

/**
 * All homepage copy and sample data.
 *
 * Mirrors the future Payload `Home` global. Everything marked
 * `placeholder: true` is invented for the proposal concept: the schedule,
 * the fee, the testimonials and the contact details in `lib/site.ts`. PHSA's
 * real values replace them before launch.
 *
 * Compliance note: the copy never claims a court "accepts" the certificate.
 * It states that PHSA is a TDLR-licensed provider and asks the student to
 * confirm with their court or probation officer.
 */
export const HOME: HomeContent = {
  hero: {
    eyebrow: `TDLR-licensed provider · ${SITE.state}`,
    title: 'Your court-ordered drug education class, finished in five evenings.',
    lede: `${SITE.name} teaches the 15-hour Drug Offender Education Program live on Zoom. Pick a class, register in a few minutes, and receive your certificate as soon as you finish.`,
    primaryCta: { label: 'See upcoming classes', href: ROUTES.schedule },
    secondaryCta: { label: `Call ${SITE.phone.display}`, href: `tel:${SITE.phone.e164}` },
    chips: [
      { id: 'licensed', label: 'TDLR-licensed provider of the 15-hour DOEP', icon: 'check' },
      { id: 'live', label: 'Live instructor on Zoom, from any phone or laptop', icon: 'check' },
      { id: 'evenings', label: 'Five evenings, 6:00 to 9:00 PM Central', icon: 'check' },
      { id: 'certificate', label: 'Certificate as soon as you complete', icon: 'check' },
    ],
    cardTitle: 'Upcoming classes',
    cardFootnote: 'All classes are live on Zoom',
  },

  stats: {
    title: 'At a glance',
    items: [
      {
        id: 'hours',
        numeric: 15,
        value: 'hours',
        label: 'Of instruction, as Texas requires',
        icon: 'clock',
      },
      {
        id: 'evenings',
        numeric: 5,
        value: 'evenings',
        label: 'Three hours each, Monday to Friday',
        icon: 'calendar',
      },
      { id: 'online', value: '100% live', label: 'On Zoom, with a real instructor', icon: 'video' },
      {
        id: 'certificate',
        value: 'Certificate',
        label: 'Issued as soon as you complete',
        icon: 'award',
      },
    ],
  },

  programs: {
    eyebrow: 'Programs',
    title: 'What we teach',
    lede: 'PHSA teaches one program today, and the website and student system are built so further programs slot in later without rebuilding anything.',
    items: [
      {
        id: 'doep',
        status: 'enrolling',
        statusLabel: 'Enrolling now',
        title: 'Drug Offender Education Program',
        format: '15-hour live Zoom class',
        body: 'The 15-hour program Texas courts order after many drug-related offences, and the one required to reinstate a driver licence suspended after a drug conviction. Taught live by a licensed instructor over five evenings.',
        meta: ['15 hours', '5 evenings', 'Live on Zoom', '$110'],
        links: [
          { label: 'See upcoming classes', href: ROUTES.schedule },
          { label: 'What the program covers', href: ROUTES.program },
        ],
      },
      {
        id: 'future',
        status: 'planned',
        statusLabel: 'Planned',
        title: 'More programs as PHSA grows',
        format: 'In planning',
        body: 'Further education programs and services are planned. Each new one uses the same registration, payment, attendance and records system, so adding a program is a content change rather than a second website.',
        meta: [],
        links: [{ label: 'Ask us what is coming', href: ROUTES.contact }],
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Six steps from here to your certificate',
    lede: 'Most students finish the whole process in one week. You enter your information once and it follows you all the way through.',
    steps: [
      {
        id: 'find',
        title: 'Find a class',
        body: 'Choose a start date that works for you. Every class runs Monday to Friday in the evening.',
        icon: 'search',
      },
      {
        id: 'register',
        title: 'Register and complete intake',
        body: 'A short form with your details, your court information and the acknowledgments Texas requires.',
        icon: 'clipboard-check',
      },
      {
        id: 'equipment',
        title: 'Check your equipment',
        body: 'We confirm your camera, microphone and connection before you enrol, so nothing fails on the first evening.',
        icon: 'monitor-check',
      },
      {
        id: 'pay',
        title: 'Pay securely',
        body: 'Pay by card and receive your receipt straight away. Your payment is linked to your registration.',
        icon: 'credit-card',
      },
      {
        id: 'attend',
        title: 'Attend the five evenings',
        body: 'Your instructor takes attendance and confirms camera and audio at every session.',
        icon: 'users',
      },
      {
        id: 'certificate',
        title: 'Receive your certificate',
        body: 'Released in your student portal once your attendance, hours and testing are all complete.',
        icon: 'file-check',
      },
    ],
  },

  schedule: {
    eyebrow: 'Upcoming classes',
    title: 'Pick the week that fits',
    lede: 'Classes run Monday to Friday, 6:00 to 9:00 PM Central Time, live on Zoom. Seats are limited so every student can take part.',
    sessions: [
      {
        id: 'sep-21',
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
      body: 'Call us and we will help you find one. If your deadline is close, tell us when you call and we will work around it.',
      cta: { label: `Call ${SITE.phone.display}`, href: `tel:${SITE.phone.e164}` },
    },
  },

  program: {
    eyebrow: 'The program',
    title: 'What the 15-hour Drug Offender Education Program covers',
    lede: 'The course follows the standardised Texas curriculum. It is taught by a licensed instructor, in plain language, with room to ask questions.',
    topicsTitle: 'What you will cover',
    topics: [
      { id: 'laws', label: 'Texas drug and DWI laws, and what they mean for you' },
      { id: 'body', label: 'How drugs affect the body and the mind' },
      { id: 'patterns', label: 'How patterns of use develop, and how to recognise your own' },
      { id: 'costs', label: 'The real costs of use: money, licence, work and family' },
      { id: 'health', label: 'Health and relationships, including risk and transmission' },
      { id: 'values', label: 'Values, choices and behaviour' },
      { id: 'resources', label: 'Community resources and where to find support' },
      { id: 'plan', label: 'Your personal action plan for what comes next' },
    ],
    featuresTitle: 'How the class runs',
    features: [
      {
        id: 'requirement',
        title: 'Meets the Texas requirement',
        body: 'Fifteen hours of instruction delivered by a TDLR-licensed provider.',
        icon: 'shield-check',
      },
      {
        id: 'live',
        title: 'Live, not self-paced',
        body: 'A real instructor on Zoom every evening, so you can ask questions as they come up.',
        icon: 'video',
      },
      {
        id: 'attendance',
        title: 'Camera on, roll call every session',
        body: 'Attendance and participation are recorded at each class, as the state rules require.',
        icon: 'users',
      },
      {
        id: 'testing',
        title: 'Pre-course and post-course test',
        body: 'Short tests at the start and the end so your progress is documented.',
        icon: 'notebook-pen',
      },
      {
        id: 'completion',
        title: 'Certificate only when complete',
        body: 'Your certificate is released once attendance, hours and testing are all finished.',
        icon: 'award',
      },
      {
        id: 'window',
        title: 'Finish within your enrolment window',
        body: 'You have a set period from the day you enrol to complete the program.',
        icon: 'clock',
      },
    ],
    rulesTitle: 'Before you register, please note',
    rules:
      'Attendance at every session is required, and your camera and microphone must stay on so the instructor can confirm you are present and taking part. Arrive on time. If something goes wrong, call us before the class rather than after.',
  },

  eligibility: {
    eyebrow: 'Who it is for',
    title: 'This class is for you if',
    lede: 'Most of our students are here because a court asked them to be. Some enrol on their own. Everyone is welcome and treated the same way.',
    items: [
      {
        id: 'court',
        title: 'A court ordered the class',
        body: 'You were ordered to complete a drug offender education program after a drug-related offence.',
        icon: 'gavel',
      },
      {
        id: 'probation',
        title: 'It is a condition of probation',
        body: 'Your probation or deferred adjudication requires the 15-hour program.',
        icon: 'scale',
      },
      {
        id: 'license',
        title: 'You need your licence back',
        body: 'You are working towards reinstating a driver licence suspended after a drug conviction.',
        icon: 'car',
      },
      {
        id: 'voluntary',
        title: 'You want to take it',
        body: 'No order, no requirement. You would simply like the education and the certificate.',
        icon: 'heart-handshake',
      },
    ],
    footnote:
      'Not sure whether this is the right class? Ask your attorney or probation officer, or call us and we will check with you before you pay.',
  },

  testimonials: {
    eyebrow: 'What students say',
    title: 'Straightforward, respectful, done',
    note: 'Sample quotes shown for layout. PHSA replaces these with real, permissioned reviews before launch.',
    items: [
      {
        id: 'one',
        quote:
          'I was dreading it. The instructor treated everyone like an adult and the five evenings went quickly.',
        initials: 'JM',
        name: 'J. M.',
        attribution: 'Completed the 15-hour DOEP',
        rating: 5,
        placeholder: true,
      },
      {
        id: 'two',
        quote:
          'Registering took about ten minutes on my phone and the Zoom link was waiting in my account.',
        initials: 'AR',
        name: 'A. R.',
        attribution: 'Completed the 15-hour DOEP',
        rating: 5,
        placeholder: true,
      },
      {
        id: 'three',
        quote:
          'They answered the phone when I called with a question about my court date. That mattered.',
        initials: 'DS',
        name: 'D. S.',
        attribution: 'Completed the 15-hour DOEP',
        rating: 5,
        placeholder: true,
      },
    ],
  },

  attorney: {
    eyebrow: 'Find an attorney',
    title: 'Need a Texas attorney?',
    body: 'Our directory lists Texas attorneys who work with clients facing drug and DWI charges. It is free to browse and we take nothing for a referral.',
    cta: { label: 'Browse the directory', href: ROUTES.findAnAttorney },
  },

  faq: {
    eyebrow: 'Common questions',
    title: 'Before you register',
    lede: 'If your question is not here, call us. We would rather answer it now than have you enrol in the wrong class.',
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
    ],
  },

  finalCta: {
    title: 'Ready to get this behind you?',
    body: 'Pick a class, register in a few minutes, and we will take it from there.',
    primaryCta: { label: 'See upcoming classes', href: ROUTES.schedule },
    secondaryCta: { label: `Call ${SITE.phone.display}`, href: `tel:${SITE.phone.e164}` },
  },
};
