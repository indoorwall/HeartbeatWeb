export interface Sport {
  id: string;
  name: string;
  icon: string;
}

export interface ServicePrice {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  level?: string;
  reserveUrl: string;
}

export interface SportService {
  sportId: string;
  sportName: string;
  services: ServicePrice[];
}

export interface Schedule {
  sportId: string;
  sportName: string;
  sessions: {
    day: string;
    time: string;
    level: string;
    type: string;
    reserveUrl: string;
  }[];
}

export interface CentroGallery {
  id: string;
  title: string;
  image: string;
  category: 'sala' | 'zona-deporte' | 'exterior' | 'social' | 'arquitectura' | 'comunidad';
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
  videoUrl?: string;
  gallery: CentroGallery[];
  services: SportService[];
  schedules: Schedule[];
  projectSlug?: string;
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
      SPORTS_CATALOG[0],
      SPORTS_CATALOG[1],
      SPORTS_CATALOG[6],
    ],
    hasAccommodation: false,
    hasEvents: true,
    status: 'active',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectSlug: 'madrid-urban',
    gallery: [
      {
        id: 'm1',
        title: 'Sala principal',
        image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'sala',
      },
      {
        id: 'm2',
        title: 'Ring de boxing',
        image: 'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'zona-deporte',
      },
      {
        id: 'm3',
        title: 'Zona crossfit',
        image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'zona-deporte',
      },
      {
        id: 'm4',
        title: 'Área social',
        image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'social',
      },
      {
        id: 'm5',
        title: 'Entrada principal',
        image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'arquitectura',
      },
      {
        id: 'm6',
        title: 'Simuladores deportivos',
        image: 'https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'zona-deporte',
      },
      {
        id: 'm7',
        title: 'Terraza exterior',
        image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'exterior',
      },
      {
        id: 'm8',
        title: 'Comunidad entrenando',
        image: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comunidad',
      },
    ],
    services: [
      {
        sportId: 'boxing',
        sportName: 'Boxing',
        services: [
          {
            id: 'boxing-socio',
            name: 'Socio mensual',
            description: 'Acceso ilimitado a clases de boxing y gimnasio',
            price: '89€/mes',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&servicio=socio',
          },
          {
            id: 'boxing-bono10',
            name: 'Bono 10 sesiones',
            description: 'Pack de 10 clases válido 3 meses',
            price: '120€',
            duration: '3 meses',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&servicio=bono10',
          },
          {
            id: 'boxing-entrada',
            name: 'Entrada puntual',
            description: 'Una clase suelta de boxing',
            price: '15€',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&servicio=entrada',
          },
          {
            id: 'boxing-privada',
            name: 'Clase privada',
            description: 'Sesión individual con entrenador',
            price: '60€',
            duration: '1 hora',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&servicio=privada',
          },
        ],
      },
      {
        sportId: 'crossfit',
        sportName: 'Crossfit',
        services: [
          {
            id: 'crossfit-socio',
            name: 'Socio mensual',
            description: 'Acceso ilimitado a WODs y open gym',
            price: '95€/mes',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&servicio=socio',
          },
          {
            id: 'crossfit-curso',
            name: 'Curso iniciación',
            description: '4 sesiones para aprender fundamentos',
            price: '80€',
            duration: '4 clases',
            level: 'Principiante',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&servicio=curso',
          },
          {
            id: 'crossfit-bono10',
            name: 'Bono 10 sesiones',
            description: 'Pack de 10 WODs válido 3 meses',
            price: '135€',
            duration: '3 meses',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&servicio=bono10',
          },
          {
            id: 'crossfit-entrada',
            name: 'Entrada puntual',
            description: 'Un WOD suelto',
            price: '18€',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&servicio=entrada',
          },
        ],
      },
      {
        sportId: 'simuladores',
        sportName: 'Simuladores',
        services: [
          {
            id: 'sim-hora',
            name: 'Alquiler por hora',
            description: 'Simulador de golf, tenis o fútbol',
            price: '25€/hora',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=simuladores&servicio=hora',
          },
          {
            id: 'sim-bono5',
            name: 'Bono 5 horas',
            description: 'Pack de 5 horas de simulador',
            price: '110€',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=simuladores&servicio=bono5',
          },
        ],
      },
    ],
    schedules: [
      {
        sportId: 'boxing',
        sportName: 'Boxing',
        sessions: [
          {
            day: 'Lunes',
            time: '18:00 - 19:00',
            level: 'Todos los niveles',
            type: 'Clase grupal',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&dia=lunes&hora=18',
          },
          {
            day: 'Miércoles',
            time: '18:00 - 19:00',
            level: 'Todos los niveles',
            type: 'Clase grupal',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&dia=miercoles&hora=18',
          },
          {
            day: 'Viernes',
            time: '19:00 - 20:00',
            level: 'Avanzado',
            type: 'Sparring',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=boxing&dia=viernes&hora=19',
          },
        ],
      },
      {
        sportId: 'crossfit',
        sportName: 'Crossfit',
        sessions: [
          {
            day: 'Lunes a Viernes',
            time: '07:00 - 08:00',
            level: 'Todos',
            type: 'WOD',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&hora=7',
          },
          {
            day: 'Lunes a Viernes',
            time: '18:00 - 19:00',
            level: 'Todos',
            type: 'WOD',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&hora=18',
          },
          {
            day: 'Sábado',
            time: '10:00 - 11:00',
            level: 'Todos',
            type: 'WOD',
            reserveUrl: '/prototype/reservar?centro=madrid&deporte=crossfit&dia=sabado&hora=10',
          },
        ],
      },
    ],
  },
  {
    id: 'vilanova',
    slug: 'vilanova',
    name: 'Heartbeat Vilanova',
    city: 'Vilanova i la Geltrú',
    description: 'Espacio integrado con el mar y la naturaleza.',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[4],
      SPORTS_CATALOG[7],
      SPORTS_CATALOG[3],
    ],
    hasAccommodation: true,
    hasEvents: true,
    status: 'active',
    gallery: [],
    services: [],
    schedules: [],
  },
  {
    id: 'miches',
    slug: 'miches',
    name: 'Heartbeat Miches',
    city: 'Miches, República Dominicana',
    description: 'Regeneración tropical en equilibrio con el entorno.',
    image: 'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[4],
      SPORTS_CATALOG[7],
      SPORTS_CATALOG[8],
    ],
    hasAccommodation: true,
    hasEvents: false,
    status: 'active',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectSlug: 'miches',
    gallery: [
      {
        id: 'mi1',
        title: 'Vista del complejo',
        image: 'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'exterior',
      },
      {
        id: 'mi2',
        title: 'Zona de surf',
        image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'zona-deporte',
      },
      {
        id: 'mi3',
        title: 'Sala de yoga',
        image: 'https://images.pexels.com/photos/3822166/pexels-photo-3822166.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'zona-deporte',
      },
      {
        id: 'mi4',
        title: 'Playa privada',
        image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'exterior',
      },
      {
        id: 'mi5',
        title: 'Área wellness',
        image: 'https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'social',
      },
      {
        id: 'mi6',
        title: 'Arquitectura sostenible',
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'arquitectura',
      },
      {
        id: 'mi7',
        title: 'Comunidad en clase',
        image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comunidad',
      },
      {
        id: 'mi8',
        title: 'Sala principal',
        image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'sala',
      },
    ],
    services: [
      {
        sportId: 'surf',
        sportName: 'Surf',
        services: [
          {
            id: 'surf-curso',
            name: 'Curso surf iniciación',
            description: '5 días de clases + material incluido',
            price: '250€',
            duration: '5 días',
            level: 'Principiante',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=surf&servicio=curso',
          },
          {
            id: 'surf-clase',
            name: 'Clase individual',
            description: 'Sesión privada con instructor',
            price: '70€',
            duration: '2 horas',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=surf&servicio=clase',
          },
          {
            id: 'surf-alquiler',
            name: 'Alquiler equipo',
            description: 'Tabla + traje por día',
            price: '30€/día',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=surf&servicio=alquiler',
          },
          {
            id: 'surf-bono',
            name: 'Bono 10 clases',
            description: 'Pack de 10 clases grupales',
            price: '400€',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=surf&servicio=bono',
          },
        ],
      },
      {
        sportId: 'yoga',
        sportName: 'Yoga',
        services: [
          {
            id: 'yoga-socio',
            name: 'Socio mensual',
            description: 'Acceso ilimitado a todas las clases',
            price: '75€/mes',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=yoga&servicio=socio',
          },
          {
            id: 'yoga-entrada',
            name: 'Entrada puntual',
            description: 'Una clase suelta',
            price: '12€',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=yoga&servicio=entrada',
          },
          {
            id: 'yoga-retiro',
            name: 'Retiro fin de semana',
            description: '3 días de inmersión completa',
            price: '380€',
            duration: '3 días',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=yoga&servicio=retiro',
          },
        ],
      },
      {
        sportId: 'pilates',
        sportName: 'Pilates',
        services: [
          {
            id: 'pilates-socio',
            name: 'Socio mensual',
            description: 'Acceso ilimitado a clases grupales',
            price: '70€/mes',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=pilates&servicio=socio',
          },
          {
            id: 'pilates-bono',
            name: 'Bono 8 clases',
            description: 'Pack de 8 sesiones válido 2 meses',
            price: '95€',
            duration: '2 meses',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=pilates&servicio=bono',
          },
          {
            id: 'pilates-privada',
            name: 'Clase privada',
            description: 'Sesión individual personalizada',
            price: '55€',
            duration: '1 hora',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=pilates&servicio=privada',
          },
        ],
      },
    ],
    schedules: [
      {
        sportId: 'surf',
        sportName: 'Surf',
        sessions: [
          {
            day: 'Todos los días',
            time: '07:00 - 09:00',
            level: 'Todos',
            type: 'Clase grupal',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=surf&hora=7',
          },
          {
            day: 'Todos los días',
            time: '16:00 - 18:00',
            level: 'Todos',
            type: 'Clase grupal',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=surf&hora=16',
          },
        ],
      },
      {
        sportId: 'yoga',
        sportName: 'Yoga',
        sessions: [
          {
            day: 'Lunes, Miércoles, Viernes',
            time: '06:30 - 07:30',
            level: 'Todos',
            type: 'Vinyasa',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=yoga&tipo=vinyasa',
          },
          {
            day: 'Martes, Jueves',
            time: '18:00 - 19:00',
            level: 'Todos',
            type: 'Yin Yoga',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=yoga&tipo=yin',
          },
        ],
      },
      {
        sportId: 'pilates',
        sportName: 'Pilates',
        sessions: [
          {
            day: 'Lunes a Viernes',
            time: '08:00 - 09:00',
            level: 'Todos',
            type: 'Mat Pilates',
            reserveUrl: '/prototype/reservar?centro=miches&deporte=pilates&hora=8',
          },
        ],
      },
    ],
  },
  {
    id: 'asturias',
    slug: 'asturias',
    name: 'Heartbeat Asturias',
    city: 'Asturias',
    description: 'Montaña, mar y deporte en estado puro.',
    image: 'https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sports: [
      SPORTS_CATALOG[2],
      SPORTS_CATALOG[4],
      SPORTS_CATALOG[3],
    ],
    hasAccommodation: true,
    hasEvents: true,
    status: 'active',
    projectSlug: 'perlora',
    gallery: [],
    services: [],
    schedules: [],
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
