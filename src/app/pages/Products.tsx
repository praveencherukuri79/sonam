import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { PageHero } from '../components/marketing/PageHero';
import { company } from '../data/company';

export function Products() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Our Products"
        title={`${company.brandDisplayName} Product Range`}
        description={company.content.productsPageDescription}
      />

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}
