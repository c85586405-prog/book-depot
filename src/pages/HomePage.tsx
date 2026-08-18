import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, getCallLink, getWhatsAppLink } from '../data/business';
import { SERVICES_DATA } from '../data/services';
import { REVIEWS_DATA } from '../data/reviews';
import { StarRating } from '../components/StarRating';
import { ContactButtons } from '../components/ContactButtons';
import { ServiceCard } from '../components/ServiceCard';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { 
  CheckCircle2, 
  Clock, 
  Truck, 
  Award, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
  // Top 4 services to show on Home
  const featuredServices = SERVICES_DATA.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24" id="home-page-container">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#E5DACE]" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Star Rating Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F2E9] border border-[#E5DACE] shadow-xs">
                <StarRating size="sm" showVerified={true} />
              </div>
            </div>

            {/* Shop Name & Main Title */}
            <div className="space-y-3">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#800020]">
                Local Stationery & Printing Master Craftsmen in Mathura
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D2926] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Bankey Bihari <span className="text-[#800020]">Book Depot</span>
              </h1>
              <p className="font-heading text-lg sm:text-2xl text-[#800020] font-semibold italic underline decoration-[#B8860B] underline-offset-8" style={{ fontFamily: 'Georgia, serif' }}>
                “Mathura's Trusted Name in Printing & Binding”
              </p>
            </div>

            {/* Sub-headline description */}
            <p className="text-[#5D5852] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Specialists in university thesis hard binding, golden foil embossing, high-definition UV printing, high-speed Xerox photocopying, and student stationery. Proudly delivering to homes, hostels, and offices across Mathura.
            </p>

            {/* Main Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <ContactButtons variant="hero" />
            </div>

            {/* Key trust bullets under hero */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#5D5852] font-medium">
              <span className="flex items-center gap-1.5">
                <Zap size={16} className="text-[#B8860B]" />
                Same-Day Urgent Binding
              </span>
              <span className="flex items-center gap-1.5">
                <Truck size={16} className="text-[#B8860B]" />
                Doorstep Delivery in Mathura
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#B8860B]" />
                BSA Rd, Anandpuri
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. URGENT JOB NOTICE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="urgent-submission-banner">
        <div className="bg-[#800020] text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#600018] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8860B] text-black text-xs font-bold uppercase tracking-wider">
              <Clock size={14} /> Urgent Academic Deadline?
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Need Same-Day Hard Thesis Binding or Bulk Printouts Today?
            </h2>
            <p className="text-stone-200 text-sm max-w-2xl">
              Send your PDF files directly to our WhatsApp. We format, print on executive bond paper, hot-foil emboss the cover, and deliver finished copies in Mathura.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppLink("Hello, I need urgent same-day thesis / document binding today.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md text-sm transition-transform active:scale-98"
            >
              <MessageCircle size={18} />
              <span>Send PDF on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="featured-services-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#800020] mb-2">
              <Sparkles size={14} className="text-[#B8860B]" />
              What We Do Best
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              Core Printing & Binding Services
            </h2>
            <p className="text-[#5D5852] text-sm sm:text-base mt-1 max-w-xl">
              Precision finishing for university research, court case files, institutional documents, and everyday supplies.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#800020] hover:text-[#600018] hover:underline cursor-pointer"
          >
            <span>View all 6 services with specifications</span>
            <ArrowRight size={16} className="text-[#B8860B]" />
          </button>
        </div>

        {/* 4 Clickable Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(id) => {
                if (onSelectService) onSelectService(id);
                onNavigate('services');
              }}
            />
          ))}
        </div>

        {/* Explore more button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white font-bold text-sm transition-all cursor-pointer shadow-xs"
          >
            <span>Explore All Services & UV Printing Details</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 4. WHY CHOOSE US STRIP */}
      <section className="bg-[#F8F2E9] py-12 sm:py-16 border-y border-[#E5DACE]" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              Why Mathura Trusts Bankey Bihari Book Depot
            </h2>
            <p className="text-[#5D5852] text-sm mt-2">
              Consistently rated 5.0 stars on Google by Ph.D. scholars, advocates, students, and local institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#B8860B]/15 text-[#800020] flex items-center justify-center font-bold">
                <Award size={22} className="text-[#800020]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                Pristine Binding Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
                Machine-stitched rexine covers with razor-sharp hot foil golden lettering that adheres to university formatting standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#B8860B]/15 text-[#800020] flex items-center justify-center font-bold">
                <Clock size={22} className="text-[#800020]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                On-Time Fast Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
                Emergency express binding in 2–4 hours. We never let you miss an academic or administrative deadline.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#B8860B]/15 text-[#800020] flex items-center justify-center font-bold">
                <Users size={22} className="text-[#800020]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                Polite & Cooperative Staff
              </h3>
              <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
                Helpful guidance with document formatting, page order verification, and transparent student-friendly pricing.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#B8860B]/15 text-[#800020] flex items-center justify-center font-bold">
                <Truck size={22} className="text-[#800020]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                Mathura Home Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
                Direct doorstep dispatch to your hostel, residence, or chamber in Mathura with safe weather-sealed packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="interactive-calculator-home">
        <QuoteCalculator />
      </section>

      {/* 6. TESTIMONIALS PREVIEW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials-preview-section">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <StarRating size="sm" showVerified={false} />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              What Real Customers Say in Mathura
            </h2>
          </div>

          <button
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#800020] hover:underline cursor-pointer"
          >
            <span>Read all 142 reviews</span>
            <ArrowRight size={16} className="text-[#B8860B]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <StarRating size="sm" showCount={false} showVerified={false} />
                  <span className="text-[11px] font-bold text-[#800020] bg-[#B8860B]/10 px-2.5 py-0.5 rounded-full border border-[#B8860B]/25">
                    Verified Customer
                  </span>
                </div>
                <p className="text-[#2D2926] text-xs sm:text-sm italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5DACE] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2D2926]">{review.author}</h4>
                  <p className="text-[11px] text-[#5D5852]">{review.role} • {review.location}</p>
                </div>
                <span className="text-[11px] text-[#800020] font-bold">
                  {review.highlightService}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. QUICK CONTACT & LOCATION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-contact-strip">
        <div className="bg-[#600018] text-white rounded-2xl p-8 sm:p-10 border border-[#800020] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Visit Us on BSA Road or Message on WhatsApp
            </h2>
            <p className="text-stone-300 text-sm max-w-xl">
              {BUSINESS_INFO.address}. Open daily until 9:00 PM. Same-day turnaround and home delivery across Mathura.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-amber-300 font-semibold">
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-[#B8860B]" /> 084290 92733
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#B8860B]" /> Open Daily until 9 PM
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto justify-center">
            <a
              href={getCallLink()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#800020] hover:bg-[#FDF9F3] font-bold text-sm shadow-md w-full sm:w-auto transition-colors"
            >
              <Phone size={16} />
              <span>Call 084290 92733</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-md w-full sm:w-auto transition-colors"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
