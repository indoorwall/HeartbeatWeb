import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface BreathingCardProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
  delay?: number;
}

export default function BreathingCard({ children, className = "", to, onClick }: BreathingCardProps) {
  // Se eliminaron las props 'initial', 'whileInView' y 'transition' de entrada.
  // Se mantiene 'whileHover' para la micro-interacción táctil.
  
  const content = (
    <motion.div
      className={cn("h-full", className)}
      whileHover={{ 
        scale: 1.01, 
        y: -2,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" 
      }}
      transition={{ duration: 0.2 }} // Transición rápida solo para el hover
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link to={to} className="block h-full">{content}</Link>;
  }

  return <div onClick={onClick} className="h-full cursor-pointer">{content}</div>;
}
