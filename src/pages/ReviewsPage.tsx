import React, { useState } from 'react';
import { REVIEWS_DATA, REVIEW_STATS } from '../data/reviews';
import { StarRating } from '../components/StarRating';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';
import { 
  Star, 
  CheckCircle2, 
  ThumbsUp, 
  MessageSquareQuote, 
  ShieldCheck, 
  ExternalLink,
  HeartHandshake,
  Clock,
  Sparkles,
  Truck,
  Award
} from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const [filterTopic, setFilterTopic] = useState<string>('all');

  const topics = [
    { id: 'all', label: 'All Reviews (142)' },
    { id: 'thesis', label: 'Thesis & Hard Binding' },
    { id: 'urgent', label: 'Urgent & Home Delivery' },
    { id: 'pricing', label: 'Affordable Rates' },
    { id: 'staff', label: 'Polite Staff' },
  ];

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (filterTopic === 'all') return true;
    if (filterTopic === 'thesis') return r.highlightService.toLowerCase().includes('thesis') || r.highlightService.toLowerCase().includes('binding');
    if (filterTopic === 'urgent') return r.highlightService.toLowerCase().includes('delivery') || r.highlightService.toLowerCase().includes('urgent');
    if (filterTopic === 'pricing') return r.text.toLowerCase().includes('price') || r.text.toLowerCase().includes('rate') || r.text.toLowerCase().includes('reasonable');
    if (filterTopic === 'staff') return r.text.toLowerCase().includes('polite') || r.text.toLowerCase().includes('cooperative') || r.text.toLowerCase().includes('helpful');
    return true;
  });

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="reviews-page-container">
      {/* 1. Header & Rating Scorecard */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/25 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck size={14} className="text-[#800020]" />
          <span>100% Authentic Google Reviews</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
          Customer Reviews & <span className="text-[#800020]">Testimonials</span>
        </h1>
        <p className="text-[#5D5852] text-base sm:text-lg leading-relaxed">
          See why students from GLA University, BSA College, local advocates, and residents rate Bankey Bihari Book Depot a perfect 5.0 stars on Google.
        </p>
      </div>

      {/* 2. Google Rating Hero Scorecard */}
      <div className="bg-white rounded-2xl border border-[#E5DACE] p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Big Score Box */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-3 lg:border-r lg:border-[#E5DACE] lg:pr-8">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="font-heading text-5xl sm:text-6xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                5.0
              </span>
              <div className="text-left">
                <div className="flex text-[#B8860B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#800020] uppercase tracking-wider">
                  Out of 5.0 Stars
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#2D2926]">
              Based on <span className="font-bold text-[#800020]">142 Verified Google Reviews</span>
            </p>
            <p className="text-xs text-[#5D5852]">
              Located on BSA Rd, Anandpuri, Mathura (Uttar Pradesh)
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#F8F2E9] hover:bg-[#E5DACE] text-[#2D2926] text-xs font-bold border border-[#E5DACE] transition-colors"
              >
                <span>View Google Business Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Pillars & Customer Feedback Aspects */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              What Customers Consistently Praise:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] flex items-start gap-3">
                <Award size={18} className="text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926]">Binding & Embossing Precision</h4>
                  <p className="text-[11px] text-[#5D5852]">Golden foil lettering aligns strictly with university and court guidelines.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] flex items-start gap-3">
                <Clock size={18} className="text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926]">On-Time & Same-Day Turnaround</h4>
                  <p className="text-[11px] text-[#5D5852]">Completes critical rush orders within hours before deadline.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] flex items-start gap-3">
                <HeartHandshake size={18} className="text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926]">Polite & Cooperative Staff</h4>
                  <p className="text-[11px] text-[#5D5852]">Helps check margins, formatting errors, and page sequencing patiently.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] flex items-start gap-3">
                <Truck size={18} className="text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926]">Home & Campus Delivery</h4>
                  <p className="text-[11px] text-[#5D5852]">Brings finished thesis and bulk bundles straight to hostels or homes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Filter Topics */}
      <div className="flex items-center justify-center gap-2 flex-wrap" id="review-topic-filters">
        {topics.map((top) => (
          <button
            key={top.id}
            onClick={() => setFilterTopic(top.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filterTopic === top.id
                ? 'bg-[#800020] text-white shadow-xs'
                : 'bg-white text-[#5D5852] border border-[#E5DACE] hover:bg-[#F8F2E9] hover:text-[#2D2926]'
            }`}
          >
            {top.label}
          </button>
        ))}
      </div>

      {/* 4. Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="customer-reviews-grid">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            id={`review-card-${review.id}`}
            className="bg-white rounded-2xl border border-[#E5DACE] p-6 sm:p-7 shadow-xs hover:border-[#800020]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header with Star Rating and Google Badge */}
              <div className="flex items-center justify-between">
                <div className="flex text-[#B8860B] gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#800020] bg-[#B8860B]/10 px-2.5 py-0.5 rounded-full border border-[#B8860B]/25">
                  <CheckCircle2 size={12} />
                  Verified Review
                </span>
              </div>

              {/* Service Tag */}
              <div className="text-xs font-bold text-[#800020]">
                Service: {review.highlightService}
              </div>

              {/* Testimonial Body */}
              <p className="text-[#2D2926] text-xs sm:text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 mt-4 border-t border-[#E5DACE] flex items-center justify-between">
              <div>
                <h4 className="font-heading text-sm font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                  {review.author}
                </h4>
                <p className="text-[11px] text-[#5D5852]">
                  {review.role} • {review.location}
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#800020] bg-[#F8F2E9] px-2.5 py-0.5 rounded-full border border-[#E5DACE]">
                Google
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Review Call to Action */}
      <div className="bg-[#600018] text-white rounded-2xl p-8 text-center space-y-4 border border-[#800020] shadow-sm">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
          Have you used our services recently?
        </h3>
        <p className="text-stone-200 text-sm max-w-xl mx-auto">
          We appreciate honest customer feedback. If we helped you with your thesis, UV printing, or stationery, please consider leaving a review on Google.
        </p>
        <div className="pt-2 flex justify-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B8860B] text-black hover:bg-amber-400 font-bold text-sm shadow-md transition-colors"
          >
            <span>Write a Google Review</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
