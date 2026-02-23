import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Users, Heart, BookOpen } from 'lucide-react';
import { SOCIAL_ACCOMMODATIONS } from '../../data/alojamiento_data';

export default function ProtoAlojamientoSocial() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/prototype/alojamiento"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Alojamiento
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Heartbeat Social
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Alojamiento con objetivo social y comunitario. Espacios diseñados para
            formación, integración y desarrollo dentro de proyectos Heartbeat.
          </p>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Qué es Heartbeat Social</h2>
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
            No es un producto turístico. Heartbeat Social es alojamiento integrado en
            proyectos con propósito comunitario: formación profesional, programas de
            integración y desarrollo de comunidades locales.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Cada espacio está diseñado para facilitar el aprendizaje, la convivencia y
            el desarrollo de habilidades dentro del ecosistema Heartbeat.
          </p>
        </div>
      </section>

      {/* OBJETIVOS CLAVE */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Objetivos</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Formación</h3>
              <p className="text-neutral-700">
                Programas de capacitación y formación profesional integrados con el
                proyecto.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 text-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integración</h3>
              <p className="text-neutral-700">
                Espacios diseñados para facilitar la convivencia y el desarrollo
                comunitario.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Desarrollo local</h3>
              <p className="text-neutral-700">
                Conexión con la comunidad local y generación de impacto social
                medible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIONES DISPONIBLES */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Ubicaciones disponibles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {SOCIAL_ACCOMMODATIONS.map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${accommodation.image})`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{accommodation.name}</h3>
                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                    <MapPin size={14} />
                    <span>{accommodation.destinationName}</span>
                    <span className="text-neutral-400">•</span>
                    <span>Capacidad: {accommodation.capacity} personas</span>
                  </div>

                  <p className="text-neutral-700 mb-4">
                    {accommodation.description}
                  </p>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-bold text-green-900 mb-1">
                      Propósito:
                    </p>
                    <p className="text-sm text-green-800">{accommodation.purpose}</p>
                  </div>

                  <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">
                    Solicitar información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA EL ACCESO */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Cómo funciona el acceso</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">1. Programas de formación</h3>
              <p className="text-neutral-700">
                El acceso está vinculado a programas de formación específicos dentro
                del proyecto Heartbeat correspondiente.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">
                2. Alianzas institucionales
              </h3>
              <p className="text-neutral-700">
                Colaboraciones con entidades educativas, organizaciones sociales y
                administraciones públicas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">
                3. Evaluación y seguimiento
              </h3>
              <p className="text-neutral-700">
                Proceso de evaluación para asegurar que el alojamiento cumple con los
                objetivos de desarrollo y formación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            ¿Tu organización quiere colaborar?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Trabajamos con entidades educativas, organizaciones sociales y
            administraciones para desarrollar programas con impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all">
              Solicitar información
            </button>
            <Link
              to="/prototype/alojamiento"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-center"
            >
              Ver otros tipos de alojamiento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
