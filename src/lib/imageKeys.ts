/**
 * Image vocabulary shared by content and the sections that render it.
 *
 * Lives in `lib` (a leaf module) rather than being derived from
 * `content/images.ts`, because that module is `server-only` and
 * `content/types.ts` is imported by client components. Deriving the union from
 * it would pull a server module into the client bundle. Same reasoning as
 * `lib/icons.ts`.
 */
export const IMAGE_KEYS = [
  'hero',
  'programDoep',
  'programDwiEducation',
  'programDwiIntervention',
  'programVictimImpact',
  'programMinorsAlcohol',
  'programEvaluation',
  'stepRegister',
  'stepEquipment',
  'stepAttend',
  'programDetails',
  'testimonials',
  'attorney',
] as const;

export type ImageKey = (typeof IMAGE_KEYS)[number];
