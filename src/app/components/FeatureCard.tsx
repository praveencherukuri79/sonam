import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="surface-card-sm brand-card-hover h-full p-6">
      <div className="brand-soft-gradient mb-5 flex h-14 w-14 items-center justify-center rounded-2xl">
        <Icon size={28} className="text-brand-green" />
      </div>
      <h3 className="mb-2 text-xl text-brand-ink">{title}</h3>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}
