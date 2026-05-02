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
            ? 'rounded-2xl border border-brand-green/10 bg-white/70 p-3 text-center shadow-sm'
            : 'rounded-[24px] border border-brand-green/10 bg-white/85 px-4 py-5 shadow-sm'}
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
    <div className="overflow-hidden bg-brand-page">
      <section className="relative px-4 pb-12 pt-6 sm:px-6 sm:pb-14 lg:px-12 lg:pb-24 lg:pt-10">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-brand-mint/20 blur-3xl"></div>
        <div className="absolute right-[-6rem] top-72 h-72 w-72 rounded-full bg-brand-saffron/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl lg:hidden">
          <div className="rounded-[28px] border border-white/70 bg-white/55 p-4 shadow-brand-hero backdrop-blur-sm sm:rounded-[36px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-green shadow-sm">
              <Sparkles size={14} />
              {company.content.homeTopBadge}
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-gold">{company.tagline}</p>
            <h1 className="mt-4 text-5xl leading-none text-brand-ink">{company.brandDisplayName}</h1>
            <p className="mt-3 text-2xl font-bold uppercase tracking-[0.16em] text-brand-green">{company.productLine}</p>

            <div className="mt-6">
              <div className="inline-flex rounded-full bg-brand-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-xl">
                3 active packs
              </div>
              <div className="shadow-brand-hero mt-3 rounded-[24px] border border-white bg-white p-3 sm:rounded-[32px]">
                <div className="relative aspect-[5/6] overflow-hidden rounded-[20px] bg-brand-accent-soft sm:aspect-[4/5] sm:rounded-[24px]">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <ImageWithFallback
                      src={company.assets.heroPack.src}
                      alt={company.assets.heroPack.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-gold">{company.content.homeHeroPackEyebrow}</p>
                    <h2 className="max-w-[12rem] text-2xl leading-tight text-white">{company.content.homeHeroPackTitle}</h2>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-brand-body">{company.content.homeMobileSummary}</p>

            <HomeHeroActions className="mt-6 flex flex-col gap-3" />
            <HomeHighlights className="mt-8 grid gap-3" />
          </div>
        </div>

        <div className="relative mx-auto hidden max-w-7xl items-center gap-10 lg:grid lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-green shadow-sm">
              <Sparkles size={14} />
              {company.content.homeTopBadge}
            </div>
            <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-brand-gold">{company.tagline}</p>
            <h1 className="mt-3 max-w-3xl text-5xl text-brand-ink sm:text-6xl lg:text-7xl xl:text-8xl">
              {company.brandDisplayName}
            </h1>
            <p className="mt-3 max-w-3xl text-xl font-bold uppercase tracking-[0.14em] text-brand-green sm:text-2xl">
              {company.productLine}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-body sm:text-lg lg:text-xl">
              {company.heroSummary}
            </p>
            <HomeHeroActions className="mt-8 flex flex-col gap-3 sm:flex-row" />
            <HomeHighlights compact className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3" />
          </div>

          <div className="relative pb-16 sm:pb-12">
            <div className="absolute -left-4 top-12 z-10 rounded-full bg-brand-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-xl rotate-[-6deg]">
              3 active packs
            </div>
            <div className="shadow-brand-hero relative rounded-[36px] border border-white bg-white p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-brand-accent-soft">
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                  <ImageWithFallback
                    src={company.assets.heroPack.src}
                    alt={company.assets.heroPack.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/65 via-brand-ink/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 pr-32 sm:p-6 sm:pr-40">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-gold sm:text-xs">{company.content.homeHeroPackEyebrow}</p>
                  <h2 className="max-w-[11rem] text-xl leading-tight text-white sm:max-w-[16rem] sm:text-3xl">
                    {company.content.homeHeroPackTitle}
                  </h2>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-2 rounded-[24px] border border-brand-green/10 bg-white p-4 shadow-2xl sm:p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-gold">Customer mix</p>
              <p className="font-['Fraunces'] text-2xl text-brand-ink">Retail + bulk</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-12">
            <div>
              <p className="section-eyebrow">Our Products</p>
              <h2 className="text-4xl text-brand-ink lg:text-6xl">Three branded packs built for everyday counters</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground lg:text-base">
              {company.content.homeRangeSummary}
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>

      <section id="about" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
        <div className="shadow-brand-hero-strong mx-auto max-w-7xl rounded-[28px] bg-brand-ink p-5 text-white sm:rounded-[36px] lg:p-10">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-8">
            <div className="relative overflow-hidden rounded-[22px] bg-brand-accent-soft p-4 sm:flex sm:min-h-[380px] sm:items-center sm:justify-center sm:rounded-[28px] sm:p-8 sm:pb-32">
              <ImageWithFallback
                src={company.assets.aboutPack.src}
                alt={company.assets.aboutPack.alt}
                className="mx-auto max-h-[240px] w-full object-contain sm:max-h-[340px] lg:max-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 to-transparent"></div>
              <div className="relative z-10 mt-4 rounded-[20px] border border-white/15 bg-white/12 p-5 backdrop-blur-xl sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:mt-0 sm:max-w-[30rem] sm:rounded-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-gold">Company profile</p>
                <p className="mt-2 text-lg leading-7 text-white/90">{company.content.homeCompanyProfile}</p>
              </div>
            </div>
            <div className="pt-1 sm:pt-0">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.26em] text-brand-mint">About Us</p>
              <h2 className="max-w-[14ch] text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">A Hyderabad-based saunf brand focused on visibility, hygiene, and distribution.</h2>
              <p className="mt-5 text-base leading-8 text-white/70 lg:text-lg">
                {company.complianceSummary} The business operates in a fragmented but growing fennel-seed market where consistent packing, competitive pricing, and dependable supply matter as much as taste.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:mt-8">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <Factory className="mb-3 text-brand-mint" />
                  <p className="font-bold">Manufacturing Focus</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <Sparkles className="mb-3 text-brand-saffron" />
                  <p className="font-bold">Retail Recall</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <ShieldCheck className="mb-3 text-brand-gold" />
                  <p className="font-bold">Compliance Priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <FeatureCard icon={Store} title="Wide Customer Base" description="The product line is suitable for retailers, supermarkets, restaurants, sweet shops, and bulk trade buyers." />
          <FeatureCard icon={Sparkles} title="Growing Category" description="Market demand is supported by rising interest in digestive, natural, and value-added fennel products." />
          <FeatureCard icon={ShieldCheck} title="Operational Discipline" description="Label accuracy, hygienic handling, pest control, and food-grade storage are core business requirements." />
        </div>
      </section>

      {/* Pack video tiles on the home page only. Source: `company.gallery` (not the /videos route). */}
      <section id="videos" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="section-eyebrow">Gallery</p>
              <h2 className="text-4xl text-brand-ink lg:text-6xl">Brand creatives and pack visuals</h2>
            </div>
            <ArrowRight className="hidden text-brand-gold md:block" size={44} />
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
          <div className="shadow-brand-panel rounded-[24px] bg-brand-accent-soft p-6 sm:rounded-[32px] lg:p-8">
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
