import React from 'react';
import { MAG_NEWSLETTERS } from '../../data/magazine_rebrand_data';
import { Check } from 'lucide-react';

export default function MagNewsletter() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pb-20">
      <header className="pt-32 pb-20 px-6 text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 block">Correo Editorial</span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8">Elige tu frecuencia</h1>
        <p className="font-serif text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          No enviamos spam. Enviamos productos editoriales diseñados para ser leídos con calma.
        </p>
      </header>

      <div className="px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {MAG_NEWSLETTERS.map((nl) => (
          <div key={nl.id} className="bg-neutral-800 p-8 md:p-10 rounded-2xl border border-neutral-700 flex flex-col">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
              <nl.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-3xl mb-2">{nl.title}</h3>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-start mb-6 block">{nl.frequency}</span>
            <p className="font-serif text-neutral-400 mb-8 leading-relaxed flex-1">
              {nl.desc}
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="flex gap-3 text-sm text-neutral-300">
                 <Check size={16} className="text-neutral-500" /> Sin publicidad intrusiva
               </div>
               <div className="flex gap-3 text-sm text-neutral-300">
                 <Check size={16} className="text-neutral-500" /> Darse de baja en 1 clic
               </div>
            </div>

            <button className="w-full bg-white text-black py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Suscribirse
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-20 text-center px-6">
        <p className="font-serif text-neutral-500 italic">
          "La newsletter 'Pulso' es lo único que leo los domingos por la mañana. Es como recibir una carta de un amigo inteligente." — Ana G., Suscriptora.
        </p>
      </div>
    </div>
  );
}
