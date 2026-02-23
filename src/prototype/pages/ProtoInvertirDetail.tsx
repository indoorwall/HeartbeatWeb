import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Mail,
  TrendingUp,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  UtensilsCrossed,
  Layers,
} from 'lucide-react';
import { getProjectBySlug } from '../../data/invertir_data';
import FadeIn from '../../components/animations/FadeIn';

export default function ProtoInvertirDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Proyecto no encontrado</h1>
          <Link
            to="/prototype/invertir"
            className="text-black underline underline-offset-4"
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
        return 'bg-blue-500 text-white';
      case 'En búsqueda de inversión':
        return 'bg-amber-500 text-white';
      case 'En ejecución':
        return 'bg-green-500 text-white';
      case 'Cerrado':
        return 'bg-neutral-400 text-white';
      default:
        return 'bg-neutral-400 text-white';
    }
  };

  const openLightbox = (index: number) => {
    if (project.gallery.length > 0) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  };

  const completedPhases = project.phases.filter((p) => p.completed).length;
  const progressPercentage = (completedPhases / project.phases.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] min-h-[600px] bg-black text-white">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
        </div>

        <div className="relative z-10 h-full flex items-end px-6 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <Link
              to="/prototype/invertir"
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Volver a proyectos
            </Link>

            <FadeIn>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h1 className="text-5xl md:text-7xl font-black">{project.name}</h1>
                <span
                  className={`px-6 py-3 rounded-full text-sm font-black uppercase tracking-wider ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-xl text-neutral-300 mb-6">
                <MapPin size={20} />
                <span>{project.location}</span>
                <span className="mx-2">•</span>
                <span>{project.type}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-2xl font-medium text-neutral-200 mb-8 max-w-4xl">
                {project.summary}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="py-16 px-6 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
                Galería del proyecto
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 0.05}>
                  <button
                    onClick={() => openLightbox(idx)}
                    className="aspect-video relative overflow-hidden rounded-2xl group cursor-pointer"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <Maximize2
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={32}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-xs font-bold">{item.title}</p>
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxOpen && project.gallery.length > 0 && (
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
              src={project.gallery[currentImageIndex].url}
              alt={project.gallery[currentImageIndex].title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-medium">
              {project.gallery[currentImageIndex].title}
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

      {project.masterplanImage && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
                Masterplan
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Visión general del proyecto y distribución de fases
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-3xl overflow-hidden border-4 border-black shadow-2xl">
                <img
                  src={project.masterplanImage}
                  alt="Masterplan del proyecto"
                  className="w-full"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Métricas del proyecto
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
                <div className="text-4xl font-black mb-2">{project.totalAmount}</div>
                <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                  Monto total
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
                <div className="text-4xl font-black mb-2">{project.metrics.surface}</div>
                <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                  Superficie
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
                <div className="text-4xl font-black mb-2">{project.metrics.phases}</div>
                <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                  Fases
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
                <div className="text-4xl font-black mb-2">
                  {project.metrics.estimatedImpact}
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                  Impacto
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
              Estado actual del proyecto
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              {project.currentPhase}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-8">
              <div className="flex justify-between text-sm font-bold mb-2">
                <span>Progreso</span>
                <span>
                  {completedPhases} / {project.phases.length} fases
                </span>
              </div>
              <div className="h-4 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {project.phases.map((phase, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className={`flex gap-4 items-start rounded-2xl p-6 border-2 ${
                    phase.completed
                      ? 'bg-green-50 border-green-200'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    {phase.completed ? (
                      <CheckCircle2 size={28} className="text-green-600" />
                    ) : (
                      <Circle size={28} className="text-neutral-300" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black mb-1 text-lg">{phase.name}</h3>
                    <p className="text-sm text-neutral-600">{phase.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Impacto esperado
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-black mb-3 text-blue-400">
                  {project.impact.employment.split(' ')[0]}
                </div>
                <p className="text-lg font-bold">
                  {project.impact.employment.split(' ').slice(1).join(' ')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-black mb-3 text-green-400">
                  {project.impact.rehabilitation.split(' ').slice(0, 2).join(' ')}
                </div>
                <p className="text-lg font-bold">
                  {project.impact.rehabilitation.split(' ').slice(2).join(' ')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-2xl font-black mb-3 text-amber-400">
                  {project.impact.community.split(' ').slice(0, 2).join(' ')}
                </div>
                <p className="text-lg font-bold">
                  {project.impact.community.split(' ').slice(2).join(' ')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
              Integración del ecosistema
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Este proyecto incluye
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-6">
            {project.includes.centros && (
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold">
                  <Building2 size={24} />
                  <span>Centros deportivos</span>
                </div>
              </FadeIn>
            )}
            {project.includes.alojamiento && (
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold">
                  <Home size={24} />
                  <span>Alojamiento</span>
                </div>
              </FadeIn>
            )}
            {project.includes.restaurantes && (
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold">
                  <UtensilsCrossed size={24} />
                  <span>Restaurantes</span>
                </div>
              </FadeIn>
            )}
            {project.includes.urban && (
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold">
                  <Layers size={24} />
                  <span>Espacios Urban</span>
                </div>
              </FadeIn>
            )}
          </div>

          {project.relatedLink && (
            <FadeIn delay={0.5}>
              <div className="text-center mt-8">
                <Link
                  to={project.relatedLink.url}
                  className="inline-flex items-center gap-2 text-black hover:underline font-bold"
                >
                  {project.relatedLink.label}
                  <TrendingUp size={16} />
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Interesado en este proyecto
            </h2>
            <p className="text-xl mb-10 text-neutral-300">
              Nuestro equipo te proporcionará toda la información detallada y el dossier
              completo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <Mail size={20} />
                Solicitar dossier
              </button>
              <Link
                to="/prototype/invertir"
                className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Ver otros proyectos
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
