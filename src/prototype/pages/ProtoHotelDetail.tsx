import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Users,
  Maximize2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { getHotelBySlug, getDestinationBySlug } from '../../data/alojamiento_data';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

export default function ProtoHotelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const hotel = slug ? getHotelBySlug(slug) : undefined;
  const destination = hotel
    ? getDestinationBySlug(hotel.destinationSlug)
    : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  if (!hotel || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Hotel no encontrado</h1>
          <Link
            to="/prototype/alojamiento/hoteles"
            className="text-black underline underline-offset-4"
          >
            Volver a hoteles
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
    setCurrentImageIndex((prev) => (prev + 1) % hotel.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + hotel.gallery.length) % hotel.gallery.length
    );
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="relative h-[65vh] min-h-[550px] bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex items-end px-6 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <FadeIn>
              <div className="mb-4">
                <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  Dentro de Heartbeat {hotel.destinationName}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
                {hotel.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2 text-xl text-neutral-300 mb-8">
                <MapPin size={20} />
                <span>{destination.location}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-2xl font-medium text-neutral-200 mb-10 max-w-3xl">
                {hotel.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#disponibilidad"
                  className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors text-center"
                >
                  Ver disponibilidad
                </a>
                <Link
                  to={destination.relatedProjectUrl || '#'}
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
                >
                  Explorar proyecto
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
              Galería
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hotel.gallery.map((item, idx) => (
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

      {lightboxOpen && (
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
              src={hotel.gallery[currentImageIndex].image}
              alt={hotel.gallery[currentImageIndex].title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-medium">
              {hotel.gallery[currentImageIndex].title}
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

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              El concepto
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-neutral-500">
                  Arquitectura
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {hotel.concept.architecture}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-neutral-500">
                  Sostenibilidad
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {hotel.concept.sustainability}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-neutral-500">
                  Integración
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {hotel.concept.integration}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-neutral-500">
                  Deporte
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {hotel.concept.sport}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Tipos de habitación
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {hotel.roomTypes.map((room, idx) => (
              <BreathingCard key={room.id} delay={idx * 0.1}>
                <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200 h-full flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">{room.name}</h3>

                    <div className="flex items-center gap-6 mb-6 text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Users size={18} />
                        <span className="text-sm font-medium">
                          {room.capacity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize2 size={18} />
                        <span className="text-sm font-medium">{room.size}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
                      {room.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-black mt-0.5 shrink-0" />
                          <span className="text-sm text-neutral-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-neutral-200 pt-6">
                      <p className="text-sm text-neutral-500 mb-2">Desde</p>
                      <p className="text-3xl font-black mb-4">
                        {room.priceFrom}
                        <span className="text-lg text-neutral-500 font-normal">
                          /noche
                        </span>
                      </p>
                      <a
                        href="#disponibilidad"
                        className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors block text-center"
                      >
                        Ver disponibilidad
                      </a>
                    </div>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        </div>
      </section>

      <section id="disponibilidad" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
              Consulta disponibilidad
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              Selecciona tus fechas y número de huéspedes para ver opciones.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl p-10 border-2 border-neutral-200 shadow-xl">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                      size={20}
                    />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-xl font-medium focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                      size={20}
                    />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-xl font-medium focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Huéspedes
                  </label>
                  <div className="relative">
                    <Users
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                      size={20}
                    />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-xl font-medium focus:border-black focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'persona' : 'personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <Link
                to="/prototype/reservar"
                className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3 text-sm"
              >
                Reservar ahora
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Servicios incluidos
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {hotel.includedServices.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link
                  to={service.link}
                  className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-black transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:underline">
                      {service.name}
                    </h3>
                    <ArrowRight
                      className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all shrink-0"
                      size={20}
                    />
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
              Forma parte de Heartbeat {hotel.destinationName}
            </h2>
            <p className="text-xl text-neutral-400 text-center mb-12">
              El hotel está integrado en un ecosistema mayor donde deporte,
              alimentación y comunidad conviven.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {destination.relatedProjectUrl && (
                <Link
                  to={destination.relatedProjectUrl}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                  Ver centro deportivo
                </Link>
              )}
              <Link
                to="/prototype/alimentacion"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Ver restaurantes
              </Link>
              <Link
                to="/prototype/agenda"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Ver eventos
              </Link>
              <Link
                to="/prototype/heartbeat-life"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Ver proyecto completo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Preguntas frecuentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {hotel.faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-lg font-bold pr-4">{faq.q}</span>
                    <ChevronDown
                      size={24}
                      className={`shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-6">
                      <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Reserva tu estancia
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Vive la experiencia Heartbeat {hotel.destinationName}. Deporte,
              naturaleza y comunidad en un solo lugar.
            </p>
            <a
              href="#disponibilidad"
              className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors"
            >
              Ver disponibilidad
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
