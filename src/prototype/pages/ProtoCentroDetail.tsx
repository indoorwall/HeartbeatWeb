import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Euro, Calendar, Home, ArrowLeft } from 'lucide-react';
import { getCentroBySlug, CENTROS_ACTIVOS } from '../../data/centros_data';

export default function ProtoCentroDetail() {
  const { slug } = useParams<{ slug: string }>();
  const centro = getCentroBySlug(slug || '');

  if (!centro || centro.status !== 'active') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Centro no encontrado</h1>
          <Link
            to="/prototype/centros"
            className="text-black underline hover:no-underline"
          >
            Volver a Centros
          </Link>
        </div>
      </div>
    );
  }

  const activeCentro = CENTROS_ACTIVOS.find((c) => c.id === centro.id);
  if (!activeCentro) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeCentro.image})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
            <Link
              to="/prototype/centros"
              className="inline-flex items-center gap-2 text-white mb-4 hover:underline"
            >
              <ArrowLeft size={20} />
              Volver a Centros
            </Link>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              {activeCentro.name}
            </h1>
            <div className="flex items-center gap-2 text-white text-xl">
              <MapPin size={24} />
              <span>{activeCentro.city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Sobre este centro</h2>
              <p className="text-lg text-neutral-700 mb-6">
                {activeCentro.description}
              </p>
              <p className="text-neutral-600 mb-6">
                Un espacio diseñado para conectar movimiento, tecnología y
                comunidad. Aquí encontrarás instalaciones de primer nivel,
                entrenadores certificados y una comunidad activa que comparte tu
                pasión por el deporte y el bienestar.
              </p>
              <p className="text-neutral-600">
                Nuestro enfoque combina disciplinas tradicionales con tecnología
                de seguimiento, creando una experiencia única que se adapta a
                tu nivel y objetivos.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Información práctica</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-neutral-600 mt-1" />
                  <div>
                    <div className="font-medium">Horarios</div>
                    <div className="text-sm text-neutral-600">
                      Lun-Vie: 6:00 - 23:00
                      <br />
                      Sáb-Dom: 8:00 - 21:00
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Euro size={20} className="text-neutral-600 mt-1" />
                  <div>
                    <div className="font-medium">Precios</div>
                    <div className="text-sm text-neutral-600">
                      Desde 15€/sesión
                      <br />
                      Membresía desde 89€/mes
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-neutral-600 mt-1" />
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-sm text-neutral-600">
                      {activeCentro.city}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-full font-bold mt-6 hover:bg-neutral-800 transition-all">
                Reservar ahora
              </button>
            </div>
          </div>

          {/* DEPORTES */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Deportes disponibles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {activeCentro.sports.map((sport) => (
                <Link
                  key={sport.id}
                  to={`/prototype/deportes/${sport.id}`}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-all border border-neutral-200 hover:border-black group"
                >
                  <div className="text-4xl mb-3">{sport.icon}</div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-black">
                    {sport.name}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Clases guiadas y sesiones libres disponibles
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* INSTALACIONES */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Instalaciones</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold mb-2">Zona de entrenamiento</h3>
                <p className="text-sm text-neutral-600">
                  Equipamiento de última generación y espacios amplios
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold mb-2">Vestuarios premium</h3>
                <p className="text-sm text-neutral-600">
                  Taquillas, duchas y zona de descanso
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold mb-2">Zona de recuperación</h3>
                <p className="text-sm text-neutral-600">
                  Estiramientos, foam rolling y descanso
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold mb-2">Bar saludable</h3>
                <p className="text-sm text-neutral-600">
                  Smoothies, snacks y café de calidad
                </p>
              </div>
            </div>
          </div>

          {/* ENLACES RELACIONADOS */}
          <div className="bg-neutral-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Descubre más</h2>
            <div className="flex flex-wrap gap-4">
              {activeCentro.hasAccommodation && (
                <Link
                  to="/prototype/alojamiento"
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-all border border-neutral-200"
                >
                  <Home size={18} />
                  <span>Alojamiento disponible</span>
                </Link>
              )}
              {activeCentro.hasEvents && (
                <Link
                  to="/prototype/eventos"
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-all border border-neutral-200"
                >
                  <Calendar size={18} />
                  <span>Ver eventos en este centro</span>
                </Link>
              )}
              <Link
                to="/prototype/centros"
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-all border border-neutral-200"
              >
                <MapPin size={18} />
                <span>Ver todos los centros</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STICKY */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg md:hidden z-50">
        <button className="w-full bg-black text-white py-3 rounded-full font-bold">
          Reservar ahora
        </button>
      </div>
    </div>
  );
}
