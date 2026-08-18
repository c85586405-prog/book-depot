import { BusinessInfo } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Bankey Bihari Book Depot",
  tagline: "Mathura's Trusted Name in Printing, Binding & Stationery",
  category: "Stationery Store & Digital Printing / Binding Centre",
  address: "BSA Rd, Anandpuri, Mathura, Uttar Pradesh 281001, India",
  area: "Anandpuri, BSA Road",
  city: "Mathura",
  state: "Uttar Pradesh",
  pincode: "281001",
  country: "India",
  phone: "+918429092733",
  displayPhone: "084290 92733",
  whatsappNumber: "918429092733",
  rating: 5.0,
  reviewCount: 142,
  hours: "Open daily · Closes 9:00 PM",
  closingNote: "Open until 9 PM daily. Please call ahead to confirm early morning opening hours or Sunday urgent job pickups.",
  googleMapsUrl: "https://maps.google.com/?q=Bankey+Bihari+Book+Depot+BSA+Rd+Anandpuri+Mathura+Uttar+Pradesh+281001",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.467472658941!2d77.6713915762031!3d27.485802276310214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737119e7a00001%3A0x9d5e3c834a36fbc6!2sBSA%20Rd%2C%20Anandpuri%2C%20Mathura%2C%20Uttar%20Pradesh%20281001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const getWhatsAppLink = (message?: string) => {
  const text = encodeURIComponent(message || "Hello Bankey Bihari Book Depot, I have an enquiry regarding your printing and binding services.");
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
};

export const getCallLink = () => {
  return `tel:${BUSINESS_INFO.phone}`;
};
