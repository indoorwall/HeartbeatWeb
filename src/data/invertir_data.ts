export type ProjectType = 'Life' | 'Centros Multideportivos' | 'Hoteles' | 'Urban' | 'House';
export type ProjectStatus = 'En estudio' | 'En búsqueda de inversión' | 'En ejecución' | 'Cerrado';

export interface ProjectPhase {
  name: string;
  description: string;
  completed: boolean;
}

export interface ProjectImpact {
  employment: string;
  rehabilitation: string;
  community: string;
}

export interface InvestmentProject {
  id: string;
  slug: string;
  name: string;
  location: string;
  type: ProjectType;
  totalAmount: string;
  minTicket: string;
  status: ProjectStatus;
  currentPhase: string;
  summary: string;
  description: string;
  phases: ProjectPhase[];
  impact: ProjectImpact;
  relatedLink?: {
    url: string;
    label: string;
  };
}

export const INVESTMENT_PROJECTS: InvestmentProject[] = [
  {
    id: 'life-pirineos',
    slug: 'life-pirineos',
    name: 'Heartbeat Life Pirineos',
    location: 'Pirineo Aragonés',
    type: 'Life',
    totalAmount: '12M €',
    minTicket: '100.000 €',
    status: 'En búsqueda de inversión',
    currentPhase: 'Validación técnica y búsqueda de suelo',
    summary: 'Santuario de regeneración integrado en el Pirineo. Combina alojamiento sostenible, instalaciones deportivas y espacios de bienestar en armonía con el entorno natural.',
    description: 'Un espacio de 15 hectáreas diseñado para la regeneración física y mental. El proyecto incluye cabañas de bajo impacto, centro de wellness, espacios para yoga y meditación, y zonas de actividades outdoor integradas en el bosque.',
    phases: [
      { name: 'Estudio de viabilidad', description: 'Análisis técnico y medioambiental', completed: true },
      { name: 'Adquisición de suelo', description: 'Negociación y compra del terreno', completed: false },
      { name: 'Diseño arquitectónico', description: 'Proyecto completo sostenible', completed: false },
      { name: 'Construcción', description: 'Ejecución por fases', completed: false },
      { name: 'Apertura', description: 'Lanzamiento y operación', completed: false },
    ],
    impact: {
      employment: '35 empleos directos',
      rehabilitation: '15 hectáreas recuperadas',
      community: 'Alianzas con 8 productores locales',
    },
  },
  {
    id: 'centro-sevilla',
    slug: 'centro-sevilla',
    name: 'Heartbeat Sevilla',
    location: 'Sevilla',
    type: 'Centros Multideportivos',
    totalAmount: '4.5M €',
    minTicket: '50.000 €',
    status: 'En ejecución',
    currentPhase: 'Construcción fase 1',
    summary: 'Centro multideportivo urbano de 3.500m² con tecnología integrada. Boxing, crossfit, escalada y simuladores en pleno centro de Sevilla.',
    description: 'Rehabilitación de nave industrial en el centro de Sevilla. Incluye zonas de entrenamiento, vestuarios premium, zona de recuperación y cafetería saludable. Diseño sostenible con placas solares y sistema de recuperación de aguas.',
    phases: [
      { name: 'Adquisición del espacio', description: 'Nave industrial adquirida', completed: true },
      { name: 'Diseño y permisos', description: 'Proyecto técnico aprobado', completed: true },
      { name: 'Obra civil', description: 'Construcción en curso', completed: false },
      { name: 'Equipamiento', description: 'Instalación de sistemas', completed: false },
      { name: 'Apertura', description: 'Prevista 2026', completed: false },
    ],
    impact: {
      employment: '22 empleos directos',
      rehabilitation: '3.500m² de nave industrial',
      community: '1.200 miembros esperados año 1',
    },
    relatedLink: {
      url: '/prototype/centros',
      label: 'Ver otros centros activos',
    },
  },
  {
    id: 'centro-valencia',
    slug: 'centro-valencia',
    name: 'Heartbeat Valencia',
    location: 'Valencia',
    type: 'Centros Multideportivos',
    totalAmount: '5.2M €',
    minTicket: 'A consultar',
    status: 'En estudio',
    currentPhase: 'Búsqueda de ubicación',
    summary: 'Centro multideportivo mediterráneo con enfoque en deportes outdoor y acuáticos. Proyecto en fase de estudio de ubicación.',
    description: 'Centro híbrido que combina instalaciones indoor con acceso privilegiado a espacios outdoor. El proyecto contempla colaboraciones con espacios naturales cercanos y playas para actividades acuáticas.',
    phases: [
      { name: 'Análisis de mercado', description: 'Estudio de demanda completado', completed: true },
      { name: 'Búsqueda de ubicación', description: 'Evaluando 3 opciones', completed: false },
      { name: 'Diseño del proyecto', description: 'Pendiente de ubicación', completed: false },
      { name: 'Construcción', description: 'Fase futura', completed: false },
      { name: 'Apertura', description: 'TBD', completed: false },
    ],
    impact: {
      employment: '18-25 empleos estimados',
      rehabilitation: 'Variable según ubicación',
      community: 'Conexión con comunidad local',
    },
    relatedLink: {
      url: '/prototype/centros',
      label: 'Ver centros operativos',
    },
  },
  {
    id: 'hotel-costa-brava',
    slug: 'hotel-costa-brava',
    name: 'Heartbeat Hotel Costa Brava',
    location: 'Costa Brava',
    type: 'Hoteles',
    totalAmount: '8M €',
    minTicket: '75.000 €',
    status: 'En búsqueda de inversión',
    currentPhase: 'Negociación de activo',
    summary: 'Rehabilitación de hotel de 45 habitaciones en primera línea de mar. Integración de wellness, gastronomía KM0 y espacios de movimiento.',
    description: 'Transformación de hotel tradicional en experiencia de hospitalidad consciente. Incluye renovación completa con criterios de sostenibilidad, zona de spa y wellness, restaurante con producto local, y programa de actividades deportivas.',
    phases: [
      { name: 'Identificación de activo', description: 'Hotel seleccionado', completed: true },
      { name: 'Negociación', description: 'En proceso', completed: false },
      { name: 'Rehabilitación integral', description: 'Proyecto técnico listo', completed: false },
      { name: 'Equipamiento', description: 'Pendiente', completed: false },
      { name: 'Apertura', description: 'Prevista 2027', completed: false },
    ],
    impact: {
      employment: '40 empleos directos',
      rehabilitation: 'Hotel existente de 3.200m²',
      community: 'Alianzas con productores km0',
    },
    relatedLink: {
      url: '/prototype/alojamiento',
      label: 'Ver alojamientos disponibles',
    },
  },
  {
    id: 'urban-barcelona',
    slug: 'urban-barcelona',
    name: 'Heartbeat Barcelona Urban',
    location: 'Barcelona',
    type: 'Urban',
    totalAmount: '6.8M €',
    minTicket: '100.000 €',
    status: 'En búsqueda de inversión',
    currentPhase: 'Diseño de concepto y búsqueda de espacio',
    summary: 'Hub urbano de regeneración. Combina centro deportivo, coworking, espacios de comunidad y alimentación saludable en un solo ecosistema.',
    description: 'Proyecto integral de regeneración urbana que unifica movimiento, trabajo y comunidad. Incluye gimnasio boutique, espacios de coworking flexibles, restaurante KM0, zona de eventos y terraza comunitaria.',
    phases: [
      { name: 'Definición del concepto', description: 'Modelo validado', completed: true },
      { name: 'Búsqueda de espacio', description: 'Evaluando ubicaciones', completed: false },
      { name: 'Diseño arquitectónico', description: 'Pendiente', completed: false },
      { name: 'Ejecución', description: 'Pendiente', completed: false },
      { name: 'Apertura', description: 'Prevista 2027', completed: false },
    ],
    impact: {
      employment: '28 empleos directos',
      rehabilitation: 'Variable según ubicación',
      community: 'Hub de 500+ miembros',
    },
  },
  {
    id: 'house-madrid',
    slug: 'house-madrid',
    name: 'Heartbeat House Madrid',
    location: 'Madrid',
    type: 'House',
    totalAmount: '3.2M €',
    minTicket: '50.000 €',
    status: 'En ejecución',
    currentPhase: 'Rehabilitación en curso',
    summary: 'Residencias temporales y coliving orientado a comunidad activa. 18 unidades en edificio rehabilitado del centro de Madrid.',
    description: 'Edificio de principios del siglo XX rehabilitado con criterios de eficiencia energética. Ofrece unidades de alquiler temporal y espacios comunes diseñados para fomentar comunidad: zona de entrenamiento, coworking, cocina compartida y terraza.',
    phases: [
      { name: 'Adquisición', description: 'Edificio adquirido', completed: true },
      { name: 'Proyecto de rehabilitación', description: 'Aprobado y en curso', completed: true },
      { name: 'Obra', description: 'Avance del 60%', completed: false },
      { name: 'Equipamiento', description: 'Pendiente', completed: false },
      { name: 'Ocupación', description: 'Prevista Q4 2026', completed: false },
    ],
    impact: {
      employment: '12 empleos indirectos',
      rehabilitation: 'Edificio histórico 1.400m²',
      community: 'Comunidad de 18 residentes',
    },
  },
];

export const getProjectBySlug = (slug: string): InvestmentProject | undefined => {
  return INVESTMENT_PROJECTS.find((project) => project.slug === slug);
};

export const getProjectsByType = (type: ProjectType): InvestmentProject[] => {
  return INVESTMENT_PROJECTS.filter((project) => project.type === type);
};

export const getProjectsByStatus = (status: ProjectStatus): InvestmentProject[] => {
  return INVESTMENT_PROJECTS.filter((project) => project.status === status);
};

export const filterProjects = (
  type?: ProjectType,
  status?: ProjectStatus,
  location?: string
): InvestmentProject[] => {
  return INVESTMENT_PROJECTS.filter((project) => {
    const matchesType = !type || project.type === type;
    const matchesStatus = !status || project.status === status;
    const matchesLocation =
      !location || project.location.toLowerCase().includes(location.toLowerCase());
    return matchesType && matchesStatus && matchesLocation;
  });
};

export const GLOBAL_IMPACT = {
  projectsInDevelopment: '6',
  spacesRehabilitated: '12.000m²',
  estimatedEmployment: '155+',
  communitiesActivated: '4',
};
