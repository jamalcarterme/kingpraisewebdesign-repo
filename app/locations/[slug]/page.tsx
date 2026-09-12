import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as buildMeta, getLocationMeta, getBreadcrumbSchema } from '@/lib/seo';
import { locations, getLocation } from '@/lib/data/locations';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const location = getLocation(params.slug);
  if (!location) return {};
  return buildMeta(getLocationMeta(location.slug, location.cityName));
}

export default function LocationSlugPage({ params }: { params: { slug: string } }) {
  const location = getLocation(params.slug);
  if (!location) notFound();

  return (
    <main className="pt-28 pb-24 max-w-4xl mx-auto px-5 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Locations', url: '/locations/lagos' }, { name: location.cityName, url: `/locations/${location.slug}` }])),
        }}
      />

      <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">{location.region}</span>
      <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3 leading-tight">{location.h1}</h1>
      <p className="text-slate-400 mt-5 text-lg leading-relaxed">{location.intro}</p>

      <div className="mt-10 space-y-4">
        {location.body.map((p) => (
          <p key={p} className="text-slate-400 leading-relaxed">{p}</p>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        <Link href="/services" className="glass rounded-xl p-5 hover:bg-white/5 transition">
          <p className="text-white font-semibold text-sm">Browse Services</p>
          <p className="text-slate-500 text-xs mt-1">See everything we build</p>
        </Link>
        <Link href="/pricing" className="glass rounded-xl p-5 hover:bg-white/5 transition">
          <p className="text-white font-semibold text-sm">View Pricing</p>
          <p className="text-slate-500 text-xs mt-1">Transparent starting rates</p>
        </Link>
        <Link href="/portfolio" className="glass rounded-xl p-5 hover:bg-white/5 transition">
          <p className="text-white font-semibold text-sm">See Our Work</p>
          <p className="text-slate-500 text-xs mt-1">Recent client projects</p>
        </Link>
      </div>

      <section className="py-16 lg:py-24">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="glow-orb bg-[var(--brand)] w-72 h-72 -top-20 left-1/2 -translate-x-1/2" />
          <h2 className="font-display text-3xl font-bold text-white relative">Ready to discuss your project in {location.cityName}?</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto relative">Let&apos;s explore how we can help grow your business with a custom web solution.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 relative">
            <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-xl">Get in Touch</Link>
            <Link href="/contact#schedule" className="btn-ghost px-7 py-3.5 rounded-xl">Schedule Free Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
