import React from 'react';
import { MAG_GUIDES } from '../../data/magazine_rebrand_data';
import { Link } from 'react-router-dom';
import { Search, Clock, Star } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';

export default function MagGuides() {
  return (
    <div className="pb-20">
      <header className="pt-32 pb-12 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block">Biblioteca de Utilidad</span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8">Guías Evergreen</h1>
          
          <div className="flex flex-col md:flex-row gap-8 justify-between items-end">
            <p className="font-serif text-xl text-neutral-500 max-w-xl leading-relaxed">
              Manuales prácticos diseñados para responder preguntas reales. Sin fecha de caducidad.
            </p>
            
            {/* Search Bar */}
            <div className="w-full md:w-auto relative">
              <input 
                type="text" 
                placeholder="Buscar guía..." 
                className="w-full md:w-80 border-b border-neutral-300 py-3 pl-0 pr-10 outline-none focus:border-black font-serif text-lg bg-transparent"
              />
              <Search className="absolute right-0 top-3 text-neutral-400" size={20} />
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAG_GUIDES.map((guide, idx) => (
            <FadeIn key={guide.id} delay={idx * 0.05}>
              <Link to="#" className="group bg-white p-6 border border-neutral-100 hover:border-neutral-300 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="aspect-video bg-neutral-100 mb-6 overflow-hidden relative">
                   <img src={guide.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   {guide.isPremium && (
                     <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold uppercase px-2 py-1 flex items-center gap-1">
                       <Star size={10} fill="black" /> Premium
                     </div>
                   )}
                </div>
                <h3 className="font-serif text-2xl font-medium mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {guide.title}
                </h3>
                <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest mb-6">
                  {guide.intent}
                </p>
                <div className="mt-auto pt-4 border-t border-neutral-50 flex items-center gap-2 text-xs text-neutral-400 font-bold uppercase tracking-wider">
                  <Clock size={14} /> {guide.readTime}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
