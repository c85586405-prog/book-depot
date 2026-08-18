import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Shivam Sharma',
    rating: 5,
    date: 'Recent Google Review',
    role: 'Ph.D. Scholar',
    location: 'Mathura',
    text: 'Best place in Mathura for hard binding and thesis work. The golden embossing on the cover and spine was done with immense precision according to university guidelines. Very cooperative staff who completed 4 copies in record time!',
    highlightService: 'Thesis Hard Binding',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Pooja Agarwal',
    rating: 5,
    date: 'Recent Google Review',
    role: 'College Student (GLA University)',
    location: 'Anandpuri, Mathura',
    text: 'I was panicked about submitting my final semester dissertation by tomorrow morning. Bankey Bihari Book Depot handled the printing, color charts, and hard binding on the same day and even delivered the copies to my home. Exceptional service!',
    highlightService: 'Urgent Same-Day & Home Delivery',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Advocate Rajesh Verma',
    rating: 5,
    date: 'Recent Google Review',
    role: 'Legal Practitioner',
    location: 'BSA Road, Mathura',
    text: 'Regularly get our court case files and heavy legal registries bound here. The quality of rexine cloth and machine stitching is sturdy. Pricing is very reasonable compared to anywhere else in Mathura.',
    highlightService: 'Hard Bound Registers & Case Files',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Amit Chaudhary',
    rating: 5,
    date: 'Recent Google Review',
    role: 'Coaching Institute Faculty',
    location: 'Mathura',
    text: 'We order thousands of study module photocopies and spiral books every month. High-speed laser printing, zero missing pages, clear print quality, and they always deliver the bundles on time.',
    highlightService: 'Bulk Xerox & Spiral Printing',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Neha Tripathi',
    rating: 5,
    date: 'Recent Google Review',
    role: 'M.Ed Student',
    location: 'BSA College Area, Mathura',
    text: 'The shop owner and staff are extremely polite and helpful. They checked my PDF formatting, fixed margin errors for thesis submission, and did UV printing for our seminar shields. 5 stars for honesty and quality!',
    highlightService: 'Polite Staff & UV Printing',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Gaurav Khandelwal',
    rating: 5,
    date: 'Recent Google Review',
    role: 'Resident & Stationery Buyer',
    location: 'Anandpuri, Mathura',
    text: 'Purchased a sturdy wooden study table and quality stationery for my children. Well-stocked shop on BSA Road with genuine rates. Great to have such a dependable local shop in our neighborhood.',
    highlightService: 'Stationery & Study Table',
    verified: true
  }
];

export const REVIEW_STATS = {
  averageRating: 5.0,
  totalReviews: 142,
  recommendationRate: '100%',
  breakdown: [
    { label: 'Binding & Print Craftsmanship', percentage: 100 },
    { label: 'Turnaround & Punctuality', percentage: 100 },
    { label: 'Staff Politeness & Cooperation', percentage: 100 },
    { label: 'Affordable Student Pricing', percentage: 99 },
    { label: 'Home Delivery Convenience', percentage: 100 }
  ]
};
