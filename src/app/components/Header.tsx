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
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-green/10 bg-white/85 backdrop-blur-2xl">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
            <Link
              to="/"
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <ImageWithFallback
                src={company.assets.headerLogo.src}
                alt={company.assets.headerLogo.alt}
                className="h-7 w-auto max-h-8 max-w-[min(9.5rem,42vw)] shrink-0 object-contain object-left shadow-sm sm:h-8 sm:max-h-9 sm:max-w-[11rem] md:h-9 md:max-h-10 md:max-w-[12.5rem]"
                decoding="async"
              />
              <span className="min-w-0 leading-none">
                <span className="block font-['Fraunces'] text-lg font-semibold tracking-[-0.04em] text-brand-ink sm:text-xl">
                  {company.brandDisplayName}
                </span>
                <span className="hidden max-w-[11rem] text-[9px] font-bold uppercase leading-snug tracking-[0.16em] text-brand-gold min-[380px]:block sm:max-w-[16rem] sm:text-[10px] sm:tracking-[0.2em]">
                  {company.productLine}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-2 rounded-full border border-brand-green/10 bg-white/80 p-1.5 shadow-sm md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isActive
                        ? 'bg-brand-green text-white shadow-md shadow-brand-green/20'
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
              className="rounded-full border border-brand-green/15 bg-white p-3 text-brand-ink shadow-sm md:hidden"
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
            className="absolute left-4 right-4 top-20 rounded-[22px] border border-brand-green/10 bg-white p-4 shadow-2xl shadow-brand-ink/15 sm:rounded-[28px]"
            onClick={(event) => event.stopPropagation()}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-4 text-base font-bold ${
                    isActive ? 'bg-brand-green text-white' : 'text-brand-ink hover:bg-brand-accent-soft hover:text-brand-green'
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
