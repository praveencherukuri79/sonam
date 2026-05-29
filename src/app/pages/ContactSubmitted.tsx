import React from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { MarketingButton } from '../components/marketing/MarketingButton';
import { PageHero } from '../components/marketing/PageHero';
import { company } from '../data/company';

export function ContactSubmitted() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name')?.trim();
  const email = searchParams.get('email')?.trim();

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Enquiry Sent"
        title="Thanks for reaching out"
        description="We have received your enquiry details. Our team will review your message and follow up through the contact information you shared."
      />

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
        <div className="surface-card mx-auto max-w-3xl p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="mx-auto w-fit rounded-full bg-brand-green/10 p-3 text-brand-green sm:mx-0">
              <CheckCircle2 size={22} />
            </div>
            <div className="min-w-0 text-center sm:text-left">
              <h2 className="text-3xl leading-tight text-brand-ink sm:text-4xl">Submission received</h2>
              <p className="mt-3 text-base leading-8 text-brand-body">
                {name ? `${name}, ` : ''}thank you for contacting {company.manufacturer}.
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
        </div>
      </section>
    </div>
  );
}