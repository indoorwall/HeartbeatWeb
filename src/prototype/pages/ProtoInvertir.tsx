import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, Filter } from 'lucide-react';
import {
  INVESTMENT_PROJECTS,
  filterProjects,
  GLOBAL_IMPACT,
  type ProjectType,
  type ProjectStatus,
} from '../../data/invertir_data';

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
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Invertir en Heartbeat
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Proyectos reales. Desarrollo estructurado. Transparencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#proyectos"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-lg"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 text-center">Cómo funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Desarrollo por fases</h3>
              <p className="text-sm text-neutral-600">
                Cada proyecto avanza en etapas claras y medibles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Regeneración y reutilización</h3>
              <p className="text-sm text-neutral-600">
                Priorizamos rehabilitar espacios existentes cuando es posible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Ingresos diversificados</h3>
              <p className="text-sm text-neutral-600">
                Modelos de negocio con múltiples fuentes de ingreso.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Impacto medible</h3>
              <p className="text-sm text-neutral-600">
                Seguimiento de empleo, rehabilitación y comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section id="proyectos" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Filter size={24} />
            <h2 className="text-2xl font-bold">Filtrar proyectos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700">
                Tipo de Heartbeat
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as ProjectType | '')}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
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
              <label className="block text-sm font-medium mb-2 text-neutral-700">
                Estado del proyecto
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as ProjectStatus | '')}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Todos los estados</option>
                <option value="En estudio">En estudio</option>
                <option value="En búsqueda de inversión">En búsqueda de inversión</option>
                <option value="En ejecución">En ejecución</option>
                <option value="Cerrado">Cerrado</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700">
                Ubicación
              </label>
              <input
                type="text"
                placeholder="Ej: Barcelona, Madrid..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* RESULTADOS */}
          <div className="mb-4 text-neutral-600">
            <span className="font-medium">{filteredProjects.length}</span> proyecto
            {filteredProjects.length !== 1 ? 's' : ''} encontrado
            {filteredProjects.length !== 1 ? 's' : ''}
          </div>

          {/* LISTADO DE PROYECTOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-3">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Monto total:</span>
                      <span className="font-bold">{project.totalAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Ticket mínimo:</span>
                      <span className="font-bold">{project.minTicket}</span>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-medium text-neutral-500 mb-1">
                      Proceso actual:
                    </p>
                    <p className="text-sm font-medium">{project.currentPhase}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/prototype/invertir/${project.slug}`}
                      className="w-full bg-black text-white text-center py-3 rounded-full font-bold hover:bg-neutral-800 transition-all"
                    >
                      Ver proyecto
                    </Link>
                    <button className="w-full bg-neutral-100 text-black py-3 rounded-full font-bold hover:bg-neutral-200 transition-all">
                      Solicitar información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No se encontraron proyectos con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setSelectedType('');
                  setSelectedStatus('');
                  setLocationFilter('');
                }}
                className="mt-4 text-black underline hover:no-underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* IMPACTO Y TRANSPARENCIA */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-4 text-center">
            Impacto y transparencia
          </h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">
            Resultados medibles en cada proyecto.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black mb-2">
                {GLOBAL_IMPACT.projectsInDevelopment}
              </div>
              <p className="text-neutral-600 font-medium">Proyectos en desarrollo</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">
                {GLOBAL_IMPACT.spacesRehabilitated}
              </div>
              <p className="text-neutral-600 font-medium">Espacios rehabilitados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">
                {GLOBAL_IMPACT.estimatedEmployment}
              </div>
              <p className="text-neutral-600 font-medium">Empleo estimado</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">
                {GLOBAL_IMPACT.communitiesActivated}
              </div>
              <p className="text-neutral-600 font-medium">Comunidades activadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Solicitar información del proyecto adecuado
          </h2>
          <p className="text-xl mb-8 text-neutral-300">
            Nuestro equipo te ayudará a encontrar la oportunidad que mejor se ajuste a
            tu perfil inversor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all flex items-center justify-center gap-2">
              <TrendingUp size={20} />
              Solicitar información
            </button>
            <button className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Agendar reunión
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
