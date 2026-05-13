'use client';

import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  const t = translations[locale];
  
  return (
    <section id="about" className="py-32 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-loose">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
