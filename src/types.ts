export type PageId = 'home' | 'services' | 'gallery' | 'reviews' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  turnaround: string;
  tag: string;
  idealFor: string;
  keyFeatures: string[];
  specs?: { label: string; value: string }[];
  highlight?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  role: string;
  location: string;
  text: string;
  highlightService: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'binding' | 'thesis' | 'uv-print' | 'xerox' | 'stationery';
  categoryLabel: string;
  description: string;
  badge: string;
  material: string;
  turnaroundTime: string;
  accentColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  address: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  rating: number;
  reviewCount: number;
  hours: string;
  closingNote: string;
  googleMapsUrl: string;
  embedMapUrl: string;
}
