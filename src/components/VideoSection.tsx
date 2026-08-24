import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

export function VideoSection() {
  const { t, dir } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<'main' | 'secondary' | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const secondaryVideoRef = useRef<HTMLVideoElement>(null);
  const base = import.meta.env.BASE_URL;

  const handlePlayMain = () => {
    setPlayingVideo('main');
    if (mainVideoRef.current) {
      mainVideoRef.current.play();
    }
  };

  const handlePlaySecondary = () => {
    setPlayingVideo('secondary');
    if (secondaryVideoRef.current) {
      secondaryVideoRef.current.play();
    }
  };

  return (
    <section className="bg-dark text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold text-lg mb-2 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              {dir === 'rtl' ? 'شاهدنا' : 'Watch Us'}
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              {dir === 'rtl' ? 'جرين بيبر' : 'Green Paper'}
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group"
          >
            <video 
              ref={mainVideoRef}
              className="absolute inset-0 w-full h-full object-cover bg-black"
              controls
              playsInline
              type="video/mp4"
              src={`${base}industrial-video.mp4`} 
            />
            {playingVideo !== 'main' && (
              <div className="absolute inset-0 z-10 bg-black">
                <img 
                  src={`${base}facility.jpeg`} 
                  alt="Industrial Video Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 cursor-pointer"
                  onClick={handlePlayMain}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button 
                    onClick={handlePlayMain}
                    className="pointer-events-auto w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl pl-1"
                  >
                    <Play size={36} fill="currentColor" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group"
            >
              <video 
                ref={secondaryVideoRef}
                className="absolute inset-0 w-full h-full object-cover bg-black"
                controls
                playsInline
                type="video/mp4"
                src={`${base}corporate-video.mp4`} 
              />
              {playingVideo !== 'secondary' && (
                <div className="absolute inset-0 z-10 bg-black">
                  <img 
                    src={`${base}rolls.jpeg`} 
                    alt="Corporate Video Thumbnail" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 cursor-pointer"
                    onClick={handlePlaySecondary}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button 
                      onClick={handlePlaySecondary}
                      className="pointer-events-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl pl-1"
                    >
                      <Play size={28} fill="currentColor" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 rounded-3xl p-6 lg:p-8 flex-grow"
            >
              <h4 className="text-xl font-bold mb-3 text-accent">
                {dir === 'rtl' ? 'جودة وتكنولوجيا' : 'Quality & Technology'}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {dir === 'rtl' 
                  ? 'اكتشف المزيد حول تقنيات الإنتاج المتقدمة لدينا وكيف نحافظ على أعلى معايير الجودة العالمية في صناعة الورق.' 
                  : 'Discover more about our advanced production technologies and how we maintain the highest global quality standards in the paper industry.'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
