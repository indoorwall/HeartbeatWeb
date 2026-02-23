import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Clock, Users, TrendingUp, Calendar } from 'lucide-react';
import { getSportDetail } from '../../data/sport_detail_data';
import { getCentrosBySport, CENTROS_ACTIVOS } from '../../data/centros_data';
import FadeIn from '../../components/animations/FadeIn';

export default function ProtoSportDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedCentro, setSelectedCentro] = useState<string>('all');

  const sport = getSportDetail(slug || '');
  const centros = getCentrosBySport(slug || '');

  if (!sport) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Deporte no encontrado</h1>
          <Link to="/prototype/deportes" className="text-brand-start underline">
            Volver a deportes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1️⃣ HERO */}
      <section className="relative h-[85vh] min-h-[700px] bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <img
            src={sport.heroImage}
            alt={sport.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                {sport.environment}
              </span>
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                {sport.level}
              </span>
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                Intensidad {sport.intensity}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-6 leading-none">
              {sport.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl text-neutral-300 max-w-3xl mb-12 font-medium leading-relaxed">
              {sport.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#horarios"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors text-sm"
              >
                Ver disponibilidad
              </a>
              <a
                href="#centros"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-colors text-sm"
              >
                Ver centros
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2️⃣ QUÉ ES EN HEARTBEAT */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
              Qué es en Heartbeat
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              {sport.name} a nuestra manera
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-neutral-700 leading-relaxed mb-12">
              {sport.whatIsIt.approach}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.3}>
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-brand-start" />
                  En qué se diferencia
                </h4>
                <ul className="space-y-3">
                  {sport.whatIsIt.differences.map((diff, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-600">
                      <CheckCircle2 size={20} className="text-green-600 mt-0.5 shrink-0" />
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <h4 className="font-bold text-lg mb-4">Características</h4>
                <ul className="space-y-3 text-sm">
                  {sport.whatIsIt.features.map((feature, i) => (
                    <li key={i} className="text-neutral-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3️⃣ DÓNDE PRACTICARLO */}
      <section id="centros" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
                  Dónde practicarlo
                </h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                  Centros disponibles
                </h3>
              </div>
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">
                {centros.length} {centros.length === 1 ? 'Centro' : 'Centros'}
              </span>
            </div>
          </FadeIn>

          {centros.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {centros.map((centro, idx) => (
                <FadeIn key={centro.id} delay={idx * 0.1}>
                  <div className="group bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden hover:border-black transition-all hover:shadow-2xl">
                    <div className="aspect-video relative bg-neutral-100">
                      <img
                        src={centro.image}
                        alt={centro.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {centro.hasAccommodation && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest">
                          Alojamiento
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500">
                        <MapPin size={16} />
                        {centro.city}
                      </div>

                      <h4 className="text-2xl font-bold mb-3 group-hover:text-brand-start transition-colors">
                        {centro.name}
                      </h4>

                      <p className="text-neutral-600 mb-6 leading-relaxed">
                        {centro.description}
                      </p>

                      <div className="flex gap-3">
                        <Link
                          to={`/prototype/centros/${centro.slug}`}
                          className="flex-1 text-center bg-black text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-colors"
                        >
                          Ver centro
                        </Link>
                        <button className="flex-1 text-center border-2 border-black text-black px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors">
                          Reservar sesión
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="bg-neutral-50 p-16 rounded-3xl text-center border border-dashed border-neutral-300">
              <p className="text-neutral-500 text-xl">
                Próximamente en más centros Heartbeat
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4️⃣ HORARIOS Y SESIONES */}
      <section id="horarios" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
              Horarios y sesiones
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Encuentra tu momento
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={24} className="text-brand-start" />
                <p className="text-neutral-600">
                  Los horarios varían según el centro. Selecciona un centro arriba para ver su
                  disponibilidad específica y reservar.
                </p>
              </div>

              <a
                href="#centros"
                className="inline-flex items-center gap-2 text-brand-start font-bold hover:underline"
              >
                Ver centros y horarios <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5️⃣ PRECIOS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
                Precios
              </h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                Elige tu plan
              </h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {sport.prices.map((plan, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className={`relative p-8 rounded-3xl border-2 ${
                    plan.recommended
                      ? 'border-black bg-black text-white transform scale-105'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-start text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Recomendado
                    </div>
                  )}

                  <h4 className="font-bold text-lg mb-2">{plan.name}</h4>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className={plan.recommended ? 'text-neutral-400' : 'text-neutral-500'}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm ${
                          plan.recommended ? 'text-neutral-300' : 'text-neutral-600'
                        }`}
                      >
                        <CheckCircle2
                          size={18}
                          className={`mt-0.5 shrink-0 ${
                            plan.recommended ? 'text-brand-start' : 'text-green-600'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors ${
                      plan.recommended
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    Seleccionar
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ CÓMO SE VIVE */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
                Cómo se vive
              </h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                La experiencia completa
              </h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-800">
                  <img
                    src={sport.community.image}
                    alt={sport.community.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4">{sport.community.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{sport.community.text}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-800">
                  <img
                    src={sport.technology.image}
                    alt={sport.technology.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4">{sport.technology.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{sport.technology.text}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-800">
                  <img
                    src={sport.events.image}
                    alt={sport.events.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4">{sport.events.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{sport.events.text}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7️⃣ EVENTOS RELACIONADOS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
                  Eventos
                </h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                  Próximos eventos de {sport.name}
                </h3>
              </div>
              <Link
                to="/prototype/agenda"
                className="hidden md:flex items-center gap-2 text-brand-start font-bold hover:underline"
              >
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-neutral-50 p-16 rounded-3xl text-center border border-dashed border-neutral-300">
              <p className="text-neutral-500 text-xl mb-4">
                Próximamente eventos y competiciones
              </p>
              <Link
                to="/prototype/agenda"
                className="inline-flex items-center gap-2 text-brand-start font-bold hover:underline"
              >
                Ver agenda completa <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8️⃣ INTEGRACIÓN CON EL ECOSISTEMA */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4">
              Ecosistema Heartbeat
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Este deporte forma parte de...
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4">Centros donde se practica</h4>
                  <ul className="space-y-3">
                    {centros.map((centro) => (
                      <li key={centro.id}>
                        <Link
                          to={`/prototype/centros/${centro.slug}`}
                          className="flex items-center gap-2 text-neutral-600 hover:text-black hover:underline"
                        >
                          <MapPin size={16} />
                          {centro.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4">Servicios relacionados</h4>
                  <ul className="space-y-3">
                    {sport.ecosystem.relatedServices.map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-600">
                        <CheckCircle2 size={16} className="text-green-600" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9️⃣ FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-start mb-4 text-center">
              Preguntas frecuentes
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-16 tracking-tight text-center">
              Todo lo que necesitas saber
            </h3>
          </FadeIn>

          <div className="space-y-6">
            {sport.faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white p-8 rounded-2xl border border-neutral-200">
                  <h4 className="font-bold text-xl mb-3">{faq.q}</h4>
                  <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔟 CTA FINAL */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Empieza hoy
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
              Reserva tu primera sesión de {sport.name} en cualquiera de nuestros centros.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <a
              href="#centros"
              className="inline-block bg-white text-black px-12 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Ver disponibilidad
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
