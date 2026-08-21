import { motion } from 'motion/react';
import { Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FloatingLeaf, FloatingPaper } from './Decorations';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="paper-section bg-white pt-24 pb-32 px-6 overflow-hidden relative">
      <FloatingPaper className="w-64 md:w-96 -top-20 -right-20 rotate-12" variant="dark" delay={0.5} />
      <FloatingLeaf className="bottom-10 left-10" variant="primary" size={80} delay={1} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                {t.about.badge}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-dark leading-tight">
                {t.about.title_start} <span className="text-primary">{t.about.title_highlight}</span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {t.about.desc}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow liquid-coating"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Target size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{t.about.vision}</h4>
              <p className="text-gray-600 leading-relaxed">
                {t.about.vision_desc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow liquid-coating sm:mt-10"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <Lightbulb size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{t.about.mission}</h4>
              <p className="text-gray-600 leading-relaxed">
                {t.about.mission_desc}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
