import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = '', ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { dir } = useLanguage();

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-3 font-bold text-white bg-primary rounded-full overflow-hidden group ${className}`}
      {...props}
    >
      <div className={`absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform ${dir === 'rtl' ? 'origin-right' : 'origin-left'} duration-300 ease-out`}></div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
