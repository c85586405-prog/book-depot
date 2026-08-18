import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { FAQS_DATA } from '../data/faq';
import { getWhatsAppLink, BUSINESS_INFO } from '../data/business';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { 
  BookMarked, 
  GraduationCap, 
  Sparkles, 
  Copy, 
  Truck, 
  PencilRuler, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Tag
} from 'lucide-react';

interface ServicesPageProps {
  initialSelectedId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ initialSelectedId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialSelectedId || 'hard-binding');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookMarked': return <BookMarked className="w-6 h-6 text-[#800020]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#800020]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#800020]" />;
      case 'Copy': return <Copy className="w-6 h-6 text-[#800020]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#800020]" />;
      case 'PencilRuler': return <PencilRuler className="w-6 h-6 text-[#800020]" />;
      default: return <BookMarked className="w-6 h-6 text-[#800020]" />;
    }
  };

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <div className="space-y-16 sm:space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="services-page-container">
      {/* 1. Header Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/25 text-xs font-bold uppercase tracking-wider">
          Complete Printing, Binding & Stationery Solutions
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
          Our Specialized Craft in <span className="text-[#800020]">Mathura</span>
        </h1>
        <p className="text-[#5D5852] text-base sm:text-lg leading-relaxed">
          From university thesis submissions to high-speed commercial Xerox and custom UV flatbed printing — every job is executed with master craftsmanship, affordable rates, and on-time turnaround.
        </p>
      </div>

      {/* 2. Interactive Service Navigator Tabs */}
      <div className="bg-[#F8F2E9] p-2 rounded-2xl border border-[#E5DACE] shadow-xs flex items-center gap-2 overflow-x-auto scrollbar-none" id="services-nav-tabs">
        {SERVICES_DATA.map((srv) => {
          const isSelected = srv.id === selectedServiceId;
          return (
            <button
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'text-[#5D5852] hover:bg-white hover:text-[#2D2926]'
              }`}
            >
              <span>{srv.title.split('&')[0].trim()}</span>
              {srv.highlight && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${isSelected ? 'bg-[#B8860B] text-black' : 'bg-[#E5DACE] text-[#2D2926]'}`}>
                  Top
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 3. Detailed Active Service Spotlight */}
      <div className="bg-white rounded-2xl border border-[#E5DACE] shadow-xs p-6 sm:p-10" id="service-detail-spotlight">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 border border-[#B8860B]/25 flex items-center justify-center">
                {getIcon(activeService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                  {activeService.tag}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                  {activeService.title}
                </h2>
              </div>
            </div>

            <p className="text-[#5D5852] text-sm sm:text-base leading-relaxed">
              {activeService.fullDesc}
            </p>

            {/* Ideal for box */}
            <div className="p-4 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                Ideal For:
              </span>
              <p className="text-sm font-semibold text-[#2D2926]">
                {activeService.idealFor}
              </p>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D2926]">
                Included Features & Standards:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5D5852]">
                {activeService.keyFeatures.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#B8860B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Specifications & Actions column */}
          <div className="lg:col-span-5 bg-[#F8F2E9] rounded-2xl border border-[#E5DACE] p-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                Turnaround & Guarantee
              </span>
              <div className="p-3.5 rounded-xl bg-white border border-[#E5DACE] flex items-center gap-3">
                <Clock size={20} className="text-[#B8860B] shrink-0" />
                <div>
                  <span className="text-xs text-[#5D5852] block">Expected Readiness:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#800020]">
                    {activeService.turnaround}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Specs Table */}
            {activeService.specs && (
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                  Technical Specifications
                </span>
                <div className="bg-white rounded-xl border border-[#E5DACE] divide-y divide-[#E5DACE] text-xs">
                  {activeService.specs.map((spec, i) => (
                    <div key={i} className="p-2.5 flex justify-between gap-2">
                      <span className="font-semibold text-[#5D5852]">{spec.label}</span>
                      <span className="text-[#2D2926] text-right font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Action buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={getWhatsAppLink(`Hello Bankey Bihari Book Depot, I have an inquiry regarding "${activeService.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle size={16} />
                <span>Order via WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white border border-[#E5DACE] text-[#2D2926] hover:bg-[#FDF9F3] font-semibold text-xs transition-colors"
              >
                <Phone size={14} className="text-[#800020]" />
                <span>Call Shop: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Complete 6 Services Comprehensive Grid */}
      <div className="space-y-8" id="all-six-services-breakdown">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
            Comprehensive Service Directory
          </h2>
          <p className="text-[#5D5852] text-sm mt-1">
            Detailed information for all 6 service lines offered at our Anandpuri, BSA Road workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                service.id === selectedServiceId ? 'border-[#800020] ring-2 ring-[#800020]/20 shadow-md' : 'border-[#E5DACE] hover:border-[#800020]/50'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#B8860B]/10 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F8F2E9] text-[#800020] border border-[#E5DACE]">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="p-2.5 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] text-xs space-y-1">
                  <span className="font-bold text-[#800020] block">Best for:</span>
                  <p className="text-[#5D5852]">{service.idealFor}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5DACE] flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setSelectedServiceId(service.id);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#800020] hover:underline cursor-pointer"
                >
                  View Details
                </button>

                <a
                  href={getWhatsAppLink(`Hello Bankey Bihari Book Depot, I want to inquire about "${service.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors"
                >
                  <MessageCircle size={13} />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Cost & Urgency Estimator */}
      <section id="services-quote-calculator">
        <QuoteCalculator />
      </section>

      {/* 6. Service FAQ Accordion */}
      <div className="bg-white rounded-2xl border border-[#E5DACE] p-6 sm:p-10 space-y-6" id="services-faq-section">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800020]">
          <HelpCircle size={15} className="text-[#B8860B]" />
          <span>Frequently Asked Service Questions</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
          Everything You Need to Know
        </h2>

        <div className="space-y-3 divide-y divide-[#E5DACE]">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = expandedFaqIndex === index;
            return (
              <div key={index} className="pt-3">
                <button
                  onClick={() => setExpandedFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-2 text-left font-heading text-base sm:text-lg font-bold text-[#2D2926] hover:text-[#800020] transition-colors cursor-pointer" style={{ fontFamily: 'Georgia, serif' }}
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp size={18} className="text-[#800020] shrink-0" /> : <ChevronDown size={18} className="text-[#5D5852] shrink-0" />}
                </button>
                {isOpen && (
                  <p className="text-[#5D5852] text-xs sm:text-sm leading-relaxed mt-2 pb-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
