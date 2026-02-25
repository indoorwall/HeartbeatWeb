import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { QUE_ES_HEARTBEAT_DATA, layerIcons } from '../../data/que_es_heartbeat_data';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

export default function ProtoQueEs() {
  const { hero, essence, whatIsNot, layers, technology, developmentTypes, replication, examples, finalCta } = QUE_ES_HEARTBEAT_DATA;

  return (
    <div className="bg-white">

      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt="Heartbeat Territory"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              {hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl font-medium text-neutral-200 mb-12 max-w-3xl mx-auto">
              {hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link
              to={hero.ctaLink}
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-100 transition-colors"
            >
              {hero.cta} <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-black text-white p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                {essence.text}
              </h2>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-center">
              Qué NO es
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whatIsNot.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl">
                  <div className="w-6 h-6 border-2 border-neutral-300 rounded-full flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-neutral-700">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-20 text-center">
              Cómo funciona el modelo
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
                  <layers.nucleus.icon size={40} strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  {layers.nucleus.title}
                </p>
                <p className="text-xl font-bold">{layers.nucleus.item}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                  {layers.verticals.title}
                </p>
                <div className="space-y-4">
                  {layers.verticals.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 justify-center">
                      <item.icon size={20} strokeWidth={1.5} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6">
                  <layers.transversal.icon size={40} strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  {layers.transversal.title}
                </p>
                <p className="text-xl font-bold mb-4">{layers.transversal.item}</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-neutral-300 text-center">
                {layers.transversal.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                  {technology.title}
                </h2>
                <div className="space-y-4">
                  {technology.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-neutral-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <img
                  src={technology.image}
                  alt="Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center">
              Tipos de desarrollo
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {developmentTypes.map((type, idx) => (
              <BreathingCard key={type.id} to={type.link} delay={idx * 0.1}>
                <div className="bg-white p-10 rounded-3xl border border-neutral-200 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.layers.map((layer, lidx) => {
                        const Icon = layerIcons[layer];
                        return (
                          <span key={lidx} className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium">
                            {Icon && <Icon size={14} />}
                            {layer}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más <ArrowRight size={16} />
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-center">
              {replication.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-neutral-50 p-10 md:p-12 rounded-3xl">
              <div className="space-y-6">
                {replication.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-neutral-700 pt-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center">
              Ejemplos reales
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, idx) => (
              <BreathingCard key={example.id} to={example.link} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 h-full flex flex-col">
                  <div className="relative h-64">
                    <img
                      src={example.image}
                      alt={example.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold">
                      {example.type}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{example.name}</h3>
                      <p className="text-neutral-500 mb-6">{example.location}</p>
                      <div className="flex flex-wrap gap-2">
                        {example.layers.map((layer, lidx) => {
                          const Icon = layerIcons[layer];
                          return (
                            <span key={lidx} className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium">
                              {Icon && <Icon size={14} />}
                              {layer}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Explorar <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </BreathingCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Zap size={64} className="mx-auto mb-8 opacity-80" strokeWidth={1} />
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12">
              {finalCta.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              to={finalCta.link}
              className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-100 transition-colors"
            >
              {finalCta.cta} <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
