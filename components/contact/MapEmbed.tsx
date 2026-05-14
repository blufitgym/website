import Link from 'next/link';
import { MAPS_EMBED, MAPS_URL } from '@/lib/constants';

export function MapEmbed() {
  return (
    <div>
      <iframe
        className="h-[320px] w-full border-0 grayscale-[0.5] sm:h-[480px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={MAPS_EMBED}
        title="blufit location map"
      />
      <Link className="mt-3 inline-flex text-[13px] uppercase tracking-widest text-brand-blue" href={MAPS_URL} target="_blank">
        Open in Google Maps
      </Link>
    </div>
  );
}
