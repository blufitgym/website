import Image from 'next/image';

type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        'relative inline-block overflow-hidden rounded-[28%] bg-[#25D366]',
        className,
      ].join(' ')}
    >
      <Image
        alt=""
        className="object-contain p-[12%]"
        fill
        sizes="(max-width: 768px) 32px, 48px"
        src="/whatsapp-icon.png"
      />
    </span>
  );
}
