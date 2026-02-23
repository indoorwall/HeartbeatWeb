export interface Sport {
  id: string;
  name: string;
  icon: string;
}

export interface Centro {
  id: string;
  slug: string;
  name: string;
  city: string;
  description: string;
  image: string;
  sports: Sport[];
  hasAccommodation: boolean;
  hasEvents: boolean;
  status: 'active';
}

export interface ProximoCentro {
  id: string;
  slug: string;
  name: string;
  city: string;
  type: 'Centro Multideportivo' | 'Urban' | 'Life';
  projectStatus: 'En estudio' | 'En búsqueda de inversión' | 'En ejecución';
  expectedOpening?: string;
  hasInvestmentProject: boolean;
  status: 'coming-soon';
}

export const SPORTS_CATALOG: Sport[] = [
  { id: 'boxing', name: 'Boxing', icon: '🥊' },
  { id: 'crossfit', name: 'Crossfit', icon: '🏋️' },
  { id: 'escalada', name: 'Escalada', icon: '🧗' },
  { id: 'running', name: 'Running', icon: '🏃' },
  { id: 'surf', name: 'Surf', icon: '🏄' },
  { id: 'skate', name: 'Skate', icon: '🛹' },
  { id: 'simuladores', name: 'Simuladores', icon: '🎮' },
  { id: 'yoga', name: 'Yoga', icon: '🧘' },
  { id: 'pilates', name: 'Pilates', icon: '🤸' },
];

export const CENTROS_ACTIVOS: Centro[] = [
  {
    id: 'madrid',
    slug: 'madrid',
    name: 'Heartbeat Madrid',
    city: 'Madrid',
    description: 'Centro tecnológico en pleno corazón urbano.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[0], // Boxing
      SPORTS_CATALOG[1], // Crossfit
      SPORTS_CATALOG[6], // Simuladores
    ],
    hasAccommodation: false,
    hasEvents: true,
    status: 'active',
  },
  {
    id: 'vilanova',
    slug: 'vilanova',
    name: 'Heartbeat Vilanova',
    city: 'Vilanova i la Geltrú',
    description: 'Espacio integrado con el mar y la naturaleza.',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[4], // Surf
      SPORTS_CATALOG[7], // Yoga
      SPORTS_CATALOG[3], // Running
    ],
    hasAccommodation: true,
    hasEvents: true,
    status: 'active',
  },
  {
    id: 'miches',
    slug: 'miches',
    name: 'Heartbeat Miches',
    city: 'Miches, República Dominicana',
    description: 'Regeneración tropical en equilibrio con el entorno.',
    image: 'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[4], // Surf
      SPORTS_CATALOG[7], // Yoga
      SPORTS_CATALOG[8], // Pilates
    ],
    hasAccommodation: true,
    hasEvents: false,
    status: 'active',
  },
  {
    id: 'asturias',
    slug: 'asturias',
    name: 'Heartbeat Asturias',
    city: 'Asturias',
    description: 'Montaña, mar y deporte en estado puro.',
    image: 'https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[2], // Escalada
      SPORTS_CATALOG[4], // Surf
      SPORTS_CATALOG[3], // Running
    ],
    hasAccommodation: true,
    hasEvents: true,
    status: 'active',
  },
];

export const PROXIMOS_CENTROS: ProximoCentro[] = [
  {
    id: 'barcelona-urban',
    slug: 'barcelona-urban',
    name: 'Heartbeat Barcelona Urban',
    city: 'Barcelona',
    type: 'Urban',
    projectStatus: 'En búsqueda de inversión',
    expectedOpening: '2027',
    hasInvestmentProject: true,
    status: 'coming-soon',
  },
  {
    id: 'valencia',
    slug: 'valencia',
    name: 'Heartbeat Valencia',
    city: 'Valencia',
    type: 'Centro Multideportivo',
    projectStatus: 'En estudio',
    hasInvestmentProject: false,
    status: 'coming-soon',
  },
  {
    id: 'sevilla',
    slug: 'sevilla',
    name: 'Heartbeat Sevilla',
    city: 'Sevilla',
    type: 'Centro Multideportivo',
    projectStatus: 'En ejecución',
    expectedOpening: '2026',
    hasInvestmentProject: true,
    status: 'coming-soon',
  },
];

export const ALL_CENTROS = [...CENTROS_ACTIVOS, ...PROXIMOS_CENTROS];

export const getCentroBySlug = (slug: string) => {
  return ALL_CENTROS.find((centro) => centro.slug === slug);
};

export const getCentrosByCity = (city: string) => {
  return CENTROS_ACTIVOS.filter((centro) =>
    centro.city.toLowerCase().includes(city.toLowerCase())
  );
};

export const getCentrosBySport = (sportId: string) => {
  return CENTROS_ACTIVOS.filter((centro) =>
    centro.sports.some((sport) => sport.id === sportId)
  );
};
