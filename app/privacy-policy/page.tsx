import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/ui/FadeUp';
import { privacyMetadata } from '@/lib/metadata';
import { ADDRESS, EMAIL } from '@/lib/constants';

export const metadata: Metadata = privacyMetadata;

const sections = [
  {
    title: 'Information We Collect',
    items: [
      'Contact details you share with us, such as your name, phone number, and email address.',
      'Enquiry details submitted through our website, WhatsApp, or in person.',
      'Basic usage data like page views, device type, and browser information.',
    ],
  },
  {
    title: 'How We Use Information',
    items: [
      'Respond to membership enquiries and service requests.',
      'Share membership updates, reminders, and important gym information.',
      'Improve our website, services, and customer experience.',
    ],
  },
  {
    title: 'Sharing And Security',
    items: [
      'We do not sell your personal information.',
      'We may share limited data with service providers that help us operate the website or respond to enquiries.',
      'We use reasonable safeguards to protect the information we handle, but no online system is completely risk-free.',
    ],
  },
  {
    title: 'Your Choices',
    items: [
      'You may ask us to review, update, or delete the personal information you have shared.',
      'You can opt out of marketing messages at any time by contacting us.',
      'If you use WhatsApp or other third-party services, their own privacy policies also apply.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-brand-black">
      <div className="relative overflow-hidden bg-brand-dark2 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,125,191,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-brand-blue">
                Legal
              </div>
              <h1 className="max-w-[12ch] font-display text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[0.94] tracking-display text-white sm:max-w-none sm:text-[64px]">
                Privacy Policy
              </h1>
              <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.75] text-brand-light sm:text-[16px]">
                This policy explains how we collect, use, and protect information when you visit the
                blufit Gym website or contact us through our forms and messaging channels.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[13px] uppercase tracking-widest text-brand-muted">
            Last updated: May 14, 2026
          </p>
        </FadeUp>

        <div className="mt-8 space-y-4">
          {sections.map((section) => (
            <FadeUp key={section.title}>
              <article className="border border-white/6 bg-brand-card p-6 sm:p-7">
                <h2 className="font-display text-[22px] uppercase tracking-[0.08em] text-white sm:text-[24px]">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-brand-light">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <article className="mt-8 border border-white/6 bg-brand-card p-6 sm:p-7">
            <h2 className="font-display text-[22px] uppercase tracking-[0.08em] text-white sm:text-[24px]">
              Contact Us
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-brand-light">
              If you have questions about this policy or want to update your information, please
              contact us using the details below.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                  Email Us
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[17px] text-white hover:text-brand-blue transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                  Visit Us
                </span>
                <p className="max-w-md text-[17px] leading-relaxed text-white">
                  {ADDRESS}
                </p>
              </div>
            </div>
          </article>
        </FadeUp>

        <p className="mt-8 text-[13px] leading-6 text-brand-muted">
          This page is provided for general informational purposes and may be updated from time to
          time.
        </p>
      </div>
    </section>
  );
}
