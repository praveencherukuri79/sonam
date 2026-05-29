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
      <header className="brand-header fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl">
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

            <nav className="brand-nav-shell hidden items-center gap-2 rounded-full p-1.5 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isActive
                        ? 'brand-nav-link-active'
                        : 'brand-nav-link'
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
              className="brand-mobile-menu-button rounded-full p-3 shadow-sm md:hidden"
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
            className="brand-mobile-nav absolute left-4 right-4 top-20 rounded-[22px] p-4 sm:rounded-[28px]"
            onClick={(event) => event.stopPropagation()}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-4 text-base font-bold ${
                    isActive ? 'brand-nav-link-active' : 'brand-nav-link'
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
