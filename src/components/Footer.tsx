import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, getCallLink, getWhatsAppLink } from '../data/business';
import { StarRating } from './StarRating';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  BookOpen, 
  Truck, 
  CheckCircle, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BSA Rd, Anandpuri",
      "addressLocality": "Mathura",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "281001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.4858,
      "longitude": 77.6714
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "142",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹"
  };

  return (
    <footer className="bg-[#2D2926] text-[#FDF9F3] border-t border-[#800020]" id="site-footer">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Top Footer Banner */}
      <div className="bg-[#600018] py-8 px-4 sm:px-6 lg:px-8 border-b border-[#800020]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8860B]/20 text-[#B8860B] text-xs font-bold uppercase tracking-wider mb-2">
              <Truck size={14} /> Home Delivery in Mathura
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Have an urgent thesis or large printing job?
            </h3>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              Send your PDF files directly on WhatsApp. We print, bind, emboss, and deliver right to your doorstep.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getCallLink()}
              id="footer-banner-call-btn"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#800020] font-bold text-sm hover:bg-[#FDF9F3] transition-colors shadow-sm"
            >
              <Phone size={16} />
              <span>Call {BUSINESS_INFO.displayPhone}</span>
            </a>
            <a
              href={getWhatsAppLink("Hello Bankey Bihari Book Depot, I have an urgent printing/binding requirement.")}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-banner-wa-btn"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Reputation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#800020] flex items-center justify-center text-white shadow-sm">
                <BookOpen size={22} />
              </div>
              <span className="font-heading text-lg font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Bankey Bihari <span className="text-[#B8860B]">Book Depot</span>
              </span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Mathura's highly rated center for hard book binding, university thesis printing, UV flatbed printing, bulk Xerox, and student stationery.
            </p>
            <div className="pt-2">
              <div className="p-3 rounded-xl bg-black/30 border border-[#800020]/40 space-y-1.5">
                <StarRating size="sm" showVerified={true} className="text-white" />
                <p className="text-xs text-stone-400">
                  Verified Google Customer Rating · 142 Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-[#B8860B] mb-4 flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="w-2 h-2 rounded-full bg-[#B8860B]"></span>
              Navigation Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle size={14} className="text-[#B8860B]" /> Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle size={14} className="text-[#B8860B]" /> All 6 Services & Specifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle size={14} className="text-[#B8860B]" /> Sample Work Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle size={14} className="text-[#B8860B]" /> Customer Testimonials (5.0★)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle size={14} className="text-[#B8860B]" /> About Our Shop & Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle size={14} className="text-[#B8860B]" /> Contact, Map & Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h4 className="font-heading text-base font-semibold text-[#B8860B] mb-4 flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="w-2 h-2 rounded-full bg-[#B8860B]"></span>
              Core Specialities
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li className="flex items-center gap-2">
                <span className="text-[#B8860B] font-bold">•</span>
                <span>Hard Thesis & Dissertation Binding</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8860B] font-bold">•</span>
                <span>Hot Foil Golden Letter Embossing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8860B] font-bold">•</span>
                <span>High Definition UV Flatbed Printing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8860B] font-bold">•</span>
                <span>Bulk Xerox & Spiral Book Binding</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8860B] font-bold">•</span>
                <span>Home & Campus Delivery in Mathura</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B8860B] font-bold">•</span>
                <span>Study Tables & Office Stationery</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Timings */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold text-[#B8860B] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="w-2 h-2 rounded-full bg-[#B8860B]"></span>
              Shop Location & Hours
            </h4>
            
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={17} className="text-[#B8860B] shrink-0" />
                <a href={getCallLink()} className="hover:text-amber-300 font-semibold transition-colors">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={17} className="text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-amber-300 block">{BUSINESS_INFO.hours}</span>
                  <span className="text-xs text-stone-400">
                    *Confirm early morning opening timings by calling
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#B8860B] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Copyright Row */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Mathura, Uttar Pradesh 281001</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-500" />
              Verified Local Business
            </span>
            <span>•</span>
            <span>Fast Turnaround</span>
            <span>•</span>
            <span>Quality Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
