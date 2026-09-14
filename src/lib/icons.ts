/**
 * Icon vocabulary shared by content and the UI layer.
 *
 * Lives in `lib` (a leaf module) so content files can name an icon without
 * importing a component, and `components/ui/Icon` can map the name to lucide
 * without importing content.
 */
export const ICON_NAMES = [
  'shield-check',
  'video',
  'award',
  'clock',
  'calendar',
  'monitor-check',
  'search',
  'clipboard-check',
  'credit-card',
  'users',
  'file-check',
  'scale',
  'gavel',
  'car',
  'heart-handshake',
  'phone',
  'check',
  'graduation-cap',
  'notebook-pen',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
