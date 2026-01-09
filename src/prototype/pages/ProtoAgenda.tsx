import React, { useState, useMemo } from 'react';
import { AGENDA_DATA } from '../../data/agenda_data';
import { Calendar, MapPin, Filter, ArrowRight } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';

export default function ProtoAgenda() {
  const [filterCity, setFilterCity] = useState('Todas');
  const [filterSport, setFilterSport] = useState('Todos');
  const [filterType, setFilterType] = useState('Todos');

  // Extract unique values
  const cities = ['Todas', ...Array.from(new Set(AGENDA_DATA.map(e => e.city)))];
  const sports = ['Todos', ...Array.from(new Set(AGENDA_DATA.map(e => e.sport)))];
  const types = ['Todos', ...Array.from(new Set(AGENDA_DATA.map(e => e.heartbeatType)))];

  const filteredEvents = useMemo(() => {
    return AGENDA_DATA.filter(event => {
      if (filterCity !== 'Todas' && event.city !== filterCity) return false;
      if (filterSport !== 'Todos' && event.sport !== filterSport) return false;
      if (filterType !== 'Todos' && event.heartbeatType !== filterType) return false;
      return true;
    });
  }, [filterCity, filterSport, filterType]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Agenda */}
      <section className="bg-neutral-900 text-white pt-40 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
          <div>
            <FadeIn>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">AGENDA & EXPERIENCIAS</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-2xl text-neutral-400 max-w-2xl leading-relaxed">
                Momentos que aceleran tu pulso. Desde entrenamientos técnicos hasta acciones comunitarias.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} direction="left">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Próximo Gran Evento</p>
              <p className="font-bold text-2xl leading-tight mb-1">Retiro de Inmersión Alpina</p>
              <p className="text-sm text-neutral-300">12-14 Nov • Pirineos</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500">
            <Filter size={18} /> Filtrar Eventos
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
              {sports.map(s => <option key={s} value={s}>{s === 'Todos' ? 'Cualquier Actividad' : s}</option>)}
            </select>

            <select 
              value={filterType} onChange={(e) => setFilterType(e.target.value)}
              className="bg-neutral-100 border-none rounded-xl px-6 py-3 text-sm font-medium focus:ring-2 focus:ring-black cursor-pointer hover:bg-neutral-200 transition-colors"
            >
              {types.map(t => <option key={t} value={t}>{t === 'Todos' ? 'Cualquier Vibe' : t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Events List */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto space-y-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <FadeIn key={event.id} delay={idx * 0.1} direction="left">
              <div className="group bg-white rounded-[2rem] border border-neutral-200 p-8 hover:border-black transition-all hover:shadow-xl flex flex-col md:flex-row gap-8 items-center">
                {/* Date Box */}
                <div className="flex flex-col items-center justify-center w-full md:w-32 h-32 bg-neutral-50 rounded-2xl border border-neutral-100 shrink-0">
                  {event.date === 'PRÓXIMAMENTE' ? (
                     <span className="text-[10px] font-black uppercase text-center px-2">Próximamente</span>
                  ) : (
                    <>
                      <span className="text-4xl font-black">{event.date.split(' ')[0]}</span>
                      <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">{event.date.split(' ')[1]}</span>
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-3">
                    <span className="text-[10px] font-bold bg-neutral-100 px-3 py-1.5 rounded-lg uppercase text-neutral-600 tracking-wider">
                      {event.sport}
                    </span>
                    <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                      {event.heartbeatType}
                    </span>
                    {event.spotsLeft && event.spotsLeft < 10 && (
                      <span className="text-[10px] font-bold text-red-600 px-3 py-1.5 uppercase animate-pulse tracking-wider">
                        ¡Últimas {event.spotsLeft} plazas!
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-neutral-500 text-lg mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center justify-center md:justify-start gap-6 text-xs font-bold uppercase tracking-wider text-neutral-400">
                    <span className="flex items-center gap-2"><MapPin size={14}/> {event.locationName}, {event.city}</span>
                    <span className="flex items-center gap-2"><Calendar size={14}/> {event.time}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="w-full md:w-auto shrink-0">
                  <button className="w-full bg-black text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3 group-hover:gap-4">
                    Apuntarme <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))
        ) : (
          <div className="text-center py-40 bg-neutral-50 rounded-[3rem] border border-dashed border-neutral-300">
            <p className="text-2xl font-bold text-neutral-400 mb-6">No hay eventos con estos filtros.</p>
            <button 
              onClick={() => {setFilterCity('Todas'); setFilterSport('Todos'); setFilterType('Todos');}}
              className="text-black underline font-bold decoration-2 underline-offset-8"
            >
              Ver toda la agenda
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
