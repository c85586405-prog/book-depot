import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hard-binding',
    title: 'Hard Binding & Urgent Book Binding',
    shortDesc: 'Premium rexine hard-bound books with crisp golden foil lettering. Same-day & express turnaround available.',
    fullDesc: 'Our flagship hard binding service is trusted by colleges, advocates, authors, and offices across Mathura. Crafted with heavy-duty board, durable imported rexine cloth, precision corner edging, and gleaming hot-foil gold embossing that will never peel or fade.',
    iconName: 'BookMarked',
    turnaround: 'Same-Day / Express (Within hours) or Standard (24 hrs)',
    tag: 'Most Popular',
    idealFor: 'College projects, law court case files, account registers, archives, institutional records, and memoirs.',
    keyFeatures: [
      'Same-day urgent binding for emergency submission deadlines',
      'High-grade gold & silver hot-stamp foil embossing on front & spine',
      'Wide choice of rexine cover colors: Navy Blue, Deep Maroon, Black, Green',
      'Strong sewn and thermal binding to prevent loose sheets',
      'Protective clear end-sheets and satin ribbon bookmark options'
    ],
    specs: [
      { label: 'Cover Material', value: 'High-Density Straw Board with Premium Rexine' },
      { label: 'Lettering', value: 'Machine Hot-Stamping Golden/Silver Foil' },
      { label: 'Sizes Handled', value: 'A4, Legal, A5, Custom Executive' },
      { label: 'Capacity', value: 'From 20 pages up to 800+ pages per volume' }
    ],
    highlight: true
  },
  {
    id: 'thesis-dissertation',
    title: 'Thesis & Dissertation Printing & Binding',
    shortDesc: 'University-standard hard-bound thesis printing with strict formatting compliance and vibrant color graphics.',
    fullDesc: 'Designed specifically for Ph.D. scholars, M.Tech/B.Tech students, MBA candidates, and medical postgraduates. We follow exact guidelines for GLA University, BSA College, Dr. B. R. Ambedkar University, Sanskrit Sansthan, and nearby academic institutions in Mathura and Agra.',
    iconName: 'GraduationCap',
    turnaround: 'Same-Day Urgent Available (2-4 hrs for pre-scheduled files)',
    tag: 'Academic Speciality',
    idealFor: 'Ph.D. theses, M.Tech dissertations, final-year engineering projects, MBA synopses, and research journals.',
    keyFeatures: [
      'Strict university formatting compliance (margins, title spine layout, certificate page)',
      'Ultra-sharp 1200 DPI laser printing on 85 GSM / 100 GSM executive bond paper',
      'Vivid, accurate full-color printing for technical diagrams, maps, and statistical charts',
      'Gold foil embossing on cover and spine with scholar name, guide, and academic session',
      'Multiple duplicate copies bound simultaneously with matching exact alignment'
    ],
    specs: [
      { label: 'Paper Standard', value: 'Executive Bond 85 GSM / 100 GSM bright white' },
      { label: 'Embossing Standard', value: 'Standard University Font & Emblem Layout' },
      { label: 'Color Handling', value: 'Rich CMYK laser color reproduction' },
      { label: 'Deliverable', value: 'Hardbound copies + CD/Pen-drive pouch insertion' }
    ],
    highlight: true
  },
  {
    id: 'uv-printing',
    title: 'High-Definition UV Printing',
    shortDesc: 'Scratch-resistant, vibrant direct UV printing on acrylic, mementos, boards, wood, and stationery.',
    fullDesc: 'Modern flatbed UV printing delivers photo-quality direct printing cured instantly by ultraviolet light. Perfect for customized college awards, personalized mementos, office signage, certificates, customized notebook covers, pen stands, and acrylic boards.',
    iconName: 'Sparkles',
    turnaround: '24 to 48 Hours depending on quantity',
    tag: 'Modern Tech',
    idealFor: 'Custom mementos, student event shields, promotional stationery, institutional signage, and custom gifts.',
    keyFeatures: [
      'Direct print on diverse substrates: Acrylic, Sunboard, Wood, Leatherette, Glass',
      'Waterproof, scratch-resistant, and non-fading UV-cured ink technology',
      'Vivid multi-color reproduction with white ink backing for opaque depth',
      'Customized single pieces or bulk institutional production runs',
      'Precise edge-to-edge detailing with glossy or matte UV finishing'
    ],
    specs: [
      { label: 'Print Technology', value: 'High-Resolution UV Flatbed Multi-Head' },
      { label: 'Durability', value: 'Indoor 10+ years / Weather resistant' },
      { label: 'Finishes', value: 'Matte, Gloss, Raised Textured UV' },
      { label: 'Supported Media', value: 'Acrylic, MDF, Rexine, Polycarbonate, Metal Plates' }
    ]
  },
  {
    id: 'bulk-xerox-print',
    title: 'Bulk Printouts & Xerox Photocopying',
    shortDesc: 'High-speed laser printing & photocopying at wholesale student rates. Clean collation & spiral binding.',
    fullDesc: 'Equipped with heavy-duty commercial digital multi-function presses to print thousands of pages per hour. Whether you need coaching class study material, legal briefs, exam question papers, or office document bundles, we ensure crisp text, perfect page numbers, and neat collation.',
    iconName: 'Copy',
    turnaround: 'Immediate while you wait for small orders / Same-day for bulk jobs',
    tag: 'High Speed & Affordable',
    idealFor: 'Coaching study modules, lecture notes, legal petitions, school exam papers, and organizational manuals.',
    keyFeatures: [
      'Extremely affordable bulk rates with special discounts for Mathura students',
      'Crystal clear black-and-white laser reproduction and rich color prints',
      'Automated double-sided (duplex) printing with sorted collation',
      'Spiral binding, wiro binding, thermal tape binding, and soft-cover stapling',
      'Direct file submission via WhatsApp or Email (PDF, DOCX, PPT, JPG)'
    ],
    specs: [
      { label: 'Paper Sizes', value: 'A4, A3, Legal (FS), Executive' },
      { label: 'Paper Weight', value: '70 GSM, 75 GSM (JK Copier), 100 GSM, 130 GSM' },
      { label: 'Speed Capacity', value: 'Up to 10,000+ prints per day' },
      { label: 'Binding Options', value: 'Spiral (Plastic/Wire), Comb, Soft Glue' }
    ]
  },
  {
    id: 'home-delivery',
    title: 'Home & Campus Delivery in Mathura',
    shortDesc: 'We bring your finished thesis, project binders, and bulk print jobs directly to your doorstep in Mathura.',
    fullDesc: 'We understand that students, professors, advocates, and busy professionals do not always have the time to visit the shop and wait. Submit your files digitally on WhatsApp, approve the digital proof, and have your finished, packed jobs delivered safely to your home, hostel, or office.',
    iconName: 'Truck',
    turnaround: 'Prompt doorstep dispatch upon binding completion',
    tag: 'Customer Favorite',
    idealFor: 'Hostel students at GLA, BSA College, Anandpuri residents, Krishna Nagar, Highway, and Mathura Cantt.',
    keyFeatures: [
      'Available across Anandpuri, BSA Road, Krishna Nagar, Dampier Nagar, and nearby Mathura hubs',
      'Secure moisture-proof and impact-proof packaging so thesis covers arrive pristine',
      'Cash on Delivery (COD) or UPI on delivery accepted',
      'Ideal for late-night student submissions and urgent office document needs',
      'Polite and cooperative delivery staff'
    ],
    specs: [
      { label: 'Coverage Area', value: 'Mathura City, BSA Road, Anandpuri, Colleges & Hostels' },
      { label: 'Packaging', value: 'Poly-wrapped bubble-cushioned hard parcel' },
      { label: 'Tracking/Updates', value: 'Live status via WhatsApp / Phone confirmation' },
      { label: 'Urgent Dispatch', value: 'On-demand express courier/rider dispatch' }
    ],
    highlight: true
  },
  {
    id: 'stationery-supplies',
    title: 'General Stationery & Study Furniture',
    shortDesc: 'Quality study tables, premium register copies, drawing instruments, office files, and student essentials.',
    fullDesc: 'A complete one-stop stationery hub in Anandpuri. We stock top-grade wooden foldable study tables, engineering drawing supplies, accounting registers, branded pens, folders, calculators, art craft materials, and complete office desktop essentials at genuine retail and wholesale rates.',
    iconName: 'PencilRuler',
    turnaround: 'Ready in stock at shop counter',
    tag: 'Complete Inventory',
    idealFor: 'Students preparing for competitive exams, school children, college engineers, and administrative offices.',
    keyFeatures: [
      'Ergonomic foldable study tables with tablet/cup holders for hostel & home study',
      'Engineering & architecture drawing tools: Mini drafters, T-squares, sheet holders, scale sets',
      'Premium long register notebooks, spiral registers, and graph pads',
      'All major stationery brands: Classmate, Doms, Luxor, Parker, Reynolds, JK Paper',
      'Office files, cobra folders, index files, punchers, and staplers'
    ],
    specs: [
      { label: 'Study Tables', value: 'Wooden MDF top with sturdy metal folding legs' },
      { label: 'Notebooks', value: 'Hardbound registers, soft spiral, practical files' },
      { label: 'Drawing Tools', value: 'Standard technical drafting instruments' },
      { label: 'Office Supplies', value: 'Full corporate & institutional inventory' }
    ]
  }
];
