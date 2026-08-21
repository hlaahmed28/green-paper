import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export const FloatingLeaf = ({ className, delay = 0, size = 48, variant = 'accent' }: { className?: string, delay?: number, size?: number, variant?: 'accent' | 'primary' | 'white' }) => {
  const colorClass = variant === 'accent' ? 'text-accent' : variant === 'primary' ? 'text-primary' : 'text-white';
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.15, 0.3, 0.15],
        y: [0, -30, 0],
        rotate: [-10, 10, -10],
        x: [0, 15, 0]
      }}
      transition={{ 
        opacity: { duration: 4, repeat: Infinity, delay, ease: "easeInOut" },
        y: { duration: 6, repeat: Infinity, delay, ease: "easeInOut" },
        rotate: { duration: 8, repeat: Infinity, delay, ease: "easeInOut" },
        x: { duration: 7, repeat: Infinity, delay, ease: "easeInOut" }
      }}
      className={`absolute pointer-events-none ${colorClass} ${className}`}
    >
      <Leaf size={size} strokeWidth={1.5} />
    </motion.div>
  );
};

export const FloatingPaper = ({ className, delay = 0, variant = 'light' }: { className?: string, delay?: number, variant?: 'light' | 'dark' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: variant === 'light' ? [0.1, 0.2, 0.1] : [0.03, 0.06, 0.03],
      y: [0, -40, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{ 
      opacity: { duration: 5, repeat: Infinity, delay, ease: "easeInOut" },
      y: { duration: 8, repeat: Infinity, delay, ease: "easeInOut" },
      rotate: { duration: 10, repeat: Infinity, delay, ease: "easeInOut" }
    }}
    className={`absolute pointer-events-none shadow-2xl rounded-sm backdrop-blur-sm ${className} ${
      variant === 'light' ? 'bg-white border border-white/30' : 'bg-primary/20 border border-primary/10'
    }`}
    style={{ aspectRatio: '1/1.414' }}
  />
);
