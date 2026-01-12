import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HEARTBEAT_TYPES } from '../../data/heartbeat_types_data';
import { LOCATIONS_DATA } from '../../data/sports_data';
import { ArrowRight, ArrowUpRight, Lock, Hammer, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

// --- VISTA LISTADO: /ecosistema ---
// Renombrado de ProtoUniverseList a ProtoEcosystemList
export function ProtoEcosystemList() {
  // Filtramos los tipos ocultos (sub-tipos como Life Reserve/Resort)
  const visibleTypes = HEARTBEAT_TYPES.filter(t => !t.hidden);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-neutral-900 text-white pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              EL ECOSISTEMA HEARTBEAT
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Más que lugares. Un ecosistema interconectado de espacios, tecnología y experiencias para una vida regenerativa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid de Tipos */}
      <section className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleTypes.map((type, idx) => (
            <BreathingCard 
              key={type.id} 
              to={type.status === 'active' ? `/prototype/ecosistema/${type.id}` : '#'}
              delay={idx * 0.1}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border transition-all duration-500 flex flex-col h-[500px]",
                type.status === 'active' 
                  ? "border-neutral-200 hover:border-black bg-white" 
                  : "border-neutral-100 bg-neutral-50 cursor-not-allowed"
              )}
            >
              {/* Imagen (Solo mitad superior) */}
              <div className="h-[55%] overflow-hidden relative">
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    type.status === 'active' ? "group-hover:scale-105" : "grayscale opacity-50"
                  )} 
                />
                {type.status === 'development' && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Hammer size={14} /> En Desarrollo
                    </span>
                  </div>
                )}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-md z-10">
                  <type.icon size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Contenido (Mitad inferior) */}
              <div className="flex-1 p-10 flex flex-col">
                <h3 className={cn("text-3xl font-bold mb-3 tracking-tight", type.status === 'development' && "text-neutral-400")}>
                  {type.title}
                </h3>
                <p className="text-sm font-bold text-neutral-900 mb-4 leading-tight uppercase tracking-wide">
                  {type.subtitle}
                </p>
                <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
                  {type.valueProp}
                </p>
                
                <div className="mt-auto">
                  {type.status === 'active' ? (
                    <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                      Descubrir <ArrowRight size={16} />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                      <Lock size={14} /> Próximamente
                    </span>
                  )}
                </div>
              </div>
            </BreathingCard>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- VISTA DETALLE: /ecosistema/:id ---
