import {
  Award,
  Calendar,
  Car,
  Check,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileCheck,
  Gavel,
  GraduationCap,
  HeartHandshake,
  MonitorCheck,
  NotebookPen,
  Phone,
  Quote,
  Scale,
  Search,
  ShieldCheck,
  Star,
  Users,
  Video,
} from 'lucide-react';
import type { IconName } from '@/lib/icons';

const ICONS = {
  'shield-check': ShieldCheck,
  video: Video,
  award: Award,
  clock: Clock,
  calendar: Calendar,
  'monitor-check': MonitorCheck,
  search: Search,
  'clipboard-check': ClipboardCheck,
  'credit-card': CreditCard,
  users: Users,
  'file-check': FileCheck,
  scale: Scale,
  gavel: Gavel,
  car: Car,
  'heart-handshake': HeartHandshake,
  phone: Phone,
  check: Check,
  'graduation-cap': GraduationCap,
  'notebook-pen': NotebookPen,
  star: Star,
  quote: Quote,
} as const satisfies Record<IconName, unknown>;

interface IconProps {
  name: IconName;
  className?: string;
  /** Stroke size in pixels; the lucide default of 24 suits body text. */
  size?: number;
}

/**
 * Renders an icon by content name, so content files stay free of components.
 * Icons are always decorative: lucide marks them `aria-hidden` and the
 * surrounding text carries the meaning.
 */
export function Icon({ name, className, size = 20 }: IconProps) {
  const Glyph = ICONS[name];
  return <Glyph className={className} size={size} strokeWidth={1.75} aria-hidden="true" />;
}
