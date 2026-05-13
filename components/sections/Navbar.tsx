import Image from 'next/image';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n/config';

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream border-b border-brand-cream/80 shadow-sm">
      <div className="section-container py-3 flex items-center">
        <Link href={`/${locale}`} className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt="The Remote Chica"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
