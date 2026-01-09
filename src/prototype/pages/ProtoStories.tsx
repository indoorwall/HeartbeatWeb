import React, { useState } from 'react';
import { STORIES_DATA } from '../../data/stories_data';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

export default function ProtoStories() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  
  const categories = ['Todas', 'Naturaleza', 'Comunidad', 'Innovación', 'Entrenamiento', 'Cultura Local'];
  
  const featuredStories = STORIES_DATA.filter(s => s.featured);
  const listStories = activeCategory === 'Todas' 
    ? STORIES_DATA.filter(s => !s.featured)
    : STORIES_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pb-40">
      {/* Hero Journal */}
      <section className="bg-neutral-50 pt-40 pb-24 px-6 border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 block">Heartbeat Journal</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              VOCES QUE INSPIRAN CAMBIO
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Historias sobre movimiento, ciencia y conexión humana. Sin relleno, solo pulso.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Section (3 Cards) */}
      <section className="max-w-[1400px] mx-auto px-6 -mt-12 relative z-10 mb-32 md:mb-48">
        <div className="grid md:grid-cols-3 gap-12">
          {featuredStories.map((story, idx) => (
            <BreathingCard key={story.id} delay={idx * 0.1}>
              <article className="group bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-100 hover:shadow-3xl transition-all duration-500 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">
                    {story.category}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-2"><Clock size={14} /> {story.readTime}</span>
                    <span>•</span>
                    <span>{story.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 leading-tight group-hover:underline decoration-2 underline-offset-8">
                    {story.title}
                  </h2>
                  <p className="text-neutral-500 text-lg mb-8 leading-relaxed">
                    {story.summary}
                  </p>
                  <div className="mt-auto pt-8 border-t border-neutral-50 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm font-bold text-neutral-900">
                      <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center"><User size={14}/></div>
                      {story.author}
                    </div>
                    <ArrowUpRight size={20} className="text-neutral-300 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </article>
            </BreathingCard>
          ))}
        </div>
      </section>

      {/* Filter & List */}
      <section className="max-w-5xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all uppercase tracking-wider",
                activeCategory === cat 
                  ? "bg-black text-white" 
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Layout */}
        <div className="space-y-20">
          {listStories.map((story, idx) => (
            <FadeIn key={story.id} delay={idx * 0.05} yOffset={20}>
              <article className="group grid md:grid-cols-12 gap-12 items-center border-b border-neutral-100 pb-20 last:border-0">
                <div className="md:col-span-5 aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-100">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{story.category}</span>
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">• {story.readTime} lectura</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 group-hover:underline decoration-2 underline-offset-8 cursor-pointer leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-xl text-neutral-500 mb-8 leading-relaxed">
                    {story.summary}
                  </p>
                  <button className="text-sm font-bold underline decoration-2 underline-offset-8 uppercase tracking-widest">
                    Leer historia completa
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {listStories.length === 0 && (
          <div className="text-center py-40 text-neutral-400 text-xl">
            No hay historias en esta categoría aún.
          </div>
        )}
      </section>
    </div>
  );
}
