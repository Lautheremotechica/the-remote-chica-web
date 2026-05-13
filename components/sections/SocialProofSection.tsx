'use client';

import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';

interface SocialProofSectionProps {
  locale: Locale;
}

export function SocialProofSection({ locale }: SocialProofSectionProps) {
  const t = translations[locale];
  
  // Google Drive testimonial videos
  const testimonials = [
    {
      id: '1',
      name: 'Testimonio 1',
      // These will need to be embedded from the Google Drive folder
      videoUrl: 'https://drive.google.com/drive/u/0/folders/1SCRlxVax8F2mNo3gyIvaxyY-SCFvr7nJ',
    },
  ];
  
  return (
    <section id="testimonials" className="py-28 bg-gradient-to-b from-white to-brand-cream/30">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.socialProof.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {locale === 'es' 
              ? 'Personas que transformaron su carrera con trabajo remoto'
              : 'People who transformed their careers with remote work'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial placeholders - videos from Google Drive will be embedded */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic leading-relaxed">
                  {locale === 'es' 
                    ? `"Video testimonio ${i}"`
                    : `"Video testimonial ${i}"`
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social proof logos section */}
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500 mb-10 uppercase tracking-wide">
            {locale === 'es' ? 'Han confiado en mí' : 'Featured in'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Placeholder for company/university logos */}
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
