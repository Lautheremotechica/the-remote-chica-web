'use client';

import { useState } from 'react';
import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { FadeIn } from '@/components/ui/FadeIn';

interface FAQSectionProps {
  locale: Locale;
}

export function FAQSection({ locale }: FAQSectionProps) {
  const t = translations[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section id="faq" className="py-40 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">
              {t.faq.title}
            </h2>
          </FadeIn>
          
          <FadeIn delay={150}>
          <div className="space-y-6">
            {t.faq.items.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-7 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-brand-blue transition-transform flex-shrink-0 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-10 pt-4 text-gray-600 leading-loose">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
