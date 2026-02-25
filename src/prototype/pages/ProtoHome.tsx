import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ChevronDown, Calendar, ArrowUpRight } from 'lucide-react';
import { HOME_CONTENT } from '../../data/home_content';
import { HEARTBEAT_TYPES } from '../../data/heartbeat_types_data'; // Importar tipos para el filtro
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';
import PulseSeparator from '../../components/animations/PulseSeparator';
import SoulSignal from '../../components/animations/SoulSignal';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProtoHome() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // La intro dura 2.5 segundos y luego revela la web
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Filtrar tipos principales para el buscador (excluir sub-tipos ocultos)
  const filterTypes = HEARTBEAT_TYPES.filter(t => !t.hidden && t.status === 'active');

  return (
    <div className="bg-white">
      
      {/* --- INTRO SEQUENCE: EL LATIDO PRIMIGENIO --- */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          >
            {/* FONDO GIF */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
              <img 
                src="https://lh3.googleusercontent.com/d/1T__Xnb9QClCSq3PUT7nc62Kohrn4G8nS"
                alt="Loading Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/70 text-xs font-bold uppercase tracking-[0.5em] backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                Sincronizando latido...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1) HERO - Full Screen */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* SEÑAL DEL ALMA */}
          <FadeIn delay={showIntro ? 2.6 : 0.1} yOffset={0}>
             <div className="mb-8">
               <SoulSignal />
             </div>
          </FadeIn>

          <FadeIn delay={showIntro ? 2.8 : 0.2} yOffset={30}>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
              {HOME_CONTENT.hero.h1.toUpperCase()}
            </h1>
          </FadeIn>
          <FadeIn delay={showIntro ? 3.0 : 0.4}>
            <p className="text-xl md:text-3xl font-medium text-neutral-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              {HOME_CONTENT.hero.subclaim}
            </p>
          </FadeIn>
          <FadeIn delay={showIntro ? 3.2 : 0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/prototype/reservar" className="bg-gradient-to-r from-brand-start to-brand-end text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-brand-start/20 text-center">
                {HOME_CONTENT.hero.ctaPrimary}
              </Link>
              <Link to="/prototype/ecosistema" className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center">
                {HOME_CONTENT.hero.ctaSecondary}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2) ENTRADA RÁPIDA - Ritmo Pausado */}
      <section className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {HOME_CONTENT.quickAccess.map((card, idx) => (
            <BreathingCard 
              key={card.id} 
              to={card.path}
              delay={idx * 0.1}
              className={`group p-10 md:p-12 rounded-[2rem] border ${card.color} flex flex-col justify-between min-h-[400px] md:min-h-[500px]`}
            >
              <div>
                <card.icon size={64} className="mb-10 opacity-80" strokeWidth={1} />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-none">{card.title}</h2>
                <p className="text-xl font-medium opacity-70 leading-relaxed">{card.phrase}</p>
              </div>
              <div className="mt-12 flex items-center gap-3 font-bold uppercase text-sm tracking-widest group-hover:gap-6 transition-all">
                {card.cta} <ArrowRight size={16} />
              </div>
            </BreathingCard>
          ))}
        </div>
      </section>

      <PulseSeparator />

      {/* 3) DEPORTES - Grid Limpio */}
      <section className="py-24 md:py-40 bg-neutral-50 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-24 gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">DEPORTES</h2>
            <Link to="/prototype/deportes" className="text-lg font-bold underline decoration-2 underline-offset-8 hover:text-neutral-600 transition-colors">
              Ver catálogo completo
            </Link>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {HOME_CONTENT.sportsGrid.map((sport, idx) => (
              <BreathingCard key={sport.id} to={`/prototype/deportes/${sport.id}`} delay={idx * 0.05}>
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 group-hover:border-black transition-all duration-300 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <h3 className="text-3xl font-bold mb-3 tracking-tight">{sport.name}</h3>
                    <p className="text-neutral-500 text-lg leading-snug">{sport.phrase}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 w-fit mt-8">
                    Ver centros
                  </span>
                </div>
              </BreathingCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4) BUSCADOR UNIVERSAL - Sección "Isla" */}
      <section className="py-32 md:py-48 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Encuentra tu experiencia ideal</h2>
          </FadeIn>
          
          <FadeIn delay={0.2} yOffset={20}>
            <div className="bg-white/10 p-3 rounded-3xl flex flex-col lg:flex-row gap-3 backdrop-blur-md">
              <div className="flex-1 relative group">
                <select className="w-full bg-neutral-900 text-white h-20 pl-8 pr-12 rounded-2xl appearance-none cursor-pointer focus:ring-2 focus:ring-white outline-none font-medium text-xl transition-colors hover:bg-neutral-800">
                  <option>Cualquier Deporte</option>
                  <option>Boxing</option>
                  <option>Yoga</option>
                  <option>Running</option>
                  <option>Escalada</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" size={24} />
              </div>
              <div className="flex-1 relative group">
                <select className="w-full bg-neutral-900 text-white h-20 pl-8 pr-12 rounded-2xl appearance-none cursor-pointer focus:ring-2 focus:ring-white outline-none font-medium text-xl transition-colors hover:bg-neutral-800">
                  <option>Cualquier Ubicación</option>
                  <option>Madrid</option>
                  <option>Barcelona</option>
                  <option>Huesca</option>
                  <option>Valencia</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" size={24} />
              </div>
              <div className="flex-1 relative group">
                <select className="w-full bg-neutral-900 text-white h-20 pl-8 pr-12 rounded-2xl appearance-none cursor-pointer focus:ring-2 focus:ring-white outline-none font-medium text-xl transition-colors hover:bg-neutral-800">
                  <option>Cualquier Heartbeat</option>
                  {filterTypes.map(t => (
                    <option key={t.id} value={t.title}>{t.title}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" size={24} />
              </div>
              <button className="bg-white text-black h-20 px-12 rounded-2xl font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 text-lg shrink-0">
                <Search size={24} /> Buscar
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5) TIPOS DE HEARTBEAT - Ritmo Visual */}
      <section className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 md:mb-28 text-center">EL ECOSISTEMA HEARTBEAT</h2> {/* CAMBIO */}
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOME_CONTENT.heartbeatTypes.map((type, idx) => (
            <BreathingCard 
              key={idx} 
              delay={idx * 0.1}
              className={`p-10 rounded-3xl border flex flex-col items-center text-center gap-6 transition-all min-h-[300px] justify-center ${
                type.disabled 
                  ? "bg-neutral-50 border-neutral-100 opacity-50 cursor-not-allowed" 
                  : "bg-white border-neutral-200 hover:border-black"
              }`}
            >
              <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-2">
                <type.icon size={32} className="text-neutral-900" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-2xl leading-tight mb-3">{type.title}</h3>
                <p className="text-sm text-neutral-500 font-medium">{type.desc}</p>
              </div>
            </BreathingCard>
          ))}
        </div>
      </section>

      <PulseSeparator />

      {/* 6) LUGARES DESTACADOS - Inmersión Fotográfica */}
      <section className="py-32 md:py-48 bg-neutral-900 text-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">LUGARES DESTACADOS</h2>
            <Link to="/prototype/lugares" className="text-lg font-bold underline decoration-2 underline-offset-8">Ver mapa completo</Link>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {HOME_CONTENT.featuredLocations.map((loc, idx) => (
              <BreathingCard key={idx} delay={idx * 0.2}>
                <div className="group bg-neutral-800 rounded-[2rem] overflow-hidden hover:bg-neutral-700 transition-colors duration-500 h-full">
                  {/* IMAGEN GRANDE Y LIMPIA */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                         <span className="text-xs font-bold text-brand-end uppercase tracking-widest mb-3 block">{loc.type}</span>
                         <h3 className="text-3xl font-bold mb-4">{loc.name}</h3>
                         <div className="flex flex-wrap gap-2">
                            {loc.sports.map(s => (
                                <span key={s} className="text-[10px] uppercase font-bold border border-white/30 px-2 py-1 rounded text-neutral-300 backdrop-blur-sm">
                                {s}
                                </span>
                            ))}
                         </div>
                    </div>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7) HISTORIAS - Editorial */}
      <section className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 md:mb-28">JOURNAL</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-12">
          {HOME_CONTENT.stories.map((story, idx) => (
            <BreathingCard key={idx} delay={idx * 0.1}>
              <article className="group cursor-pointer flex flex-col h-full">
                <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-8 bg-neutral-100">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-xs font-bold text-brand-start uppercase tracking-widest mb-4 block">{story.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight group-hover:underline decoration-2 underline-offset-8">{story.title}</h3>
                <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                  Leer <ArrowUpRight size={18} />
                </div>
              </article>
            </BreathingCard>
          ))}
        </div>
      </section>

      {/* 8) AGENDA - Limpieza */}
      <section className="py-24 md:py-40 bg-neutral-50 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="flex items-center gap-4 mb-16 justify-center">
            <Calendar size={32} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">PRÓXIMOS EVENTOS</h2>
          </FadeIn>
          
          <div className="space-y-6">
            {HOME_CONTENT.agenda.map((event, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="left">
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 flex flex-col sm:flex-row items-center gap-8 hover:border-black transition-colors group">
                  <div className="text-center min-w-[80px]">
                    <span className="block text-4xl font-black leading-none mb-1">{event.day}</span>
                    <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">{event.month}</span>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-xs font-bold bg-neutral-100 px-3 py-1.5 rounded-lg uppercase text-neutral-500 mb-3 inline-block">
                      {event.type}
                    </span>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                  <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all">
                    Ver Info
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn className="text-center mt-16">
            <button className="text-lg font-bold underline decoration-2 underline-offset-8 hover:text-neutral-600 transition-colors">
              Ver agenda completa
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 9) MANIFIESTO - Pausa Dramática con Imagen */}
      <section className="relative py-60 md:py-80 px-6 text-center overflow-hidden">
        {/* Imagen de Fondo con Espacio Negativo */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80" 
            alt="Nature Silence" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-8 text-2xl md:text-5xl font-medium leading-relaxed text-white">
            {HOME_CONTENT.manifesto.map((line, idx) => (
              <FadeIn key={idx} delay={idx * 0.3} yOffset={20}>
                <p className={idx === 1 || idx === 4 ? "font-black" : "opacity-80"}>
                  {line}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9.5) QUÉ ES HEARTBEAT - Bloque Estructural */}
      <section className="py-24 md:py-32 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-white p-12 md:p-16 rounded-3xl border border-neutral-200">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-center">
                Qué es Heartbeat
              </h2>
              <p className="text-xl text-neutral-600 text-center mb-10 leading-relaxed">
                Un modelo replicable que integra deporte, territorio, tecnología y comunidad en un mismo ecosistema.
              </p>
              <div className="text-center">
                <Link
                  to="/prototype/que-es-heartbeat"
                  className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  Descubrir el modelo <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10) NEWSLETTER - Cierre con Textura */}
      <section className="relative py-32 md:py-48 bg-black text-white px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1534258936925-c48947387603?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-6">{HOME_CONTENT.newsletter.title}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-neutral-400 mb-12">{HOME_CONTENT.newsletter.subtitle}</p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu email aquí..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-white placeholder-neutral-400 focus:ring-2 focus:ring-white outline-none text-lg backdrop-blur-sm"
              />
              <Link to="/prototype/reservar" className="bg-white text-black px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shrink-0 text-center">
                {HOME_CONTENT.newsletter.cta}
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xs text-neutral-500 mt-8">
              Al suscribirte aceptas nuestra política de privacidad. Cero spam, prometido.
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
