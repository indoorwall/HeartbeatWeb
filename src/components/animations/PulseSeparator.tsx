import { motion } from 'framer-motion';

export default function PulseSeparator() {
  return (
    <div className="flex justify-center py-16 md:py-24 overflow-hidden">
      <motion.div
        className="w-32 h-[2px] bg-neutral-100 rounded-full"
        animate={{ 
          opacity: [0.3, 0.6, 0.3], 
          scaleX: [0.9, 1.1, 0.9] 
        }}
        transition={{ 
          duration: 6, // Ritmo respiratorio muy lento (6 segundos)
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </div>
  );
}
