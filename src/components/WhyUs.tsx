import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FloatingLeaf, FloatingPaper } from './Decorations';

export function WhyUs() {
  const { t, dir } = useLanguage();

  return (
    <section id="why-us" className="paper-section bg-white pt-24 pb-32 px-6 overflow-hidden relative">
      <FloatingPaper className="w-48 md:w-64 top-40 -left-20 -rotate-12" variant="dark" delay={0.2} />
      <FloatingLeaf className="top-20 right-10" variant="accent" size={64} delay={0.8} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className={`absolute top-0 ${dir === 'rtl' ? 'right-8' : 'left-8'} bottom-0 w-px bg-gray-200 z-0 hidden sm:block`}></div>
            
            <div className="space-y-12 relative z-10">
              {t.why_us.reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg text-white font-bold text-xl relative">
                    {index + 1}
                    <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold text-dark mb-2 flex items-center gap-2">
                      {reason.title}
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden"
          >
            <div className={`absolute top-0 ${dir === 'rtl' ? 'right-0 translate-x-1/3' : 'left-0 -translate-x-1/3'} w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 blur-3xl`}></div>
            <div className={`absolute bottom-0 ${dir === 'rtl' ? 'left-0 -translate-x-1/3' : 'right-0 translate-x-1/3'} w-64 h-64 bg-accent/20 rounded-full translate-y-1/3 blur-3xl`}></div>
            
            <div className="relative z-10">
              <h2 className="text-accent font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-white rounded-full inline-block"></span>
                {t.why_us.badge}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {t.why_us.title}
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-10">
                {t.why_us.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-black text-accent mb-2">+20</div>
                  <div className="text-sm font-bold text-white/80">{t.why_us.years}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-black text-accent mb-2">100%</div>
                  <div className="text-sm font-bold text-white/80">{t.why_us.quality}</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
