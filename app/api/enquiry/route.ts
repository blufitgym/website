import { NextResponse } from 'next/server';
import { GOOGLE_SHEETS_WEBHOOK_URL } from '@/lib/constants';

type EnquiryPayload = {
  name?: string;
  phone?: string;
  message?: string;
  source?: string;
  submittedAt?: string;
};

function isValidText(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();

  if (!isValidText(name) || !isValidText(phone) || !isValidText(message)) {
    return NextResponse.json({ error: 'Name, phone, and message are required.' }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL ?? GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        error:
          'Google Sheets webhook is not configured. Set GOOGLE_SHEETS_WEBHOOK_URL to enable saving enquiries.',
      },
      { status: 500 },
    );
  }

  const forwardedPayload = {
    name,
    phone,
    message,
    source: payload.source ?? 'contact-form',
    submittedAt: payload.submittedAt ?? new Date().toISOString(),
    userAgent: request.headers.get('user-agent') ?? '',
    referrer: request.headers.get('referer') ?? '',
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(forwardedPayload),
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    return NextResponse.json(
      {
        error: 'Failed to save enquiry to Google Sheets.',
        details: body.slice(0, 300),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
