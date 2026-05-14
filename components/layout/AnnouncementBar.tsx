'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { ADDRESS, HOURS_SUNDAY, HOURS_WEEKDAY, INAUGURATION } from '@/lib/constants';

const STORAGE_KEY = 'blufit-announcement-dismissed';
const inaugurationDate = new Date(`${INAUGURATION}T00:00:00+05:30`);

function getMessage() {
  const now = new Date();
  if (now < inaugurationDate) {
    const diffDays = Math.max(
      0,
      Math.ceil((inaugurationDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
    );

    return diffDays <= 1
      ? 'Inauguration: 16 May 2026 - claim your founding member spot'
      : `Inauguration in ${diffDays} days - claim your founding member spot`;
  }

  return `Mon-Sat: ${HOURS_WEEKDAY} - Sun: ${HOURS_SUNDAY} - ${ADDRESS}`;
}

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const message = useMemo(getMessage, []);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-0 z-[60] hidden h-10 border-b border-white/10 bg-brand-blue text-white sm:block">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-4 text-center text-[11px] font-semibold uppercase tracking-widest sm:px-6 lg:px-8">
        <span className="hidden sm:inline">Blufit Gym</span>
        <span className="mx-2 hidden sm:inline opacity-60">-</span>
        <span className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{message}</span>
        </span>
        <button
          aria-label="Dismiss announcement"
          className="absolute right-3 inline-flex h-7 w-7 items-center justify-center rounded-none border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
          onClick={() => {
            sessionStorage.setItem(STORAGE_KEY, '1');
            setDismissed(true);
          }}
          type="button"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
