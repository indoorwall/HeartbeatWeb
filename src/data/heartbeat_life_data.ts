export type LifeType = 'Reserve' | 'Resort';

export interface LifeFeature {
  name: string;
  icon?: string;
}

export interface LifeDestination {
  id: string;
  slug: string;
  name: string;
  location: string;
  type: LifeType;
  description: string;
  image: string;
  features: LifeFeature[];
  projectUrl?: string;
}

export const LIFE_RESERVE_DESTINATIONS: LifeDestination[] = [
  {
    id: 'miches-reserve',
    slug: 'miches',
    name: 'Heartbeat Miches',
    location: 'Miches, República Dominicana',
    type: 'Reserve',
    description:
      'Territorio regenerado en el Caribe. Centro deportivo, hotel sostenible, casas integradas y restauración local.',
    image:
      'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      { name: 'Centro deportivo outdoor' },
      { name: 'Hotel sostenible' },
      { name: 'Heartbeat Home' },
      { name: 'Restauración KM0' },
      { name: 'Regeneración territorial' },
      { name: 'Eventos y formación' },
    ],
    projectUrl: '/prototype/centros/miches',
  },
];

export const LIFE_RESORT_DESTINATIONS: LifeDestination[] = [
  {
    id: 'perlora-resort',
    slug: 'perlora',
    name: 'Heartbeat Perlora',
    location: 'Perlora, Asturias',
    type: 'Resort',
    description:
      'Proyecto experiencial en edificio histórico. Centro deportivo, hotel boutique y actividades en naturaleza asturiana.',
    image:
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      { name: 'Centro multideportivo' },
      { name: 'Hotel boutique' },
      { name: 'Restauración local' },
      { name: 'Actividades outdoor' },
      { name: 'Espacios wellness' },
      { name: 'Eventos y retiros' },
    ],
    projectUrl: '/prototype/centros/perlora',
  },
];

export const LIFE_RESERVE_INCLUDES = [
  {
    title: 'Centros deportivos integrados',
    description:
      'Instalaciones diseñadas para integrarse en el territorio, con mínimo impacto y máxima funcionalidad.',
  },
  {
    title: 'Heartbeat Home',
    description:
      'Casas tecnológicas con acceso al ecosistema completo: deporte, comunidad y naturaleza.',
  },
  {
    title: 'Hoteles sostenibles',
    description:
      'Alojamiento con criterios de eficiencia energética, materiales locales y diseño responsable.',
  },
  {
    title: 'Restauración KM0',
    description:
      'Gastronomía basada en producto local, temporada y circuitos cortos de distribución.',
  },
  {
    title: 'Eventos y formación',
    description:
      'Programas deportivos, retiros, workshops y experiencias integradas en el entorno.',
  },
  {
    title: 'Espacios regenerados',
    description:
      'Territorios restaurados o protegidos, con criterios de conservación y uso sostenible.',
  },
];

export const LIFE_RESORT_INCLUDES = [
  {
    title: 'Centro multideportivo',
    description:
      'Instalaciones completas para entrenar, recuperar y disfrutar del movimiento.',
  },
  {
    title: 'Hoteles',
    description:
      'Alojamiento diseñado para estancias temporales con acceso completo al proyecto.',
  },
  {
    title: 'Casas Heartbeat',
    description:
      'Opciones de alquiler vacacional o recurrente dentro del ecosistema.',
  },
  {
    title: 'Restauración',
    description:
      'Espacios gastronómicos integrados con oferta saludable y local.',
  },
  {
    title: 'Eventos',
    description:
      'Agenda activa de actividades deportivas, culturales y comunitarias.',
  },
  {
    title: 'Actividades outdoor',
    description:
      'Rutas, deportes en naturaleza y experiencias en el entorno inmediato.',
  },
];

export const getLifeDestinationBySlug = (
  slug: string
): LifeDestination | undefined => {
  const allDestinations = [
    ...LIFE_RESERVE_DESTINATIONS,
    ...LIFE_RESORT_DESTINATIONS,
  ];
  return allDestinations.find((dest) => dest.slug === slug);
};
