/**
 * Home Page (/)
 * Server Component (SSR)
 * Fetches data server-side, renders as static HTML
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PAGE_META, generateMetadata, injectSchema, getFAQSchema } from '@/lib/seo';

// ===== Metadata =====
export const metadata: Metadata = generateMetadata(PAGE_META.home);

// ===== FAQ Schema for Rich Snippet =====
const faqs = [
  {
    question: 'How much does a custom website cost for a small business in Nigeria?',
    answer:
      'Pricing depends on scope, but our small business websites are built to be affordable without cutting corners on design or performance. See our pricing page for exact packages, or book a free call for a custom quote.',
  },
  {
    question: 'Do you build websites for law firms and real estate agencies?',
    answer:
      'Yes, we specialize in conversion-focused websites for law firms, real estate agencies, churches and small businesses, including property listing pages, client intake forms and appointment booking.',
  },
  {
    question: 'Can I hire a remote web developer to build an e-commerce website?',
    answer:
      'Yes, we work remotely with clients worldwide and build full e-commerce stores with secure checkout, product management and mobile-optimized storefronts.',
  },
  {
    question: 'How long does it take to design and launch a business website?',
    answer:
      'Most small business websites launch within 2-4 weeks depending on complexity. Custom software and larger e-commerce builds take longer.',
  },
  {
    question: 'Do you offer SEO with website design so my business ranks on Google?',
    answer:
      'Every site we build includes on-page SEO fundamentals such as clean code, fast load times, structured data and keyword-optimized content.',
  },
];

// ===== Home Page Component =====
export default function HomePage() {
  return (
    <>
      {/* ===== Inject FAQ Schema ===== */}
      {injectSchema(getFAQSchema(faqs))}

      <main className="flex-1">
        {/* ===== Hero Section ===== */}
        <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
          {/* Background orbs */}
          <div className="glow-orb bg-[var(--brand)] w-96 h-96 -top-32 -left-32" />
          <div className="glow-orb-2 bg-[var(--brand-2)] w-80 h-80 -bottom-40 -right-40" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="reveal in inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--brand-2)] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
              🌍 Web Design Agency in Nigeria
            </div>

            {/* Main Heading */}
            <h1 className="reveal in font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mt-4">
              Custom Websites That
              <span className="gradient-text"> Convert</span>
            </h1>

            {/* Subheading */}
            <p className="reveal in text-slate-400 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
              Affordable, high-performance websites for law firms, real estate, restaurants, and small businesses across Lagos, Nigeria, and worldwide. Built for speed, SEO, and results.
            </p>

            {/* CTA Buttons */}
            <div className="reveal in flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary px-8 py-3">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="btn btn-ghost px-8 py-3">
                View Our Work
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="reveal in flex flex-wrap justify-center gap-8 mt-12 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Remote-First Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Services Overview ===== */}
        <section className="py-20 sm:py-32 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-2)]">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4">
                Everything Your Business Needs Online
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 */}
              <Link
                href="/services/website-design"
                className="glass p-8 rounded-2xl hover:border-[var(--brand)]/50 transition-all group"
              >
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand)] transition-colors">
                  Website Design
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Beautiful, modern designs that match your brand and convert visitors.
                </p>
              </Link>

              {/* Service 2 */}
              <Link
                href="/services/ecommerce"
                className="glass p-8 rounded-2xl hover:border-[var(--brand)]/50 transition-all group"
              >
                <div className="text-3xl mb-4">🛍️</div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand)] transition-colors">
                  E-Commerce Stores
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Secure, scalable online stores with payment processing and inventory management.
                </p>
              </Link>

              {/* Service 3 */}
              <Link
                href="/services/seo"
                className="glass p-8 rounded-2xl hover:border-[var(--brand)]/50 transition-all group"
              >
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand)] transition-colors">
                  SEO Optimization
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Every site includes on-page SEO so you rank higher on Google for local keywords.
                </p>
              </Link>

              {/* Service 4 */}
              <Link
                href="/services"
                className="glass p-8 rounded-2xl hover:border-[var(--brand)]/50 transition-all group"
              >
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand)] transition-colors">
                  Mobile Optimization
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Responsive design that works perfectly on every device, every time.
                </p>
              </Link>

              {/* Service 5 */}
              <Link
                href="/services"
                className="glass p-8 rounded-2xl hover:border-[var(--brand)]/50 transition-all group"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand)] transition-colors">
                  Fast Performance
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Lightning-fast load times that keep visitors engaged and improve rankings.
                </p>
              </Link>

              {/* Service 6 */}
              <Link
                href="/services"
                className="glass p-8 rounded-2xl hover:border-[var(--brand)]/50 transition-all group"
              >
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand)] transition-colors">
                  Secure & Reliable
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  SSL encryption, automatic backups, and 99.9% uptime guarantee.
                </p>
              </Link>
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12">
              <Link href="/services" className="btn btn-outline">
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FAQ Section ===== */}
        <section className="py-20 sm:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="glass p-6 rounded-xl cursor-pointer group"
                >
                  <summary className="flex items-center justify-between font-semibold text-lg group-open:text-[var(--brand)]">
                    {faq.question}
                    <span className="text-xl group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <p className="text-slate-400 mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section className="py-20 sm:py-32 relative overflow-hidden border-t border-[var(--border)]">
          <div className="glow-orb bg-[var(--brand-2)] w-96 h-96 -bottom-32 -right-32 opacity-20" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Book a free 30-minute consultation. We'll discuss your goals and create a custom plan.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
