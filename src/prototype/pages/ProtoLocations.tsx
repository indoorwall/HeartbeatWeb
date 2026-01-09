import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LOCATIONS_DATA, SPORTS_DATA } from '../../data/sports_data';
import { ArrowRight, MapPin, Filter, Check, Calendar, Clock, Map, Heart, Info, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

// --- COMPONENTE LISTADO: /lugares ---
export function ProtoLocationsList() {
  const [filterCity, setFilterCity] = useState('Todas');
  const [filterSport, setFilterSport] = useState('Todos');
  const [filterType, setFilterType] = useState('Todos');

  const cities = ['Todas', ...Array.from(new Set(LOCATIONS_DATA.map(l => l.city)))];
  const sports = ['Todos', ...SPORTS_DATA.map(s => s.name)];
  const types = ['Todos', 'Adrenaline', 'Regeneration', 'Community', 'Future'];

  const filteredLocations = useMemo(() => {
    return LOCATIONS_DATA.filter(loc => {
      if (filterCity !== 'Todas' && loc.city !== filterCity) return false;
      if (filterType !== 'Todos' && loc.heartbeatType !== filterType) return false;
      if (filterSport !== 'Todos') {
        const sportId = SPORTS_DATA.find(s => s.name === filterSport)?.id;
        if (sportId && !loc.sports.includes(sportId)) return false;
      }
      return true;
    });
  }, [filterCity, filterSport, filterType]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1) HERO */}
      <section className="bg-neutral-900 text-white pt-40 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">ELIGE TU LUGAR</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-neutral-400 max-w-3xl leading-relaxed">
              Desde hubs tecnológicos urbanos hasta refugios en la naturaleza. Encuentra tu espacio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2) BUSCADOR / FILTROS */}
      <div className="sticky top-16 z-30 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500">
            <Filter size={18} /> Explorar
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <select 
              value={filterCity} onChange={(e) => setFilterCity(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {cities.map(c => <option key={c} value={c}>{c === 'Todas' ? 'Cualquier Ciudad' : c}</option>)}
            </select>

            <select 
              value={filterSport} onChange={(e) => setFilterSport(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {sports.map(s => <option key={s} value={s}>{s === 'Todos' ? 'Cualquier Deporte' : s}</option>)}
            </select>

            <select 
              value={filterType} onChange={(e) => setFilterType(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {types.map(t => <option key={t} value={t}>{t === 'Todos' ? 'Cualquier Vibe' : t}</option>)}
            </select>
          </div>
          
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            {filteredLocations.length} Ubicaciones
          </div>
        </div>
      </div>

      {/* 3) LISTADO DE CARDS - Ritmo Vertical Amplio */}
      <section className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto">
        {filteredLocations.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredLocations.map((loc, idx) => (
              <BreathingCard key={loc.id} to={`/prototype/lugares/${loc.id}`} delay={idx * 0.1}>
                <div className="group flex flex-col h-full">
                  <div className="aspect-[4/3] bg-neutral-200 rounded-[2rem] mb-8 overflow-hidden relative shadow-sm">
                    <img 
                      src={loc.image} 
                      alt={loc.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                        {loc.city}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                       <span className={cn(
                         "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border shadow-sm",
                         loc.heartbeatType === 'Adrenaline' && "bg-blue-50 text-blue-900 border-blue-200",
                         loc.heartbeatType === 'Regeneration' && "bg-green-50 text-green-900 border-green-200",
                         loc.heartbeatType === 'Future' && "bg-purple-50 text-purple-900 border-purple-200",
                         loc.heartbeatType === 'Community' && "bg-yellow-50 text-yellow-900 border-yellow-200",
                       )}>
                         {loc.heartbeatType}
                       </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col px-2">
                    <h3 className="text-3xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-8">{loc.name}</h3>
                    <p className="text-neutral-500 text-lg mb-6 line-clamp-2 leading-relaxed">{loc.subtitle}</p>
                    
                    <div className="mt-auto pt-6 border-t border-neutral-100">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {loc.sports.slice(0, 3).map(sid => {
                          const sName = SPORTS_DATA.find(s => s.id === sid)?.name;
                          return (
                            <span key={sid} className="text-[10px] font-bold text-neutral-400 border border-neutral-200 px-3 py-1 rounded-lg uppercase tracking-wider">
                              {sName}
                            </span>
                          );
                        })}
                        {loc.sports.length > 3 && <span className="text-[10px] text-neutral-400 px-2 py-1">+</span>}
                      </div>
                      <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                        Ver Lugar <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-neutral-50 rounded-[3rem] border border-dashed border-neutral-300">
            <MapPin size={64} className="mx-auto text-neutral-300 mb-6" />
            <p className="text-2xl font-bold text-neutral-400 mb-6">No encontramos lugares con esos filtros.</p>
            <button 
              onClick={() => {setFilterCity('Todas'); setFilterSport('Todos'); setFilterType('Todos');}}
              className="text-black underline font-bold decoration-2 underline-offset-8"
            >
              Ver todos los lugares
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

// --- COMPONENTE DETALLE: /lugares/{id} ---
export function ProtoLocationDetail() {
  const { id } = useParams();
  const loc = LOCATIONS_DATA.find(l => l.id === id);

  if (!loc) return <div className="p-20 text-center">Ubicación no encontrada</div>;

  return (
    <div className="bg-white">
      
      {/* 1) HERO - Full Screen */}
      <div className="relative h-screen min-h-[800px] bg-neutral-900 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={loc.image} alt={loc.name} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block mb-8 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur text-xs font-bold uppercase tracking-[0.25em]">
              Heartbeat {loc.city} • {loc.heartbeatType}
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              {loc.name.toUpperCase()}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl font-medium text-neutral-200 mb-16 max-w-4xl mx-auto leading-relaxed">
              "{loc.subtitle}"
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#sports" className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                Ver deportes
              </a>
              <button className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                Reservar ahora
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* 2) QUÉ ES ESTE LUGAR - Pausa Inicial */}
        <section className="py-32 md:py-48 text-center">
          <FadeIn>
            <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8">El Espacio</h2>
            <p className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900 max-w-4xl mx-auto">
              {loc.description}
            </p>
          </FadeIn>
        </section>

        {/* 3) DEPORTES DISPONIBLES - Separación Clara */}
        <section id="sports" className="border-t border-neutral-200 pt-24 md:pt-40 pb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">DEPORTES DISPONIBLES</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loc.sports.map((sid, idx) => {
              const sport = SPORTS_DATA.find(s => s.id === sid);
              if(!sport) return null;
              return (
                <BreathingCard key={sid} to={`/prototype/deportes/${sid}`} delay={idx * 0.1}>
                  <div className="flex items-center gap-6 p-10 rounded-3xl border border-neutral-200 hover:border-black hover:bg-neutral-50 transition-all group h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl border border-neutral-100 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform shadow-sm">
                      <sport.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-1">{sport.name}</h3>
                      <span className="text-xs text-neutral-500 uppercase font-bold tracking-wider">{sport.intensity} Intensity</span>
                    </div>
                    <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
                  </div>
                </BreathingCard>
              );
            })}
          </div>
        </section>
      </div>

      {/* VISUAL BREAK - Full Width Image (NUEVO) */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
         <img 
            src={loc.moments[0]?.image || loc.image} 
            className="w-full h-full object-cover grayscale opacity-80 scale-105"
         />
         <div className="absolute inset-0 bg-black/20" />
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* 4) CÓMO SE VIVE AQUÍ (MOMENTOS) - Layout Mejorado */}
        <section className="pt-24 md:pt-40 pb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">CÓMO SE VIVE AQUÍ</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {loc.moments.map((moment, idx) => (
              <BreathingCard key={idx} delay={idx * 0.1}>
                <div className="group">
                  <div className="aspect-[3/5] rounded-[2rem] overflow-hidden mb-6 relative">
                    <img src={moment.image} alt={moment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">
                      {moment.category}
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">{moment.title}</h3>
                </div>
              </BreathingCard>
            ))}
          </div>
        </section>

        {/* 5) QUÉ LO HACE ÚNICO */}
        <section className="border-t border-neutral-200 pt-24 md:pt-40 pb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">QUÉ LO HACE ÚNICO</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            {loc.uniqueFeatures.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-neutral-50 p-10 rounded-[2rem] border border-neutral-100 h-full">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm mb-6">
                    {idx + 1}
                  </div>
                  <p className="font-bold text-2xl leading-tight">{feature}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 6) SERVICIOS / INSTALACIONES */}
        <section className="border-t border-neutral-200 pt-24 md:pt-40 pb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">SERVICIOS</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
            {loc.services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="flex items-center gap-4 text-neutral-800 font-medium text-lg">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" strokeWidth={3} />
                  </div>
                  {service}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 7) AGENDA Y EVENTOS */}
        <section className="border-t border-neutral-200 pt-24 md:pt-40 pb-24">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">PRÓXIMOS EVENTOS</h2>
            <button className="text-lg font-bold underline decoration-2 underline-offset-8">Ver calendario completo</button>
          </FadeIn>
          <div className="space-y-4">
            {loc.agenda.map((event, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors bg-white group">
                  <div className="text-center min-w-[80px]">
                    <span className="block text-3xl font-black leading-none mb-1">{event.day}</span>
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{event.month}</span>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-xs font-bold bg-neutral-100 px-3 py-1.5 rounded-lg uppercase text-neutral-500 mb-2 inline-block">
                      {event.type}
                    </span>
                    <h3 className="font-bold text-xl">{event.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 8) CÓDIGOS DEL LUGAR */}
        <section className="border-t border-neutral-200 pt-24 md:pt-40 pb-24">
          <FadeIn>
            <div className="bg-neutral-900 text-white p-12 md:p-20 rounded-[3rem]">
              <div className="flex items-center gap-4 mb-12 text-yellow-400">
                <Info size={32} />
                <h2 className="text-2xl font-bold uppercase tracking-widest">Códigos del Lugar</h2>
              </div>
              <div className="space-y-10">
                {loc.codes.map((code, idx) => (
                  <div key={idx} className="flex gap-8">
                    <span className="text-neutral-600 font-mono text-xl">0{idx + 1}</span>
                    <p className="text-2xl md:text-3xl font-medium leading-snug">{code}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 9) CÓMO LLEGAR + HORARIOS */}
        <section className="border-t border-neutral-200 pt-24 md:pt-40 pb-40 grid md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn>
            <h2 className="text-3xl font-black mb-8">UBICACIÓN</h2>
            <div className="aspect-video bg-neutral-100 rounded-3xl mb-8 flex items-center justify-center text-neutral-400 border border-neutral-200">
              <Map size={48} />
              <span className="ml-3 text-lg font-bold">Mapa Interactivo</span>
            </div>
            <p className="font-medium text-2xl mb-4">{loc.address}</p>
            <button className="text-sm font-bold underline decoration-2 underline-offset-8 uppercase tracking-widest">Abrir en Maps</button>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-black mb-8">HORARIOS</h2>
            <div className="flex items-start gap-6 mb-10">
              <Clock className="mt-1" size={32} />
              <div>
                <p className="font-bold text-2xl mb-2">{loc.schedule}</p>
                <p className="text-neutral-500 text-lg">
                  Recepción abierta hasta 30min antes del cierre.
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 inline-block">
              <p className="text-xs font-bold text-neutral-500 uppercase mb-2 tracking-wider">Status Actual</p>
              <div className="flex items-center gap-3 text-green-600 font-bold text-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Abierto ahora
              </div>
            </div>
          </FadeIn>
        </section>

      </div>

      {/* 10) CTA FINAL FUERTE */}
      <section className="bg-black text-white py-40 md:py-60 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-none">
              ESTE ES TU LUGAR.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl md:text-3xl text-neutral-400 mb-16 leading-relaxed">
              Reserva tu primera sesión o únete como miembro para acceso ilimitado.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                Reservar Sesión
              </button>
              <button className="bg-transparent border border-white text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                Ver Membership
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
