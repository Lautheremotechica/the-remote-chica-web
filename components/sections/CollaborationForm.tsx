'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collaborationFormSchema, type CollaborationFormData } from '@/lib/validation/forms';
import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { Input, TextArea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface CollaborationFormProps {
  locale: Locale;
}

export function CollaborationForm({ locale }: CollaborationFormProps) {
  const t = translations[locale];
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CollaborationFormData>({
    resolver: zodResolver(collaborationFormSchema),
  });
  
  const onSubmit = async (data: CollaborationFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'collaboration',
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
  
  const typeOptions = [
    { value: 'sponsored', label: t.forms.collaboration.typeOptions.sponsored },
    { value: 'ambassador', label: t.forms.collaboration.typeOptions.ambassador },
    { value: 'event', label: t.forms.collaboration.typeOptions.event },
    { value: 'other', label: t.forms.collaboration.typeOptions.other },
  ];
  
  return (
    <section id="colaboraciones" className="py-20 bg-gradient-to-b from-brand-cream/20 to-white">
      <div className="section-container">
        <Card className="max-w-2xl mx-auto" padding="lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t.forms.collaboration.title}
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label={t.forms.collaboration.name}
              {...register('name')}
              error={errors.name?.message}
            />
            
            <Input
              label={t.forms.collaboration.brand}
              {...register('brand')}
              error={errors.brand?.message}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label={t.forms.collaboration.email}
                type="email"
                {...register('email')}
                error={errors.email?.message}
              />
              
              <Select
                label={t.forms.collaboration.type}
                options={typeOptions}
                {...register('type')}
                error={errors.type?.message}
              />
            </div>
            
            <TextArea
              label={t.forms.collaboration.message}
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
              {isSubmitting ? (locale === 'es' ? 'Enviando...' : 'Sending...') : t.forms.collaboration.submit}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
