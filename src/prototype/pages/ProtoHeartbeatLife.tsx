import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Sparkles, ArrowRight } from 'lucide-react';
import InfoCards from '../../components/InfoCards';

export default function ProtoHeartbeatLife() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            Heartbeat Life
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto">
            Territorios diseñados para vivir, moverte y regenerar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/prototype/heartbeat-life/reserve"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-lg"
            >
              Explorar Life Reserve
            </Link>
            <Link
              to="/prototype/heartbeat-life/resort"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Explorar Life Resort
            </Link>
          </div>
        </div>
      </section>

      {/* QUÉ ES HEARTBEAT LIFE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6 text-center">
            Qué es Heartbeat Life
          </h2>
          <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
            <p>
              Heartbeat Life es la dimensión territorial de Heartbeat. No es solo un
              centro deportivo ni un resort aislado: es un modelo de desarrollo
              completo donde centros, alojamiento, naturaleza y comunidad están
              integrados en un mismo territorio.
            </p>
            <p>
              Cada proyecto Life combina arquitectura responsable, espacios
              regenerados, instalaciones deportivas y comunidad activa. Todo diseñado
              para que vivir, moverte y disfrutar del entorno formen parte de la misma
              experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* LAS DOS EXPRESIONES DE LIFE */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            Las dos expresiones de Life
          </h2>
          <p className="text-center text-neutral-600 mb-12 text-lg max-w-3xl mx-auto">
            Dos formas de desarrollar territorios dentro del ecosistema Heartbeat.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LIFE RESERVE */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div
                className="h-80 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center">
                      <Mountain size={28} />
                    </div>
                    <h3 className="text-3xl font-black text-white">Life Reserve</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                  Desarrollos en entornos naturales donde el territorio es el eje
                  principal. Regeneración, arquitectura integrada y comunidad local.
                </p>
                <Link
                  to="/prototype/heartbeat-life/reserve"
                  className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  Ver Life Reserve
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* LIFE RESORT */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div
                className="h-80 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center">
                      <Sparkles size={28} />
                    </div>
                    <h3 className="text-3xl font-black text-white">Life Resort</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                  Proyectos integrados con vocación de experiencia, deporte y
                  alojamiento. Diseñados para estancias temporales completas.
                </p>
                <Link
                  to="/prototype/heartbeat-life/resort"
                  className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  Ver Life Resort
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          <InfoCards />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Territorios donde vivir es parte del ecosistema
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Cada proyecto Life está conectado con centros deportivos, alojamiento,
            restauración y comunidad. Explora las otras dimensiones de Heartbeat.
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
