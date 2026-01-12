import { motion } from 'framer-motion';

export default function SoulSignal() {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Core Light (Punto central blanco) */}
      <motion.div 
        className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,1)]"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Inner Breath (Resplandor de marca) */}
      <motion.div 
        className="absolute rounded-full bg-gradient-to-r from-brand-start to-brand-end blur-xl"
        animate={{
          width: ["4px", "60px", "4px"],
          height: ["4px", "60px", "4px"],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Outer Ripple 1 (Onda expansiva lenta) */}
      <motion.div
        className="absolute border border-white/10 rounded-full"
        initial={{ width: "10px", height: "10px", opacity: 0 }}
        animate={{
          width: ["10px", "120px"],
          height: ["10px", "120px"],
          opacity: [0.4, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0
        }}
      />

      {/* Outer Ripple 2 (Onda secundaria con retraso) */}
      <motion.div
        className="absolute border border-white/5 rounded-full"
        initial={{ width: "10px", height: "10px", opacity: 0 }}
        animate={{
          width: ["10px", "120px"],
          height: ["10px", "120px"],
          opacity: [0.2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2
        }}
      />
    </div>
  );
}
