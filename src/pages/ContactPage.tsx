import React, { useState } from 'react';
import { BUSINESS_INFO, getCallLink, getWhatsAppLink } from '../data/business';
import { FAQS_DATA } from '../data/faq';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Truck, 
  HelpCircle,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Thesis & Dissertation Hard Binding',
    message: '',
    homeDelivery: false,
    deliveryArea: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    let text = `*New Customer Enquiry (from Website)*\n`;
    text += `• *Name:* ${formData.name}\n`;
    text += `• *Phone:* ${formData.phone}\n`;
    text += `• *Service Needed:* ${formData.service}\n`;
    if (formData.homeDelivery) {
      text += `• *Home Delivery Requested:* Yes (${formData.deliveryArea || 'Mathura'})\n`;
    } else {
      text += `• *Home Delivery Requested:* No (Shop Pickup)\n`;
    }
    if (formData.message) {
      text += `• *Details/Requirements:* ${formData.message}\n`;
    }

    const waUrl = getWhatsAppLink(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="contact-page-container">
      {/* 1. Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B8860B]/10 text-[#800020] border border-[#B8860B]/25 text-xs font-bold uppercase tracking-wider">
          <MapPin size={14} className="text-[#B8860B]" />
          <span>Get in Touch in Mathura</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
          Contact & <span className="text-[#800020]">Visit Us</span>
        </h1>
        <p className="text-[#5D5852] text-base sm:text-lg leading-relaxed">
          We are ready to assist you with urgent thesis hard binding, UV flatbed printing, bulk Xerox, and stationery supplies. Call, message on WhatsApp, or stop by our shop on BSA Road.
        </p>
      </div>

      {/* 2. Contact Information Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Phone */}
        <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3 hover:border-[#800020]/40 transition-colors">
          <div className="w-11 h-11 rounded-xl bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center text-[#800020]">
            <Phone size={20} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D5852] block">
              Phone (Click to Call)
            </span>
            <a
              href={getCallLink()}
              id="contact-page-call-link"
              className="font-heading text-lg font-bold text-[#2D2926] hover:text-[#800020] transition-colors block mt-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {BUSINESS_INFO.displayPhone}
            </a>
          </div>
          <p className="text-xs text-[#5D5852]">
            Direct shop counter & customer help line
          </p>
        </div>

        {/* Card 2: WhatsApp */}
        <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3 hover:border-[#800020]/40 transition-colors">
          <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#128C7E]">
            <MessageCircle size={22} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D5852] block">
              WhatsApp Chat & PDF Drop
            </span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-page-wa-link"
              className="font-heading text-lg font-bold text-[#128C7E] hover:text-[#075E54] transition-colors block mt-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Send WhatsApp
            </a>
          </div>
          <p className="text-xs text-[#5D5852]">
            Instant digital quote & file preview
          </p>
        </div>

        {/* Card 3: Address */}
        <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3 hover:border-[#800020]/40 transition-colors">
          <div className="w-11 h-11 rounded-xl bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center text-[#800020]">
            <MapPin size={20} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D5852] block">
              Shop Address
            </span>
            <p className="font-heading text-sm font-bold text-[#2D2926] mt-1 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              BSA Rd, Anandpuri, Mathura
            </p>
          </div>
          <p className="text-xs text-[#5D5852]">
            Uttar Pradesh 281001, India
          </p>
        </div>

        {/* Card 4: Hours */}
        <div className="bg-white p-6 rounded-2xl border border-[#E5DACE] shadow-xs space-y-3 hover:border-[#800020]/40 transition-colors">
          <div className="w-11 h-11 rounded-xl bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center text-[#800020]">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D5852] block">
              Working Hours
            </span>
            <p className="font-heading text-sm font-bold text-[#2D2926] mt-1" style={{ fontFamily: 'Georgia, serif' }}>
              Open Daily until 9:00 PM
            </p>
          </div>
          <p className="text-[11px] text-[#5D5852]">
            *Call ahead to confirm exact opening time or Sunday rush orders
          </p>
        </div>
      </div>

      {/* 3. Enquiry Form & Embedded Google Map Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Quick Enquiry Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E5DACE] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="font-heading text-2xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
              Send an Enquiry or Booking Request
            </h2>
            <p className="text-xs sm:text-sm text-[#5D5852]">
              Fill out this simple form to instantly format your order and connect directly to our staff.
            </p>
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#128C7E] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#075E54]">
                <span className="font-bold block">Enquiry prepared!</span>
                Your request has been formatted and opened in WhatsApp. Our team on BSA Road will respond promptly.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" id="quick-enquiry-form">
            <div>
              <label htmlFor="input-name" className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1">
                Your Full Name *
              </label>
              <input
                id="input-name"
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5DACE] bg-[#FDF9F3] text-[#2D2926] focus:bg-white focus:outline-hidden focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
              />
            </div>

            <div>
              <label htmlFor="input-phone" className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1">
                Phone Number (WhatsApp preferred) *
              </label>
              <input
                id="input-phone"
                type="tel"
                required
                placeholder="e.g. 084290 92733 / 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5DACE] bg-[#FDF9F3] text-[#2D2926] focus:bg-white focus:outline-hidden focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
              />
            </div>

            <div>
              <label htmlFor="select-service" className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1">
                Required Service *
              </label>
              <select
                id="select-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5DACE] bg-[#FDF9F3] text-[#2D2926] focus:bg-white focus:outline-hidden focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
              >
                <option value="Thesis & Dissertation Hard Binding">Thesis & Dissertation Hard Binding</option>
                <option value="Urgent Book Hard Binding">Urgent Book Hard Binding (Court/Office/Books)</option>
                <option value="UV Printing on Acrylic/Wood/Boards">UV Printing on Acrylic/Wood/Boards</option>
                <option value="Bulk Xerox Photocopy & Laser Prints">Bulk Xerox Photocopy & Laser Prints</option>
                <option value="Study Tables & Stationery Supplies">Study Tables & Stationery Supplies</option>
                <option value="Home Delivery Enquiry">Home Delivery Enquiry</option>
                <option value="Other Custom Requirement">Other Custom Requirement</option>
              </select>
            </div>

            {/* Home delivery option toggle */}
            <div className="p-4 rounded-xl border border-[#E5DACE] bg-[#F8F2E9] space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-semibold text-[#2D2926]">
                <input
                  type="checkbox"
                  checked={formData.homeDelivery}
                  onChange={(e) => setFormData({ ...formData, homeDelivery: e.target.checked })}
                  className="w-4 h-4 text-[#800020] rounded-sm accent-[#800020]"
                />
                <span className="flex items-center gap-1.5">
                  <Truck size={16} className="text-[#B8860B]" />
                  Request Doorstep Home Delivery in Mathura
                </span>
              </label>

              {formData.homeDelivery && (
                <input
                  type="text"
                  placeholder="Enter Delivery Locality / College Hostel name"
                  value={formData.deliveryArea}
                  onChange={(e) => setFormData({ ...formData, deliveryArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#E5DACE] bg-white text-[#2D2926]"
                />
              )}
            </div>

            <div>
              <label htmlFor="input-message" className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1">
                Project Details / Number of Pages / Deadline
              </label>
              <textarea
                id="input-message"
                rows={3}
                placeholder="Mention number of pages, copies, color pages, or deadline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5DACE] bg-[#FDF9F3] text-[#2D2926] focus:bg-white focus:outline-hidden focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
              ></textarea>
            </div>

            <button
              type="submit"
              id="submit-enquiry-btn"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-xs transition-all cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Submit & Open in WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-[#5D5852]">
              Direct and confidential transmission to Bankey Bihari Book Depot team.
            </p>
          </form>
        </div>

        {/* Right Column: Google Maps & Directions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl border border-[#E5DACE] p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-[#2D2926] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                <MapPin className="text-[#800020]" size={20} />
                Location on BSA Road, Mathura
              </h2>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#800020] hover:underline inline-flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="w-full h-80 rounded-xl overflow-hidden border border-[#E5DACE] relative bg-[#F8F2E9]">
              <iframe
                title="Bankey Bihari Book Depot Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.467472658941!2d77.6713915762031!3d27.485802276310214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737119e7a00001%3A0x9d5e3c834a36fbc6!2sBSA%20Rd%2C%20Anandpuri%2C%20Mathura%2C%20Uttar%20Pradesh%20281001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Landmarks & Directions Helper */}
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#5D5852]">
              <div className="font-bold text-[#2D2926]">Nearby Landmarks:</div>
              <ul className="space-y-1 text-xs text-[#5D5852] list-disc list-inside">
                <li>Situated on the prominent BSA Road corridor in Anandpuri.</li>
                <li>Convenient access for BSA College, GLA University, and Highway students.</li>
                <li>Ample parking space available for two-wheelers in front of the store.</li>
              </ul>
            </div>
          </div>

          {/* Urgent Note Box */}
          <div className="p-5 rounded-2xl bg-[#B8860B]/10 border border-[#B8860B]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#800020] font-bold text-xs uppercase tracking-wider">
              <AlertCircle size={15} className="text-[#B8860B]" />
              <span>Visiting in Person?</span>
            </div>
            <p className="text-xs text-[#2D2926] leading-relaxed">
              We are open daily until 9:00 PM. If you are coming with a USB flash drive or physical documents, feel free to walk directly to our counter or call <strong>084290 92733</strong> if you need help with directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
