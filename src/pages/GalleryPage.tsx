import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { getWhatsAppLink } from '../data/business';
import { 
  Images, 
  MessageCircle, 
  Eye, 
  BookMarked, 
  Sparkles, 
  Copy, 
  Store, 
  Clock, 
  Layers,
  Filter
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const categories = [
    { id: 'all', label: 'All Samples' },
    { id: 'thesis', label: 'Thesis & Dissertations' },
    { id: 'binding', label: 'Hard Binding' },
    { id: 'uv-print', label: 'UV Flatbed Prints' },
    { id: 'xerox', label: 'Bulk Xerox & Notes' },
    { id: 'stationery', label: 'Shop & Supplies' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="gallery-page-container">
      {/* 1. Header Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/25 text-xs font-bold uppercase tracking-wider">
          <Images size={14} className="text-[#B8860B]" />
          <span>Work Showcase & Product Catalog</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
          Sample <span className="text-[#800020]">Gallery</span>
        </h1>
        <p className="text-[#5D5852] text-base sm:text-lg leading-relaxed">
          Explore examples of our hard book binding, university thesis embossing, direct UV acrylic printing, and retail shop supplies at Bankey Bihari Book Depot, Mathura.
        </p>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap" id="gallery-category-filter">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'bg-white text-[#5D5852] border border-[#E5DACE] hover:bg-[#F8F2E9] hover:text-[#2D2926]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 3. Labeled Placeholder Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="gallery-sample-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            className="group bg-white rounded-2xl border border-[#E5DACE] overflow-hidden shadow-xs hover:border-[#800020]/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            {/* Visual Box Container */}
            <div 
              className="relative h-60 bg-gradient-to-br from-[#FDF9F3] to-[#F8F2E9] border-b border-[#E5DACE] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden"
            >
              {/* Subtle patterned backdrop */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#800020_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Category & Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#2D2926] border border-[#E5DACE] shadow-2xs backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#800020] text-white shadow-2xs">
                  {item.badge}
                </span>
              </div>

              {/* Graphic Icon Display */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: item.accentColor }}
                >
                  {item.category === 'thesis' || item.category === 'binding' ? (
                    <BookMarked size={32} />
                  ) : item.category === 'uv-print' ? (
                    <Sparkles size={32} />
                  ) : item.category === 'xerox' ? (
                    <Copy size={32} />
                  ) : (
                    <Store size={32} />
                  )}
                </div>
                <span className="font-heading text-sm font-bold text-[#2D2926] max-w-[220px]" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </span>
              </div>

              {/* Bottom tag inside box */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#5D5852] bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E5DACE]">
                <span className="truncate">{item.material}</span>
                <span className="font-bold text-[#800020] shrink-0">{item.turnaroundTime}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex flex-col justify-between grow space-y-4">
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-[#2D2926] group-hover:text-[#800020] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-[#5D5852] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#E5DACE] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5D5852] hover:text-[#800020] cursor-pointer"
                >
                  <Eye size={14} />
                  <span>Inspect Spec</span>
                </button>

                <a
                  href={getWhatsAppLink(`Hello Bankey Bihari Book Depot, I am interested in ordering or seeing live photo samples of "${item.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xs transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>Request on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Note on Live Samples via WhatsApp */}
      <div className="bg-[#F8F2E9] rounded-2xl border border-[#E5DACE] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-heading text-xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
            Want to see live photographs of recent thesis covers or UV samples?
          </h3>
          <p className="text-sm text-[#5D5852] max-w-2xl">
            Our team on BSA Road can click and send high-resolution photos and video clips of finished binding samples directly on WhatsApp before you place your order.
          </p>
        </div>

        <a
          href={getWhatsAppLink("Hello Bankey Bihari Book Depot, please send me live photo samples of recent hard thesis bindings and rexine colors.")}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-xs transition-colors"
        >
          <MessageCircle size={18} />
          <span>Ask for Live Samples</span>
        </a>
      </div>

      {/* Sample Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#E5DACE] animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E5DACE]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-[#F8F2E9] hover:bg-[#E5DACE] text-[#2D2926] flex items-center justify-center font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#2D2926]">
              <p className="leading-relaxed text-[#5D5852]">{selectedItem.description}</p>
              
              <div className="bg-[#F8F2E9] p-4 rounded-xl border border-[#E5DACE] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-[#5D5852]">Material & Build:</span>
                  <span className="font-semibold text-[#2D2926]">{selectedItem.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#5D5852]">Finishing Style:</span>
                  <span className="font-semibold text-[#2D2926]">{selectedItem.badge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#5D5852]">Turnaround:</span>
                  <span className="font-bold text-[#800020]">{selectedItem.turnaroundTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#5D5852]">Location:</span>
                  <span className="font-semibold text-[#2D2926]">BSA Rd, Anandpuri, Mathura</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppLink(`Hello Bankey Bihari Book Depot, I want to place an order for "${selectedItem.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-xs"
              >
                <MessageCircle size={16} />
                <span>Order on WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedItem(null)}
                className="py-3 px-5 rounded-full border border-[#E5DACE] text-[#2D2926] hover:bg-[#F8F2E9] font-semibold text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
