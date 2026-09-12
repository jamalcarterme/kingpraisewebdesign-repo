export interface LocationPage {
  slug: string;
  cityName: string;
  region: string;
  h1: string;
  intro: string;
  body: string[];
}

// Slugs match the destinations already wired into next.config.js redirects.
export const locations: LocationPage[] = [
  {
    slug: 'lagos',
    cityName: 'Lagos',
    region: 'Lagos State, Nigeria',
    h1: 'Web Design Company in Lagos, Nigeria',
    intro:
      'Custom-coded websites for law firms, real estate agencies, restaurants and small businesses across Lagos — fast, SEO-friendly, and built to convert visitors into paying customers.',
    body: [
      'We work with founders and teams across Lagos Island, Victoria Island, Lekki, Ikeja and the mainland, building sites that load fast on mobile data and are structured to rank locally on Google.',
      'Every Lagos project starts with a short discovery call to scope pages, integrations (Paystack, Flutterwave, WhatsApp) and timeline, so pricing and delivery dates are clear from day one.',
    ],
  },
  {
    slug: 'abuja',
    cityName: 'Abuja',
    region: 'Federal Capital Territory, Nigeria',
    h1: 'Web Design Company in Abuja, Nigeria',
    intro:
      'Corporate, government-adjacent and small business websites for Abuja built for credibility, speed and search visibility.',
    body: [
      'Abuja clients often need a polished, professional look from day one — we design with that in mind, alongside clean information architecture for services, leadership and compliance pages.',
      'We also build short-let and real estate booking platforms for the Abuja market, including one delivered for Neristay, an Abuja short-let apartment platform.',
    ],
  },
  {
    slug: 'benin-city',
    cityName: 'Benin City',
    region: 'Edo State, Nigeria',
    h1: 'Web Design Company in Benin City, Edo State',
    intro:
      'Affordable, SEO-friendly websites for small businesses and entrepreneurs in Benin City and across Edo State.',
    body: [
      'We keep Benin City projects lean and fast to launch, prioritizing mobile performance and the pages that actually drive enquiries: services, pricing and contact.',
    ],
  },
  {
    slug: 'ibadan',
    cityName: 'Ibadan',
    region: 'Oyo State, Nigeria',
    h1: 'Web Design Company in Ibadan, Oyo State',
    intro:
      'Affordable, SEO-friendly websites for small businesses, schools and startups in Ibadan.',
    body: [
      'From school and church sites to small business storefronts, we build Ibadan projects with the same MERN-stack backbone used across our larger client work — so the site can grow with the business.',
    ],
  },
  {
    slug: 'port-harcourt',
    cityName: 'Port Harcourt',
    region: 'Rivers State, Nigeria',
    h1: 'Web Design Company in Port Harcourt, Rivers State',
    intro:
      'Custom sites for oil & gas vendors, real estate agencies and small businesses in Port Harcourt.',
    body: [
      'Port Harcourt clients frequently need vendor/company profile pages built for credibility with enterprise procurement teams — we design and structure content with that audience in mind.',
    ],
  },
  {
    slug: 'nigeria',
    cityName: 'Nigeria',
    region: 'Nationwide',
    h1: 'Web Design Company Nigeria | Premium Sites Built Fast',
    intro:
      'A web design company serving Lagos, Abuja, Port Harcourt and beyond — custom websites for small businesses, law firms, e-commerce and startups anywhere in Nigeria.',
    body: [
      'We work remotely with clients across every state, using video calls, WhatsApp and shared project boards to keep delivery on schedule regardless of location.',
      'Typical projects range from ₦50,000 single-page sites to multi-hundred-thousand-naira e-commerce and custom software builds — see the Pricing page for current package ranges.',
    ],
  },
  {
    slug: 'victoria-island',
    cityName: 'Victoria Island',
    region: 'Lagos, Nigeria',
    h1: 'Website Designer Victoria Island Lagos | Local Professional',
    intro:
      'A local professional for law firms, real estate agencies, and businesses in Victoria Island and Lekki.',
    body: [
      'Victoria Island and Lekki businesses tend to compete on presentation as much as price — our designs lean premium, with attention to typography, imagery and page speed.',
    ],
  },
];

export function getLocation(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}
