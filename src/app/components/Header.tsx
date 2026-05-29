import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import { company } from '../data/company';
import { ImageWithFallback } from './figma/ImageWithFallback';

const navItems = [
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/videos' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const firstLink = mobileNavRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-green/20 bg-brand-accent-soft/92 backdrop-blur-2xl">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
            <Link
              to="/"
              className="flex min-w-0 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ImageWithFallback
                src={company.assets.headerLogo.src}
                alt={company.assets.headerLogo.alt}
                className="h-11 w-auto max-w-[min(15rem,58vw)] shrink-0 object-contain object-left sm:h-12 sm:max-w-[17rem] md:h-13 md:max-w-[18rem] lg:h-14 lg:max-w-[19rem]"
                decoding="async"
              />
            </Link>

            <nav className="hidden items-center gap-2 rounded-full border border-brand-green/15 bg-brand-cream/90 p-1.5 shadow-sm md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isActive
                        ? 'bg-brand-green text-brand-cream shadow-md shadow-brand-green/20'
                        : 'text-brand-nav-muted hover:bg-brand-accent-soft hover:text-brand-green'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-brand-green/15 bg-brand-cream p-3 text-brand-ink shadow-sm md:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-ink/20 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
          <nav
            ref={mobileNavRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-4 right-4 top-20 rounded-[22px] border border-brand-green/10 bg-brand-cream p-4 shadow-2xl shadow-brand-ink/15 sm:rounded-[28px]"
            onClick={(event) => event.stopPropagation()}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-4 text-base font-bold ${
                    isActive ? 'bg-brand-green text-brand-cream' : 'text-brand-ink hover:bg-brand-accent-soft hover:text-brand-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      <div className="h-16 lg:h-20"></div>
    </>
  );
}
