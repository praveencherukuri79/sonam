import React from 'react';
import { Factory, ShieldCheck, Sparkles } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { PageHero } from '../components/marketing/PageHero';
import { company } from '../data/company';

const aboutHighlightIcons = [Sparkles, ShieldCheck, Factory] as const;

export function About() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="About the Brand"
        title={`${company.brandDisplayName} by ${company.manufacturer}`}
        description={company.content.aboutPageDescription}
      />

      <section className="px-4 pb-12 sm:px-6 lg:px-12 lg:pb-20">
        <div className="surface-card mx-auto max-w-4xl p-6 lg:p-10">
          <h2 className="section-title mb-6">Who We Are</h2>
          <div className="space-y-5 body-copy">
            <p>{company.content.aboutIntroLead}</p>
            <p>{company.content.aboutIntroBody}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title mb-10 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {company.aboutHighlights.map((item, index) => (
              <FeatureCard key={item.title} icon={aboutHighlightIcons[index]} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] bg-brand-ink p-5 text-white sm:rounded-[32px] sm:p-6 lg:p-10">
            <h2 className="mb-5 text-3xl leading-tight text-white sm:text-4xl lg:mb-6 lg:text-5xl">Our Approach</h2>
            <ul className="space-y-4 text-base leading-7 text-white/75">
              {company.aboutQualityPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <ShieldCheck className="mt-1 shrink-0 text-brand-mint" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-5 sm:p-6 lg:p-10">
            <h2 className="section-title mb-6">Who We Serve</h2>
            <p className="mb-6 text-base leading-7 text-muted-foreground">{company.content.aboutWhoWeServeIntro}</p>
            <ul className="space-y-4 text-base leading-7 text-muted-foreground">
              {company.customerSegments.map((segment) => (
                <li key={segment} className="flex gap-3">
                  <Sparkles className="mt-1 shrink-0 text-brand-gold" size={18} />
                  <span>{segment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
