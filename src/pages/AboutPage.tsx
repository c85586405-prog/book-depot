import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, getCallLink, getWhatsAppLink } from '../data/business';
import { StarRating } from '../components/StarRating';
import { 
  BookOpen, 
  ShieldCheck, 
  Users, 
  Clock, 
  MapPin, 
  Sparkles, 
  Phone, 
  MessageCircle,
  Award,
  CheckCircle2,
  HeartHandshake,
  Printer
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="about-page-container">
      {/* 1. Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/25 text-xs font-bold uppercase tracking-wider">
          <BookOpen size={14} className="text-[#B8860B]" />
          <span>About Bankey Bihari Book Depot</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
          Mathura's Dependable Center for <span className="text-[#800020]">Printing, Binding & Stationery</span>
        </h1>
        <p className="text-[#5D5852] text-base sm:text-lg leading-relaxed">
          Situated on BSA Road in Anandpuri, we have built a reputation across Mathura for meticulous bookbinding, urgent thesis preparation, high-speed photocopying, and genuine local hospitality.
        </p>
      </div>

      {/* 2. Main Narrative & Heritage Box */}
      <div className="bg-white rounded-2xl border border-[#E5DACE] p-6 sm:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-[#5D5852] leading-relaxed text-sm sm:text-base">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#800020]" style={{ fontFamily: 'Georgia, serif' }}>
              Rooted in Mathura's Student & Professional Community
            </h2>
            
            <p>
              At <strong className="text-[#2D2926]">Bankey Bihari Book Depot</strong>, we believe every piece of academic research, legal petition, and organizational document represents someone's months of dedication. That is why we treat every binding job — whether a single Ph.D. thesis or hundreds of coaching modules — with the highest level of craftsmanship.
            </p>

            <p>
              Located conveniently on <strong className="text-[#2D2926]">BSA Road, Anandpuri, Mathura</strong>, our workshop serves scholars and students from GLA University, BSA College, Dr. B.R. Ambedkar University, Sanskrit Sansthan, advocates practicing at Mathura District Court, and local coaching institutions.
            </p>

            <p>
              What sets us apart is our <em>unwavering punctuality, polite and cooperative staff</em>, and our willingness to go the extra mile with <strong className="text-[#2D2926]">same-day urgent turnaround</strong> and <strong className="text-[#2D2926]">doorstep home delivery across Mathura</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="p-3.5 rounded-xl bg-[#F8F2E9] border border-[#E5DACE] inline-flex items-center gap-3">
                <StarRating size="md" showVerified={true} />
              </div>
            </div>
          </div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-5 bg-[#F8F2E9] rounded-2xl border border-[#E5DACE] p-6 sm:p-8 space-y-4">
            <h3 className="font-heading text-xl font-bold text-[#2D2926] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <ShieldCheck className="text-[#800020]" size={22} />
              Our Core Promises
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#5D5852]">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2D2926] block">Strict University Compliance:</span>
                  <span>Accurate margins, gold foil lettering fonts, and thesis structuring standards.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2D2926] block">Transparent, Student-Friendly Rates:</span>
                  <span>No hidden charges. Special bulk rates for student projects and coaching institutes.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2D2926] block">Polite, Cooperative Guidance:</span>
                  <span>We help you review PDF page sequencing and resolve formatting queries patiently.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2D2926] block">Home Delivery Convenience:</span>
                  <span>Safe doorstep delivery to your home, hostel, or office in Mathura.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Workshop Facilities & Technology */}
      <div className="space-y-6" id="workshop-facilities">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
            Our Workshop Standards & Equipment
          </h2>
          <p className="text-[#5D5852] text-sm mt-1">
            Combining traditional artisanal binding techniques with modern digital high-speed equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DACE] space-y-3 shadow-xs hover:border-[#800020]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center text-[#800020] font-bold">
              <Printer size={22} />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              High-Speed Digital Presses
            </h3>
            <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
              Industrial multi-function laser presses capable of printing thousands of clean double-sided pages per hour at 1200 DPI resolution.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DACE] space-y-3 shadow-xs hover:border-[#800020]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center text-[#800020] font-bold">
              <Sparkles size={22} />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              Hot Foil Gold Embossing
            </h3>
            <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
              Precision temperature-controlled gold and silver foil machines ensuring sharp letter definition that will never flake off.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DACE] space-y-3 shadow-xs hover:border-[#800020]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center text-[#800020] font-bold">
              <HeartHandshake size={22} />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              Hand-Sewn Spine Reinforcement
            </h3>
            <p className="text-xs sm:text-sm text-[#5D5852] leading-relaxed">
              Heavy gauge thread sewing and reinforced spine cloth backing for thick registers and archival documents designed to last decades.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Location & Contact Banner */}
      <div className="bg-[#600018] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#800020] shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Located on BSA Road, Anandpuri, Mathura
          </h3>
          <p className="text-stone-200 text-sm max-w-xl">
            Open daily until 9:00 PM. Stop by in person or get in touch on WhatsApp for instant assistance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 rounded-full bg-[#B8860B] text-black hover:bg-amber-400 font-bold text-sm shadow-md transition-colors cursor-pointer"
          >
            Visit Contact & Map Page
          </button>
        </div>
      </div>
    </div>
  );
};
