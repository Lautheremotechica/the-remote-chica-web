'use client';

import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { FadeIn } from '@/components/ui/FadeIn';

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  const t = translations[locale];
  
  return (
    <section id="about" className="pt-6 pb-6 bg-white border-t border-gray-100">
      <div className="section-container">
        <FadeIn className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-loose">
            {t.about.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
