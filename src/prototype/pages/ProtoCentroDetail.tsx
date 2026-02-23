import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Clock,
  Users,
  Calendar,
} from 'lucide-react';
import { getCentroBySlug } from '../../data/centros_data';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

export default function ProtoCentroDetail() {
  const { slug } = useParams<{ slug: string }>();
  const centro = slug ? getCentroBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSportService, setOpenSportService] = useState<string | null>(null);

  if (!centro || centro.status !== 'active') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Centro no encontrado</h1>
          <Link
            to="/prototype/centros"
            className="text-black underline underline-offset-4"
          >
            Volver a centros
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % centro.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + centro.gallery.length) % centro.gallery.length
    );
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="relative h-[65vh] min-h-[550px] bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={centro.image}
            alt={centro.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex items-end px-6 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
                {centro.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-xl text-neutral-300 mb-8">
                <MapPin size={20} />
                <span>{centro.city}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-2xl font-medium text-neutral-200 mb-10 max-w-3xl">
                {centro.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicios"
                  className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors text-center"
                >
                  Ver servicios
                </a>
                <a
                  href="#servicios"
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
                >
                  Reservar ahora
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {centro.gallery.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
                Galería
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {centro.gallery.map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 0.05}>
                  <button
                    onClick={() => openLightbox(idx)}
                    className="aspect-square relative overflow-hidden rounded-2xl group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <Maximize2
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={32}
                      />
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxOpen && centro.gallery.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors z-10"
          >
            <X size={40} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-neutral-300 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={centro.gallery[currentImageIndex].image}
              alt={centro.gallery[currentImageIndex].title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-medium">
              {centro.gallery[currentImageIndex].title}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-neutral-300 transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {centro.videoUrl && (
        <section className="py-20 px-6 bg-neutral-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
                Descubre el centro
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={centro.videoUrl}
                  title="Video del centro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Deportes disponibles
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {centro.sports.map((sport, idx) => (
              <BreathingCard key={sport.id} delay={idx * 0.1}>
                <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200 h-full flex flex-col">
                  <div className="p-8 flex-1">
                    <div className="text-5xl mb-4">{sport.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{sport.name}</h3>
                    <div className="flex flex-col gap-3">
                      <Link
                        to={`/prototype/deportes/${sport.id}`}
                        className="w-full bg-black text-white py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors text-center"
                      >
                        Ver deporte
                      </Link>
                      <a
                        href={`#servicio-${sport.id}`}
                        className="w-full bg-neutral-100 text-black py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors text-center border border-neutral-300"
                      >
                        Ver servicios
                      </a>
                    </div>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
              Servicios por deporte
            </h2>
            <p className="text-xl text-neutral-400 text-center mb-12">
              Elige tu deporte y reserva el servicio que necesitas
            </p>
          </FadeIn>

          <div className="space-y-4">
            {centro.services.map((sportService, idx) => (
              <FadeIn key={sportService.sportId} delay={idx * 0.1}>
                <div
                  id={`servicio-${sportService.sportId}`}
                  className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenSportService(
                        openSportService === sportService.sportId
                          ? null
                          : sportService.sportId
                      )
                    }
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-750 transition-colors"
                  >
                    <span className="text-2xl font-bold">
                      {sportService.sportName}
                    </span>
                    <ChevronDown
                      size={28}
                      className={`shrink-0 transition-transform ${
                        openSportService === sportService.sportId
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {openSportService === sportService.sportId && (
                    <div className="px-8 pb-8">
                      <div className="grid md:grid-cols-2 gap-4">
                        {sportService.services.map((service) => (
                          <div
                            key={service.id}
                            className="bg-neutral-900 rounded-xl p-6 border border-neutral-700"
                          >
                            <h4 className="text-xl font-bold mb-2">
                              {service.name}
                            </h4>
                            <p className="text-neutral-400 text-sm mb-4">
                              {service.description}
                            </p>

                            <div className="flex items-center gap-4 mb-4 text-sm text-neutral-300">
                              {service.duration && (
                                <div className="flex items-center gap-1">
                                  <Clock size={16} />
                                  <span>{service.duration}</span>
                                </div>
                              )}
                              {service.level && (
                                <div className="flex items-center gap-1">
                                  <Users size={16} />
                                  <span>{service.level}</span>
                                </div>
                              )}
                            </div>

                            <div className="border-t border-neutral-700 pt-4">
                              <p className="text-3xl font-black mb-4">
                                {service.price}
                              </p>
                              <Link
                                to={service.reserveUrl}
                                className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                              >
                                Reservar
                                <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {centro.schedules.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
                Horarios
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {centro.schedules.map((schedule, idx) => (
                <FadeIn key={schedule.sportId} delay={idx * 0.1}>
                  <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                    <h3 className="text-2xl font-bold mb-6">
                      {schedule.sportName}
                    </h3>

                    <div className="space-y-4">
                      {schedule.sessions.map((session, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-black transition-all"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-bold text-lg">
                                {session.day}
                              </p>
                              <p className="text-neutral-600 text-sm">
                                {session.time}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                {session.level}
                              </p>
                              <p className="text-sm text-neutral-600">
                                {session.type}
                              </p>
                            </div>
                          </div>

                          <Link
                            to={session.reserveUrl}
                            className="w-full bg-black text-white py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                          >
                            <Calendar size={14} />
                            Reservar esta sesión
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {centro.services.length > 0 && (
        <section className="py-20 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
                Resumen de precios
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {centro.services.map((sportService) => (
                <FadeIn key={sportService.sportId} delay={0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                    <h3 className="text-xl font-bold mb-4">
                      {sportService.sportName}
                    </h3>
                    <div className="space-y-3">
                      {sportService.services.slice(0, 3).map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-neutral-600">
                            {service.name}
                          </span>
                          <span className="font-bold">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {(centro.hasAccommodation || centro.hasEvents || centro.projectSlug) && (
        <section className="py-20 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
                Forma parte del ecosistema Heartbeat
              </h2>
              <p className="text-xl text-neutral-400 text-center mb-12">
                Este centro está integrado en un proyecto mayor
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                {centro.hasAccommodation && (
                  <Link
                    to="/prototype/alojamiento"
                    className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                  >
                    Alojamiento
                  </Link>
                )}
                <Link
                  to="/prototype/alimentacion"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
                >
                  Restaurantes
                </Link>
                {centro.hasEvents && (
                  <Link
                    to="/prototype/agenda"
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
                  >
                    Eventos
                  </Link>
                )}
                <Link
                  to="/prototype/heartbeat-life"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
                >
                  Heartbeat Life
                </Link>
                <Link
                  to="/prototype/invertir"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
                >
                  Invertir
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Empieza en este centro hoy
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Reserva un servicio y forma parte de la comunidad {centro.name}
            </p>
            <a
              href="#servicios"
              className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors"
            >
              Reservar servicio
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
