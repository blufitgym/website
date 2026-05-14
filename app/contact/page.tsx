import type { Metadata } from 'next';
import { contactMetadata } from '@/lib/metadata';
import { FadeUp } from '@/components/ui/FadeUp';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { MapEmbed } from '@/components/contact/MapEmbed';
import { EnquiryForm } from '@/components/contact/EnquiryForm';
import { Button } from '@/components/ui/Button';
import { WA_DEFAULT } from '@/lib/constants';

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark2 pt-36 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,125,191,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-brand-blue">
                Find Us
              </div>
              <h1 className="font-display text-[64px] font-bold uppercase leading-[0.9] tracking-display text-white sm:text-[86px]">
                Contact
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.8] text-brand-light">
                We are on Airport Road, Bondel, Mangaluru. Walk in or reach out before you visit.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[40%_60%] sm:px-6 lg:px-8">
          <FadeUp>
            <ContactInfo />
          </FadeUp>
          <FadeUp delay={0.1}>
            <MapEmbed />
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-white/5 bg-brand-dark2 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl text-[16px] leading-[1.8] text-brand-light">
            Chat with us directly on WhatsApp for membership enquiries, timings, or any questions.
            We respond quickly.
          </div>
          <Button href={WA_DEFAULT} target="_blank" variant="whatsapp">
            Message Us on WhatsApp
          </Button>
        </div>
      </section>

      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
