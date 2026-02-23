import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, UtensilsCrossed, ShoppingBasket, Check, Users, Leaf } from 'lucide-react';
import { FOOD_SPACES } from '../../data/alimentacion_data';

export default function ProtoAlimentacionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const space = FOOD_SPACES.find((s) => s.slug === slug);

  if (!space) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Espacio no encontrado</h1>
          <Link
            to="/prototype/alimentacion"
            className="text-black underline hover:no-underline"
          >
            Volver a Alimentación
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER CON IMAGEN */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${space.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/prototype/alimentacion"
              className="inline-flex items-center gap-2 text-white hover:underline mb-4"
            >
              <ArrowLeft size={16} />
              Volver a Alimentación
            </Link>

            <div className="flex items-center gap-3 mb-4">
              {space.type === 'Restaurante' ? (
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                  <UtensilsCrossed size={24} />
                </div>
              ) : (
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                  <ShoppingBasket size={24} />
                </div>
              )}
              <span className="text-white/80 text-sm font-bold uppercase">
                {space.type}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              {space.name}
            </h1>

            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">{space.location}</span>
              </div>
              {space.km0Focus && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                  <Leaf size={12} />
                  KM0
                </span>
              )}
              {space.seasonalMenu && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
                  Carta de temporada
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-50 rounded-xl p-8 mb-8">
            <p className="text-xs font-bold text-neutral-500 mb-2 uppercase">
              Integrado en:
            </p>
            <h3 className="text-2xl font-bold mb-4">{space.project}</h3>
            {space.projectSlug && (
              <Link
                to={`/prototype/invertir/${space.projectSlug}`}
                className="inline-block text-sm font-bold text-black underline hover:no-underline"
              >
                Ver proyecto completo →
              </Link>
            )}
          </div>

          <h2 className="text-3xl font-black mb-6">Concepto</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            {space.description}
          </p>

          {space.cuisineType && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Tipo de cocina</h3>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-bold bg-black text-white">
                {space.cuisineType}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Características</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {space.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white rounded-lg p-4"
              >
                <Check size={20} className="text-green-600" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTORES LOCALES */}
      {space.localProducers && space.localProducers.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users size={28} />
              <h2 className="text-3xl font-black">Productores locales</h2>
            </div>
            <p className="text-neutral-600 mb-6">
              Trabajamos en colaboración directa con estos productores de la región:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {space.localProducers.map((producer, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 rounded-lg p-4 border-l-4 border-green-500"
                >
                  <p className="font-bold">{producer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTEGRACIÓN CON EL ECOSISTEMA */}
      <section className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">Integración con el ecosistema</h2>
          <p className="text-neutral-300 mb-8">
            Este {space.type.toLowerCase()} está integrado en el proyecto {space.project} y
            conectado con:
          </p>
          <div className="space-y-3">
            {space.integratedWith.map((integration, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
              >
                <Check size={20} className="text-green-400" />
                <span className="font-medium">{integration}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-300 mb-6">
              Explora otras partes del ecosistema:
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
                to="/prototype/eventos"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">
            {space.type === 'Restaurante' ? 'Reservar mesa' : 'Visitar supermercado'}
          </h2>
          <p className="text-neutral-600 mb-8">
            {space.type === 'Restaurante'
              ? 'Reserva tu mesa y disfruta de producto local de temporada.'
              : 'Visítanos y descubre nuestra selección de producto local y sostenible.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all">
              {space.type === 'Restaurante' ? 'Reservar mesa' : 'Ver horarios'}
            </button>
            <Link
              to="/prototype/alimentacion"
              className="bg-neutral-100 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-all"
            >
              Ver más espacios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
