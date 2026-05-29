import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FlavorChip, LaunchBadge } from './marketing/ProductLabels';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  flavors: string[];
  isLaunched: boolean;
  image?: string;
}

export function ProductCard({ id, name, description, flavors, isLaunched, image }: ProductCardProps) {
  return (
    <Link
      to={`/products/${id}`}
      className="surface-card-sm brand-card-hover group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-accent-soft">
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
          <ImageWithFallback
            src={image || ''}
            alt={name}
            className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-brand-cream/10"></div>
        <LaunchBadge isLaunched={isLaunched} className="absolute left-3 top-3" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-2 text-lg text-brand-ink sm:text-xl">{name}</h3>
        <p className="mb-4 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {flavors.map((flavor) => (
            <FlavorChip key={flavor} flavor={flavor} />
          ))}
        </div>
        <span className="mt-5 inline-flex items-center text-xs font-extrabold uppercase tracking-[0.18em] text-brand-green transition group-hover:translate-x-1">
          View details
        </span>
      </div>
    </Link>
  );
}
