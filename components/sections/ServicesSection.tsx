'use client';

import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CommunityCheckoutButton } from './CommunityCheckoutButton';
import { FadeIn } from '@/components/ui/FadeIn';

interface ServicesSectionProps {
  locale: Locale;
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const t = translations[locale];
  
  return (
    <section id="services" className="py-40 bg-white">
      <div className="section-container">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t.services.title}
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Course Modo Remoto */}
          <FadeIn delay={0}>
            <Card hover padding="lg" className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.course.title}
                </h3>
                <p className="text-gray-600 leading-loose mb-10">
                  {t.services.course.description}
                </p>
              </div>
              <div className="mt-auto">
                <Button 
                  variant="secondary" 
                  fullWidth
                  href="https://modoremoto.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.services.course.cta} →
                </Button>
              </div>
            </Card>
          </FadeIn>
          
          {/* Content & Collaborations */}
          <FadeIn delay={100}>
            <Card hover padding="lg" className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.content.title}
                </h3>
                <p className="text-gray-600 leading-loose mb-10">
                  {t.services.content.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  <Badge variant="orange">Instagram</Badge>
                  <Badge variant="blue">LinkedIn</Badge>
                  <Badge variant="pink">TikTok</Badge>
                </div>
              </div>
              <div className="mt-auto space-y-2">
                <Button 
                  variant="outline" 
                  fullWidth
                  href="#colaboraciones"
                >
                  {t.services.content.collaborateCta}
                </Button>
              </div>
            </Card>
          </FadeIn>
          
          {/* Workshops */}
          <FadeIn delay={200}>
            <Card hover padding="lg" className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-pink/10 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.workshops.title}
                </h3>
                <p className="text-gray-600 leading-loose mb-10">
                  {t.services.workshops.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {t.services.workshops.topics.map((topic, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-brand-pink mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button 
                  variant="primary" 
                  fullWidth
                  href="#talleres"
                >
                  {t.services.workshops.cta}
                </Button>
              </div>
            </Card>
          </FadeIn>
          
          {/* Speaker */}
          <FadeIn delay={0}>
            <Card hover padding="lg" className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-blue-medium/10 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-brand-blue-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.speaker.title}
                </h3>
                <p className="text-gray-600 leading-loose mb-10">
                  {t.services.speaker.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {t.services.speaker.topics.map((topic, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-brand-blue-medium mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button 
                  variant="primary" 
                  fullWidth
                  href="#speaker"
                >
                  {t.services.speaker.cta}
                </Button>
              </div>
            </Card>
          </FadeIn>
          
          {/* Mentorship */}
          <FadeIn delay={100}>
            <Card hover padding="lg" className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.mentorship.title}
                </h3>
                <p className="text-gray-600 leading-loose mb-10">
                  {t.services.mentorship.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {t.services.mentorship.includes.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button 
                  variant="secondary" 
                  fullWidth
                  href="https://buy.stripe.com/test_mentorship"
                  target="_blank"
                >
                  {t.services.mentorship.cta}
                </Button>
              </div>
            </Card>
          </FadeIn>
          
          {/* Community */}
          <FadeIn delay={200}>
            <Card hover padding="lg" className="flex flex-col h-full bg-gradient-to-br from-brand-pink/5 to-brand-blue/5 border-2 border-brand-pink">
              <div className="mb-8">
                <Badge variant="pink" className="mb-8">⭐ Popular</Badge>
                <div className="w-16 h-16 bg-brand-pink/10 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.community.title}
                </h3>
                <p className="text-gray-600 leading-loose mb-10">
                  {t.services.community.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {t.services.community.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-brand-pink mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mb-10">
                  <div className="text-3xl font-bold text-brand-pink">{t.services.community.price}</div>
                </div>
              </div>
              <div className="mt-auto">
                <CommunityCheckoutButton
                  locale={locale}
                  priceId={process.env.NEXT_PUBLIC_STRIPE_COMMUNITY_PRICE_ID || 'price_PLACEHOLDER'}
                  label={t.services.community.cta}
                />
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
