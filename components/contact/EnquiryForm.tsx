'use client';

import { FormEvent, useState } from 'react';
import { WHATSAPP_NUM } from '@/lib/constants';

export function EnquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          source: 'contact-form',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to save your enquiry right now.');
      }

      const payload = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Message: ${message}`,
        '',
        'Sent from the blufit website enquiry form.',
      ].join('\n');

      window.location.href = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(payload)}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="mx-auto max-w-3xl border border-white/7 bg-brand-card p-6 sm:p-10"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="min-w-0 border border-white/12 bg-transparent px-4 py-3 text-[16px] text-white outline-none placeholder:text-brand-muted focus:border-brand-blue focus:shadow-[0_0_0_1px_#3b7dbf]"
          placeholder="Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="min-w-0 border border-white/12 bg-transparent px-4 py-3 text-[16px] text-white outline-none placeholder:text-brand-muted focus:border-brand-blue focus:shadow-[0_0_0_1px_#3b7dbf]"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <textarea
        className="mt-4 min-h-[140px] w-full border border-white/12 bg-transparent px-4 py-3 text-[16px] text-white outline-none placeholder:text-brand-muted focus:border-brand-blue focus:shadow-[0_0_0_1px_#3b7dbf]"
        placeholder="Message / Enquiry"
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <div className="mt-6">
        <button
          className="inline-flex w-full items-center justify-center bg-[#25D366] px-8 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1fba5a] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Sending...' : 'Send Enquiry'}
        </button>
      </div>

      {error ? (
        <p className="mt-4 text-[13px] leading-6 text-red-300">{error}</p>
      ) : (
        <p className="mt-4 text-[13px] leading-6 text-brand-muted">
          Your enquiry is saved first, then WhatsApp opens with your details pre-filled.
        </p>
      )}
    </form>
  );
}
