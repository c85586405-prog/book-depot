import React from 'react';
import { ServiceItem } from '../types';
import { getWhatsAppLink } from '../data/business';
import { 
  BookMarked, 
  GraduationCap, 
  Sparkles, 
  Copy, 
  Truck, 
  PencilRuler, 
  Clock, 
  Check, 
  ArrowRight,
  MessageCircle 
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (serviceId: string) => void;
  compact?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  onSelect,
  compact = false 
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookMarked': return <BookMarked className="w-6 h-6 text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-white" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-white" />;
      case 'Copy': return <Copy className="w-6 h-6 text-white" />;
      case 'Truck': return <Truck className="w-6 h-6 text-white" />;
      case 'PencilRuler': return <PencilRuler className="w-6 h-6 text-white" />;
      default: return <BookMarked className="w-6 h-6 text-white" />;
    }
  };

  const whatsappMsg = `Hello Bankey Bihari Book Depot, I would like to inquire about your "${service.title}" service.`;

  return (
    <div 
      id={`service-card-${service.id}`}
      className={`group bg-white rounded-2xl border border-[#E5DACE] hover:border-[#800020]/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${
        service.highlight ? 'ring-2 ring-[#800020]/15' : ''
      } ${compact ? 'p-5' : 'p-6 sm:p-7'}`}
    >
      <div>
        {/* Header row with Icon & Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#800020] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            {getIcon(service.iconName)}
          </div>
          <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/25">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#2D2926] mb-2 group-hover:text-[#800020] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-[#5D5852] text-sm leading-relaxed mb-4">
          {compact ? service.shortDesc : service.fullDesc}
        </p>

        {/* Key Features */}
        {!compact && service.keyFeatures && (
          <div className="mb-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#5D5852]">
              Key Highlights:
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#2D2926]">
              {service.keyFeatures.slice(0, 4).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check size={15} className="text-[#B8860B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Turnaround Badge */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#2D2926] bg-[#F8F2E9] border border-[#E5DACE] px-3.5 py-2 rounded-xl mb-5">
          <Clock size={14} className="text-[#B8860B] shrink-0" />
          <span><strong>Turnaround:</strong> {service.turnaround}</span>
        </div>
      </div>

      {/* Action CTA buttons */}
      <div className="pt-4 border-t border-[#E5DACE] flex items-center justify-between gap-3">
        {onSelect && (
          <button
            onClick={() => onSelect(service.id)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#800020] hover:text-[#600018] transition-colors cursor-pointer"
          >
            <span>Learn Details</span>
            <ArrowRight size={14} className="text-[#B8860B]" />
          </button>
        )}

        <a
          href={getWhatsAppLink(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-sm transition-all"
        >
          <MessageCircle size={14} />
          <span>Inquire / Order</span>
        </a>
      </div>
    </div>
  );
};
