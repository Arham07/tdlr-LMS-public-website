import { Star } from 'lucide-react';

interface StarsProps {
  /** Whole stars out of five. */
  rating: number;
}

/**
 * A five-star rating.
 *
 * The stars are decorative; the rating is announced once as text so a screen
 * reader hears "Rated 5 out of 5" rather than five separate star labels.
 */
export function Stars({ rating }: StarsProps) {
  return (
    <p className="flex items-center gap-0.5">
      <span className="sr-only">Rated {rating} out of 5</span>
      {[1, 2, 3, 4, 5].map((position) => (
        <Star
          key={position}
          aria-hidden="true"
          size={16}
          strokeWidth={0}
          className={position <= rating ? 'fill-gold-500' : 'fill-line'}
        />
      ))}
    </p>
  );
}
