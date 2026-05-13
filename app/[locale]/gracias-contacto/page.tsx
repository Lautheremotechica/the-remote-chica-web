import { type Locale } from '@/lib/i18n/config';
import { translations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ThankYouPage({ params }: PageProps) {
  const { locale } = await params;
  const t = translations[locale as Locale];
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-cream via-white to-brand-blue/5 p-4">
      <Card className="max-w-md text-center" padding="lg">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t.forms.success.title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          {t.forms.success.message}
        </p>
        
        <Button
          variant="primary"
          href={`/${locale}`}
          fullWidth
        >
          {t.forms.success.backHome}
        </Button>
      </Card>
    </main>
  );
}
