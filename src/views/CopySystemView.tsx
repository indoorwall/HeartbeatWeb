import React from 'react';
import { BRAND_COPY } from '../data/copywriting';
import { MessageSquareQuote, MousePointerClick, Type } from 'lucide-react';

export default function CopySystemView() {
  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-3xl font-bold text-neutral-900">Sistema de Voz & Copywriting</h2>
        <p className="text-neutral-500 mt-2 text-lg">
          Tono: Humano, consciente, directo. Sin "postureo".
        </p>
      </header>

      {/* 1. Hero Messaging */}
      <section className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-neutral-400 text-sm uppercase tracking-widest font-bold">
          <Type size={16} />
          Mensaje Principal (Hero)
        </div>
        
        <div className="space-y-8 text-center py-8 bg-neutral-50 rounded-lg border border-neutral-100">
          <div>
            <span className="text-xs font-mono text-neutral-400 mb-2 block">CLAIM (H1)</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900">
              "{BRAND_COPY.hero.claim}"
            </h1>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono text-neutral-400 mb-2 block">SUBCLAIM (H2)</span>
            <p className="text-xl text-neutral-600 font-medium leading-relaxed">
              "{BRAND_COPY.hero.subclaim}"
            </p>
          </div>
        </div>
      </section>

      {/* 2. Micro-Slogans Grid */}
      <section>
        <div className="flex items-center gap-2 mb-6 text-neutral-400 text-sm uppercase tracking-widest font-bold">
          <MessageSquareQuote size={16} />
          Micro-Slogans por Sección
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(BRAND_COPY.slogans).map(([key, item]) => (
            <div key={key} className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-black transition-colors group">
              <h4 className="text-xs font-bold uppercase text-neutral-400 mb-3 group-hover:text-black transition-colors">
                {item.label}
              </h4>
              <p className="text-xl font-bold text-neutral-900 leading-tight">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTAs */}
      <section>
        <div className="flex items-center gap-2 mb-6 text-neutral-400 text-sm uppercase tracking-widest font-bold">
          <MousePointerClick size={16} />
          Call to Actions (CTAs)
        </div>

        <div className="flex flex-wrap gap-6">
          {BRAND_COPY.ctas.map((cta, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform">
                {cta.text}
              </button>
              <span className="text-xs text-neutral-400 text-center">{cta.context}</span>
            </div>
          ))}
          
          {/* Variante Outline */}
          <div className="flex flex-col gap-2">
            <button className="bg-white text-black border border-black px-8 py-3 rounded-full font-bold text-sm hover:bg-neutral-50 transition-colors">
              {BRAND_COPY.ctas[1].text}
            </button>
            <span className="text-xs text-neutral-400 text-center">Variante Secundaria</span>
          </div>
        </div>
      </section>
    </div>
  );
}