// Renombrado de ProtoUniverseDetail a ProtoEcosystemDetail
export function ProtoEcosystemDetail() {
  const { id } = useParams();
  const type = HEARTBEAT_TYPES.find(t => t.id === id);

  if (!type) return <div className="p-20 text-center">Formato no encontrado</div>;

  // Encontrar ubicaciones reales que coincidan (si aplica)
  const matchingLocations = LOCATIONS_DATA.filter(l => 
    type.locations.includes(l.id) || type.locations.includes(l.city.toLowerCase())
  );

  // ¿Es la página de "Life"?
  const isLifePage = type.id === 'life';

  return (
    <div className="bg-white">
      {/* 1) HERO */}
      <div className="relative h-[70vh] min-h-[600px] bg-neutral-900 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={type.image} alt={type.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8 text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-6 py-2 rounded-full backdrop-blur-md">
              <type.icon size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Formato Heartbeat</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-none">
              {type.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl font-medium text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              {type.valueProp}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 md:py-48 space-y-32 md:space-y-48">
        
        {/* 2) QUÉ ES (Concepto) */}
        <section className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8">El Concepto</h2>
            <p className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900">
              {type.description}
            </p>
          </FadeIn>
        </section>

        {/* --- SECCIÓN ESPECIAL PARA LIFE: SELECTOR DE SUBCATEGORÍAS (PRIORITARIO) --- */}
        {isLifePage && (
          <section>
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">ELIGE TU CAMINO</h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              {type.relatedTypes.map((relId, idx) => {
                const relType = HEARTBEAT_TYPES.find(t => t.id === relId);
                if (!relType) return null;
                return (
                  <BreathingCard key={relId} to={`/prototype/ecosistema/${relId}`} delay={idx * 0.1}>
                    <div className="group relative h-[600px] rounded-[2rem] overflow-hidden border border-neutral-200 hover:border-black transition-all">
                      <img src={relType.image} alt={relType.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                        <span className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80 border border-white/30 px-3 py-1 rounded-full w-fit">Experiencia Life</span>
                        <h3 className="text-5xl font-black uppercase tracking-tighter mb-4">{relType.title}</h3>
                        <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-md">{relType.subtitle}</p>
                        <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest bg-white text-black px-8 py-4 rounded-full w-fit hover:bg-neutral-200 transition-colors">
                          Explorar {relType.title} <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </BreathingCard>
                );
              })}
            </div>
          </section>
        )}

        {/* 3) CÓMO SE VIVE (Momentos) - Solo si NO es Life (Life ya tiene los cards grandes) */}
        {!isLifePage && type.moments.length > 0 && (
          <section>
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">LA EXPERIENCIA</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-12">
              {type.moments.map((moment, idx) => (
                <BreathingCard key={idx} delay={idx * 0.1}>
                  <div className="group">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative bg-neutral-100">
                      <img src={moment.image} alt={moment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">
                        {moment.category}
                      </div>
                    </div>
                    <h3 className="font-bold text-2xl text-center">{moment.title}</h3>
                  </div>
                </BreathingCard>
              ))}
            </div>
          </section>
        )}

        {/* 4) DÓNDE EXISTE (Ubicaciones) - Solo si NO es Life */}
        {!type.hidden && !isLifePage && (
          <FadeIn>
            <section className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 border border-neutral-100">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">DÓNDE ENCONTRARLO</h2>
                  <p className="text-neutral-500 text-xl">Espacios activos actualmente en el ecosistema.</p>
                </div>
                {type.ctaContext === 'places' && (
                  <Link to="/prototype/lugares" className="text-lg font-bold underline decoration-2 underline-offset-8">
                    Ver mapa completo
                  </Link>
                )}
              </div>

              {matchingLocations.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {matchingLocations.map(loc => (
                    <BreathingCard key={loc.id} to={`/prototype/lugares/${loc.id}`}>
                      <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-neutral-200 hover:border-black transition-all group h-full">
                        <div className="w-24 h-24 bg-neutral-100 rounded-2xl overflow-hidden shrink-0">
                          <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-2xl mb-1">{loc.name}</h4>
                          <span className="text-sm text-neutral-500 uppercase font-bold tracking-wider">{loc.city}</span>
                        </div>
                        <ArrowUpRight size={24} className="text-neutral-300 group-hover:text-black transition-colors" />
                      </div>
                    </BreathingCard>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {type.locations.map((locName, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-neutral-200 opacity-70">
                      <MapPin size={24} className="text-neutral-400" />
                      <span className="font-bold text-xl text-neutral-600 capitalize">
                        {locName.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </FadeIn>
        )}

        {/* 5) CONEXIONES (Para páginas que NO son Life) */}
        {!isLifePage && (
          <section>
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12 text-center">Conecta con otros formatos</h2>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-6">
              {type.relatedTypes.map((relId, idx) => {
                const relType = HEARTBEAT_TYPES.find(t => t.id === relId);
                if (!relType) return null;
                return (
                  <FadeIn key={relId} delay={idx * 0.1}>
                    <Link 
                      to={`/prototype/ecosistema/${relId}`}
                      className="flex items-center gap-4 px-8 py-4 rounded-full border border-neutral-200 hover:border-black hover:bg-neutral-50 transition-all"
                    >
                      <relType.icon size={20} />
                      <span className="font-bold text-sm uppercase tracking-wider">{relType.title}</span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </section>
        )}

        {/* 6) CTA FINAL */}
        <section className="text-center pt-16">
          <FadeIn>
            {type.ctaContext === 'places' && !isLifePage && (
              <Link 
                to="/prototype/lugares" 
                className="inline-block bg-black text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-xl"
              >
                Ver Lugares Disponibles
              </Link>
            )}
            {type.ctaContext === 'waitlist' && (
              <button className="inline-block bg-black text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-xl">
                Unirse a la Lista de Espera
              </button>
            )}
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
