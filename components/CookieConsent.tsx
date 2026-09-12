'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const CONSENT_KEY = 'kpwd_cookie_consent';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-2BBFZB00KV';
const GTM_ID = 'GTM-KGCCDXX9';

export default function CookieConsent() {
  const [status, setStatus] = useState<'unset' | 'accepted' | 'declined'>('unset');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setStatus(stored);
    } else {
      // Small delay so it doesn't fight the page-loader animation.
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function choose(value: 'accepted' | 'declined') {
    localStorage.setItem(CONSENT_KEY, value);
    setStatus(value);
    setVisible(false);
  }

  return (
    <>
      {status === 'accepted' && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
            }}
          />
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 inset-x-0 z-[95] p-4 sm:p-6">
          <div className="glass rounded-2xl max-w-3xl mx-auto p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 shadow-lg">
            <p className="text-sm text-slate-300 flex-1 text-center sm:text-left">
              We use cookies for analytics to understand how visitors use this site. You can accept or decline —
              declining won&apos;t affect your browsing.{' '}
              <Link href="/contact" className="text-[var(--brand-2)] hover:underline">Questions? Contact us</Link>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button onClick={() => choose('declined')} className="btn-ghost px-4 py-2 rounded-lg text-sm">Decline</button>
              <button onClick={() => choose('accepted')} className="btn-primary px-4 py-2 rounded-lg text-sm">Accept</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
