import React, { useState, useMemo } from 'react';
import { Search, MapPin, Activity, Heart, Calendar, ArrowRight, X, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPORTS_DATA, LOCATIONS_DATA } from '../../data/sports_data';
import { HEARTBEAT_TYPES } from '../../data/heartbeat_types_data';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

type FilterType = 'all' | 'sport' | 'location' | 'heartbeat';

export default function ProtoReservar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const cities = useMemo(() => {
    const uniqueCities = [...new Set(LOCATIONS_DATA.map(loc => loc.city))];
    return uniqueCities.sort();
  }, []);

  const activeHeartbeatTypes = useMemo(() => {
    return HEARTBEAT_TYPES.filter(t => !t.hidden && t.status === 'active');
  }, []);

  const filteredResults = useMemo(() => {
    let results = [...LOCATIONS_DATA];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(loc =>
        loc.name.toLowerCase().includes(query) ||
        loc.city.toLowerCase().includes(query) ||
        loc.sports.some(sportId => {
          const sport = SPORTS_DATA.find(s => s.id === sportId);
          return sport?.name.toLowerCase().includes(query);
        })
      );
    }

    if (selectedSports.length > 0) {
      results = results.filter(loc =>
        selectedSports.some(sportId => loc.sports.includes(sportId))
      );
    }

    if (selectedCities.length > 0) {
      results = results.filter(loc => selectedCities.includes(loc.city));
    }

    if (selectedTypes.length > 0) {
      results = results.filter(loc => selectedTypes.includes(loc.heartbeatType));
    }

    return results;
  }, [searchQuery, selectedSports, selectedCities, selectedTypes]);

  const toggleFilter = (value: string, currentFilters: string[], setFilters: (filters: string[]) => void) => {
    if (currentFilters.includes(value)) {
      setFilters(currentFilters.filter(f => f !== value));
    } else {
      setFilters([...currentFilters, value]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedSports([]);
    setSelectedCities([]);
    setSelectedTypes([]);
  };

  const hasActiveFilters = searchQuery || selectedSports.length > 0 || selectedCities.length > 0 || selectedTypes.length > 0;

  return (
    <div className="bg-neutral-50 min-h-screen">

      <section className="relative bg-black text-white py-32 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
            alt="Reservar Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">RESERVAR</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl md:text-3xl font-medium text-neutral-300 max-w-3xl">
              Encuentra tu próxima experiencia. Filtra por disciplina, ubicación o tipo de Heartbeat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border border-neutral-200">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400" size={24} />
              <input
                type="text"
                placeholder="Buscar por lugar, ciudad o deporte..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-16 pr-6 rounded-2xl border-2 border-neutral-200 focus:border-black outline-none text-lg font-medium transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`h-16 px-8 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-3 ${
                showFilters
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-black hover:bg-neutral-200'
              }`}
            >
              <SlidersHorizontal size={20} />
              Filtros
            </button>
          </div>

          {showFilters && (
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200">

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                  <Activity size={16} />
                  Deportes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SPORTS_DATA.map(sport => (
                    <button
                      key={sport.id}
                      onClick={() => toggleFilter(sport.id, selectedSports, setSelectedSports)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedSports.includes(sport.id)
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {sport.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                  <MapPin size={16} />
                  Ubicaciones
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => toggleFilter(city, selectedCities, setSelectedCities)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedCities.includes(city)
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                  <Heart size={16} />
                  Tipo Heartbeat
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeHeartbeatTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => toggleFilter(type.title, selectedTypes, setSelectedTypes)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedTypes.includes(type.title)
                          ? 'bg-black text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {type.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {hasActiveFilters && (
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-neutral-200">
              <span className="text-sm font-bold text-neutral-500">Filtros activos:</span>
              <div className="flex-1 flex flex-wrap gap-2">
                {selectedSports.map(sportId => {
                  const sport = SPORTS_DATA.find(s => s.id === sportId);
                  return (
                    <span
                      key={sportId}
                      className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {sport?.name}
                      <button
                        onClick={() => toggleFilter(sportId, selectedSports, setSelectedSports)}
                        className="hover:opacity-70"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  );
                })}
                {selectedCities.map(city => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold"
                  >
                    {city}
                    <button
                      onClick={() => toggleFilter(city, selectedCities, setSelectedCities)}
                      className="hover:opacity-70"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
                {selectedTypes.map(type => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold"
                  >
                    {type}
                    <button
                      onClick={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                      className="hover:opacity-70"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <button
                onClick={clearAllFilters}
                className="text-sm font-bold text-neutral-500 hover:text-black underline underline-offset-4"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black">
            {filteredResults.length} {filteredResults.length === 1 ? 'Resultado' : 'Resultados'}
          </h2>
        </div>

        {filteredResults.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-neutral-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No encontramos resultados</h3>
              <p className="text-neutral-500 mb-8">
                Prueba ajustando los filtros o realiza una nueva búsqueda.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-neutral-800 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResults.map((location, idx) => (
              <BreathingCard
                key={location.id}
                to={`/prototype/centros/${location.id}`}
                delay={idx * 0.05}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 h-full flex flex-col group-hover:border-black transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        {location.heartbeatType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold leading-tight">{location.name}</h3>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-500 mb-4">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{location.city}</span>
                    </div>

                    <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                      {location.subtitle}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Deportes disponibles</p>
                      <div className="flex flex-wrap gap-2">
                        {location.sports.map(sportId => {
                          const sport = SPORTS_DATA.find(s => s.id === sportId);
                          return sport ? (
                            <span
                              key={sportId}
                              className="text-xs bg-neutral-100 px-3 py-1.5 rounded-full font-bold text-neutral-700"
                            >
                              {sport.name}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>

                    <button className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group-hover:gap-4">
                      Ver detalles <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        )}
      </section>

      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Calendar size={48} className="mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">¿No encuentras lo que buscas?</h2>
            <p className="text-xl text-neutral-400 mb-10">
              Contacta con nosotros y diseñamos una experiencia personalizada para ti.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors">
              Contactar con el equipo
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
