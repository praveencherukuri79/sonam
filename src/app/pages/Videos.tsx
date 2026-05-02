import React from 'react';
import { Play } from 'lucide-react';
import { VideoCard } from '../components/VideoCard';
import { MarketingButton } from '../components/marketing/MarketingButton';
import { PageHero } from '../components/marketing/PageHero';
import { company } from '../data/company';

export function Videos() {
  const videos = company.videosGallery;

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Gallery"
        title={`${company.brandDisplayName} packs & motion`}
        description={company.content.videosPageDescription}
      />

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {videos.map((video, index) => (
              <VideoCard key={`${video.caption}-${index}`} {...video} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 text-center sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
        <div className="surface-card mx-auto max-w-4xl p-6 lg:p-10">
          <Play className="mx-auto mb-4 text-brand-gold" size={44} />
          <h2 className="section-title mb-5">Trade & brand enquiries</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-muted-foreground">{company.content.videosCtaDescription}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <MarketingButton href={`mailto:${company.email}`} variant="dark">
              EMAIL US
            </MarketingButton>
            <MarketingButton to="/contact" variant="outline">
              CONTACT PAGE
            </MarketingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
