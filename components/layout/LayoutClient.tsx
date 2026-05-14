'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { Navbar } from './Navbar';

const STORAGE_KEY = 'blufit-announcement-dismissed';

export function LayoutClient({ children }: { children: ReactNode }) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  };

  // Announcement bar: h-10 = 40px (sm+, hidden on mobile)
  // Navbar: h-[68px] mobile, h-[84px] sm+
  // With bar:    68px mobile | 124px sm+
  // Without bar: 68px mobile |  84px sm+
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[55]">
        <AnnouncementBar dismissed={dismissed} onDismiss={handleDismiss} />
        <Navbar />
      </div>
      <main
        className={
          dismissed
            ? 'pt-[68px] sm:pt-[84px]'
            : 'pt-[68px] sm:pt-[124px]'
        }
      >
        {children}
      </main>
    </>
  );
}
