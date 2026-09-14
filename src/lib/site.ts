/**
 * Organisation identity, contact details and link maps.
 *
 * Mirrors the shape of the future Payload `SiteSettings` global, so Phase 1
 * replaces this module's values with CMS data without touching components.
 *
 * Contact details are PHSA's own. Values still marked PLACEHOLDER are samples
 * for the concept and must be replaced before launch.
 */

export const SITE = {
  name: 'PH Substance Abuse Solutions',
  shortName: 'PHSA',
  legalName: 'PH Substance Abuse Solutions, LLC',
  monogram: 'PH',
  state: 'Texas',
  /** Supplied by Patricia A. Haynes, PH Substance Abuse Solutions. */
  phone: { display: '(512) 887-4156', e164: '+15128874156', placeholder: false },
  email: { display: 'phsasolutions@outlook.com', placeholder: false },
  domain: 'phsubstanceabusesolutions.org',
  contactName: 'Patricia A. Haynes',
  /** PLACEHOLDER — awaiting the TDLR provider licence number. */
  license: { number: '0000000', placeholder: true },
  timeZone: 'America/Chicago',
  timeZoneLabel: 'CT',
} as const;

/**
 * Set to false to hide the small "sample" tags that mark placeholder content.
 * Left on for the concept review so nothing invented reads as fact.
 */
export const SHOW_PLACEHOLDER_TAGS = true;

/**
 * Section anchors and future routes, referenced by both the navigation and the
 * sections themselves so an id is never written twice.
 * Paths that are not `#` anchors are intentionally unbuilt in this concept and
 * resolve to the branded 404 page.
 */
export const ROUTES = {
  home: '/',
  programsSection: '#programs',
  program: '#program',
  schedule: '#schedule',
  eligibility: '#eligibility',
  faq: '#faq',
  contact: '#contact',
  fees: '/fees',
  policies: '/policies',
  refundPolicy: '/policies#refunds',
  complaints: '/policies#complaints',
  accessibility: '/accessibility',
  privacy: '/privacy',
  about: '/about',
  programs: '/programs',
  findAnAttorney: '/find-an-attorney',
  login: '/login',
  register: '/register',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV: readonly NavLink[] = [
  { label: 'Programs', href: ROUTES.programsSection },
  { label: 'Schedule', href: ROUTES.schedule },
  { label: "Who it's for", href: ROUTES.eligibility },
  { label: 'Questions', href: ROUTES.faq },
  { label: 'Contact', href: ROUTES.contact },
];

export interface FooterColumn {
  title: string;
  links: readonly NavLink[];
}

export const FOOTER_NAV: readonly FooterColumn[] = [
  {
    title: 'Program',
    links: [
      { label: 'All programs', href: ROUTES.programsSection },
      { label: 'Drug Offender Education Program', href: ROUTES.program },
      { label: 'Upcoming classes', href: ROUTES.schedule },
      { label: "Who it's for", href: ROUTES.eligibility },
      { label: 'Fees', href: ROUTES.fees },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Student login', href: ROUTES.login },
      { label: 'Common questions', href: ROUTES.faq },
      { label: 'Find an attorney', href: ROUTES.findAnAttorney },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: ROUTES.privacy },
      { label: 'Refund policy', href: ROUTES.refundPolicy },
      { label: 'Complaint procedure', href: ROUTES.complaints },
      { label: 'Accessibility statement', href: ROUTES.accessibility },
    ],
  },
];
