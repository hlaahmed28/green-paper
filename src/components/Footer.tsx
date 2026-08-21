import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, language, dir } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="/logo.png" 
                alt="Green Paper Logo" 
                className="h-20 md:h-24 w-auto object-contain mix-blend-screen"
                style={{ filter: 'invert(1) grayscale(1) brightness(10)' }}
              />
            </div>
            <p className="text-white/80 text-lg leading-relaxed max-w-md font-medium">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">{t.footer.quick_links}</h4>
            <ul className="space-y-4 text-white/80 font-medium">
              <li><a href="#about" className="hover:text-white hover:underline transition-all">{t.nav.about}</a></li>
              <li><a href="#expertise" className="hover:text-white hover:underline transition-all">{t.nav.expertise}</a></li>
              <li><a href="#why-us" className="hover:text-white hover:underline transition-all">{t.nav.why_us}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">{t.footer.contact_us}</h4>
            <ul className="space-y-4 text-white/80 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="leading-relaxed">{t.footer.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span className="mb-1 font-semibold">{t.footer.sales_manager}</span>
                  <span dir="ltr" className={`text-${dir === 'rtl' ? 'right' : 'left'}`}>{t.footer.phone1}</span>
                  <span dir="ltr" className={`text-${dir === 'rtl' ? 'right' : 'left'}`}>{t.footer.phone2}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <span dir="ltr">info@greenpaper.com.eg</span>
              </li>
            </ul>
          </div>

        </div>

        <div className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm font-medium ${dir === 'ltr' ? 'md:flex-row-reverse' : ''}`}>
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
