import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ShoppingBasket, MapPin, Filter, Check, Leaf } from 'lucide-react';
import {
  FOOD_SPACES,
  KM0_PHILOSOPHY,
  ECOSYSTEM_INTEGRATION,
  filterFoodSpaces,
} from '../../data/alimentacion_data';

export default function ProtoAlimentacion() {
  const [selectedType, setSelectedType] = React.useState<'Restaurante' | 'Supermercado' | ''>('');
  const [locationFilter, setLocationFilter] = React.useState('');

  const filteredSpaces = React.useMemo(() => {
    return filterFoodSpaces(selectedType || undefined, locationFilter || undefined);
  }, [selectedType, locationFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Alimentación Heartbeat
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Comer también es entrenar.
          </p>
          <a
            href="#espacios"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-lg"
          >
            Explorar espacios
          </a>
        </div>
      </section>

      {/* FILOSOFÍA KM0 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-800 rounded-full mb-4">
              <Leaf size={32} />
            </div>
            <h2 className="text-4xl font-black mb-4">Filosofía KM 0</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Producto local, temporada real, economía regional activa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                Qué significa KM 0
              </h3>
              <div className="space-y-4">
                {KM0_PHILOSOPHY.whatItMeans.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                Por qué lo hacemos
              </h3>
              <div className="space-y-4">
                {KM0_PHILOSOPHY.whyWeDoIt.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                Cómo funciona en Heartbeat
              </h3>
              <div className="space-y-4">
                {KM0_PHILOSOPHY.howItWorks.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                Impacto real
              </h3>
              <div className="space-y-4">
                {KM0_PHILOSOPHY.realImpact.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section id="espacios" className="py-16 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Filter size={24} />
            <h2 className="text-2xl font-bold">Filtrar espacios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700">
                Tipo
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as 'Restaurante' | 'Supermercado' | '')}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Todos</option>
                <option value="Restaurante">Restaurantes</option>
                <option value="Supermercado">Supermercados</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700">
                Ubicación
              </label>
              <input
                type="text"
                placeholder="Ej: Miches, Asturias, Madrid..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="mb-4 text-neutral-600">
            <span className="font-medium">{filteredSpaces.length}</span> espacio
            {filteredSpaces.length !== 1 ? 's' : ''} encontrado
            {filteredSpaces.length !== 1 ? 's' : ''}
          </div>

          {/* LISTADO DE ESPACIOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpaces.map((space) => (
              <div
                key={space.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${space.image})`,
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {space.type === 'Restaurante' ? (
                        <UtensilsCrossed size={20} />
                      ) : (
                        <ShoppingBasket size={20} />
                      )}
                      <span className="text-xs font-bold uppercase text-neutral-500">
                        {space.type}
                      </span>
                    </div>
                    {space.km0Focus && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                        <Leaf size={12} />
                        KM0
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{space.name}</h3>

                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-3">
                    <MapPin size={14} />
                    <span>{space.location}</span>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-medium text-neutral-500 mb-1">
                      Integrado en:
                    </p>
                    <p className="text-sm font-bold">{space.project}</p>
                  </div>

                  <p className="text-sm text-neutral-600 mb-4">{space.description}</p>

                  {space.cuisineType && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-neutral-500 mb-2">
                        Tipo de cocina:
                      </p>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-neutral-100">
                        {space.cuisineType}
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-xs font-medium text-neutral-500 mb-2">
                      Características:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {space.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700"
                        >
                          <Check size={10} />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/prototype/alimentacion/${space.slug}`}
                    className="w-full block bg-black text-white text-center py-3 rounded-full font-bold hover:bg-neutral-800 transition-all"
                  >
                    Ver {space.type === 'Restaurante' ? 'restaurante' : 'supermercado'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredSpaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No se encontraron espacios con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setSelectedType('');
                  setLocationFilter('');
                }}
                className="mt-4 text-black underline hover:no-underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* INTEGRACIÓN CON EL ECOSISTEMA */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            La alimentación forma parte del ecosistema
          </h2>
          <p className="text-center text-neutral-300 mb-12 text-lg">
            No son espacios aislados. Están integrados en proyectos completos.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ECOSYSTEM_INTEGRATION.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-neutral-300 mb-8">
              Explora más partes del ecosistema:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/prototype/centros"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all"
              >
                Centros
              </Link>
              <Link
                to="/prototype/alojamiento"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Alojamiento
              </Link>
              <Link
                to="/prototype/heartbeat-life"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Heartbeat Life
              </Link>
              <Link
                to="/prototype/eventos"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Eventos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
