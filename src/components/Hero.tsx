import { motion } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-${dir === 'rtl' ? 'r' : 'l'} from-primary/95 to-dark/90 mix-blend-multiply z-10 bg-paper-texture`} />
        
        <img 
          src={`${import.meta.env.BASE_URL}hero-bg.png`} 
          alt="Paper Industry" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              {t.hero.title_start} <br/>
              <span className="text-accent">{t.hero.title_highlight}</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className={`text-xl md:text-2xl text-gray-200 mb-10 font-medium max-w-2xl text-${dir === 'rtl' ? 'right' : 'left'}`} dir="ltr">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#expertise">
              <MagneticButton className="flex items-center gap-2 text-lg">
                {t.hero.discover}
                {dir === 'rtl' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </MagneticButton>
            </a>
            <a href="#contact">
              <button className="px-8 py-3 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors text-lg h-full flex items-center justify-center">
                {t.hero.contact}
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/50"
      >
        <span className="text-sm font-bold mb-2">{t.hero.next}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
