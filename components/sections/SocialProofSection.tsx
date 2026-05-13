'use client';

import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { FadeIn } from '@/components/ui/FadeIn';

interface SocialProofSectionProps {
  locale: Locale;
}

export function SocialProofSection({ locale }: SocialProofSectionProps) {
  const t = translations[locale];
  
  // Google Drive testimonial videos
  const videos = [
    {
      id: '1u8nk2LOLCJZNst6eWrvAFbPH4eQRCoZD',
      name: 'Daniela Fernandez',
      profile: 'Abogada',
      aspectRatio: '16/9',
    },
    {
      id: '1DgahZ_vfKaHcQY55U3zdqno4xWo65png',
      name: 'Santiago Osorio',
      profile: '',
      aspectRatio: '4/5',
    },
    {
      id: '195prILrY9KqoR5Vhs1dqtt6NPtwZZekd',
      name: 'Ana Rivas',
      profile: 'Analista de Licitaciones',
      aspectRatio: '4/5',
    },
  ];
  
  return (
    <section id="testimonials" className="pt-6 pb-20 bg-gradient-to-b from-white to-brand-cream/30">
      <div className="section-container">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {locale === 'es' ? 'Historias de éxito' : 'Success Stories'}
          </h2>
          <p className="text-xl text-gray-600 leading-loose">
            {locale === 'es' 
              ? 'Personas que transformaron su carrera con trabajo remoto'
              : 'People who transformed their careers with remote work'
            }
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video, index) => (
            <FadeIn key={video.id} delay={index * 120}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gray-100 relative w-full overflow-hidden" style={{ aspectRatio: video.aspectRatio }}>
                  <iframe 
                    src={`https://drive.google.com/file/d/${video.id}/preview`} 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {video.name}
                  </h3>
                  {video.profile && (
                    <p className="text-gray-600 mt-2">
                      {video.profile}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Social proof logos section */}
        <div className="mt-28 text-center">
          <p className="text-sm text-gray-500 mb-12 uppercase tracking-wide">
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