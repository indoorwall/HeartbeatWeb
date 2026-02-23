import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp, Users, Calendar, ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';
import { SPORT_DETAILS } from '../../data/sport_detail_data';
import { SPORTS_DATA, LOCATIONS_DATA } from '../../data/sports_data';
import { AGENDA_DATA } from '../../data/agenda_data';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

export default function ProtoSportDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sportDetail = slug ? SPORT_DETAILS[slug] : undefined;
  const sport = SPORTS_DATA.find(s => s.id === slug);

  const [selectedCentro, setSelectedCentro] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const availableCentros = useMemo(() => {
    if (!slug) return [];
    return LOCATIONS_DATA.filter(loc => loc.sports.includes(slug));
  }, [slug]);

  const relatedEvents = useMemo(() => {
    if (!sport) return [];
    return AGENDA_DATA.filter(event => event.sport === sport.name);
  }, [sport]);

  if (!sportDetail || !sport) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Deporte no encontrado</h1>
          <Link to="/prototype/deportes" className="text-black underline underline-offset-4">
            Volver a deportes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen">

      <section className="relative h-[70vh] min-h-[600px] bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sportDetail.heroImage}
            alt={sportDetail.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <FadeIn>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6">
                {sportDetail.name.toUpperCase()}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-2xl md:text-3xl font-medium text-neutral-300 mb-12">
                {sportDetail.tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#centros"
                  className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                >
                  Ver centros
                </a>
                <Link
                  to="/prototype/reservar"
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Ver disponibilidad
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-200">
              <TrendingUp size={32} className="mx-auto mb-3 text-black" />
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">Nivel</p>
              <p className="text-xl font-black">{sportDetail.level}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-200">
              <MapPin size={32} className="mx-auto mb-3 text-black" />
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">Entorno</p>
              <p className="text-xl font-black">{sportDetail.environment}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-neutral-200">
              <TrendingUp size={32} className="mx-auto mb-3 text-black" />
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">Intensidad</p>
              <p className="text-xl font-black">{sportDetail.intensity}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {sportDetail.name} en Heartbeat
          </h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl leading-relaxed text-neutral-700">
              {sportDetail.whatIsIt.approach}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-lg font-bold uppercase tracking-wider text-neutral-500 mb-4">
                Cómo lo trabajamos
              </h3>
              <ul className="space-y-3">
                {sportDetail.whatIsIt.differences.map((diff, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-black mt-1 shrink-0" />
                    <span className="text-neutral-700">{diff}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-lg font-bold uppercase tracking-wider text-neutral-500 mb-4">
                Características
              </h3>
              <ul className="space-y-3">
                {sportDetail.whatIsIt.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-black mt-1 shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="centros" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Dónde practicarlo</h2>
            <p className="text-xl text-neutral-600 mb-12">
              Centros Heartbeat donde puedes disfrutar de {sportDetail.name.toLowerCase()}.
            </p>
          </FadeIn>

          {availableCentros.length === 0 ? (
            <div className="text-center py-16 bg-neutral-50 rounded-3xl">
              <p className="text-neutral-500 text-lg">
                Próximamente disponible en nuevos centros.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableCentros.map((centro, idx) => (
                <BreathingCard
                  key={centro.id}
                  to={`/prototype/centros/${centro.id}`}
                  delay={idx * 0.1}
                >
                  <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 h-full flex flex-col group-hover:border-black transition-all">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={centro.image}
                        alt={centro.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                          {centro.environment || sportDetail.environment}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-2">{centro.name}</h3>
                      <div className="flex items-center gap-2 text-neutral-500 mb-4">
                        <MapPin size={16} />
                        <span className="text-sm font-medium">{centro.city}</span>
                      </div>
                      <p className="text-neutral-600 mb-6 flex-1">
                        {centro.subtitle}
                      </p>

                      <div className="flex flex-col gap-2">
                        <Link
                          to={`/prototype/centros/${centro.id}`}
                          className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors text-center"
                        >
                          Ver centro
                        </Link>
                        <Link
                          to="/prototype/reservar"
                          className="w-full bg-neutral-100 text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors text-center"
                        >
                          Reservar sesión
                        </Link>
                      </div>
                    </div>
                  </div>
                </BreathingCard>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Precios</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {sportDetail.prices.map((price, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className={`bg-white rounded-3xl p-8 border-2 ${
                    price.recommended
                      ? 'border-black shadow-xl scale-105'
                      : 'border-neutral-200'
                  } relative`}
                >
                  {price.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                        Recomendado
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-black mb-2">{price.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-black">{price.price}</span>
                    <span className="text-xl text-neutral-500 ml-2">{price.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {price.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-black mt-0.5 shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/prototype/reservar"
                    className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors block text-center ${
                      price.recommended
                        ? 'bg-black text-white hover:bg-neutral-800'
                        : 'bg-neutral-100 text-black hover:bg-neutral-200'
                    }`}
                  >
                    Reservar
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              Cómo se vive
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={sportDetail.community.image}
                    alt={sportDetail.community.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users size={24} className="text-black" />
                    <h3 className="text-2xl font-bold">{sportDetail.community.title}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {sportDetail.community.text}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={sportDetail.technology.image}
                    alt={sportDetail.technology.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp size={24} className="text-black" />
                    <h3 className="text-2xl font-bold">{sportDetail.technology.title}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {sportDetail.technology.text}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={sportDetail.events.image}
                    alt={sportDetail.events.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={24} className="text-black" />
                    <h3 className="text-2xl font-bold">{sportDetail.events.title}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {sportDetail.events.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {relatedEvents.length > 0 && (
        <section className="py-20 px-6 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-2">Eventos relacionados</h2>
                  <p className="text-xl text-neutral-600">
                    Próximas actividades de {sportDetail.name.toLowerCase()}
                  </p>
                </div>
                <Link
                  to="/prototype/agenda"
                  className="hidden md:flex items-center gap-2 text-black font-bold hover:gap-4 transition-all"
                >
                  Ver todos <ArrowRight size={20} />
                </Link>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedEvents.slice(0, 3).map((event, idx) => (
                <FadeIn key={event.id} delay={idx * 0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-black transition-all">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-3xl font-black">{event.date.split(' ')[0]}</p>
                          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                            {event.date.split(' ')[1]}
                          </p>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold leading-tight mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-neutral-500">
                            <Clock size={14} />
                            <span>{event.time}</span>
                            <span className="mx-2">•</span>
                            <MapPin size={14} />
                            <span>{event.city}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-600 text-sm mb-4">{event.description}</p>
                      {event.spotsLeft && (
                        <p className="text-xs font-bold text-neutral-500 mb-4">
                          {event.spotsLeft} plazas disponibles
                        </p>
                      )}
                      <Link
                        to="/prototype/agenda"
                        className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors block text-center"
                      >
                        Más info
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <Link
              to="/prototype/agenda"
              className="md:hidden mt-8 flex items-center justify-center gap-2 text-black font-bold"
            >
              Ver todos los eventos <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      )}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
              Integración en el ecosistema
            </h2>
            <p className="text-xl text-neutral-600 mb-12 text-center">
              {sportDetail.name} forma parte del universo Heartbeat completo.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-neutral-50 rounded-3xl p-10 border border-neutral-200">
              <h3 className="text-lg font-bold uppercase tracking-wider text-neutral-500 mb-6">
                Servicios relacionados
              </h3>
              <div className="flex flex-wrap gap-3">
                {sportDetail.ecosystem.relatedServices.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-white px-6 py-3 rounded-full text-sm font-bold border border-neutral-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              Preguntas frecuentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {sportDetail.faqs.map((faq, idx) => (
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">Empieza hoy</h2>
            <p className="text-xl text-neutral-400 mb-10">
              Reserva tu primera sesión de {sportDetail.name.toLowerCase()} y descubre por qué es diferente en Heartbeat.
            </p>
            <Link
              to="/prototype/reservar"
              className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors"
            >
              Ver disponibilidad
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
