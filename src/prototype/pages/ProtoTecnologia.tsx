import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import {
  TECH_SYSTEM_CORE,
  TECH_HOW_IT_WORKS,
  TECH_APPLICATIONS,
  TECH_PRINCIPLES
} from '../../data/technology_data';
import FadeIn from '../../components/animations/FadeIn';
import BreathingCard from '../../components/animations/BreathingCard';

export default function ProtoTecnologia() {
  return (
    <div className="bg-white">

      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            alt="Technology"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-gradient-to-r from-brand-start to-brand-end rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest">Sistema inteligente</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              Tecnología con propósito
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              {TECH_SYSTEM_CORE.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-2xl md:text-3xl font-bold text-brand-end">
              {TECH_SYSTEM_CORE.purpose}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-20 text-center">
              Cómo funciona el sistema
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_HOW_IT_WORKS.map((step) => (
              <FadeIn key={step.step} delay={step.step * 0.15}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl z-10">
                    {step.step}
                  </div>
                  <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 min-h-[340px] flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <step.icon size={32} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed flex-1">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-center">
              Aplicaciones del sistema
            </h2>
            <p className="text-xl text-neutral-400 text-center mb-20 max-w-3xl mx-auto">
              La tecnología se materializa en todos los espacios físicos
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-6">{TECH_APPLICATIONS.centros.title}</h3>
                <ul className="space-y-4">
                  {TECH_APPLICATIONS.centros.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={24} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-6">{TECH_APPLICATIONS.alojamiento.title}</h3>
                <ul className="space-y-4">
                  {TECH_APPLICATIONS.alojamiento.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={24} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-6">{TECH_APPLICATIONS.alimentacion.title}</h3>
                <ul className="space-y-4">
                  {TECH_APPLICATIONS.alimentacion.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={24} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-6">{TECH_APPLICATIONS.home.title}</h3>
                <ul className="space-y-4">
                  {TECH_APPLICATIONS.home.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={24} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-20 text-center">
              Principios tecnológicos
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {TECH_PRINCIPLES.map((principle, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-neutral-50 p-10 rounded-3xl border border-neutral-200">
                  <principle.icon size={40} className="mb-6 text-brand-start" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">{principle.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12">
              Tecnología invisible, inteligente y humana
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              to="/prototype/que-es-heartbeat"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-start to-brand-end text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Conocer el modelo completo <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
