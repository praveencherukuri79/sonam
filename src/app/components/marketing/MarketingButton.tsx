import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';

type ButtonVariant = 'primary' | 'dark' | 'outline';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'cta-primary',
  dark: 'cta-dark',
  outline: 'cta-outline',
};

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

type MarketingLinkButtonProps = BaseProps & LinkProps & {
  href?: never;
};

type MarketingAnchorButtonProps = BaseProps & ComponentPropsWithoutRef<'a'> & {
  to?: never;
};

export type MarketingButtonProps = MarketingLinkButtonProps | MarketingAnchorButtonProps;

export function MarketingButton({ children, className = '', variant = 'primary', ...props }: MarketingButtonProps) {
  const classes = `cta-base ${variantClasses[variant]} ${className}`;

  if ('to' in props && props.to !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a {...props} className={classes}>
      {children}
    </a>
  );
}
