/**
 * Root Layout
 * Wraps all pages
 * Sets up:
 * - Global metadata
 * - Google Fonts with optimization
 * - Theme provider (dark/light mode)
 * - Analytics (GA + GTM)
 * - Global styles
 * - Error boundaries
 */

import type { Metadata } from 'next';
// Vercel Analytics is optional — install `@vercel/analytics` and re-add
// `import { Analytics } from '@vercel/analytics/next';` + `<Analytics />` in the body if you deploy there.
import Script from 'next/script';
import { ORGANIZATION_SCHEMA } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

// ===== Optimize Google Fonts =====
// Only load essential weights to reduce blocking
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-serif',
});

// ===== Global Metadata =====
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng'),
  title: {
    default: 'Best Web Design Agency in Nigeria | King Praise Web Design',
    template: '%s | King Praise Web Design',
  },
  description:
    'King Praise Web Design creates conversion-focused websites for businesses in Lagos & Nigeria. Free quotes for web design, e-commerce & custom development.',
  keywords: [
    'web design agency Nigeria',
    'website design Lagos',
    'custom website development',
    'web solutions Nigeria',
    'ecommerce website developer',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
    siteName: 'King Praise Web Design',
    images: [
      {
        url: '/assets/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'King Praise Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@king_praise_web_design',
  },
  alternates: {
    languages: {
      'en-NG': process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
      'x-default': process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
    },
  },
  other: {
    'geo.region': 'NG-LA',
    'geo.placename': 'Lagos, Nigeria',
    'geo.position': '6.5244;3.3792',
    ICBM: '6.5244, 3.3792',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'King Praise Web Design',
  },
};

/**
 * Root Layout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* ===== Theme Script (prevent flash) ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  const theme = localStorage.getItem('kpwd-theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* ===== Preconnect to External Services ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* ===== DNS Prefetch ===== */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* ===== Icons ===== */}
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.png" />

        {/* ===== Google Analytics (GA4) & GTM ===== */}
        {/* Loaded only after consent — see <CookieConsent /> in body, which injects them. */}

        {/* ===== Organization Schema (Sitewide) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
      </head>

      <body
        className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-200"
        suppressHydrationWarning
      >
        {/* GTM noscript iframe is injected by <CookieConsent /> only after the user accepts. */}

        {/* ===== Page Loader (initial load only) ===== */}
        <div
          id="page-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <div className="animate-pulse">
            <img
              src="/assets/img/logo-icon.png"
              alt="Loading"
              className="w-12 h-12 opacity-60"
            />
          </div>
        </div>

        {/* ===== Main Content ===== */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <WhatsAppFloat />
        <CookieConsent />

        {/* Add <Analytics /> here if you install @vercel/analytics and deploy on Vercel */}

        {/* ===== Remove Page Loader on Load ===== */}
        <Script id="hide-loader" strategy="afterInteractive">
          {`
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', () => {
                document.getElementById('page-loader')?.remove();
              });
            } else {
              document.getElementById('page-loader')?.remove();
            }
          `}
        </Script>
      </body>
    </html>
  );
}
