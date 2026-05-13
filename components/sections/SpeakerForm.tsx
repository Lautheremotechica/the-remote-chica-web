'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { speakerFormSchema, type SpeakerFormData } from '@/lib/validation/forms';
import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';
import { Input, TextArea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface SpeakerFormProps {
  locale: Locale;
}

export function SpeakerForm({ locale }: SpeakerFormProps) {
  const t = translations[locale];
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpeakerFormData>({
    resolver: zodResolver(speakerFormSchema),
  });
  
  const onSubmit = async (data: SpeakerFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'speaker',
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
  
  const formatOptions = [
    { value: 'virtual', label: t.forms.speaker.formatOptions.virtual },
    { value: 'inPerson', label: t.forms.speaker.formatOptions.inPerson },
    { value: 'hybrid', label: t.forms.speaker.formatOptions.hybrid },
  ];
  
  return (
    <section id="speaker" className="py-28 bg-white">
      <div className="section-container">
        <Card className="max-w-2xl mx-auto" padding="lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t.forms.speaker.title}
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <Input
              label={t.forms.speaker.name}
              {...register('name')}
              error={errors.name?.message}
            />
            
            <Input
              label={t.forms.speaker.company}
              {...register('company')}
              error={errors.company?.message}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label={t.forms.speaker.email}
                type="email"
                {...register('email')}
                error={errors.email?.message}
              />
              
              <Select
                label={t.forms.speaker.format}
                options={formatOptions}
                {...register('format')}
                error={errors.format?.message}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label={t.forms.speaker.audience}
                {...register('audience')}
                error={errors.audience?.message}
                placeholder="100 personas"
              />
              
              <Input
                label={t.forms.speaker.budget}
                {...register('budget')}
                placeholder={locale === 'es' ? 'Opcional' : 'Optional'}
              />
            </div>
            
            <Input
              label={t.forms.speaker.topic}
              {...register('topic')}
              error={errors.topic?.message}
            />
            
            <TextArea
              label={t.forms.speaker.message}
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
              {isSubmitting ? (locale === 'es' ? 'Enviando...' : 'Sending...') : t.forms.speaker.submit}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
