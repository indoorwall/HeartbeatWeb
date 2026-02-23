import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Download,
  Mail,
  TrendingUp,
} from 'lucide-react';
import { getProjectBySlug } from '../../data/invertir_data';

export default function ProtoInvertirDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link
            to="/prototype/invertir"
            className="text-black underline hover:no-underline"
          >
            Volver a Invertir
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En estudio':
        return 'bg-blue-100 text-blue-800';
      case 'En búsqueda de inversión':
        return 'bg-yellow-100 text-yellow-800';
      case 'En ejecución':
        return 'bg-green-100 text-green-800';
      case 'Cerrado':
        return 'bg-neutral-100 text-neutral-600';
      default:
        return 'bg-neutral-100 text-neutral-600';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="bg-neutral-900 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/prototype/invertir"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a proyectos
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                {project.name}
              </h1>
              <div className="flex items-center gap-2 text-lg text-neutral-300 mb-3">
                <MapPin size={20} />
                <span>{project.location}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </span>
              <span className="text-sm font-medium text-neutral-300 bg-neutral-800 px-3 py-1 rounded text-center">
                {project.type}
              </span>
            </div>
          </div>

          <p className="text-xl text-neutral-200 mb-6">{project.summary}</p>

          <div className="grid md:grid-cols-3 gap-6 bg-neutral-800 rounded-xl p-6">
            <div>
              <div className="text-sm text-neutral-400 mb-1">Monto total</div>
              <div className="text-2xl font-bold">{project.totalAmount}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-400 mb-1">Ticket mínimo</div>
              <div className="text-2xl font-bold">{project.minTicket}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-400 mb-1">Fase actual</div>
              <div className="text-lg font-bold">{project.currentPhase}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* COLUMNA PRINCIPAL */}
            <div className="md:col-span-2 space-y-12">
              {/* QUÉ ES */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Qué es</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* FASES */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Fases del proyecto</h2>
                <div className="space-y-4">
                  {project.phases.map((phase, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start bg-neutral-50 rounded-lg p-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {phase.completed ? (
                          <CheckCircle2 size={24} className="text-green-600" />
                        ) : (
                          <Circle size={24} className="text-neutral-300" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{phase.name}</h3>
                        <p className="text-sm text-neutral-600">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMPACTO */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Impacto esperado</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="text-3xl font-black mb-2 text-blue-900">
                      {project.impact.employment.split(' ')[0]}
                    </div>
                    <p className="text-sm font-medium text-blue-800">
                      {project.impact.employment.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="text-3xl font-black mb-2 text-green-900">
                      {project.impact.rehabilitation.split(' ')[0]}
                    </div>
                    <p className="text-sm font-medium text-green-800">
                      {project.impact.rehabilitation.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <div className="text-lg font-black mb-2 text-yellow-900">
                      {project.impact.community.split(' ').slice(0, 2).join(' ')}
                    </div>
                    <p className="text-sm font-medium text-yellow-800">
                      {project.impact.community.split(' ').slice(2).join(' ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* ENLACE RELACIONADO */}
              {project.relatedLink && (
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-bold mb-3">Explora más</h3>
                  <Link
                    to={project.relatedLink.url}
                    className="inline-flex items-center gap-2 text-black hover:underline font-medium"
                  >
                    {project.relatedLink.label}
                    <TrendingUp size={16} />
                  </Link>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* ESTADO ACTUAL */}
              <div className="bg-neutral-50 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Estado actual</h3>
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-3 ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </div>
                <p className="text-sm text-neutral-600 mb-6">
                  {project.currentPhase}
                </p>

                <h3 className="font-bold text-lg mb-4">Documentación</h3>
                <div className="space-y-3 mb-6">
                  <button className="w-full flex items-center justify-center gap-2 bg-neutral-200 text-neutral-500 py-3 rounded-lg text-sm font-medium cursor-not-allowed">
                    <Download size={16} />
                    Dossier ejecutivo
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg text-sm font-bold hover:bg-neutral-800 transition-all">
                    <Mail size={16} />
                    Solicitar dossier completo
                  </button>
                </div>

                <h3 className="font-bold text-lg mb-4">Contacto</h3>
                <button className="w-full bg-neutral-900 text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">
                  Contactar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ¿Interesado en este proyecto?
          </h2>
          <p className="text-xl mb-8 text-neutral-300">
            Nuestro equipo te proporcionará toda la información detallada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all">
              Solicitar información
            </button>
            <Link
              to="/prototype/invertir"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-center"
            >
              Ver otros proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
