import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Partners() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="partners">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              {t.partners.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark mb-6">
              {t.partners.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.partners.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {t.partners.list.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-center text-center hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300 min-h-[120px]"
            >
              <h3 className="font-bold text-dark text-lg">{partner}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
