import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface StarRatingProps {
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  showVerified?: boolean;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  size = 'md',
  showCount = true,
  showVerified = true,
  className = ''
}) => {
  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div className={`inline-flex items-center gap-1.5 flex-wrap ${className}`} id="star-rating-badge">
      <div className="flex items-center text-[#B8860B] gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={iconSize}
            className="fill-[#B8860B] text-[#B8860B]"
          />
        ))}
      </div>
      <span className={`font-bold text-[#2D2926] ${textSize}`}>
        {BUSINESS_INFO.rating.toFixed(1)}
      </span>
      {showCount && (
        <span className={`text-[#5D5852] ${textSize}`}>
          ({BUSINESS_INFO.reviewCount} Google reviews)
        </span>
      )}
      {showVerified && (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/30">
          <CheckCircle2 size={12} className="text-[#800020]" />
          5.0 Rated
        </span>
      )}
    </div>
  );
};
