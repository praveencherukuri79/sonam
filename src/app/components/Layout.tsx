import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { company } from '../data/company';

/** Keep tab titles short so the browser doesn’t truncate (e.g. “Sonam Sounf…”). */
const pageTitles: Record<string, string> = {
  '/': `${company.brandDisplayName} · Sounf Mixture and Mukhwas`,
  '/products': `Products · ${company.brandDisplayName}`,
  '/about': `About · ${company.brandDisplayName}`,
  '/videos': `Gallery · ${company.brandDisplayName}`,
  '/contact': `Contact · ${company.brandDisplayName}`,
};

export function Layout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    document.title =
      pageTitles[pathname] ??
      (pathname.startsWith('/products/') ? `Product · ${company.brandDisplayName}` : `${company.brandDisplayName} · Mukhwas`);
  }, [hash, pathname]);

  return (
    <div className="brand-page-background brand-bg-poster-green flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-full bg-brand-ink px-4 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Suspense fallback={<div className="px-4 py-16 text-center text-sm font-bold uppercase tracking-[0.18em] text-brand-green">Loading {company.brandDisplayName}...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
