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
    <footer className="bg-brand-ink text-white">
      <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-6 flex items-start gap-4">
              <ImageWithFallback
                src={company.assets.footerLogo.src}
                alt={company.assets.footerLogo.alt}
                className="h-16 w-auto max-w-[11rem] object-contain sm:h-20 sm:max-w-[13rem]"
                decoding="async"
              />
              <span className="pt-1">
                <span className="block font-['Fraunces'] text-2xl font-semibold tracking-[-0.04em]">{company.brandDisplayName}</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-brand-mint">{company.productLine}</span>
              </span>
            </Link>
            <p className="mb-8 max-w-md text-base leading-7 text-white/70 lg:text-lg">
              {company.heroSummary}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/75 transition hover:border-brand-gold hover:text-brand-gold"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-['Manrope'] text-xs font-extrabold uppercase tracking-[0.28em] text-brand-gold">Quick Links</h3>
            <div className="space-y-4 text-sm font-semibold">
              <Link to="/#products" className="block text-white/70 transition-colors hover:text-white">
                Products
              </Link>
              <Link to="/#about" className="block text-white/70 transition-colors hover:text-white">
                About
              </Link>
              <Link to="/#videos" className="block text-white/70 transition-colors hover:text-white">
                Gallery
              </Link>
              <Link to="/#contact" className="block text-white/70 transition-colors hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-['Manrope'] text-xs font-extrabold uppercase tracking-[0.28em] text-brand-gold">Contact</h3>
            <div className="space-y-4 text-sm leading-6 text-white/70">
              <p>{company.region}</p>
              <p>India</p>
              <a href={`mailto:${company.email}`} className="block transition-colors hover:text-white">{company.email}</a>
              <p>{company.manufacturer}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
            Copyright 2026 {company.manufacturer}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
