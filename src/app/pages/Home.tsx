import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Factory, Mail, MapPin, ShieldCheck, Sparkles, Store } from 'lucide-react';
import { Form, useNavigation } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductGrid } from '../components/ProductGrid';
import { FeatureCard } from '../components/FeatureCard';
import { VideoCard } from '../components/VideoCard';
import { MarketingButton } from '../components/marketing/MarketingButton';
import { company } from '../data/company';

const initialHomeFormData = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

function HomeHighlights({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={className}>
      {company.homeHighlights.map((item) => (
        <div
          key={item.label}
          className={compact
            ? 'green-yellow-highlight-card rounded-2xl p-3 text-center shadow-sm'
            : 'green-yellow-highlight-card rounded-[24px] px-4 py-5 shadow-sm'}
        >
          <CheckCircle2 className={compact ? 'mx-auto mb-2 text-brand-green' : 'mb-3 text-brand-green'} size={18} />
          <p className={compact ? 'text-base font-black text-brand-ink' : 'text-xl font-black text-brand-ink'}>{item.value}</p>
          <p className={compact ? 'text-[11px] font-bold leading-4 text-brand-body' : 'mt-1 text-sm leading-6 text-brand-body'}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function HomeHeroActions({ className }: { className: string }) {
  return (
    <div className={className}>
      <MarketingButton href="#products">
        View Products
        <ArrowRight size={17} className="ml-2" />
      </MarketingButton>
      <MarketingButton href="#contact" variant="outline">
        Contact Us
      </MarketingButton>
    </div>
  );
}

export function Home() {
  const [formData, setFormData] = useState(initialHomeFormData);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting' && navigation.formAction?.includes('/contact/submit');
  const handleFieldChange = (field: keyof typeof initialHomeFormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="brand-landing-background overflow-hidden">
      <section className="relative px-4 pb-12 pt-6 sm:px-6 sm:pb-14 lg:px-12 lg:pb-24 lg:pt-10">
        <div className="relative mx-auto max-w-7xl lg:hidden">
          <div className="green-yellow-hero-copy rounded-[28px] p-4 sm:rounded-[36px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-brand-cream/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-green shadow-sm">
              <Sparkles size={14} />
              {company.content.homeTopBadge}
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-gold">{company.tagline}</p>
            <ImageWithFallback
              src={company.assets.headerLogo.src}
              alt={company.assets.headerLogo.alt}
              className="mt-4 h-auto w-full max-w-[8.5rem] object-contain object-left"
              loading="eager"
              decoding="async"
            />
            <p className="mt-3 text-2xl font-bold uppercase tracking-[0.16em] text-brand-green">{company.productLine}</p>

            <div className="mt-6">
              <div className="inline-flex rounded-full bg-brand-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-xl">
                3 active packs
              </div>
              <div className="hero-product-panel mt-3">
                <div className="flex min-h-[310px] items-center justify-center p-5">
                  <ImageWithFallback
                    src={company.assets.heroPack.src}
                    alt={company.assets.heroPack.alt}
                    className="max-h-[270px] max-w-full object-contain"
                  />
                </div>
                <div className="border-t border-brand-green/10 px-5 py-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-gold">{company.content.homeHeroPackEyebrow}</p>
                  <h2 className="mt-1 text-2xl leading-tight text-brand-ink">{company.content.homeHeroPackTitle}</h2>
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-brand-body">{company.content.homeMobileSummary}</p>

            <HomeHeroActions className="mt-6 flex flex-col gap-3" />
            <HomeHighlights className="mt-8 grid gap-3" />
          </div>
        </div>

        <div className="relative mx-auto hidden max-w-7xl items-center gap-10 lg:grid lg:grid-cols-[1fr_0.9fr]">
          <div className="green-yellow-hero-copy rounded-[28px] p-8 xl:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-brand-cream/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-green shadow-sm">
              <Sparkles size={14} />
              {company.content.homeTopBadge}
            </div>
            <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-brand-gold">{company.tagline}</p>
            <ImageWithFallback
              src={company.assets.headerLogo.src}
              alt={company.assets.headerLogo.alt}
              className="mt-4 h-auto w-full max-w-[20rem] object-contain object-left xl:max-w-[22rem]"
              loading="eager"
              decoding="async"
            />
            <p className="mt-3 max-w-3xl text-xl font-bold uppercase tracking-[0.14em] text-brand-green sm:text-2xl">
              {company.productLine}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-body sm:text-lg lg:text-xl">
              {company.heroSummary}
            </p>
            <HomeHeroActions className="mt-8 flex flex-col gap-3 sm:flex-row" />
            <HomeHighlights compact className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3" />
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-12 z-10 rounded-full bg-brand-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-xl rotate-[-6deg]">
              3 active packs
            </div>
            <div className="hero-product-panel">
              <div className="flex min-h-[520px] items-center justify-center p-8">
                <ImageWithFallback
                  src={company.assets.heroPack.src}
                  alt={company.assets.heroPack.alt}
                  className="max-h-[460px] max-w-full object-contain"
                />
              </div>
              <div className="border-t border-brand-green/10 px-7 py-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold">{company.content.homeHeroPackEyebrow}</p>
                <h2 className="mt-2 text-3xl leading-tight text-brand-ink">{company.content.homeHeroPackTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow on-green-eyebrow">Our Motto</p>
              <h2 className="on-green-heading text-3xl sm:text-4xl">Quality, freshness, and dependable service</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {company.motto.map((item) => (
              <div key={item} className="green-yellow-soft-card rounded-[20px] p-5 shadow-sm">
                <CheckCircle2 className="mb-3 text-brand-green" size={20} />
                <p className="text-base font-black text-brand-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="green-yellow-section-band px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:pb-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-12">
            <div>
              <p className="section-eyebrow on-green-eyebrow">Our Products</p>
              <h2 className="on-green-heading text-4xl lg:text-6xl">Three branded packs built for everyday counters</h2>
            </div>
            <p className="on-green-copy max-w-md text-sm leading-7 lg:text-base">
              {company.content.homeRangeSummary}
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>

      <section id="about" className="pale-page-section px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-12 lg:pb-20 lg:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl lg:mb-10">
            <p className="section-eyebrow on-green-eyebrow">About Us</p>
            <h2 className="on-green-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">A Hyderabad-based saunf brand focused on visibility, hygiene, and distribution.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="surface-card overflow-hidden p-4 sm:p-5">
              <div className="flex min-h-[320px] items-center justify-center rounded-[20px] bg-brand-accent-soft p-5 sm:min-h-[400px] sm:rounded-[24px]">
                <ImageWithFallback
                  src={company.assets.aboutPack.src}
                  alt={company.assets.aboutPack.alt}
                  className="max-h-[280px] w-full object-contain sm:max-h-[360px] lg:max-h-[430px]"
                />
              </div>
            </div>

            <div className="grid gap-5">
              <div className="surface-card p-6 sm:p-8 lg:p-10">
                <p className="section-eyebrow">Company Profile</p>
                <p className="text-base leading-8 text-brand-body lg:text-lg">{company.content.homeCompanyProfile}</p>
                <p className="mt-5 text-base leading-8 text-brand-body lg:text-lg">
                  {company.complianceSummary} The business operates in a fragmented but growing fennel-seed market where consistent packing, competitive pricing, and dependable supply matter as much as taste.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="green-yellow-panel rounded-[22px] p-5">
                  <Factory className="mb-3 text-brand-green" />
                  <p className="font-extrabold text-brand-ink">Manufacturing Focus</p>
                </div>
                <div className="green-yellow-panel rounded-[22px] p-5">
                  <Sparkles className="mb-3 text-brand-green" />
                  <p className="font-extrabold text-brand-ink">Retail Recall</p>
                </div>
                <div className="green-yellow-panel rounded-[22px] p-5">
                  <ShieldCheck className="mb-3 text-brand-green" />
                  <p className="font-extrabold text-brand-ink">Compliance Priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="green-yellow-section-band px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <FeatureCard icon={Store} title="Wide Customer Base" description="The product line is suitable for retailers, supermarkets, restaurants, sweet shops, and bulk trade buyers." />
          <FeatureCard icon={Sparkles} title="Growing Category" description="Market demand is supported by rising interest in digestive, natural, and value-added fennel products." />
          <FeatureCard icon={ShieldCheck} title="Operational Discipline" description="Label accuracy, hygienic handling, pest control, and food-grade storage are core business requirements." />
        </div>
      </section>

      {/* Pack video tiles on the home page only. Source: `company.gallery` (not the /videos route). */}
      <section id="videos" className="green-yellow-section-band px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="section-eyebrow on-green-eyebrow">Gallery</p>
              <h2 className="on-green-heading text-4xl lg:text-6xl">Brand creatives and pack visuals</h2>
            </div>
            <ArrowRight className="hidden text-[#18361F] md:block" size={44} />
          </div>
          <div className="grid grid-cols-1 gap-5 min-[430px]:grid-cols-3 lg:gap-7">
            {company.homeGallery.map((item) => (
              <VideoCard key={item.caption} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="green-yellow-panel shadow-brand-panel rounded-[24px] p-6 sm:rounded-[32px] lg:p-8">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Contact Krishnsai Industries</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {company.content.homeContactPrompt}
            </p>
            <MarketingButton
              href={`mailto:${company.email}`}
              className="mt-7 px-6"
            >
              <Mail size={18} className="mr-2" />
              Email Us
            </MarketingButton>
            <div className="mt-8 space-y-4 text-sm leading-6 text-brand-body">
              <p><strong className="text-brand-ink">Brand:</strong> {company.brandDisplayName} {company.productLine}</p>
              <p><strong className="text-brand-ink">Company:</strong> {company.manufacturer}</p>
              <p className="flex gap-2"><Mail size={16} className="mt-1 shrink-0 text-brand-green" /> <span>{company.email}</span></p>
              <p className="flex gap-2"><MapPin size={16} className="mt-1 shrink-0 text-brand-green" /> <span>{company.location}</span></p>
            </div>
          </div>

          <Form method="post" action="/contact/submit" className="surface-card p-5 sm:p-6 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="home-contact-name">Name</label>
              <input
                id="home-contact-name"
                name="name"
                required
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleFieldChange('name')}
                className="marketing-input min-h-12"
                placeholder="Name"
              />
              <label className="sr-only" htmlFor="home-contact-phone">Phone</label>
              <input
                id="home-contact-phone"
                name="phone"
                required
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleFieldChange('phone')}
                className="marketing-input min-h-12"
                placeholder="Phone"
              />
              <label className="sr-only" htmlFor="home-contact-email">Email</label>
              <input
                id="home-contact-email"
                name="email"
                required
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleFieldChange('email')}
                className="marketing-input min-h-12 sm:col-span-2"
                placeholder="Email"
              />
              <label className="sr-only" htmlFor="home-contact-message">Message</label>
              <textarea
                id="home-contact-message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleFieldChange('message')}
                className="marketing-input py-4 sm:col-span-2"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="cta-base cta-dark mt-5 w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        </div>
      </section>
    </div>
  );
}
