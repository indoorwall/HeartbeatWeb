import React from 'react';
import { SITE_STRUCTURE } from '../data/architecture';
import { ArrowDown, DoorOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SitemapView() {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-3xl font-bold text-neutral-900">Sitemap Estructural v2.2</h2>
        <p className="text-neutral-500 mt-2 text-lg">
          Estructura plana con 6 pilares principales + CTA Global.
        </p>
      </header>

      {/* --- NUEVO: ACCESO DIRECTO AL UMBRAL --- */}
      <section className="bg-neutral-900 text-white p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-800">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-yellow-400 shrink-0">
            <DoorOpen size={32} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Alma del Proyecto</span>
              <h3 className="text-2xl font-bold">Página Intro (Manifiesto)</h3>
            </div>
            <p className="text-neutral-400 max-w-xl">
              La "Cámara de Descompresión". Define a Heartbeat como Alma Tecnológica antes de mostrar el directorio.
            </p>
          </div>
        </div>
        <Link 
          to="/prototype/intro" 
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-3 shrink-0 shadow-lg hover:scale-105 transform duration-200"
        >
          Ver Intro <ArrowRight size={16} />
        </Link>
      </section>

      <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm overflow-x-auto">
        <div className="flex flex-col items-center min-w-[800px]">
          
          {/* Representación del Umbral en el Sitemap */}
          <div className="mb-8 flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity cursor-help" title="Página Previa (Intro)">
            <div className="border border-dashed border-neutral-400 text-neutral-500 px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest bg-neutral-50">
              Intro / Alma
            </div>
            <ArrowDown size={16} className="text-neutral-300 mt-2" />
          </div>

          {/* Nivel 0: Home */}
          <div className="border-2 border-black bg-black text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl mb-10 relative z-10">
            HEARTBEAT (DIRECTORIO)
            <span className="absolute -right-4 -top-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs font-bold animate-pulse">
              !
            </span>
          </div>
          
          <div className="w-[2px] h-10 bg-neutral-200 mb-10"></div>

          {/* Nivel 1: Navegación Principal */}
          <div className="flex gap-4 w-full justify-between relative">
             {/* Línea conectora horizontal */}
             <div className="absolute top-[-20px] left-10 right-10 h-[2px] bg-neutral-200 rounded-full"></div>
             {/* Líneas conectoras verticales */}
             {SITE_STRUCTURE.map((_, i) => (
                <div key={`line-${i}`} className="absolute top-[-20px] h-[20px] w-[2px] bg-neutral-200" 
                     style={{ left: `${(i * 100) / (SITE_STRUCTURE.length - 1)}%` }}></div>
             ))}

            {SITE_STRUCTURE.map((section, idx) => (
              <div key={section.id} className="flex flex-col items-center w-48 relative">
                {/* Línea vertical individual (ajuste visual para react) */}
                <div className="absolute -top-5 w-[2px] h-5 bg-neutral-200"></div>

                <div className="w-full bg-white border border-neutral-200 p-4 rounded-xl hover:border-black hover:shadow-md transition-all h-full flex flex-col group">
                  <div className="flex items-center gap-2 mb-3 text-neutral-900 font-bold group-hover:text-blue-600 transition-colors">
                    <section.icon size={18} />
                    <span>{section.label}</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed mb-4 flex-1">
                    {section.description}
                  </p>
                  
                  {section.children && (
                    <div className="mt-auto pt-3 border-t border-neutral-100 space-y-2">
                      <span className="text-[9px] font-bold text-neutral-300 uppercase tracking-wider">Nivel 2 (Ejemplos)</span>
                      {section.children.map((child, cIdx) => (
                        <div key={cIdx} className="text-[10px] text-neutral-600 bg-neutral-50 px-2 py-1.5 rounded border border-neutral-100 truncate">
                          {child.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ArrowDown className="text-neutral-300 my-10" size={32} />

          {/* CTA Global */}
          <div className="flex gap-4">
             <div className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform cursor-pointer">
               CTA: Reservar
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
