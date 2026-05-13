'use client';

import Image from 'next/image';
import { translations, type TranslationKey } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = translations[locale];
  
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-cream via-white to-brand-blue/5">
      <div className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-brand-pink/10 text-brand-pink rounded-full text-sm font-semibold">
                The Remote Chica
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                href={`#comunidad`}
              >
                {t.hero.cta}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="https://modoremoto.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-brand-blue">1000+</div>
                <div className="text-sm text-gray-600">{t.socialProof.stats.students}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-pink">15+</div>
                <div className="text-sm text-gray-600">{t.socialProof.stats.countries}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-orange">500+</div>
                <div className="text-sm text-gray-600">{t.socialProof.stats.remoteJobs}</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-pink shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Laura - The Remote Chica"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
