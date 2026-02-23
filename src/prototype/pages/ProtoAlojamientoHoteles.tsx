import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Check } from 'lucide-react';
import { HOTELS } from '../../data/alojamiento_data';

export default function ProtoAlojamientoHoteles() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/prototype/alojamiento"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Alojamiento
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Heartbeat Hoteles
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Hoteles sostenibles integrados en proyectos Heartbeat. No son hoteles
            aislados: forman parte de ecosistemas completos con centros deportivos,
            restauración y comunidad.
          </p>
        </div>
      </section>

      {/* LISTA DE HOTELES */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Hoteles disponibles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {HOTELS.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${hotel.image})`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                    <MapPin size={14} />
                    <span>{hotel.destinationName}</span>
                    <span className="text-neutral-400">•</span>
                    <span>{hotel.rooms} habitaciones</span>
                  </div>

                  <p className="text-neutral-700 mb-4">{hotel.description}</p>

                  <div className="bg-blue-50 rounded-lg p-3 mb-6">
                    <p className="text-sm font-medium text-blue-900">
                      {hotel.integration}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-neutral-500 mb-3 uppercase">
                      Lo que incluye:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <Check size={14} className="text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">
                      Ver hotel
                    </button>
                    <button className="w-full bg-neutral-100 text-black py-3 rounded-full font-bold hover:bg-neutral-200 transition-all">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS CLAVE */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Por qué Heartbeat Hoteles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Sostenibilidad</h3>
              <p className="text-neutral-700">
                Diseño arquitectónico con criterios de eficiencia energética,
                materiales locales y mínimo impacto ambiental.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Conexión con centros deportivos
              </h3>
              <p className="text-neutral-700">
                Acceso directo a instalaciones deportivas de primer nivel sin salir
                del proyecto. Entrenar forma parte de la experiencia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Restauración integrada</h3>
              <p className="text-neutral-700">
                Gastronomía con producto local y KM0. Espacios diseñados para
                nutrición consciente y disfrute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Nuestro equipo te ayudará a elegir el hotel adecuado para tu estancia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all">
              Contactar
            </button>
            <Link
              to="/prototype/alojamiento"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-center"
            >
              Ver otros tipos de alojamiento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
