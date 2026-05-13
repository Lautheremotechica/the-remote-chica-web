'use client';

import { translations } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/i18n/config';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale];
  const otherLocale = locale === 'es' ? 'en' : 'es';
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              The Remote Chica
            </h3>
            <p className="text-gray-400">
              {t.footer.tagline}
            </p>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.social}</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/theremotechica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-brand-pink transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://linkedin.com/in/theremotechica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-brand-blue transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://tiktok.com/@theremotechica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-brand-pink transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
          
          {/* Contact & Language */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <a 
              href="mailto:laura@yoviajoytrabajo.com"
              className="text-gray-400 hover:text-brand-blue transition-colors block mb-6"
            >
              laura@yoviajoytrabajo.com
            </a>
            
            <h4 className="font-semibold mb-4">{t.footer.language}</h4>
            <a 
              href={`/${otherLocale}`}
              className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              {otherLocale === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
