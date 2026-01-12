import React from 'react';
import { Check } from 'lucide-react';

export default function MagSubscribe() {
  return (
    <div className="bg-[#111] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Value Prop */}
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-start mb-6 block">
            Heartbeat Membership
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-8">
            Apoya el periodismo lento.
          </h1>
          <p className="font-serif text-xl text-neutral-400 leading-relaxed mb-12 max-w-xl">
            Heartbeat Magazine es un medio independiente dentro de nuestro ecosistema. Tu suscripción nos permite investigar, fotografiar y escribir sin depender de algoritmos ni clickbait.
          </p>
          
          <ul className="space-y-6 mb-12">
            {[
              "Acceso ilimitado a reportajes de investigación.",
              "Newsletter semanal curada por editores.",
              "Archivo completo de la revista.",
              "Descuentos en eventos Heartbeat."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <Check size={14} />
                </div>
                <span className="font-serif text-lg text-neutral-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Pricing Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
          
          {/* Card 1: Digital */}
          <div className="bg-white text-black p-8 md:p-10 rounded-2xl w-full max-w-sm flex flex-col">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Digital</span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-serif text-5xl font-medium">5€</span>
              <span className="font-sans text-sm text-neutral-500">/mes</span>
            </div>
            <p className="font-serif text-neutral-600 mb-8 text-sm">Facturado anualmente (60€)</p>
            <button className="w-full bg-black text-white py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors mt-auto">
              Elegir Digital
            </button>
          </div>

          {/* Card 2: Patron */}
          <div className="bg-[#222] text-white border border-white/10 p-8 md:p-10 rounded-2xl w-full max-w-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-start text-white text-[10px] font-bold uppercase px-3 py-1">
              Recomendado
            </div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Mecenas</span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-serif text-5xl font-medium">12€</span>
              <span className="font-sans text-sm text-neutral-400">/mes</span>
            </div>
            <p className="font-serif text-neutral-400 mb-8 text-sm">Apoyo total + Regalo anual</p>
            <button className="w-full bg-white text-black py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors mt-auto">
              Ser Mecenas
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
