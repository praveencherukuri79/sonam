import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-12 lg:py-24">
      <div className="green-yellow-page-hero mx-auto max-w-5xl rounded-[28px] px-5 py-8 sm:rounded-[36px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="lead-copy">{description}</p>
      </div>
    </section>
  );
}
