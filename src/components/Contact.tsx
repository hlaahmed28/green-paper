import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t, dir } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@greenpaperegypt.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="paper-section bg-white pt-24 pb-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.7 }}
          >
            <h2 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              {t.contact.badge}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-6">
              {t.contact.title_start} <span className="text-primary">{t.contact.title_highlight}</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
              {t.contact.desc}
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-light rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden"
          >
            <div className={`absolute top-0 ${dir === 'rtl' ? 'right-0 translate-x-1/3' : 'left-0 -translate-x-1/3'} w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 blur-2xl`}></div>
            
            {/* Success/Error Toast */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-4 left-4 right-4 bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 flex items-center gap-2 z-20 shadow-lg"
                >
                  <CheckCircle size={20} />
                  <span className="font-bold text-sm">{dir === 'rtl' ? 'تم إرسال استفسارك بنجاح! سنتواصل معك قريباً.' : 'Your inquiry was sent successfully! We will contact you soon.'}</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-3 flex items-center gap-2 z-20 shadow-lg"
                >
                  <XCircle size={20} />
                  <span className="font-bold text-sm">{dir === 'rtl' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value="New Inquiry from Greenpaper Website" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-dark">{t.contact.name}</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white" placeholder={t.contact.name_ph} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-bold text-dark">{t.contact.company}</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white" placeholder={t.contact.company_ph} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-dark">{t.contact.email}</label>
                  <input type="email" id="email" name="email" className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-${dir === 'rtl' ? 'left' : 'left'}`} placeholder="example@domain.com" required dir="ltr" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-dark">{t.contact.phone}</label>
                  <input type="tel" id="phone" name="phone" className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-${dir === 'rtl' ? 'left' : 'left'}`} placeholder="+20 123 456 7890" required dir="ltr" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-dark">{t.contact.message}</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white resize-none" placeholder={t.contact.message_ph} required></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full bg-primary hover:bg-dark text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/40 ${dir === 'rtl' ? 'flex-row' : 'flex-row-reverse'} ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    {dir === 'rtl' ? 'جاري الإرسال...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    {t.contact.submit}
                    <Send size={20} className={`group-hover:-translate-x-2 transition-transform ${dir === 'ltr' ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

