import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  fullWidth?: boolean;
}

export default function FadeIn({ 
  children, 
  className = "", 
  fullWidth = false
}: FadeInProps) {
  // Hemos eliminado la lógica de animación de entrada.
  // Ahora el componente simplemente renderiza el contenido visible inmediatamente.
  
  return (
    <div className={cn(className, fullWidth ? "w-full" : "")}>
      {children}
    </div>
  );
}
