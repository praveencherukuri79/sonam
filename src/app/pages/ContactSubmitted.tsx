import React from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { MarketingButton } from '../components/marketing/MarketingButton';
import { company } from '../data/company';

export function ContactSubmitted() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name')?.trim();
  const email = searchParams.get('email')?.trim();

  return (
    <div className="page-shell">
      <section className="px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-14 lg:px-12 lg:pb-14 lg:pt-20">
        <p className="section-eyebrow">Enquiry Sent</p>
        <h1 className="mx-auto max-w-[12ch] text-4xl leading-none text-brand-ink sm:text-5xl lg:text-6xl">
          Thanks for reaching out
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          Your enquiry was submitted to the demo contact route. This is a placeholder flow until a real backend or email service is connected.
        </p>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-3xl rounded-[24px] border border-brand-green/10 bg-brand-cream p-5 shadow-brand-panel sm:rounded-[32px] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="mx-auto w-fit rounded-full bg-brand-green/10 p-3 text-brand-green sm:mx-0">
              <CheckCircle2 size={22} />
            </div>
            <div className="min-w-0 text-center sm:text-left">
              <h2 className="text-3xl leading-tight text-brand-ink sm:text-4xl">Submission received</h2>
              <p className="mt-3 text-base leading-8 text-brand-body">
                {name ? `${name}, ` : ''}your enquiry has been sent through the demo route for {company.manufacturer}.
              </p>
              {email ? (
                <p className="mt-4 inline-flex w-full items-start gap-2 rounded-2xl border border-brand-green/10 bg-brand-accent-soft px-4 py-3 text-left text-sm font-semibold text-brand-ink sm:w-auto sm:items-center sm:rounded-full sm:py-2">
                  <Mail size={16} className="text-brand-green" />
                  <span className="min-w-0 break-all">{email}</span>
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <MarketingButton to="/contact" className="w-full sm:w-auto">Back to Contact</MarketingButton>
            <MarketingButton to="/products" variant="outline" className="w-full sm:w-auto">View Products</MarketingButton>
          </div>

          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            Next step for production: replace this route action with a real email or API integration.
          </p>
        </div>
      </section>
    </div>
  );
}