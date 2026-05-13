import { locales, type Locale } from '@/lib/i18n/config';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkshopForm } from '@/components/sections/WorkshopForm';
import { SpeakerForm } from '@/components/sections/SpeakerForm';
import { CollaborationForm } from '@/components/sections/CollaborationForm';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;
  
  return (
    <main className="min-h-screen">
      <Navbar locale={locale as Locale} />
      <div className="space-y-20">
        <HeroSection locale={locale as Locale} />
        <AboutSection locale={locale as Locale} />
        <SocialProofSection locale={locale as Locale} />
        <ServicesSection locale={locale as Locale} />
        <WorkshopForm locale={locale as Locale} />
        <SpeakerForm locale={locale as Locale} />
        <CollaborationForm locale={locale as Locale} />
        <FAQSection locale={locale as Locale} />
      </div>
      <div className="mt-24">
        <Footer locale={locale as Locale} />
      </div>
    </main>
  );
}
