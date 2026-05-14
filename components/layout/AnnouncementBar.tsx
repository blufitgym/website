'use client';

import { useMemo } from 'react';
import { ChevronRight, X } from 'lucide-react';
import {
  ADDRESS,
  HOURS_WEEKDAY_EVENING,
  HOURS_WEEKDAY_MORNING,
  INAUGURATION,
} from '@/lib/constants';

const inaugurationDate = new Date(`${INAUGURATION}T00:00:00+05:30`);

function getMessage() {
  const now = new Date();
  if (now < inaugurationDate) {
    const diffDays = Math.max(
      0,
      Math.ceil((inaugurationDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
    );
    return diffDays <= 1
      ? 'Inauguration: 16 May 2026 - claim your spot'
      : `Inauguration in ${diffDays} days - claim your spot`;
  }
  return `Mon-Sat: ${HOURS_WEEKDAY_MORNING} & ${HOURS_WEEKDAY_EVENING} - ${ADDRESS}`;
}

interface Props {
  dismissed: boolean;
  onDismiss: () => void;
}

export function AnnouncementBar({ dismissed, onDismiss }: Props) {
  const message = useMemo(getMessage, []);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] hidden h-10 border-b border-white/10 bg-gradient-to-r from-[#3b7dbf] via-[#5b8fe3] to-[#d94b9a] text-white sm:block">
      <div className="flex h-full w-full items-center justify-center px-4 text-center text-[11px] font-semibold uppercase tracking-widest sm:px-6 lg:px-8">
        <span className="hidden sm:inline">Blufit Gym</span>
        <span className="mx-2 hidden sm:inline opacity-60">-</span>
        <span className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{message}</span>
        </span>
        <button
          aria-label="Dismiss announcement"
          className="absolute right-3 inline-flex h-7 w-7 items-center justify-center rounded-none border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
          onClick={onDismiss}
          type="button"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
