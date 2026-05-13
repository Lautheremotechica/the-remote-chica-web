import { type Locale } from '@/lib/i18n/config';
import { translations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CommunityCancelledPage({ params }: PageProps) {
  const { locale } = await params;
  const t = translations[locale as Locale];
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4">
      <Card className="max-w-md text-center" padding="lg">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t.communityPages.cancelled.title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          {t.communityPages.cancelled.message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            href={`/${locale}#comunidad`}
            fullWidth
          >
            {locale === 'es' ? 'Intentar de nuevo' : 'Try again'}
          </Button>
          <Button
            variant="outline"
            href={`/${locale}`}
            fullWidth
          >
            {t.communityPages.cancelled.backHome}
          </Button>
        </div>
      </Card>
    </main>
  );
}
