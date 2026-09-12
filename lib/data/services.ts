export interface ServicePage {
  slug: string;
  serviceName: string;
  h1: string;
  intro: string;
  features: string[];
  body: string[];
}

// Slugs match the destinations already wired into next.config.js redirects.
export const services: ServicePage[] = [
  {
    slug: 'ecommerce',
    serviceName: 'E-Commerce Development',
    h1: 'E-Commerce Website Developer | Online Stores Built Fast',
    intro:
      'Online stores with Flutterwave & Paystack integration for restaurants, fashion, retail and food businesses across Nigeria.',
    features: ['Paystack & Flutterwave checkout', 'Product & inventory management', 'Order tracking & notifications', 'Multi-currency support'],
    body: [
      'We build stores that are fast on mobile data, easy for you to update yourself, and structured so search engines can index individual product pages.',
      'Abuja and Lagos e-commerce clients typically launch in 3–4 weeks depending on catalog size and payment/shipping integrations required.',
    ],
  },
  {
    slug: 'restaurant',
    serviceName: 'Restaurant Website Design',
    h1: 'Restaurant Websites That Take Orders, Not Just Show Menus',
    intro:
      'Online menus, ordering and reservations, with Flutterwave payment integration and SEO — built for Nigerian food businesses.',
    features: ['Digital menu with categories', 'Online ordering & payment', 'Table reservation form', 'Location & hours schema for Google'],
    body: [
      'We delivered a live example of this for Tasty Chops, a food ordering website with an Express backend handling orders end to end.',
    ],
  },
  {
    slug: 'real-estate',
    serviceName: 'Real Estate Website Design',
    h1: 'Real Estate Websites Built to Sell Listings, Not Just Show Them',
    intro:
      'Searchable property listings, lead capture forms and SEO to fill your pipeline — for agencies and individual agents.',
    features: ['Searchable/filterable listings', 'Lead capture on every listing', 'Agent profile pages', 'WhatsApp-qualifying enquiry forms'],
    body: [
      'This is one of our most requested builds — recent examples include a frontend for Martins Realties (Lagos) and a full booking platform for Neristay (Abuja short-lets).',
    ],
  },
  {
    slug: 'med-spa',
    serviceName: 'Med Spa & Wellness Website Design',
    h1: 'Med Spa Websites That Look as Premium as Your Treatments',
    intro:
      'Service menus, online booking and a premium look built to attract high-value clients.',
    features: ['Treatment/service menu', 'Online booking request form', 'Before/after gallery support', 'Premium, editorial-style design'],
    body: [
      'Med spa clients convert on trust and visual polish first — we spend extra time on imagery, whitespace and typography for this category.',
    ],
  },
  {
    slug: 'law-firms',
    serviceName: 'Web Design for Law Firms',
    h1: 'Website Design for Law Firms That Wins Client Trust',
    intro:
      'Client intake forms, practice area pages and SEO built to earn trust and generate consultation requests.',
    features: ['Practice area pages', 'Attorney bio pages', 'Client intake / consultation form', 'Trust signals (credentials, results, testimonials)'],
    body: [
      'We built a single-page site on this exact brief for The Penthouse Solicitors, a Lagos law firm — a good reference for scope and delivery time.',
    ],
  },
  {
    slug: 'landing-page',
    serviceName: 'Landing Page Design',
    h1: 'Landing Pages Built to Convert Clicks Into Customers',
    intro:
      'Fast-loading, conversion-focused pages built for ads, launches and campaigns.',
    features: ['Single conversion goal per page', 'Fast load times for paid traffic', 'A/B-testable sections', 'Analytics & pixel integration'],
    body: [
      'Landing pages are typically the fastest turnaround project we offer — most launch within a week once copy and offer are confirmed.',
    ],
  },
  {
    slug: 'corporate',
    serviceName: 'Corporate Website Design',
    h1: 'Corporate Website Designer | Professional Enterprise Sites',
    intro:
      'Professional enterprise web design with advanced features for larger businesses and consulting companies.',
    features: ['Multi-department page structure', 'Careers & investor relations sections', 'Advanced CMS/content workflows', 'Enterprise-grade hosting guidance'],
    body: [
      'Corporate projects usually involve more stakeholders — we scope these with a written sitemap and content plan before any design work begins.',
    ],
  },
  {
    slug: 'logistics',
    serviceName: 'Logistics & Supply Chain Website Design',
    h1: 'Website Design for Logistics Companies | B2B Web Solutions',
    intro:
      'Custom B2B sites with shipment tracking and quote forms for shipping firms and supply chain businesses.',
    features: ['Shipment tracking integration', 'Instant quote request forms', 'Fleet/service overview pages', 'B2B lead capture'],
    body: [
      'Logistics buyers are B2B and research-driven, so these sites lean on clear service breakdowns and fast quote forms over heavy visuals.',
    ],
  },
  {
    slug: 'seo',
    serviceName: 'SEO Services for Small Business',
    h1: 'SEO Services Built to Get Your Small Business Found',
    intro:
      'On-page SEO, technical fixes and local search visibility that drives leads — for small businesses in Nigeria.',
    features: ['On-page & technical SEO audit', 'Local search (Google Business Profile) setup', 'Core Web Vitals optimization', 'Ongoing keyword tracking'],
    body: [
      'Every site we build ships with SEO basics included; this service is for existing sites that need a dedicated optimization pass.',
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
