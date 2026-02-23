import React from 'react';
import { Link } from 'react-router-dom';
import { MAGAZINE_SERIES, MAGAZINE_DOSSIERS, MAGAZINE_GUIDES, MAGAZINE_ARTICLES } from '../../data/magazine_data';
import { ArrowRight, BookOpen, Map, FlaskConical, Mic } from 'lucide-react';
import BreathingCard from '../../components/animations/BreathingCard';
import FadeIn from '../../components/animations/FadeIn';

export default function MagHome() {
  const featuredArticle = MAGAZINE_ARTICLES[0]; // El Latido
  const featuredDossier = MAGAZINE_DOSSIERS[0]; // Biología

  return (
    <div className="pb-20">
      
      {/* ACCESO ALTERNATIVO - BANNER */}
      <section className="bg-brand-start text-white py-4 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest">
              Negocio alternativo
            </span>
            <span className="hidden md:inline text-white/60">•</span>
            <p className="font-serif text-sm text-white/90 hidden md:block">
              Accede gratis siendo socio Heartbeat o suscríbete por 5€/mes
            </p>
          </div>
          <Link
            to="/prototype/magazine/subscribe"
            className="font-sans text-[10px] font-bold uppercase tracking-widest bg-white text-black px-6 py-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            Ver opciones de acceso
          </Link>
        </div>
      </section>

      {/* 1. PORTADA EDITORIAL (HERO) */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16">

          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 group cursor-pointer">
            <Link to={`/prototype/magazine/article/${featuredArticle.slug}`}>
              <div className="aspect-[4/3] overflow-hidden mb-8 bg-neutral-100 relative">
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute top-6 left-6 bg-white px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest text-black">
                  Historia de Portada
                </div>
                {featuredArticle.isPremium && (
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <span>Premium</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 mb-6 font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                <span className="text-brand-start">Serie: El Latido</span>
                <span>•</span>
                <span>{featuredArticle.readTime} lectura</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[0.95] mb-6 group-hover:underline decoration-1 underline-offset-8">
                {featuredArticle.title}
              </h1>
              <p className="font-serif text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl mb-8">
                {featuredArticle.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
                <div className="font-sans text-[10px] font-bold uppercase tracking-widest">
                  <span className="block text-black">{featuredArticle.author}</span>
                  <span className="block text-neutral-400">{featuredArticle.authorRole}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar: Series Highlight & Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-16 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-12 lg:pt-0 lg:pl-16">
            
            {/* Quote of the week */}
            <div className="text-center px-8 py-12 bg-[#FDFBF7] border border-neutral-100 relative">
              <span className="font-serif text-6xl text-neutral-200 absolute top-4 left-4">“</span>
              <blockquote className="font-serif text-2xl leading-relaxed text-neutral-800 mb-6 relative z-10">
                La tecnología nos ha dormido, pero Heartbeat la usa para despertarte. Es tecnología que te hace más humano, no menos.
              </blockquote>
              <cite className="font-sans text-[10px] font-bold uppercase tracking-widest not-italic text-neutral-500">
                — Manifiesto Heartbeat
              </cite>
            </div>

            {/* Series Quick Links */}
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-black pb-4">
                <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest">Series en curso</h3>
                <Link to="/prototype/magazine/series" className="font-sans text-[10px] font-bold uppercase tracking-widest hover:underline">Ver todas</Link>
              </div>
              <div className="space-y-8">
                {MAGAZINE_SERIES.slice(0, 3).map(serie => (
                  <Link key={serie.id} to={`/prototype/magazine/series/${serie.id}`} className="group flex gap-6 items-start">
                    <div className="w-24 h-24 bg-neutral-100 shrink-0 overflow-hidden">
                      <img src={serie.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div>
                      <h4 className={`font-serif text-2xl mb-2 group-hover:underline decoration-1 underline-offset-4 ${serie.color}`}>
                        {serie.title}
                      </h4>
                      <p className="font-serif text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                        {serie.manifesto}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DOSSIERS (VISUAL BREAK) */}
      <section className="bg-[#111] text-white py-24 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/50 skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-start mb-4 block">
                Ediciones Coleccionables
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-medium">Dossiers</h2>
            </div>
            <Link to="/prototype/magazine/dossiers" className="font-sans text-[10px] font-bold uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              Explorar librería
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Featured Dossier Image */}
            <div className="aspect-[3/4] md:aspect-[4/3] bg-neutral-800 relative group cursor-pointer overflow-hidden">
              <img src={featuredDossier.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/90 to-transparent">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">
                  {featuredDossier.subtitle}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">{featuredDossier.title}</h3>
                <p className="font-serif text-lg text-white/70 mb-8 max-w-md">{featuredDossier.desc}</p>
                <span className="inline-flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-widest bg-white text-black px-6 py-3 hover:bg-neutral-200 transition-colors">
                  Leer Dossier <BookOpen size={14} />
                </span>
              </div>
            </div>

            {/* List of others */}
            <div className="space-y-12">
              {MAGAZINE_DOSSIERS.slice(1).map(dossier => (
                <Link key={dossier.id} to={`/prototype/magazine/dossiers/${dossier.id}`} className="group block border-b border-white/10 pb-12 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                      {dossier.subtitle}
                    </span>
                    {dossier.isPremium && <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest border border-yellow-500/30 px-2 py-1 rounded">Premium</span>}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-neutral-300 transition-colors">
                    {dossier.title}
                  </h3>
                  <p className="font-serif text-neutral-400 leading-relaxed max-w-lg">
                    {dossier.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GUÍAS SEO (UTILITY) */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 block">
              Utilidad Evergreen
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">Guías Prácticas</h2>
            <p className="font-serif text-xl text-neutral-500 leading-relaxed">
              Manuales profundos para aplicar la filosofía Heartbeat a tu vida diaria. Sin fecha de caducidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAGAZINE_GUIDES.slice(0, 4).map((guide, idx) => (
              <Link key={guide.id} to={`/prototype/magazine/guides/${guide.slug}`} className="group p-8 bg-[#FDFBF7] border border-neutral-100 hover:border-black transition-all h-full flex flex-col">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6 block">
                  {guide.category}
                </span>
                <h3 className="font-serif text-2xl font-medium leading-tight mb-6 group-hover:underline decoration-1 underline-offset-4">
                  {guide.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-neutral-200 flex justify-between items-center">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">Leer Guía</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/prototype/magazine/guides" className="font-sans text-[10px] font-bold uppercase tracking-widest underline decoration-1 underline-offset-4 hover:text-neutral-600">
              Ver las 12 guías disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER SELECTOR */}
      <section className="px-6 md:px-12 py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Elige tu frecuencia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pulso Semanal", desc: "Curación general de lecturas.", icon: BookOpen },
              { title: "Laboratorio", desc: "Tech, salud y bio-datos.", icon: FlaskConical },
              { title: "Mapa", desc: "Lugares y rutas.", icon: Map }
            ].map((nl, idx) => (
              <div key={idx} className="bg-white p-10 border border-neutral-200 hover:shadow-lg transition-shadow cursor-pointer group">
                <nl.icon size={32} strokeWidth={1} className="mx-auto mb-6 text-neutral-400 group-hover:text-black transition-colors" />
                <h3 className="font-serif text-2xl mb-3">{nl.title}</h3>
                <p className="font-serif text-neutral-500 mb-8">{nl.desc}</p>
                <button className="w-full border border-black py-3 font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Suscribirse
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
