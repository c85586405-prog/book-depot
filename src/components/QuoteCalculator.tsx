import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/business';
import { Calculator, MessageCircle, Truck, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const QuoteCalculator: React.FC = () => {
  const [serviceType, setServiceType] = useState<'thesis' | 'hard-binding' | 'xerox' | 'uv' | 'stationery'>('thesis');
  const [pages, setPages] = useState<number>(120);
  const [copies, setCopies] = useState<number>(3);
  const [paperType, setPaperType] = useState<'executive-bond' | 'jk-copier' | 'glossy'>('executive-bond');
  const [isColor, setIsColor] = useState<boolean>(true);
  const [isUrgent, setIsUrgent] = useState<boolean>(true);
  const [wantDelivery, setWantDelivery] = useState<boolean>(true);
  const [deliveryArea, setDeliveryArea] = useState<string>('Anandpuri / BSA Rd Area');

  // Estimate computation logic
  const calculateEstimate = () => {
    let baseBindingPerCopy = 0;
    let printPerPage = 0;
    let estimatedHours = '24 Hours';

    if (serviceType === 'thesis') {
      baseBindingPerCopy = 220; // Rexine with golden foil embossing
      printPerPage = isColor ? 2.5 : 0.8;
      estimatedHours = isUrgent ? '2 - 4 Hours (Urgent Express)' : 'Same Day (Within 8 Hours)';
    } else if (serviceType === 'hard-binding') {
      baseBindingPerCopy = 180;
      printPerPage = isColor ? 2.5 : 0.8;
      estimatedHours = isUrgent ? '3 - 5 Hours' : '24 Hours';
    } else if (serviceType === 'xerox') {
      baseBindingPerCopy = 35; // Spiral / soft binding
      printPerPage = isColor ? 2.0 : (pages * copies > 500 ? 0.6 : 0.75);
      estimatedHours = isUrgent ? 'Immediate / While you wait' : 'Same-Day';
    } else if (serviceType === 'uv') {
      baseBindingPerCopy = 250; // Custom base
      printPerPage = 0;
      estimatedHours = '24 - 48 Hours';
    } else {
      baseBindingPerCopy = 350; // Study table / general stationery
      printPerPage = 0;
      estimatedHours = 'Ready in Stock';
    }

    const printTotal = (pages * printPerPage * copies);
    const bindingTotal = (baseBindingPerCopy * copies);
    const subtotal = Math.round(printTotal + bindingTotal);

    return {
      subtotal,
      estimatedHours,
      summary: `${copies} set(s) of ${pages} pages • ${serviceType.toUpperCase()} • ${isUrgent ? 'Express Urgency' : 'Standard'}`
    };
  };

  const estimate = calculateEstimate();

  const generateWhatsAppMessage = () => {
    const serviceNameMap: Record<string, string> = {
      'thesis': 'Thesis / Dissertation Hard Binding',
      'hard-binding': 'Urgent Hard Book Binding',
      'xerox': 'Bulk Xerox / Laser Printing',
      'uv': 'High-Definition UV Printing',
      'stationery': 'Stationery / Study Supplies'
    };

    let msg = `Hello Bankey Bihari Book Depot (Mathura),\n`;
    msg += `I would like to get a quote and confirm turnaround for:\n`;
    msg += `• Service: ${serviceNameMap[serviceType]}\n`;
    if (serviceType !== 'uv' && serviceType !== 'stationery') {
      msg += `• Total Pages per Copy: ${pages}\n`;
      msg += `• Number of Copies: ${copies}\n`;
      msg += `• Color Requirement: ${isColor ? 'Color & B/W mix' : 'Black & White'}\n`;
      msg += `• Paper Quality: ${paperType}\n`;
    }
    msg += `• Urgency: ${isUrgent ? 'Same-Day Urgent / Express' : 'Standard'}\n`;
    msg += `• Home Delivery in Mathura: ${wantDelivery ? `Yes (${deliveryArea})` : 'No, I will pick up at shop'}\n`;
    msg += `\nPlease let me know the final price and ready time. Thank you!`;

    return msg;
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E5DACE] shadow-sm p-6 sm:p-8" id="quote-calculator-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DACE]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#800020] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator size={14} className="text-[#B8860B]" />
            <span>Interactive Price & Turnaround Estimator</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
            Customize Your Printing & Binding Order
          </h3>
          <p className="text-sm text-[#5D5852] mt-1">
            Configure your project parameters for instant estimated delivery time and export directly to WhatsApp.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 bg-[#F8F2E9] border border-[#E5DACE] px-3.5 py-2 rounded-full text-[#800020] text-xs font-bold">
          <Sparkles size={16} className="text-[#B8860B]" />
          <span>Special Student Rates in Mathura</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-2">
              1. Select Service Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'thesis', label: 'Thesis Binding' },
                { id: 'hard-binding', label: 'Hard Binding' },
                { id: 'xerox', label: 'Bulk Xerox / Print' },
                { id: 'uv', label: 'UV Printing' },
                { id: 'stationery', label: 'Study Table / Items' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id as any)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                    serviceType === item.id
                      ? 'bg-[#800020] text-white border-[#800020] shadow-sm'
                      : 'bg-[#FDF9F3] text-[#2D2926] border-[#E5DACE] hover:bg-[#F8F2E9]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conditional Inputs for Page Counts */}
          {serviceType !== 'uv' && serviceType !== 'stationery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1.5">
                  Pages per Copy: <span className="text-[#800020] font-bold text-sm">{pages}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  className="w-full accent-[#800020] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#5D5852] mt-1">
                  <span>10 pgs</span>
                  <span>250 pgs</span>
                  <span>500+ pgs</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1.5">
                  Total Copies / Sets: <span className="text-[#800020] font-bold text-sm">{copies}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                  className="w-full accent-[#800020] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#5D5852] mt-1">
                  <span>1 copy</span>
                  <span>5 copies</span>
                  <span>10 copies</span>
                </div>
              </div>
            </div>
          )}

          {/* Options: Paper & Color */}
          {serviceType !== 'uv' && serviceType !== 'stationery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1.5">
                  Paper Specification
                </label>
                <select
                  value={paperType}
                  onChange={(e) => setPaperType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-[#E5DACE] bg-[#FDF9F3] text-[#2D2926] focus:outline-hidden focus:border-[#800020]"
                >
                  <option value="executive-bond">Executive Bond 85 GSM (Recommended for Thesis)</option>
                  <option value="jk-copier">JK Copier 75 GSM (Standard Notes/Legal)</option>
                  <option value="glossy">Heavy Bond 100 GSM (Premium Archival)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2926] mb-1.5">
                  Color Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsColor(true)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-colors cursor-pointer ${
                      isColor ? 'bg-[#B8860B]/15 border-[#B8860B] text-[#800020]' : 'bg-[#FDF9F3] border-[#E5DACE] text-[#5D5852]'
                    }`}
                  >
                    Color & B/W
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsColor(false)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-colors cursor-pointer ${
                      !isColor ? 'bg-[#B8860B]/15 border-[#B8860B] text-[#800020]' : 'bg-[#FDF9F3] border-[#E5DACE] text-[#5D5852]'
                    }`}
                  >
                    Only B/W
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Urgency & Delivery Checkboxes */}
          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#E5DACE] bg-[#FDF9F3] cursor-pointer hover:bg-[#F8F2E9] transition-colors">
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="w-4 h-4 text-[#800020] rounded-sm accent-[#800020]"
              />
              <div className="text-xs">
                <span className="font-bold text-[#2D2926] block">⚡ Urgent Same-Day Turnaround Required</span>
                <span className="text-[#5D5852]">Need emergency same-day binding for deadline submission</span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E5DACE] bg-[#FDF9F3] cursor-pointer hover:bg-[#F8F2E9] transition-colors">
              <input
                type="checkbox"
                checked={wantDelivery}
                onChange={(e) => setWantDelivery(e.target.checked)}
                className="w-4 h-4 text-[#800020] rounded-sm accent-[#800020] mt-0.5"
              />
              <div className="w-full text-xs">
                <span className="font-bold text-[#2D2926] block">🚚 Home / Campus Doorstep Delivery in Mathura</span>
                <span className="text-[#5D5852] block mb-2">Delivered to your home, hostel, or office</span>
                {wantDelivery && (
                  <input
                    type="text"
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    placeholder="Enter area (e.g. BSA Road, Anandpuri, GLA University, etc.)"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E5DACE] bg-white text-[#2D2926]"
                  />
                )}
              </div>
            </label>
          </div>
        </div>

        {/* Right Column: Instant Summary & WhatsApp CTA */}
        <div className="lg:col-span-5 bg-[#F8F2E9] rounded-2xl border border-[#E5DACE] p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5D5852]">
                Order Estimation
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#B8860B]/15 text-[#800020] border border-[#B8860B]/30">
                Verified Local Rates
              </span>
            </div>

            {/* Estimated Time Badge */}
            <div className="p-4 rounded-xl bg-white border border-[#E5DACE] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#5D5852] font-semibold">
                <Clock size={15} className="text-[#B8860B]" />
                <span>Estimated Turnaround:</span>
              </div>
              <p className="text-sm font-bold text-[#800020]">
                {estimate.estimatedHours}
              </p>
            </div>

            {/* Estimated Price Range */}
            <div className="p-4 rounded-xl bg-white border border-[#E5DACE] space-y-1">
              <div className="flex items-center justify-between text-xs text-[#5D5852] font-semibold">
                <span>Approximate Estimate:</span>
                <span className="text-[11px] text-[#5D5852]">(Subject to final file review)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-2xl font-extrabold text-[#2D2926]" style={{ fontFamily: 'Georgia, serif' }}>
                  ₹{estimate.subtotal > 0 ? `${estimate.subtotal} - ₹${Math.round(estimate.subtotal * 1.15)}` : 'On Request'}
                </span>
              </div>
              <p className="text-[11px] text-[#5D5852] leading-tight">
                Includes machine binding, cover embossing, high-speed laser printing, and finishing.
              </p>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-1.5 text-xs text-[#2D2926]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B8860B] shrink-0" />
                <span>Golden foil hot-stamping on cover & spine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B8860B] shrink-0" />
                <span>University formatting compliance verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B8860B] shrink-0" />
                <span>Protective moisture-proof packing</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-[#E5DACE] space-y-2">
            <a
              href={getWhatsAppLink(generateWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <MessageCircle size={17} />
              <span>Confirm & Order via WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-[#5D5852]">
              Direct connection to Bankey Bihari Book Depot desk on BSA Road
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
