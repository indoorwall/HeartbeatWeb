import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, Filter, ArrowRight, Building2, Home, Hotel, Warehouse } from 'lucide-react';
import {
  INVESTMENT_PROJECTS,
  filterProjects,
  GLOBAL_IMPACT,
  type ProjectType,
  type ProjectStatus,
} from '../../data/invertir_data';
import FadeIn from '../../components/animations/FadeIn';

export default function ProtoInvertir() {
  const [selectedType, setSelectedType] = React.useState<ProjectType | ''>('');
  const [selectedStatus, setSelectedStatus] = React.useState<ProjectStatus | ''>('');
  const [locationFilter, setLocationFilter] = React.useState('');

  const filteredProjects = React.useMemo(() => {
    return filterProjects(
      selectedType || undefined,
      selectedStatus || undefined,
      locationFilter || undefined
    );
  }, [selectedType, selectedStatus, locationFilter]);

  const getStatusColor = (status: ProjectStatus) => {
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

  const getTypeColor = (type: ProjectType) => {
    switch (type) {
      case 'Life':
        return 'bg-emerald-50 text-emerald-900 border-emerald-200';
      case 'Centros Multideportivos':
        return 'bg-orange-50 text-orange-900 border-orange-200';
      case 'Hoteles':
        return 'bg-sky-50 text-sky-900 border-sky-200';
      case 'Urban':
        return 'bg-stone-50 text-stone-900 border-stone-200';
      case 'House':
        return 'bg-rose-50 text-rose-900 border-rose-200';
      default:
        return 'bg-neutral-50 text-neutral-900 border-neutral-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Invertir en Heartbeat
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl mb-12 font-light text-neutral-200 max-w-3xl mx-auto">
              Proyectos reales de regeneración. Desarrollo estructurado por fases.
              Transparencia total.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#proyectos"
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Solicitar información
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-16 text-center">
              Cómo funciona
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6">
                  1
                </div>
                <h3 className="font-black mb-3 text-lg">Desarrollo por fases</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Cada proyecto avanza en etapas claras y medibles con hitos
                  verificables.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6">
                  2
                </div>
                <h3 className="font-black mb-3 text-lg">Regeneración real</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Priorizamos rehabilitar espacios existentes y recuperar estructuras.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6">
                  3
                </div>
                <h3 className="font-black mb-3 text-lg">Ingresos diversificados</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Modelos con múltiples fuentes de ingreso y sostenibilidad financiera.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6">
                  4
                </div>
                <h3 className="font-black mb-3 text-lg">Impacto medible</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Seguimiento de empleo, m² rehabilitados y comunidad generada.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Filter size={28} />
              <h2 className="text-3xl font-black">Filtrar proyectos</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-3 gap-4 mb-12 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <div>
                <label className="block text-sm font-bold mb-2 text-neutral-900">
                  Tipo
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as ProjectType | '')}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-black transition-colors font-medium bg-white"
                >
                  <option value="">Todos los tipos</option>
                  <option value="Life">Life</option>
                  <option value="Centros Multideportivos">Centros Multideportivos</option>
                  <option value="Hoteles">Hoteles</option>
                  <option value="Urban">Urban</option>
                  <option value="House">House</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-neutral-900">
                  Estado
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as ProjectStatus | '')}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-black transition-colors font-medium bg-white"
                >
                  <option value="">Todos los estados</option>
                  <option value="En estudio">En estudio</option>
                  <option value="En búsqueda de inversión">En búsqueda de inversión</option>
                  <option value="En ejecución">En ejecución</option>
                  <option value="Cerrado">Cerrado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-neutral-900">
                  Ubicación
                </label>
                <input
                  type="text"
                  placeholder="Ej: Barcelona, Madrid..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-black transition-colors font-medium"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-6 text-neutral-600 font-medium">
              <span className="text-black font-bold text-lg">{filteredProjects.length}</span>{' '}
              proyecto{filteredProjects.length !== 1 ? 's' : ''} encontrado
              {filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden border-2 border-neutral-200 hover:border-black transition-all hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 right-4 flex gap-2">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border ${getTypeColor(
                          project.type
                        )}`}
                      >
                        {project.type}
                      </span>
                      <h3 className="text-3xl font-black mb-2">{project.name}</h3>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <MapPin size={16} />
                        <span className="font-medium">{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 bg-neutral-50 rounded-xl p-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          Monto total
                        </div>
                        <div className="text-2xl font-black">{project.totalAmount}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          Ticket mínimo
                        </div>
                        <div className="text-2xl font-black">{project.minTicket}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Link
                        to={`/prototype/invertir/${project.slug}`}
                        className="w-full bg-black text-white text-center py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                      >
                        Ver proyecto completo
                        <ArrowRight size={16} />
                      </Link>
                      <button className="w-full bg-neutral-100 text-black py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all border border-neutral-300">
                        Solicitar información
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-neutral-50 rounded-3xl">
              <p className="text-neutral-600 text-lg mb-4">
                No se encontraron proyectos con los filtros seleccionados
              </p>
              <button
                onClick={() => {
                  setSelectedType('');
                  setSelectedStatus('');
                  setLocationFilter('');
                }}
                className="text-black font-bold underline underline-offset-4 hover:no-underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
              Impacto y transparencia
            </h2>
            <p className="text-center text-neutral-400 mb-16 text-lg">
              Resultados medibles en cada proyecto
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-6xl font-black mb-3">
                  {GLOBAL_IMPACT.projectsInDevelopment}
                </div>
                <p className="text-neutral-300 font-bold uppercase text-sm tracking-wider">
                  Proyectos activos
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-6xl font-black mb-3">
                  {GLOBAL_IMPACT.spacesRehabilitated}
                </div>
                <p className="text-neutral-300 font-bold uppercase text-sm tracking-wider">
                  Espacios rehabilitados
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-6xl font-black mb-3">
                  {GLOBAL_IMPACT.estimatedEmployment}
                </div>
                <p className="text-neutral-300 font-bold uppercase text-sm tracking-wider">
                  Empleo estimado
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="text-6xl font-black mb-3">
                  {GLOBAL_IMPACT.communitiesActivated}
                </div>
                <p className="text-neutral-300 font-bold uppercase text-sm tracking-wider">
                  Comunidades
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Encuentra tu proyecto
            </h2>
            <p className="text-xl mb-10 text-neutral-300">
              Nuestro equipo te ayudará a identificar la oportunidad que mejor se
              ajuste a tu perfil inversor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <TrendingUp size={20} />
                Solicitar información
              </button>
              <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                Agendar reunión
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
