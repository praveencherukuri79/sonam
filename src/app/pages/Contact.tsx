import React, { useState } from 'react';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Form, useNavigation } from 'react-router';
import { MarketingButton } from '../components/marketing/MarketingButton';
import { PageHero } from '../components/marketing/PageHero';
import { company, contactChannels } from '../data/company';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting' && navigation.formAction?.includes('/contact/submit');

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Get In Touch"
        title={`Contact ${company.manufacturer}`}
        description={company.content.contactPageDescription}
      />

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="surface-card p-5 sm:p-6 lg:p-8">
            <Form method="post" action="/contact/submit" className="space-y-5">
              <div>
                <label htmlFor="name" className="marketing-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="marketing-input min-h-12 w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="marketing-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="marketing-input min-h-12 w-full"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="marketing-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="marketing-input min-h-12 w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="marketing-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="marketing-input w-full resize-none py-4"
                  placeholder="Tell us how we can help you"
                />
              </div>

              <button type="submit" className="cta-base cta-dark w-full" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </Form>
          </div>

          <div className="green-yellow-panel rounded-[24px] p-6 sm:rounded-[32px] lg:p-8">
            <MarketingButton
              href={`mailto:${company.email}`}
              className="mb-8 px-6"
            >
              <Mail size={18} className="mr-2" />
              Email Us
            </MarketingButton>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-green"><Mail size={16} /> Contact Details</h3>
                <div className="space-y-3 text-brand-body">
                  {contactChannels.map((channel) => (
                    <p key={channel.label}>
                      <span className="font-bold text-brand-ink">{channel.label}:</span>{' '}
                      {'href' in channel && channel.href ? <a href={channel.href} className="hover:text-brand-green">{channel.value}</a> : channel.value}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-green"><MapPin size={16} /> Address Note</h3>
                <p className="leading-relaxed text-brand-body">
                  {company.manufacturer}<br />
                  {company.location}
                </p>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-green"><ShieldCheck size={16} /> Enquiry Types</h3>
                <div className="space-y-2 text-brand-body">
                  <p>Retail placement and distributor onboarding</p>
                  <p>Bulk supply and HoReCa requirements</p>
                  <p>Brand and export-related business communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
