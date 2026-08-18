import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getCallLink, getWhatsAppLink } from '../data/business';

interface ContactButtonsProps {
  variant?: 'header' | 'hero' | 'floating' | 'card';
  customMessage?: string;
  className?: string;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({
  variant = 'hero',
  customMessage,
  className = ''
}) => {
  const callUrl = getCallLink();
  const waUrl = getWhatsAppLink(customMessage);

  if (variant === 'floating') {
    return (
      <div 
        id="floating-quick-actions" 
        aria-label="Quick contact actions"
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:hidden"
      >
        <a
          href={callUrl}
          id="floating-call-btn"
          className="flex items-center justify-center w-13 h-13 rounded-full bg-[#800020] text-white shadow-lg shadow-stone-900/30 active:scale-95 transition-transform"
          aria-label="Call Bankey Bihari Book Depot"
        >
          <Phone size={22} className="stroke-[2.2]" />
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/30 active:scale-95 transition-transform"
          aria-label="WhatsApp Bankey Bihari Book Depot"
        >
          <MessageCircle size={24} className="stroke-[2.2]" />
        </a>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`} id="header-contact-buttons">
        <a
          href={callUrl}
          id="header-call-btn"
          className="flex items-center gap-1.5 px-4 py-2 bg-[#800020] text-white rounded-full text-xs font-bold hover:bg-[#600018] transition-all shadow-md"
        >
          <Phone size={14} className="stroke-[2.2]" />
          <span className="hidden sm:inline">{BUSINESS_INFO.displayPhone}</span>
          <span className="sm:hidden">Call</span>
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="header-whatsapp-btn"
          className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white rounded-full text-xs font-bold hover:bg-[#128C7E] transition-all shadow-md"
        >
          <MessageCircle size={15} className="stroke-[2.2]" />
          <span>WhatsApp</span>
        </a>
      </div>
    );
  }

  // Default 'hero' or 'card' style
  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`} id="action-contact-buttons">
      <a
        href={callUrl}
        id="btn-call-shop"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold bg-[#800020] hover:bg-[#600018] text-white shadow-md transition-all transform active:scale-98"
      >
        <Phone size={18} />
        <span>Call {BUSINESS_INFO.displayPhone}</span>
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-whatsapp-chat"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md transition-all transform active:scale-98"
      >
        <MessageCircle size={18} />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
};
