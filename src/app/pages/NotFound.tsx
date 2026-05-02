import React from 'react';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-brand-page px-6">
      <div className="surface-card w-full max-w-2xl p-6 text-center sm:p-8 lg:p-12">
        <p className="section-eyebrow">Page Missing</p>
        <h1 className="mb-5 text-7xl text-brand-ink sm:text-8xl lg:mb-8 lg:text-[10rem]">404</h1>
        <h2 className="mb-4 text-3xl leading-tight text-brand-ink sm:text-4xl lg:mb-6 lg:text-5xl">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg lg:mb-12">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="cta-base cta-dark w-full px-10 sm:w-auto lg:px-14"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
