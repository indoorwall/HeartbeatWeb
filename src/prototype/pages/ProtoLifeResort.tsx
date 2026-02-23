import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, ArrowRight } from 'lucide-react';
import {
  LIFE_RESORT_DESTINATIONS,
  LIFE_RESORT_INCLUDES,
} from '../../data/heartbeat_life_data';

export default function ProtoLifeResort() {
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
            Heartbeat Life Resort
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Experiencia completa dentro del ecosistema Heartbeat.
          </p>
        </div>
      </section>

      {/* QUÉ ES LIFE RESORT */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Qué es Life Resort</h2>
          <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
            <p>
              Life Resort son proyectos con vocación experiencial. No son hoteles con
              gimnasio: son ecosistemas completos donde deporte, alojamiento y
              comunidad están integrados desde el diseño.
            </p>
            <p>
              Cada Resort está pensado para estancias temporales donde entrenar,
              descansar, comer y disfrutar del entorno forman parte de la misma
              experiencia. Hoteles, casas, centros deportivos y restauración conectados
              en un único proyecto.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Proyecto con vocación experiencial</h3>
              <p className="text-neutral-700">
                Diseñado para que cada elemento del ecosistema contribuya a una
                experiencia completa de movimiento, descanso y disfrute.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Integración fuerte</h3>
              <p className="text-neutral-700">
                Deporte, alojamiento y comunidad están conectados físicamente y
                funcionalmente. Todo está a pocos pasos.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Orientado a estancias temporales</h3>
              <p className="text-neutral-700">
                Pensado para escapadas, retiros deportivos, vacaciones activas y
                experiencias de varios días.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Hoteles, casas y centros</h3>
              <p className="text-neutral-700">
                Opciones diversas de alojamiento con acceso completo a las
                instalaciones deportivas y servicios del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Qué incluye Life Resort
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {LIFE_RESORT_INCLUDES.map((item, idx) => (
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

      {/* DESTINOS LIFE RESORT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Destinos Life Resort
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {LIFE_RESORT_DESTINATIONS.map((destination) => (
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

      {/* DIFERENCIA ENTRE RESERVE Y RESORT */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Diferencia entre Reserve y Resort
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-neutral-200">
              <h3 className="text-2xl font-bold mb-4">Life Reserve</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Eje principal:</p>
                  <p className="text-neutral-700">
                    Territorio y regeneración como punto de partida.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Enfoque:</p>
                  <p className="text-neutral-700">
                    Desarrollo estructural y largo plazo en entorno natural.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Características:</p>
                  <ul className="text-neutral-700 space-y-1 ml-4">
                    <li>• Regeneración territorial</li>
                    <li>• Arquitectura de bajo impacto</li>
                    <li>• Integración con comunidad local</li>
                    <li>• Preservación del entorno</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-neutral-200">
              <h3 className="text-2xl font-bold mb-4">Life Resort</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Eje principal:</p>
                  <p className="text-neutral-700">
                    Experiencia y estancia como punto de partida.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Enfoque:</p>
                  <p className="text-neutral-700">
                    Integración de servicios en un entorno activo.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Características:</p>
                  <ul className="text-neutral-700 space-y-1 ml-4">
                    <li>• Estancias temporales</li>
                    <li>• Experiencia deportiva completa</li>
                    <li>• Servicios integrados</li>
                    <li>• Agenda activa de eventos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Life Resort es parte del ecosistema
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Cada Resort está conectado con centros deportivos, alojamiento,
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
