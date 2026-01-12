import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SPORTS_DATA, LOCATIONS_DATA, Sport } from '../../data/sports_data';
import { HEARTBEAT_TYPES } from '../../data/heartbeat_types_data'; // Importar tipos
import { ArrowRight, MapPin, Filter, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

// --- COMPONENTE PRINCIPAL: LISTADO DE DEPORTES ---
export function ProtoSportsList() {
  const [filterCity, setFilterCity] = useState('Todas');
  const [filterType, setFilterType] = useState('Todos');
  const [filterEnv, setFilterEnv] = useState('Todos');

  // Obtener ciudades únicas
  const cities = ['Todas', ...Array.from(new Set(LOCATIONS_DATA.map(l => l.city)))];
  
  // Obtener Tipos de Heartbeat (heartbeat)
  const types = ['Todos', ...HEARTBEAT_TYPES.filter(t => !t.hidden && t.status === 'active').map(t => t.title)];
  
  const envs = ['Todos', 'Indoor', 'Outdoor', 'Hybrid'];

  // Lógica de filtrado avanzada
  const filteredSports = useMemo(() => {
    return SPORTS_DATA.filter(sport => {
      // 1. Filtro por Ambiente (Directo en el deporte)
      if (filterEnv !== 'Todos' && sport.environment !== filterEnv) return false;

      // 2. Filtro por Ciudad (Indirecto: ¿Hay ubicaciones en esta ciudad que ofrezcan este deporte?)
      if (filterCity !== 'Todas') {
        const locationsInCity = LOCATIONS_DATA.filter(l => l.city === filterCity);
        const sportsInCity = locationsInCity.flatMap(l => l.sports);
        if (!sportsInCity.includes(sport.id)) return false;
      }

      // 3. Filtro por Heartbeat Type (Indirecto: ¿Hay ubicaciones de este tipo que ofrezcan este deporte?)
      if (filterType !== 'Todos') {
        const locationsOfType = LOCATIONS_DATA.filter(l => l.heartbeatType === filterType);
        const sportsOfType = locationsOfType.flatMap(l => l.sports);
        if (!sportsOfType.includes(sport.id)) return false;
      }

      return true;
    });
  }, [filterCity, filterType, filterEnv]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1) HERO SIMPLE */}
      <section className="bg-neutral-900 text-white pt-40 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">ELIGE TU DEPORTE</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-neutral-400 max-w-3xl leading-relaxed">
              Disciplina, técnica y comunidad. Encuentra lo que te mueve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2) BARRA DE FILTROS (Sticky) */}
      <div className="sticky top-16 z-30 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500">
            <Filter size={18} /> Filtros
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            {/* Selector Ciudad */}
            <select 
              value={filterCity} 
              onChange={(e) => setFilterCity(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {cities.map(c => <option key={c} value={c}>{c === 'Todas' ? 'Cualquier Ciudad' : c}</option>)}
            </select>

            {/* Selector Heartbeat (ecosistema) */}
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {types.map(t => <option key={t} value={t}>{t === 'Todos' ? 'Cualquier Heartbeat' : t}</option>)}
            </select>

            {/* Selector Indoor/Outdoor */}
            <select 
              value={filterEnv} 
              onChange={(e) => setFilterEnv(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {envs.map(e => <option key={e} value={e}>{e === 'Todos' ? 'Indoor / Outdoor' : e}</option>)}
            </select>
          </div>
          
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            {filteredSports.length} Resultados
          </div>
        </div>
      </div>

      {/* 3) GRID DE DEPORTES */}
      <section className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto">
        {filteredSports.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSports.map((sport, idx) => (
              <BreathingCard 
                key={sport.id} 
                to={`/prototype/deportes/${sport.id}`}
                delay={idx * 0.1}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <img 
                    src={sport.image} 
                    alt={sport.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="mb-auto flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                      {sport.environment}
                    </span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0" size={32} />
                  </div>
                  
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-5xl font-black uppercase mb-4 tracking-tighter">{sport.name}</h3>
                    <p className="text-neutral-300 text-lg font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {sport.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-3 text-sm font-bold underline decoration-2 underline-offset-8 hover:text-neutral-200 uppercase tracking-wider">
                      Ver centros disponibles <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <p className="text-2xl font-bold text-neutral-400 mb-6">No hay deportes que coincidan con tus filtros.</p>
            <button 
              onClick={() => {setFilterCity('Todas'); setFilterType('Todos'); setFilterEnv('Todos');}}
              className="text-black underline font-bold decoration-2 underline-offset-8"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

// --- COMPONENTE SUBPÁGINA: DETALLE DE DEPORTE ---
export function ProtoSportDetail() {
  const { id } = useParams();
  const sport = SPORTS_DATA.find(s => s.id === id);
  
  // Encontrar ubicaciones que tienen este deporte
  const locations = LOCATIONS_DATA.filter(l => l.sports.includes(id || ''));

  if (!sport) return <div className="p-20 text-center">Deporte no encontrado</div>;

  return (
    <div className="bg-white">
      {/* 1) HERO DEL DEPORTE */}
      <div className="relative h-[80vh] min-h-[700px] bg-neutral-900 text-white flex items-center">
        <div className="absolute inset-0">
          <img src={sport.image} alt={sport.name} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-end pb-24">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8 text-yellow-400">
                <sport.icon size={40} strokeWidth={1.5} />
                <span className="font-bold uppercase tracking-[0.2em] text-sm">{sport.environment} • Intensidad {sport.intensity}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-0">
                {sport.name}
              </h1>
            </FadeIn>
          </div>
          <div className="md:pl-16 border-l border-white/20 py-4">
            <FadeIn delay={0.4}>
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">La experiencia Heartbeat</h3>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-neutral-100">
                {sport.fullDesc}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-32 md:py-48 grid lg:grid-cols-12 gap-16">
        
        {/* COLUMNA PRINCIPAL (8 cols) */}
        <div className="lg:col-span-8 space-y-32 md:space-y-48">
          
          {/* 2) DÓNDE PRACTICARLO */}
          <section id="locations">
            <FadeIn className="flex items-end justify-between mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Dónde practicarlo</h2>
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{locations.length} Centros disponibles</span>
            </FadeIn>

            {locations.length > 0 ? (
              <div className="space-y-8">
                {locations.map((loc, idx) => (
                  <FadeIn key={loc.id} delay={idx * 0.1}>
                    <div className="group bg-white border border-neutral-200 rounded-[2rem] p-8 hover:border-black transition-all hover:shadow-xl flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                        <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      
                      <div className="flex-1 w-full">
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="text-[10px] font-bold bg-neutral-100 px-3 py-1.5 rounded-lg text-neutral-600 uppercase tracking-widest">
                            {loc.city}
                          </span>
                          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg uppercase tracking-widest">
                            {loc.heartbeatType}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{loc.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {loc.tags.map(tag => (
                            <span key={tag} className="text-xs text-neutral-500 border border-neutral-100 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="w-full md:w-auto shrink-0">
                        <Link 
                          to={`/prototype/lugares/${loc.id}`}
                          className="flex items-center justify-center gap-3 w-full md:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          Ver Lugar <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="bg-neutral-50 p-16 rounded-[2rem] text-center border border-dashed border-neutral-300">
                <p className="text-neutral-500 font-medium text-xl">Actualmente no hay centros con plazas disponibles para este deporte.</p>
              </div>
            )}
          </section>

          {/* 3) EXPERIENCIAS RELACIONADAS */}
          <section>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Completa tu entrenamiento</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {sport.relatedExperiences.map((exp, idx) => (
                <BreathingCard key={idx} delay={idx * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-neutral-100 relative">
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                        {exp.category}
                      </div>
                    </div>
                    <h4 className="font-bold text-xl leading-tight group-hover:underline decoration-2 underline-offset-8">{exp.title}</h4>
                  </div>
                </BreathingCard>
              ))}
            </div>
          </section>

        </div>

        {/* SIDEBAR / CTA FLOTANTE (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <FadeIn delay={0.6} direction="left">
              <div className="bg-neutral-50 border border-neutral-100 p-10 rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4">¿Listo para empezar?</h3>
                <p className="text-neutral-500 mb-10 leading-relaxed">
                  Elige un centro de la lista para ver horarios y reservar tu primera sesión de {sport.name}.
                </p>
                <a 
                  href="#locations" 
                  className="block w-full text-center bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Elegir Centro
                </a>
                <p className="text-xs text-center text-neutral-400 mt-6 font-medium">
                  Sin matrícula • Cancelación flexible
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8} direction="left">
              <div className="p-8 border border-neutral-100 rounded-[2rem]">
                <h4 className="font-bold text-sm mb-6 flex items-center gap-3 uppercase tracking-widest">
                  <CheckCircle2 size={20} className="text-green-500" />
                  Incluido en Membership
                </h4>
                <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                  <li className="flex items-center gap-3">• Acceso a todos los centros</li>
                  <li className="flex items-center gap-3">• Taquilla y toalla incluidas</li>
                  <li className="flex items-center gap-3">• Eventos de comunidad</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
}
