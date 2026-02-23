import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Users, Home, MapPin, ArrowRight, Check } from 'lucide-react';
import { ACCOMMODATION_DESTINATIONS } from '../../data/alojamiento_data';

export default function ProtoAlojamiento() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1600',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Alojamiento Heartbeat
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Dormir, vivir y moverte dentro del mismo ecosistema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#destinos"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-lg"
            >
              Explorar destinos
            </a>
            <a
              href="#tipos"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ver disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* LAS 3 FORMAS DE ALOJARSE */}
      <section id="tipos" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            Las 3 formas de alojarse
          </h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">
            Cada una integrada en proyectos completos.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HOTELES */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                    <Hotel size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Heartbeat Hoteles</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Hoteles sostenibles integrados en proyectos Heartbeat.
                </p>
                <Link
                  to="/prototype/alojamiento/hoteles"
                  className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  Ver hoteles
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Heartbeat Social</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Alojamiento con objetivo social y comunitario.
                </p>
                <Link
                  to="/prototype/alojamiento/social"
                  className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  Ver alojamiento social
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* HOME */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                    <Home size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Heartbeat Home</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Casas tecnológicas integradas en el ecosistema.
                </p>
                <Link
                  to="/prototype/alojamiento/home"
                  className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  Ver casas
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINOS DISPONIBLES */}
      <section id="destinos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            Proyectos donde puedes alojarte
          </h2>
          <p className="text-center text-neutral-600 mb-12 text-lg max-w-3xl mx-auto">
            No son hoteles aislados. Cada destino es un proyecto completo donde
            alojamiento, deporte, alimentación y comunidad están integrados.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {ACCOMMODATION_DESTINATIONS.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                    <MapPin size={14} />
                    <span>{destination.location}</span>
                  </div>
                  <p className="text-neutral-700 mb-6">{destination.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-neutral-500 mb-3 uppercase">
                      Qué incluye este proyecto:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {destination.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            feature.available
                              ? 'bg-green-100 text-green-800'
                              : 'bg-neutral-100 text-neutral-400'
                          }`}
                        >
                          {feature.available && <Check size={12} />}
                          {feature.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-neutral-500 mb-3 uppercase">
                      Tipos de alojamiento disponibles:
                    </p>
                    <div className="flex gap-2">
                      {destination.accommodationTypes.map((type) => (
                        <span
                          key={type}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-black text-white"
                        >
                          {type === 'Hotel' && <Hotel size={12} />}
                          {type === 'Social' && <Users size={12} />}
                          {type === 'Home' && <Home size={12} />}
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {destination.relatedProjectUrl && (
                      <Link
                        to={destination.relatedProjectUrl}
                        className="w-full bg-black text-white text-center py-3 rounded-full font-bold hover:bg-neutral-800 transition-all"
                      >
                        Ver proyecto completo
                      </Link>
                    )}
                    <Link
                      to={`/prototype/alojamiento/destino/${destination.slug}`}
                      className="w-full bg-neutral-100 text-black text-center py-3 rounded-full font-bold hover:bg-neutral-200 transition-all"
                    >
                      Ver alojamiento
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRACIÓN FINAL */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Un alojamiento dentro de algo más grande
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">Entrena en tu proyecto</h3>
              <p className="text-neutral-300">
                Acceso directo al centro deportivo integrado en tu destino.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Come KM0</h3>
              <p className="text-neutral-300">
                Restauración integrada con producto local y sostenible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">Participa en eventos</h3>
              <p className="text-neutral-300">
                Acceso a la agenda de actividades y experiencias del proyecto.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-neutral-300 mb-8">
              Todo está conectado por ubicación. Explora más:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/prototype/centros"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all"
              >
                Centros
              </Link>
              <Link
                to="/prototype/agenda"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Eventos
              </Link>
              <Link
                to="/prototype/ecosistema"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Ecosistema
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
