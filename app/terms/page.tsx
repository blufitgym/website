import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/ui/FadeUp';
import { termsMetadata } from '@/lib/metadata';
import { ADDRESS, EMAIL } from '@/lib/constants';

export const metadata: Metadata = termsMetadata;

const sections = [
  {
    title: 'Use Of The Website',
    items: [
      'You may use the website to learn about our services, memberships, location, and contact options.',
      'Please do not misuse the website, attempt unauthorized access, or interfere with its operation.',
    ],
  },
  {
    title: 'Memberships And Services',
    items: [
      'Membership pricing, inclusions, timings, and offers may change from time to time.',
      'Any promotions are subject to availability and may be withdrawn or updated without notice.',
      'Access to the gym is subject to our facility rules, safety requirements, and operating hours.',
    ],
  },
  {
    title: 'Health And Safety',
    items: [
      'You are responsible for deciding whether exercise is appropriate for your personal health and fitness level.',
      'If you have any medical condition or concern, consult a qualified professional before starting a workout program.',
      'Please follow coach instructions, equipment guidelines, and all safety notices inside the gym.',
    ],
  },
  {
    title: 'Payments And Conduct',
    items: [
      'Fees are payable according to the membership plan you choose.',
      'You agree to use the facility respectfully and not engage in unsafe, abusive, or disruptive behavior.',
      'We may suspend or refuse service if a user violates the rules or behaves in a way that risks safety or operations.',
    ],
  },
  {
    title: 'Liability',
    items: [
      'We work to keep the website and facility reliable, but we cannot guarantee uninterrupted service or complete error-free content.',
      'To the fullest extent allowed by law, blufit Gym is not responsible for indirect or incidental losses resulting from use of the website or services.',
    ],
  },
];

export default function TermsPage() {
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
              <h1 className="max-w-[14ch] font-display text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[0.94] tracking-display text-white sm:max-w-none sm:text-[64px]">
                Terms and Conditions
              </h1>
              <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.75] text-brand-light sm:text-[16px]">
                These terms describe the basic rules for using the blufit Gym website and the gym
                services we offer.
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
              Questions?
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-brand-light">
              If you need help understanding these terms or want to discuss membership details,
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
          By using the website or our services, you agree to these terms as updated from time to
          time.
        </p>
      </div>
    </section>
  );
}
