import { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.expertise, href: '#expertise' },
    { name: dir === 'rtl' ? 'مرافقنا' : 'Facilities', href: '#facilities' },
    { name: t.nav.why_us, href: '#why-us' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          <a href="#home" className="flex items-center block py-1">
            <img 
              src="/logo.png" 
              alt="Green Paper" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-semibold text-dark hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors px-3 py-2"
            >
              <Globe size={20} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <a href="#contact">
              <MagneticButton className="bg-primary text-white">
                {t.nav.consultation}
              </MagneticButton>
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-primary font-bold px-2"
            >
              <Globe size={20} />
              <span className="text-sm">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="text-primary" />
              ) : (
                <Menu className="text-primary" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4" dir={dir}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-dark font-bold text-lg py-2 border-b border-gray-50 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="block w-full">
            <button className="bg-primary text-white font-bold py-3 rounded-full mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.consultation}
            </button>
          </a>
        </div>
      )}
    </header>
  );
}
