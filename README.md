# PH Substance Abuse Solutions — homepage concept

A week-one design concept for the **PH Substance Abuse Solutions** website, built on the stack the
American Web Guild proposal commits to, so nothing is thrown away when Phase 1 continues.

This is **one page**. The student portal, instructor tools and administrative panel described in the
proposal are later phases. Links to pages that do not exist yet resolve to a branded 404 that says so.

> **Not for publication.** The page contains placeholder photography taken from reference websites
> and a placeholder TDLR licence number. Both must be replaced before this is shown publicly.
> `src/app/robots.ts` disallows indexing while that is true.

## Run it

```bash
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server on http://localhost:3000 |
| `npm run check` | The full gate: Biome, TypeScript, tests, colour contrast |
| `npm run build` | Production build. `/` must stay static |
| `npm run test` | Vitest only |
| `npm run check:contrast` | Colour contrast audit only |

## What is on the page

A standing TDLR notice, then: hero, at a glance, programs, how it works, upcoming classes, what the
program covers, who it is for, reviews, find an attorney, questions, and a closing call to action.

The structure follows the two Texas providers Patricia Haynes gave as references —
texascourtclasses.com and texasdwiclasses.com. Both open with a notice of the legal basis for
teaching court-ordered classes online, lead with a photographic hero carrying tick-list proof
points, present courses as picture cards with a format badge, and show star-rated reviews. The copy
and branding here are original.

## Architecture

Layers import in one direction only, and Biome fails the build if that is broken:

```
app/ (routes, composition)  →  components/sections  →  components/{ui,motion,interactive}  →  lib/
content/ (data)             →  imported only by app/page.tsx and app/layout.tsx
```

Rules a second developer needs to know:

- **`app/page.tsx` is the only module that reads content.** Sections are pure server components that
  receive typed props. When Payload replaces `content/home.ts` in Phase 1, only that file changes.
- **Everything is a server component** unless it owns state, needs a browser API, or attaches GSAP.
  There are seven client files: `SmoothScroll`, `RevealController`, `HeroIntro`, `StepsRail`,
  `HeaderChrome`, `MobileMenu`, `FaqAccordion`.
- **JavaScript targets elements through `data-*` attributes**, never class names. A section opts into
  an animation by writing `data-reveal`; it never imports GSAP.
- **Colours, type sizes and spacing live only in `src/app/globals.css`.** No hex value belongs in a
  component.
- **Dates, times and money are formatted on the server** (`lib/format.ts` is `server-only`), so no
  client component runs `Intl` and hydration cannot disagree.
- **Initial animation states are set in effects, never in CSS.** Without JavaScript, or with reduced
  motion, the page renders complete rather than blank.

## Accessibility

Built to WCAG 2.1 AA. Biome runs the accessibility rules as errors, and `npm run check` includes a
contrast audit of every colour pair the design uses — all 19 pass. Verified by hand: tab order from
the skip link through to the footer with a visible focus ring, the FAQ operable by Enter and Space
with `aria-expanded` and a labelled panel, and the mobile sheet trapping focus, closing on Escape,
restoring scrolling and returning focus to its trigger.

Set `prefers-reduced-motion: reduce`, or load `/?motion=reduce` in development, and all motion stops:
no smooth scrolling, no split headline, no count-ups, everything visible and static.

## Performance

Measured against the production build in a browser:

| Asset | Transferred |
|---|---|
| JavaScript | 197 KB |
| Fonts (Source Serif 4 + Manrope) | 74 KB |
| Images | 42 KB |
| CSS | 8 KB |

The framework floor is about 114 KB of that JavaScript: react-dom is 70 KB and the Next.js App Router
runtime is 44 KB. GSAP, its ScrollTrigger and SplitText plugins, and Lenis account for most of the
rest, and they are deliberate choices. `/` is fully static and every image is served through
`next/image` with intrinsic dimensions, so the page has no layout shift.

## Placeholders

Real: PHSA's phone, email and domain. Still placeholder, each carrying a visible **sample** tag on
the page (switch them off with `SHOW_PLACEHOLDER_TAGS` in `src/lib/site.ts`):

| Placeholder | Where |
|---|---|
| TDLR provider licence number | `src/lib/site.ts` |
| Class dates, seat counts and the $110 fee | `src/content/home.ts` |
| Three student reviews | `src/content/home.ts` |
| TDLR complaint notice wording | `src/components/layout/SiteFooter.tsx` |
| Four photographs | `src/assets/placeholders/` — see `CREDITS.md` there |

To swap the photography, drop the client's files into `src/assets/placeholders/` under the same four
names and update the alt text in `src/content/images.ts`. No component changes.

## Decisions

**Biome, not ESLint.** TypeScript 7 ships no JavaScript compiler API, and `typescript-eslint` requires
TypeScript below 6.1, so ESLint cannot type-check this project at all. Biome parses TypeScript itself
and carries the Next, React and accessibility rule sets.

**Navy and gold.** Chosen after looking at how the institutions students already trust present
themselves: Yale, Oxford, Berkeley and Notre Dame all lead with a deep blue plus gold, and blue
dominates the large course platforms. It also separates PHSA from the Texas providers nearby, which
use red, rust and royal blue. Both accent tones were darkened during the contrast audit.

**Source Serif 4, not Fraunces.** Fraunces was requested with three variable axes and shipped 118 KB,
heavier than react-dom, for decorative axes the design pinned and never varied. Source Serif 4 is
drawn for screen reading, reads as institutional rather than editorial, and costs 50 KB.

**Lenis options are swapped, not the component tree.** Under reduced motion the same provider renders
with smoothing switched off. Swapping the wrapper out instead would change the element type after
hydration and remount every child.

**The mobile sheet listens for the dialog's own `close` event.** React's `onClose` does not fire for
it, and without a native listener the page stayed scroll-locked after the sheet closed.

**Reviews, dates and fees are visibly marked as samples.** PHSA is launching, so it has no reviews and
no published schedule yet. Nothing invented is presented as fact.
