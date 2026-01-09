import { motion, useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeartbeatIconProps {
  className?: string;
  size?: number;
  color?: string;
  variant?: 'default' | 'hero' | 'intro';
  useGradient?: boolean; // Nuevo prop para activar el degradado de marca
}

export default function HeartbeatIcon({ 
  className, 
  size = 24, 
  color = "currentColor",
  variant = 'default',
  useGradient = false
}: HeartbeatIconProps) {
  const shouldReduceMotion = useReducedMotion();
  const uniqueId = `heart-gradient-${Math.random().toString(36).substr(2, 9)}`;

  // Ajustamos la intensidad del "Glow" según la variante
  const getGlowIntensity = () => {
    switch (variant) {
      case 'intro':
        return [
          "drop-shadow(0px 0px 0px rgba(255,46,85,0))",
          "drop-shadow(0px 0px 50px rgba(255,46,85,0.6))", 
          "drop-shadow(0px 0px 0px rgba(255,46,85,0))",
          "drop-shadow(0px 0px 20px rgba(255,138,0,0.2))",
          "drop-shadow(0px 0px 0px rgba(255,46,85,0))"
        ];
      case 'hero':
        return [
          "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
          "drop-shadow(0px 0px 20px rgba(255,255,255,0.4))",
          "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
          "drop-shadow(0px 0px 10px rgba(255,255,255,0.1))",
          "drop-shadow(0px 0px 0px rgba(255,255,255,0))"
        ];
      default:
        return [
          "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
          "drop-shadow(0px 0px 8px rgba(255,255,255,0.3))",
          "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
          "drop-shadow(0px 0px 4px rgba(255,255,255,0.1))",
          "drop-shadow(0px 0px 0px rgba(255,255,255,0))"
        ];
    }
  };

  const heartbeatVariants = {
    rest: { 
      scale: 1,
      opacity: 0.8,
      filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
    },
    beat: {
      scale: [1, 1.1, 1, 1.05, 1],
      opacity: [0.8, 1, 0.8, 0.9, 0.8],
      filter: getGlowIntensity(),
      transition: {
        duration: 1.2,
        times: [0, 0.15, 0.3, 0.45, 0.6],
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.8
      }
    }
  };

  // Renderizado del SVG con soporte para degradado
  const HeartContent = () => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={useGradient ? `url(#${uniqueId})` : color}
      strokeWidth={variant === 'intro' ? 0.5 : 1.5}
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="lucide lucide-heart"
    >
      <defs>
        <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF2E55" />
          <stop offset="100%" stopColor="#FF8A00" />
        </linearGradient>
      </defs>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" 
        fill={useGradient ? `url(#${uniqueId})` : color}
        fillOpacity={variant === 'intro' ? 0.9 : 0.15}
      />
    </svg>
  );

  if (shouldReduceMotion) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <HeartContent />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      {(variant === 'hero' || variant === 'intro') && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ 
            background: useGradient ? 'linear-gradient(to right, #FF2E55, #FF8A00)' : 'rgba(255,255,255,0.1)'
          }}
          animate={{
            scale: [1, 2],
            opacity: [0.3, 0]
          }}
          transition={{
            duration: 2,
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0,
            ease: "easeOut"
          }}
        />
      )}
      
      <motion.div
        variants={heartbeatVariants}
        initial="rest"
        animate="beat"
      >
        <HeartContent />
      </motion.div>
    </div>
  );
}
