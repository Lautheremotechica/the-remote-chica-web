import { type Locale } from '@/lib/i18n/config';
import { translations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CommunitySuccessPage({ params }: PageProps) {
  const { locale } = await params;
  const t = translations[locale as Locale];
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 p-4">
      <Card className="max-w-lg text-center" padding="lg">
        <div className="w-20 h-20 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t.communityPages.success.title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          {t.communityPages.success.message}
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800">
            {t.communityPages.success.note}
          </p>
        </div>
        
        <Button
          variant="primary"
          href={`/${locale}`}
          fullWidth
        >
          {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
        </Button>
      </Card>
    </main>
  );
}
