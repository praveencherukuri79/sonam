import React from 'react';

interface LaunchBadgeProps {
  isLaunched: boolean;
  className?: string;
}

interface FlavorChipProps {
  flavor: string;
  className?: string;
}

export function LaunchBadge({ isLaunched, className = '' }: LaunchBadgeProps) {
  return (
    <span className={`launch-badge ${isLaunched ? 'bg-brand-green text-white' : 'bg-white/95 text-brand-warning'} ${className}`}>
      {isLaunched ? 'Launched' : 'Coming Soon'}
    </span>
  );
}

export function FlavorChip({ flavor, className = '' }: FlavorChipProps) {
  return <span className={`flavor-chip ${className}`}>{flavor}</span>;
}
