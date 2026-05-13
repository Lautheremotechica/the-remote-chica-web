import type { Metadata } from "next";
import { locales } from '@/lib/i18n/config';

type Params = Promise<{ locale: string }>;

interface LayoutProps {
  children: React.ReactNode;
  params: Params;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'es') {
    return {
      title: "The Remote Chica | Trabajo Remoto y Libertad",
      description: "Te ayudo a conseguir trabajos remotos con mejores salarios, libertad y equilibrio vida-trabajo. Cursos, mentorías y comunidad.",
      openGraph: {
        title: "The Remote Chica | Trabajo Remoto y Libertad",
        description: "Te ayudo a conseguir trabajos remotos con mejores salarios, libertad y equilibrio vida-trabajo.",
        url: "https://yoviajoytrabajo.com",
        siteName: "The Remote Chica",
        locale: "es_ES",
        type: "website",
      },
    };
  }
  
  return {
    title: "The Remote Chica | Remote Work & Freedom",
    description: "I help you land remote jobs with better salaries, freedom, and work-life balance. Courses, mentorship, and community.",
    openGraph: {
      title: "The Remote Chica | Remote Work & Freedom",
      description: "I help you land remote jobs with better salaries, freedom, and work-life balance.",
      url: "https://yoviajoytrabajo.com",
      siteName: "The Remote Chica",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  
  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
