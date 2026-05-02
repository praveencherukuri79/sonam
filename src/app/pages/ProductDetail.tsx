import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { products } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, CheckCircle2, Leaf, PackageCheck, Sparkles } from 'lucide-react';
import { MarketingButton } from '../components/marketing/MarketingButton';
import { FlavorChip, LaunchBadge } from '../components/marketing/ProductLabels';
import { company } from '../data/company';

const productProfileDescription = `A retail-facing saunf product from ${company.manufacturer} with packaging-led recognition and everyday after-meal appeal.`;

const productStoryHighlights = [
  {
    title: 'Category Fit',
    description: 'Designed for the everyday saunf and mouth freshener market with familiar taste expectations.',
    icon: Leaf,
    iconClassName: 'text-brand-green',
  },
  {
    title: 'Shelf Recall',
    description: 'Strong pack visibility supports retail recognition in a competitive fragmented market.',
    icon: Sparkles,
    iconClassName: 'text-brand-saffron',
  },
  {
    title: 'Trade Ready',
    description: 'Relevant for distributor, retailer, and business enquiries rather than direct checkout.',
    icon: PackageCheck,
    iconClassName: 'text-brand-gold',
  },
] as const;

function BackToProductsButton({
  onClick,
  className,
  iconSize,
}: {
  onClick: () => void;
  className: string;
  iconSize: number;
}) {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label="Back to products"
    >
      <ArrowLeft size={iconSize} />
    </button>
  );
}

function ProductActionButtons({ className }: { className: string }) {
  return (
    <div className={className}>
      <MarketingButton to="/contact">Contact Us</MarketingButton>
      <MarketingButton to="/products" variant="outline">View Collection</MarketingButton>
    </div>
  );
}

function ProductProfileCard({ className }: { className: string }) {
  return (
    <div className={className}>
      <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-brand-gold">
        Brand pack profile
      </p>
      <p className="text-lg font-semibold leading-8 text-brand-ink">
        {productProfileDescription}
      </p>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="mb-4">Product Not Found</h2>
          <Link to="/products" className="text-brand-green hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);
  const primaryFlavor = product.flavors[0] ?? 'Signature';

  return (
    <div className="overflow-hidden bg-brand-page">
      <section className="relative px-4 py-6 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-brand-mint/18 blur-3xl"></div>
        <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-brand-saffron/18 blur-3xl"></div>

        <div className="relative mx-auto lg:hidden">
          <BackToProductsButton
            onClick={() => navigate('/products')}
            className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-green/15 bg-white text-brand-ink shadow-sm transition hover:border-brand-green hover:text-brand-green"
            iconSize={14}
          />

          <div className="surface-card overflow-hidden rounded-[24px] p-4">
            <div className="rounded-[22px] bg-gradient-to-br from-brand-accent-soft via-white to-brand-accent-soft/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="relative overflow-hidden rounded-[18px] bg-white/65 px-4 py-6">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-saffron/18 to-transparent"></div>
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 mx-auto h-52 w-full object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <LaunchBadge isLaunched={product.isLaunched} className="px-4 py-2 text-xs tracking-[0.18em]" />
              <span className="rounded-full border border-brand-gold/25 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-warning">
                {product.weight}
              </span>
            </div>

            <h1 className="mt-5 text-4xl leading-tight text-brand-ink">{product.name}</h1>
            <p className="mt-4 text-base leading-8 text-brand-body">{product.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.flavors.map((flavor) => (
                <FlavorChip key={flavor} flavor={flavor} className="px-4 py-2 text-xs tracking-[0.16em]" />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-[18px] border border-brand-green/10 bg-brand-page px-4 py-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-gold">Pack Type</p>
                <p className="mt-2 text-lg font-semibold leading-7 text-brand-ink">{product.weight}</p>
              </div>
              <div className="rounded-[18px] border border-brand-green/10 bg-brand-page px-4 py-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-gold">Taste Note</p>
                <p className="mt-2 text-lg font-semibold leading-7 text-brand-ink">{primaryFlavor}</p>
              </div>
            </div>

            <ProductProfileCard className="mt-6 rounded-[18px] border border-brand-green/10 bg-brand-page px-5 py-5" />

            <ProductActionButtons className="mt-6 flex flex-col gap-3" />
          </div>
        </div>

        <div className="relative mx-auto hidden max-w-7xl gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <BackToProductsButton
              onClick={() => navigate('/products')}
              className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-green/15 bg-white text-brand-ink shadow-sm transition hover:border-brand-green hover:text-brand-green"
              iconSize={19}
            />

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <LaunchBadge isLaunched={product.isLaunched} className="px-4 py-2 text-xs tracking-[0.18em]" />
              <span className="rounded-full border border-brand-gold/25 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-warning">
                {product.weight} showcase pack
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl text-brand-ink lg:text-7xl">{product.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-body lg:text-xl">
              {product.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {product.flavors.map((flavor) => (
                <FlavorChip key={flavor} flavor={flavor} className="px-4 py-2 text-xs tracking-[0.16em]" />
              ))}
            </div>

            <ProductActionButtons className="mt-9 flex flex-col gap-3 sm:flex-row" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-5">
              <div className="shadow-brand-hero relative rounded-[32px] border border-white bg-white p-3 sm:rounded-[36px]">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] bg-brand-accent-soft sm:aspect-[4/3] sm:rounded-[28px] lg:aspect-[4/5]">
                  <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-7">
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/55 to-transparent"></div>
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              <ProductProfileCard className="surface-card-sm p-5 sm:p-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-6 lg:p-10">
            <p className="section-eyebrow">Product Story</p>
            <h2 className="section-title mb-5">About this blend</h2>
            <p className="body-copy">{product.longDescription}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {productStoryHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="surface-card-sm p-5">
                  <Icon className={`mb-4 ${item.iconClassName}`} />
                  <h3 className="mb-2 text-xl text-brand-ink">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="shadow-brand-dark-section rounded-[32px] bg-brand-ink p-6 text-white lg:p-8">
            <h2 className="mb-6 text-4xl">Ingredients</h2>
            <ul className="space-y-4">
              {product.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-3 text-white/75">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-mint" size={18} />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6 lg:p-8">
            <h2 className="section-title mb-6">Benefits</h2>
            <ul className="space-y-4">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-brand-body">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-green" size={18} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-eyebrow">More Products</p>
                <h2 className="section-title">Explore the rest of the range</h2>
              </div>
              <Link to="/products" className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-green">
                View all products
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
