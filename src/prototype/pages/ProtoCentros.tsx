import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Home, TrendingUp, Search } from 'lucide-react';
import { CENTROS_ACTIVOS, PROXIMOS_CENTROS, SPORTS_CATALOG } from '../../data/centros_data';

export default function ProtoCentros() {
  const [searchCity, setSearchCity] = React.useState('');
  const [searchSport, setSearchSport] = React.useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Centros Multideportivos Heartbeat
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Entrena donde el movimiento tiene sentido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#buscador"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-lg"
            >
              Encontrar mi centro
            </a>
            <a
              href="#deportes"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ver deportes
            </a>
          </div>
        </div>
      </section>

      {/* BUSCADOR */}
      <section id="buscador" className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Busca tu centro ideal
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700">
                  Ciudad
                </label>
                <input
                  type="text"
                  placeholder="Ej: Madrid, Barcelona..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700">
                  Deporte
                </label>
                <select
                  value={searchSport}
                  onChange={(e) => setSearchSport(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Todos los deportes</option>
                  {SPORTS_CATALOG.map((sport) => (
                    <option key={sport.id} value={sport.id}>
                      {sport.icon} {sport.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700">
                  Nivel
                </label>
                <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Todos los niveles</option>
                  <option>Principiante</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
              <Search size={20} />
              Ver disponibilidad
            </button>
          </div>
        </div>
      </section>

      {/* CENTROS ACTIVOS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            Centros Activos
          </h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">
            Espacios operativos listos para tu próxima sesión.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {CENTROS_ACTIVOS.map((centro) => (
              <div
                key={centro.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div className="relative h-64">
                  <img
                    src={centro.image}
                    alt={centro.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ACTIVO
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-neutral-600 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{centro.city}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{centro.name}</h3>
                  <p className="text-neutral-600 mb-4">{centro.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {centro.sports.map((sport) => (
                      <span
                        key={sport.id}
                        className="bg-neutral-100 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {sport.icon} {sport.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-4">
                    <Link
                      to={`/prototype/centros/${centro.slug}`}
                      className="flex-1 bg-black text-white text-center py-3 rounded-full font-bold hover:bg-neutral-800 transition-all"
                    >
                      Ver centro
                    </Link>
                    <button className="flex-1 bg-neutral-100 text-black py-3 rounded-full font-bold hover:bg-neutral-200 transition-all">
                      Reservar
                    </button>
                  </div>

                  <div className="flex gap-3 text-sm">
                    {centro.hasAccommodation && (
                      <Link
                        to="/prototype/alojamiento"
                        className="flex items-center gap-1 text-neutral-600 hover:text-black transition-colors"
                      >
                        <Home size={14} />
                        <span>Alojamiento disponible</span>
                      </Link>
                    )}
                    {centro.hasEvents && (
                      <Link
                        to="/prototype/eventos"
                        className="flex items-center gap-1 text-neutral-600 hover:text-black transition-colors"
                      >
                        <Calendar size={14} />
                        <span>Ver eventos</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 text-center">
            Cómo funciona
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Reserva online</h3>
              <p className="text-sm text-neutral-600">
                Elige tu actividad y horario desde la app o web.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Sesiones o membresía</h3>
              <p className="text-sm text-neutral-600">
                Paga por clase o elige un plan mensual.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Tecnología opcional</h3>
              <p className="text-sm text-neutral-600">
                Seguimiento de métricas y progreso personalizado.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Comunidad activa</h3>
              <p className="text-sm text-neutral-600">
                Conecta con otros miembros y eventos especiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPORTES DISPONIBLES */}
      <section id="deportes" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            Deportes disponibles
          </h2>
          <p className="text-center text-neutral-600 mb-12">
            Explora todas las disciplinas que ofrecemos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SPORTS_CATALOG.map((sport) => (
              <Link
                key={sport.id}
                to={`/prototype/deportes/${sport.id}`}
                className="bg-neutral-50 hover:bg-neutral-100 rounded-xl p-6 text-center transition-all border border-neutral-200 hover:border-black group"
              >
                <div className="text-4xl mb-2">{sport.icon}</div>
                <div className="font-bold text-sm group-hover:text-black">
                  {sport.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMOS CENTROS */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Próximos Centros</h2>
            <p className="text-neutral-600 text-lg">
              Nuevos espacios en desarrollo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROXIMOS_CENTROS.map((centro) => (
              <div
                key={centro.id}
                className="bg-white rounded-xl p-6 border-2 border-dashed border-neutral-300 hover:border-neutral-400 transition-all"
              >
                <div className="mb-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {centro.projectStatus}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{centro.name}</h3>
                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{centro.city}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-2">
                    Tipo: {centro.type}
                  </p>
                  {centro.expectedOpening && (
                    <p className="text-sm font-medium text-neutral-700">
                      Apertura prevista: {centro.expectedOpening}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <button className="w-full bg-neutral-100 text-black py-2 rounded-full text-sm font-bold hover:bg-neutral-200 transition-all">
                    Recibir novedades
                  </button>
                  {centro.hasInvestmentProject && (
                    <Link
                      to={`/prototype/invertir/${centro.slug}`}
                      className="w-full bg-white border-2 border-neutral-300 text-black py-2 rounded-full text-sm font-bold hover:border-black transition-all text-center flex items-center justify-center gap-1"
                    >
                      <TrendingUp size={14} />
                      Ver proyecto
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Encuentra tu centro. Empieza hoy.
          </h2>
          <a
            href="#buscador"
            className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all"
          >
            Ver disponibilidad
          </a>
        </div>
      </section>
    </div>
  );
}
