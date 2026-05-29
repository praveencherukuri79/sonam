import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { company } from '../data/company';
import { ImageWithFallback } from './figma/ImageWithFallback';

const socialLinks = [
  { label: `${company.brandDisplayName} on Instagram`, href: 'https://www.instagram.com/', Icon: Instagram },
  { label: `${company.brandDisplayName} on Facebook`, href: 'https://www.facebook.com/', Icon: Facebook },
  { label: `${company.brandDisplayName} on YouTube`, href: 'https://www.youtube.com/', Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-brand-green-hover text-brand-cream">
      <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-6 inline-flex rounded-xl bg-brand-cream p-3 shadow-lg shadow-black/10">
              <ImageWithFallback
                src={company.assets.footerLogo.src}
                alt={company.assets.footerLogo.alt}
                className="h-20 w-auto max-w-[16rem] object-contain sm:h-24 sm:max-w-[18rem]"
                decoding="async"
              />
            </Link>
            <p className="mb-8 max-w-md text-base leading-7 text-brand-cream lg:text-lg">
              {company.heroSummary}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/35 bg-brand-cream/12 text-brand-cream transition hover:border-brand-cream hover:bg-brand-cream/20"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.28em] text-brand-accent-soft">Quick Links</h3>
            <div className="space-y-4 text-sm font-semibold">
              <Link to="/#products" className="block text-brand-cream transition-colors hover:text-brand-accent-soft">
                Products
              </Link>
              <Link to="/#about" className="block text-brand-cream transition-colors hover:text-brand-accent-soft">
                About
              </Link>
              <Link to="/#videos" className="block text-brand-cream transition-colors hover:text-brand-accent-soft">
                Gallery
              </Link>
              <Link to="/#contact" className="block text-brand-cream transition-colors hover:text-brand-accent-soft">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.28em] text-brand-accent-soft">Contact</h3>
            <div className="space-y-4 text-sm leading-6 text-brand-cream">
              <p>{company.region}</p>
              <p>India</p>
              <a href={`mailto:${company.email}`} className="block transition-colors hover:text-brand-accent-soft">{company.email}</a>
              <p>{company.manufacturer}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-brand-cream/15 pt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-cream">
            Copyright 2026 {company.manufacturer}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
