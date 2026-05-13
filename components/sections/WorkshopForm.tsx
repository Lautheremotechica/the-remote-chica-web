'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { workshopFormSchema, type WorkshopFormData } from '@/lib/validation/forms';
import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { Input, TextArea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface WorkshopFormProps {
  locale: Locale;
}

export function WorkshopForm({ locale }: WorkshopFormProps) {
  const t = translations[locale];
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkshopFormData>({
    resolver: zodResolver(workshopFormSchema),
  });
  
  const onSubmit = async (data: WorkshopFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'workshop',
          locale,
          ...data,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to send');
      
      router.push(`/${locale}/gracias-contacto`);
    } catch (err) {
      setError(locale === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Error sending. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="talleres" className="py-20 bg-gradient-to-b from-white to-brand-cream/20">
      <div className="section-container">
        <Card className="max-w-2xl mx-auto" padding="lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t.forms.workshops.title}
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label={t.forms.workshops.name}
              {...register('name')}
              error={errors.name?.message}
            />
            
            <Input
              label={t.forms.workshops.institution}
              {...register('institution')}
              error={errors.institution?.message}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label={t.forms.workshops.email}
                type="email"
                {...register('email')}
                error={errors.email?.message}
              />
              
              <Input
                label={t.forms.workshops.country}
                {...register('country')}
                error={errors.country?.message}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label={t.forms.workshops.eventType}
                {...register('eventType')}
                error={errors.eventType?.message}
              />
              
              <Input
                label={t.forms.workshops.eventDate}
                type="date"
                {...register('eventDate')}
              />
            </div>
            
            <TextArea
              label={t.forms.workshops.message}
              {...register('message')}
              error={errors.message?.message}
            />
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {error}
              </div>
            )}
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (locale === 'es' ? 'Enviando...' : 'Sending...') : t.forms.workshops.submit}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
