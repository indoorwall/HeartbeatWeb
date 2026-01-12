import React from 'react';
import { MAG_DOSSIERS } from '../../data/magazine_rebrand_data';
import { Link } from 'react-router-dom';
import { Lock, Download } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';

export default function MagDossiers() {
  return (
    <div className="pb-20 bg-[#F5F5F0]">
      <header className="pt-32 pb-20 px-6 text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block">Ediciones Coleccionables</span>
        <h1 className="font-serif text-6xl md:text-8xl font-medium mb-8">Dossiers</h1>
        <p className="font-serif text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Investigaciones profundas organizadas en capítulos. Disponibles para lectura online y descarga PDF para suscriptores.
        </p>
      </header>

      <div className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {MAG_DOSSIERS.map((dossier, idx) => (
            <FadeIn key={dossier.id} delay={idx * 0.1}>
              <div className="bg-white p-8 md:p-12 shadow-xl group hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                   <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full">
                     {dossier.subtitle}
                   </span>
                   {dossier.status === 'coming-soon' && (
                     <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400">Próximamente</span>
                   )}
                </div>

                <div className="flex gap-8 mb-8">
                  <div className="w-1/3 shrink-0">
                    <div className="aspect-[3/4] bg-neutral-200 shadow-lg rotate-2 group-hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
                       <img src={dossier.coverImage} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-2/3">
                    <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">{dossier.title}</h2>
                    <p className="font-serif text-neutral-500 text-sm leading-relaxed mb-6">
                      {dossier.intro}
                    </p>
                  </div>
                </div>

                {dossier.chapters.length > 0 && (
                  <div className="border-t border-neutral-100 pt-6 mb-8 flex-1">
                    <h5 className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Índice de contenidos</h5>
                    <ul className="space-y-3">
                      {dossier.chapters.map((chap, i) => (
                        <li key={i} className="flex justify-between items-center text-sm">
                          <span className="font-serif text-neutral-800">{chap.title}</span>
                          {chap.isPremium ? <Lock size={12} className="text-neutral-300" /> : <span className="text-neutral-300 text-[10px]">FREE</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto flex gap-4">
                  <button className="flex-1 bg-black text-white py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                    Leer Online
                  </button>
                  <button className="w-12 flex items-center justify-center border border-neutral-200 hover:bg-neutral-50 transition-colors" title="Descargar PDF (Premium)">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
