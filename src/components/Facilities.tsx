import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Facilities() {
  const { t, dir } = useLanguage();

  return (
    <section id="facilities" className="paper-section bg-light pt-24 pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold text-lg mb-2 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              {dir === 'rtl' ? 'مرافقنا' : 'Our Facilities'}
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-6">
              {dir === 'rtl' ? 'أحدث خطوط الإنتاج' : 'State-of-the-Art Production'}
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              {dir === 'rtl' 
                ? 'نمتلك في جرين بيبر أحدث المعدات والمخازن المجهزة لضمان أعلى جودة لمنتجاتنا وتلبية احتياجات عملائنا بكفاءة.'
                : 'At Green Paper, we own the latest equipment and equipped warehouses to ensure the highest quality of our products and efficiently meet our customers\' needs.'}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl md:col-span-2 lg:col-span-1"
          >
            <img 
              src={`${import.meta.env.BASE_URL}facility.jpeg`} 
              alt="Paper Factory" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end p-8">
              <div>
                <h4 className="text-white text-2xl font-bold mb-2">
                  {dir === 'rtl' ? 'خطوط الإنتاج' : 'Production Lines'}
                </h4>
                <p className="text-white/80 font-medium">
                  {dir === 'rtl' ? 'تكنولوجيا متقدمة في صناعة الورق' : 'Advanced paper manufacturing technology'}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl"
          >
            <img 
              src={`${import.meta.env.BASE_URL}rolls.jpeg`} 
              alt="Paper Rolls" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end p-8">
              <div>
                <h4 className="text-white text-2xl font-bold mb-2">
                  {dir === 'rtl' ? 'مخازن مجهزة' : 'Equipped Warehouses'}
                </h4>
                <p className="text-white/80 font-medium">
                  {dir === 'rtl' ? 'سعة تخزينية ضخمة للحفاظ على جودة الورق' : 'Massive storage capacity to preserve paper quality'}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl md:col-span-3 lg:col-span-1"
          >
            <img 
              src={`${import.meta.env.BASE_URL}forklift.jpeg`} 
              alt="Operations" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end p-8">
              <div>
                <h4 className="text-white text-2xl font-bold mb-2">
                  {dir === 'rtl' ? 'عمليات النقل' : 'Logistics'}
                </h4>
                <p className="text-white/80 font-medium">
                  {dir === 'rtl' ? 'كفاءة وسرعة في تلبية طلبات العملاء' : 'Efficiency and speed in meeting customer requests'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
