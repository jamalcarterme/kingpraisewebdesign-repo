/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng';

const staticRoutes = ['/', '/about', '/services', '/portfolio', '/pricing', '/blog', '/contact'];

const locationSlugs = ['lagos', 'abuja', 'benin-city', 'ibadan', 'port-harcourt', 'nigeria', 'victoria-island'];
const serviceSlugs = ['ecommerce', 'restaurant', 'real-estate', 'med-spa', 'law-firms', 'landing-page', 'corporate', 'logistics', 'seo'];

const routes = [
  ...staticRoutes,
  ...locationSlugs.map((s) => `/locations/${s}`),
  ...serviceSlugs.map((s) => `/services/${s}`),
];

const urls = routes
  .map(
    (route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.7'}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`Sitemap written to ${outPath} (${routes.length} routes; blog posts are dynamic and excluded — add a server-side sitemap route if you need them indexed too).`);
