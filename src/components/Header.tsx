import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, getCallLink, getWhatsAppLink } from '../data/business';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  BookOpen, 
  Star,
  ChevronRight,
  Truck
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full" id="site-main-header">
      {/* Top Notification / Information Strip */}
      <div 
        id="top-info-bar"
        className="bg-[#600018] text-[#FDF9F3] text-xs py-1.5 px-4 border-b border-[#800020]"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-stone-200">
              <MapPin size={13} className="text-[#B8860B]" />
              <span>BSA Rd, Anandpuri, Mathura</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-200">
              <Clock size={13} className="text-[#B8860B]" />
              <span>Open Daily · Closes 9:00 PM</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-stone-200">
              <Truck size={13} className="text-[#B8860B]" />
              <span>Home Delivery Available Across Mathura</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <span className="flex items-center gap-1 font-semibold text-amber-300">
              <Star size={13} className="fill-amber-300" />
              <span>5.0 ★ Google Rating (142 Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-white transition-all duration-200 border-b border-[#E5DACE] ${
        isScrolled ? 'shadow-sm py-2.5' : 'py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#800020] flex items-center justify-center text-white shadow-sm group-hover:bg-[#600018] transition-colors">
              <BookOpen size={22} className="stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="block font-heading text-lg sm:text-2xl font-bold text-[#800020] tracking-tight leading-tight transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                Bankey Bihari <span className="text-[#B8860B]">Book Depot</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-semibold text-[#5D5852] opacity-80">
                Stationery & Printing Excellence
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium" id="desktop-nav-menu">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#800020] border-b-2 border-[#800020] pb-1 font-bold'
                      : 'text-[#2D2926] hover:text-[#800020]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons (Call & WhatsApp) */}
          <div className="flex items-center gap-2.5">
            <a
              href={getCallLink()}
              id="header-cta-call"
              className="flex items-center gap-2 px-4 py-2 bg-[#800020] text-white rounded-full text-xs font-bold hover:bg-[#600018] transition-all shadow-md"
              title="Call Shop"
            >
              <Phone size={14} className="stroke-[2.2]" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            <a
              href={getWhatsAppLink("Hello Bankey Bihari Book Depot, I have an inquiry for printing / thesis binding.")}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-whatsapp"
              className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-xs font-bold hover:bg-[#128C7E] transition-all shadow-md"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} className="stroke-[2.2]" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2D2926] hover:text-[#800020] hover:bg-[#F8F2E9] transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FDF9F3] border-b border-[#E5DACE] shadow-xl px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top duration-200"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#5D5852] px-3 py-1">
            Menu Navigation
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-[#800020] text-white'
                      : 'bg-white text-[#2D2926] border border-[#E5DACE] hover:bg-[#F8F2E9]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={14} className={isActive ? 'text-white' : 'text-[#B8860B]'} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E5DACE] grid grid-cols-1 gap-2">
            <a
              href={getCallLink()}
              id="mobile-drawer-call-btn"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#800020] text-white font-semibold text-sm shadow-md"
            >
              <Phone size={16} />
              <span>Call 084290 92733</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-drawer-wa-btn"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle size={16} />
              <span>Send Message on WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 text-center text-xs text-[#5D5852]">
            📍 BSA Rd, Anandpuri, Mathura · Open until 9 PM
          </div>
        </div>
      )}
    </header>
  );
};
