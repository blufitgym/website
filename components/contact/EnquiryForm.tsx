'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_NUM } from '@/lib/constants';

export function EnquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Message: ${message}`,
      '',
      'Sent from the blufit website enquiry form.',
    ].join('\n');
    window.location.href = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(payload)}`;
  };

  return (
    <form
      onSubmit={submit}
      className="mx-auto max-w-3xl border border-white/7 bg-brand-card p-10"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="border border-white/12 bg-transparent px-4 py-3 text-[15px] text-white outline-none placeholder:text-brand-muted focus:border-brand-blue focus:shadow-[0_0_0_1px_#3b7dbf]"
          placeholder="Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="border border-white/12 bg-transparent px-4 py-3 text-[15px] text-white outline-none placeholder:text-brand-muted focus:border-brand-blue focus:shadow-[0_0_0_1px_#3b7dbf]"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <textarea
        className="mt-4 min-h-[120px] w-full border border-white/12 bg-transparent px-4 py-3 text-[15px] text-white outline-none placeholder:text-brand-muted focus:border-brand-blue focus:shadow-[0_0_0_1px_#3b7dbf]"
        placeholder="Message / Enquiry"
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <div className="mt-6">
        <button
          className="inline-flex w-full items-center justify-center bg-[#25D366] px-8 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1fba5a]"
          type="submit"
        >
          Send Enquiry
        </button>
      </div>

      <p className="mt-4 text-[13px] leading-6 text-brand-muted">
        Submitting the form opens WhatsApp with your details pre-filled. No backend required.
      </p>
    </form>
  );
}
