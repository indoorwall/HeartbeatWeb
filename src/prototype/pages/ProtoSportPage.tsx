import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Clock, Check, ChevronDown, ArrowRight, 
  Info, Shield, Zap, Users, Star, Filter, ArrowUpRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';
import { cn } from '../../lib/utils';
import { SPORTS_PAGES_CONTENT } from '../../data/sports_pages_content'; // Importamos la data dinámica
import { LOCATIONS_DATA } from '../../data/sports_data'; // Importamos los lugares globales

// --- COMPONENTES INTERNOS ---

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={cn("text-3xl md:text-5xl font-black tracking-tighter mb-12 uppercase", className)}>
    {children}
  </h2>
);

const StickyCTA = ({ isVisible, price }: { isVisible: boolean, price?: string }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div 
        initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:hidden"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs">
            <span className="block font-bold uppercase text-neutral-500">Próxima sesión</span>
            <span className="font-bold text-black">Ver disponibilidad</span>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs">
            Reservar
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- PÁGINA PRINCIPAL DINÁMICA ---

export default function ProtoSportPage() {
  const { id } = useParams(); 
  const [showSticky, setShowSticky] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // 1. Cargar datos del deporte actual
  const sportId = id?.toLowerCase() || 'boxing';
  const data = SPORTS_PAGES_CONTENT[sportId];

  // 2. Encontrar centros que ofrecen este deporte
  const availableCenters = LOCATIONS_DATA.filter(loc => loc.sports.includes(sportId));

  // Scroll listener para Sticky CTA
  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO Injection
  useEffect(() => {
    if (data) {
      document.title = data.seo.title;
    }
  }, [data]);

  // Si no hay datos (404), mostrar mensaje
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Deporte no encontrado</h1>
          <Link to="/prototype/deportes" className="underline font-bold">Volver al catálogo</Link>
        </div>
      </div>
    );
  }

  // Schema.org Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${sportId.charAt(0).toUpperCase() + sportId.slice(1)} Classes`,
    "description": data.seo.desc,
    "offers": data.plans.map(p => ({
      "@type": "Offer",
      "name": p.name,
      "price": p.price.replace('€', ''),
      "priceCurrency": "EUR"
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans text-neutral-900 pb-24 md:pb-0">
      
      {/* JSON-LD Injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* 1) HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <img src={data.hero.image} alt={sportId} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {data.hero.chips.map(chip => (
                <span key={chip} className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-xs font-bold uppercase tracking-widest">
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 uppercase leading-none">
              {sportId}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl font-medium text-neutral-200 mb-10 max-w-2xl mx-auto">
              {data.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                Reservar Ahora
              </button>
              <a href="#prices" className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                Ver Precios
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2) SELECTOR RÁPIDO */}
      <div className="bg-black text-white sticky top-20 z-40 shadow-xl border-t border-neutral-800 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex-1 relative group">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">Centro</span>
              <select className="w-full bg-transparent font-bold text-lg outline-none cursor-pointer appearance-none">
                {availableCenters.length > 0 ? (
                  availableCenters.map(c => <option key={c.id}>{c.name}</option>)
                ) : (
                  <option>Seleccionar centro</option>
                )}
              </select>
              <ChevronDown className="absolute right-0 bottom-1 pointer-events-none text-neutral-500" size={16} />
            </div>
            <div className="w-px h-10 bg-neutral-800" />
            <div className="flex-1 relative group">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">Tipo</span>
              <select className="w-full bg-transparent font-bold text-lg outline-none cursor-pointer appearance-none">
                <option>Clase</option>
                <option>Open Box</option>
              </select>
              <ChevronDown className="absolute right-0 bottom-1 pointer-events-none text-neutral-500" size={16} />
            </div>
            <div className="w-px h-10 bg-neutral-800" />
            <div className="flex-1 relative group">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">Fecha</span>
              <div className="font-bold text-lg flex items-center gap-2 cursor-pointer">
                Hoy, 12 Oct <Calendar size={16} className="text-neutral-500"/>
              </div>
            </div>
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            Ver Disponibilidad
          </button>
        </div>
      </div>

      {/* 3) GALERÍA */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="flex gap-4 md:gap-8 overflow-x-auto px-6 pb-8 snap-x snap-mandatory no-scrollbar">
          {data.gallery.map((img, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-[600px] aspect-[16/10] rounded-2xl overflow-hidden relative">
              <img src={img} alt={`${sportId} gallery ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* 4) ELIGE TU CENTRO */}
        <section className="py-12 md:py-24 border-b border-neutral-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionTitle className="mb-0">Elige tu centro</SectionTitle>
            <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
              {['Todos', 'Madrid', 'Barcelona', 'Valencia'].map(city => (
                <button key={city} className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors whitespace-nowrap">
                  {city}
                </button>
              ))}
            </div>
          </div>

          {availableCenters.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {availableCenters.map((center, idx) => (
                <BreathingCard key={center.id} delay={idx * 0.1}>
                  <div className="group border border-neutral-200 rounded-3xl p-6 hover:border-black transition-all bg-white h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100">
                        <img src={center.image} className="w-full h-full object-cover" alt={center.name} />
                      </div>
                      <div className="text-right">
                        <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider">{center.city}</span>
                        {/* Precio simulado ya que no está en LOCATIONS_DATA aún */}
                        <span className="block font-bold text-lg">Desde {data.plans[0]?.price || '15€'}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{center.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {center.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold bg-neutral-100 px-2 py-1 rounded text-neutral-600 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-neutral-50">
                      <div className="flex items-center gap-2 text-xs font-bold text-green-600 mb-4">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Próxima: Hoy 18:00
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to={`/prototype/lugares/${center.id}`} className="flex items-center justify-center py-3 rounded-xl border border-neutral-200 text-xs font-bold uppercase hover:bg-neutral-50">
                          Ver Centro
                        </Link>
                        <button className="flex items-center justify-center py-3 rounded-xl bg-black text-white text-xs font-bold uppercase hover:bg-neutral-800">
                          Reservar
                        </button>
                      </div>
                    </div>
                  </div>
                </BreathingCard>
              ))}
            </div>
          ) : (
            <div className="bg-neutral-50 p-12 rounded-3xl text-center border border-dashed border-neutral-300">
              <p className="text-neutral-400 font-bold text-lg">Próximamente disponible en más centros.</p>
            </div>
          )}
        </section>

        {/* 5) PRECIOS Y PASES */}
        <section id="prices" className="py-12 md:py-24 border-b border-neutral-100">
          <SectionTitle>Precios y Pases</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {data.plans.map((plan, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={cn(
                  "p-8 rounded-3xl border flex flex-col h-full relative",
                  plan.recommended ? "border-black bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-900"
                )}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Más Popular
                    </div>
                  )}
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2 opacity-80">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                    <span className="text-sm font-medium opacity-60">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm font-medium">
                        <Check size={16} className={plan.recommended ? "text-yellow-400" : "text-black"} />
                        <span className="opacity-80">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">{plan.target}</p>
                    <button className={cn(
                      "w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors",
                      plan.recommended ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
                    )}>
                      Elegir Plan
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-400 mt-8 font-medium">
            * Los precios pueden variar ligeramente según el centro. Selecciona un centro para ver el precio final.
          </p>
        </section>

        {/* 6) HORARIOS (Mock Interactivo) */}
        <section className="py-12 md:py-24 border-b border-neutral-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionTitle className="mb-0">Horarios</SectionTitle>
            <div className="flex gap-2 bg-neutral-100 p-1 rounded-lg">
              {['Madrid', 'Valencia', 'Barcelona'].map((loc, idx) => (
                <button 
                  key={loc}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "px-4 py-2 rounded-md text-xs font-bold uppercase transition-all",
                    activeTab === idx ? "bg-white shadow-sm text-black" : "text-neutral-500 hover:text-black"
                  )}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-5 border-b border-neutral-100 bg-neutral-50 overflow-x-auto">
              {data.schedule.days.map(day => (
                <div key={day} className="py-4 px-2 text-center text-xs font-bold uppercase text-neutral-500 tracking-wider min-w-[80px]">
                  {day}
                </div>
              ))}
            </div>
            <div className="p-0 md:p-6">
              <div className="space-y-2">
                {data.schedule.sessions.map((session, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-xl transition-colors border-b border-neutral-100 last:border-0">
                    <div className="flex items-center gap-6">
                      <span className="text-xl font-black w-16">{session.time}</span>
                      <div>
                        <span className="block font-bold text-lg">{session.type}</span>
                        <span className="text-xs text-neutral-500 uppercase font-bold tracking-wider">{session.level}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="hidden md:block text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        {session.spots} plazas libres
                      </span>
                      <button className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800">
                        Reservar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7) QUÉ INCLUYE */}
        <section className="py-12 md:py-24 border-b border-neutral-100">
          <SectionTitle>Qué incluye</SectionTitle>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
            {data.inclusions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-black" />
                  </div>
                  <p className="text-lg font-medium text-neutral-800">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 8) CÓMO SE VIVE (EDITORIAL) */}
        <section className="py-12 md:py-24 border-b border-neutral-100">
          <SectionTitle>La Experiencia Heartbeat</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {data.experience.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{exp.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {exp.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 9) INFO PRÁCTICA */}
        <section className="py-12 md:py-24 border-b border-neutral-100">
          <div className="bg-neutral-50 rounded-[3rem] p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Nivel y Requisitos</h3>
                <div className="space-y-6">
                  <div>
                    <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Para quién es</span>
                    <p className="text-lg font-medium">{data.practical.level}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Duración</span>
                    <p className="text-lg font-medium">{data.practical.duration}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Shield size={18} /> Qué te damos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.practical.provided.map(item => (
                      <span key={item} className="px-3 py-1 bg-white border border-neutral-200 rounded-lg text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Info size={18} /> Qué debes traer
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.practical.bring.map(item => (
                      <span key={item} className="px-3 py-1 bg-white border border-neutral-200 rounded-lg text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10) FAQ */}
        <section className="py-12 md:py-24 border-b border-neutral-100 max-w-3xl mx-auto">
          <SectionTitle className="text-center">Preguntas Frecuentes</SectionTitle>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-2xl p-6 hover:border-black transition-colors bg-white">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-neutral-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11) RESUMEN FINAL */}
        <section className="py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            EMPIEZA TU CAMINO
          </h2>
          <p className="text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
            Tienes {availableCenters.length} centros disponibles para practicar {sportId}.
            La primera sesión define el resto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-xl">
              Reservar Ahora
            </button>
            <Link to="/prototype/lugares" className="bg-white border border-neutral-200 text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-50 transition-colors">
              Ver todos los centros
            </Link>
          </div>
        </section>

      </div>

      {/* 12) STICKY CTA (Mobile/Desktop) */}
      <StickyCTA isVisible={showSticky} />

    </div>
  );
}
