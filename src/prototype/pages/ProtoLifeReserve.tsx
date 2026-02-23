import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, ArrowRight } from 'lucide-react';
import {
  LIFE_RESERVE_DESTINATIONS,
  LIFE_RESERVE_INCLUDES,
} from '../../data/heartbeat_life_data';

export default function ProtoLifeReserve() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/prototype/heartbeat-life"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Heartbeat Life
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Heartbeat Life Reserve
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Territorios regenerados para vivir con propósito.
          </p>
        </div>
      </section>

      {/* QUÉ ES LIFE RESERVE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Qué es Life Reserve</h2>
          <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
            <p>
              Life Reserve son desarrollos en entornos naturales protegidos o
              regenerados. No son resorts turísticos: son proyectos territoriales donde
              el respeto al entorno es el punto de partida.
            </p>
            <p>
              Cada Reserve integra arquitectura de bajo impacto, centros deportivos
              diseñados para el entorno, alojamiento sostenible y comunidad local
              activa. El territorio no es un escenario: es parte del proyecto.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Regeneración territorial</h3>
              <p className="text-neutral-700">
                Proyectos diseñados para restaurar ecosistemas, proteger biodiversidad
                y generar impacto positivo medible en el territorio.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Integración con deporte outdoor</h3>
              <p className="text-neutral-700">
                Centros pensados para aprovechar el entorno natural: trail running,
                ciclismo, deportes acuáticos y actividades en naturaleza.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Alojamiento integrado</h3>
              <p className="text-neutral-700">
                Hoteles sostenibles y casas tecnológicas con acceso directo al
                ecosistema completo: deporte, naturaleza y comunidad.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Restauración local</h3>
              <p className="text-neutral-700">
                Gastronomía basada en circuitos cortos, producto KM0 y conexión con
                productores locales.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Arquitectura de bajo impacto</h3>
              <p className="text-neutral-700">
                Diseño con criterios de eficiencia energética, materiales locales y
                mínima huella ambiental.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Comunidad activa</h3>
              <p className="text-neutral-700">
                Conexión con comunidades locales, programas de formación y generación
                de empleo de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Qué incluye Life Reserve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {LIFE_RESERVE_INCLUDES.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINOS LIFE RESERVE */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Destinos Life Reserve
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {LIFE_RESERVE_DESTINATIONS.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div
                  className="h-80 bg-cover bg-center"
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
                      Qué incluye:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-neutral-700"
                        >
                          <Check
                            size={14}
                            className="text-green-600 flex-shrink-0 mt-0.5"
                          />
                          <span>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {destination.projectUrl && (
                      <Link
                        to={destination.projectUrl}
                        className="w-full bg-black text-white text-center py-3 rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                      >
                        Ver proyecto completo
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRACIÓN */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Life Reserve es parte del ecosistema
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Cada Reserve está conectado con centros deportivos, alojamiento,
            restauración y comunidad. Explora las otras dimensiones.
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
              to="/prototype/agenda"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Eventos
            </Link>
            <Link
              to="/prototype/invertir"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Invertir
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
