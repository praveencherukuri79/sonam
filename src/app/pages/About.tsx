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
        <div className="surface-card mx-auto max-w-5xl p-6 lg:p-10">
          <h2 className="section-title mb-6">Who We Are</h2>
          <div className="space-y-5 body-copy">
            <p>{company.content.aboutIntroLead}</p>
            <p>{company.content.aboutIntroBody}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title on-green-heading mb-10 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {company.aboutHighlights.map((item, index) => (
              <FeatureCard key={item.title} icon={aboutHighlightIcons[index]} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-2">
          <div className="green-yellow-panel h-full rounded-[28px] p-5 sm:rounded-[32px] sm:p-6 lg:p-10">
            <h2 className="section-title mb-5 lg:mb-6">Our Approach</h2>
            <ul className="space-y-4 text-base leading-7 text-brand-body">
              {company.aboutQualityPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <ShieldCheck className="mt-1 shrink-0 text-brand-green" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card h-full p-5 sm:p-6 lg:p-10">
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
