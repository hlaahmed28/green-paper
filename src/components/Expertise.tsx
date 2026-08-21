import { motion } from 'motion/react';
import { Layers, Box, Droplets, Activity, Wrench, Search, TrendingUp, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FloatingLeaf, FloatingPaper } from './Decorations';

const icons = [Layers, Box, Droplets, Activity, Wrench, Search, TrendingUp, Settings];

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="paper-section alt-bg pt-24 pb-32 px-6 overflow-hidden relative">
      <FloatingPaper className="w-80 md:w-1/3 top-1/3 -right-32 rotate-45" variant="dark" delay={1.2} />
      <FloatingLeaf className="bottom-20 left-20" variant="primary" size={56} delay={0.4} />
      <FloatingLeaf className="top-10 left-1/4" variant="accent" size={32} delay={1.8} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold text-lg mb-2 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              {t.expertise.badge}
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-dark mb-6">
              {t.expertise.title}
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              {t.expertise.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.expertise.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl liquid-coating group cursor-default h-full flex flex-col justify-center items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-dark group-hover:text-white transition-colors leading-snug">
                  {item}
                </h4>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
