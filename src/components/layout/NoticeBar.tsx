import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';

interface NoticeBarProps {
  children: string;
}

/**
 * Standing notice above the header.
 *
 * Both provider sites PHSA referenced open with a band stating the legal
 * basis for teaching these classes online, because it is the first thing a
 * court-ordered student needs to trust.
 */
export function NoticeBar({ children }: NoticeBarProps) {
  return (
    <div className="on-dark bg-navy-700 py-2.5 text-white">
      <Container className="flex items-center justify-center gap-2.5 text-center">
        <Icon name="shield-check" size={16} className="shrink-0 text-gold-200" />
        <p className="text-sm">{children}</p>
      </Container>
    </div>
  );
}
