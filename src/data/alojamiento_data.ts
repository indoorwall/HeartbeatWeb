export type AccommodationType = 'Hotel' | 'Social' | 'Home';
export type RentalType = 'Recurrente' | 'Vacacional' | 'Ambos';

export interface ProjectFeature {
  name: string;
  available: boolean;
}

export interface AccommodationDestination {
  id: string;
  slug: string;
  name: string;
  location: string;
  description: string;
  image: string;
  features: ProjectFeature[];
  accommodationTypes: AccommodationType[];
  relatedProjectUrl?: string;
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  destinationSlug: string;
  destinationName: string;
  description: string;
  image: string;
  integration: string;
  rooms: number;
  features: string[];
}

export interface SocialAccommodation {
  id: string;
  slug: string;
  name: string;
  destinationSlug: string;
  destinationName: string;
  description: string;
  image: string;
  purpose: string;
  capacity: number;
}

export interface HomeAccommodation {
  id: string;
  slug: string;
  name: string;
  destinationSlug: string;
  destinationName: string;
  description: string;
  image: string;
  rentalType: RentalType;
  bedrooms: number;
  integration: string;
}

export const ACCOMMODATION_DESTINATIONS: AccommodationDestination[] = [
  {
    id: 'miches',
    slug: 'miches',
    name: 'Heartbeat Miches',
    location: 'Miches, República Dominicana',
    description:
      'Proyecto integral en el Caribe. Hotel, centro deportivo, restauración y eventos en un mismo ecosistema.',
    image:
      'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      { name: 'Centros deportivos', available: true },
      { name: 'Restaurantes', available: true },
      { name: 'Eventos', available: true },
      { name: 'Urban', available: false },
    ],
    accommodationTypes: ['Hotel', 'Home'],
    relatedProjectUrl: '/prototype/centros/miches',
  },
  {
    id: 'perlora',
    slug: 'perlora',
    name: 'Heartbeat Perlora',
    location: 'Perlora, Asturias',
    description:
      'Regeneración de espacio histórico. Hotel boutique, centro deportivo y conexión con naturaleza asturiana.',
    image:
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      { name: 'Centros deportivos', available: true },
      { name: 'Restaurantes', available: true },
      { name: 'Eventos', available: true },
      { name: 'Urban', available: false },
    ],
    accommodationTypes: ['Hotel', 'Social'],
    relatedProjectUrl: '/prototype/centros/perlora',
  },
  {
    id: 'madrid-urban',
    slug: 'madrid-urban',
    name: 'Heartbeat Madrid',
    location: 'Madrid',
    description:
      'Hub urbano de regeneración. Alojamiento temporal integrado con coworking, gimnasio y comunidad.',
    image:
      'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      { name: 'Centros deportivos', available: true },
      { name: 'Restaurantes', available: true },
      { name: 'Eventos', available: false },
      { name: 'Urban', available: true },
    ],
    accommodationTypes: ['Home'],
  },
];

export const HOTELS: Hotel[] = [
  {
    id: 'hotel-miches',
    slug: 'hotel-miches',
    name: 'Heartbeat Hotel Miches',
    destinationSlug: 'miches',
    destinationName: 'Miches',
    description: 'Hotel sostenible de 45 habitaciones frente al mar.',
    image:
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600',
    integration: 'Ubicado dentro de Heartbeat Miches',
    rooms: 45,
    features: [
      'Acceso directo al centro deportivo',
      'Restaurante KM0',
      'Spa y wellness',
      'Energía solar',
    ],
  },
  {
    id: 'hotel-perlora',
    slug: 'hotel-perlora',
    name: 'Heartbeat Hotel Perlora',
    destinationSlug: 'perlora',
    destinationName: 'Perlora',
    description: 'Hotel boutique en edificio histórico rehabilitado.',
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
    integration: 'Parte del proyecto Heartbeat Perlora',
    rooms: 28,
    features: [
      'Edificio histórico restaurado',
      'Conexión con centro deportivo',
      'Gastronomía asturiana',
      'Acceso a rutas naturales',
    ],
  },
];

export const SOCIAL_ACCOMMODATIONS: SocialAccommodation[] = [
  {
    id: 'social-perlora',
    slug: 'social-perlora',
    name: 'Heartbeat Social Perlora',
    destinationSlug: 'perlora',
    destinationName: 'Perlora',
    description: 'Alojamiento con objetivo social y comunitario.',
    image:
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600',
    purpose: 'Formación, integración y desarrollo comunitario',
    capacity: 20,
  },
];

export const HOMES: HomeAccommodation[] = [
  {
    id: 'home-miches-1',
    slug: 'home-miches-1',
    name: 'Casa Miches 1',
    destinationSlug: 'miches',
    destinationName: 'Miches',
    description: 'Casa tecnológica con vistas al mar.',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rentalType: 'Vacacional',
    bedrooms: 3,
    integration: 'Dentro del ecosistema Heartbeat Miches',
  },
  {
    id: 'home-miches-2',
    slug: 'home-miches-2',
    name: 'Casa Miches 2',
    destinationSlug: 'miches',
    destinationName: 'Miches',
    description: 'Villa familiar con acceso directo a instalaciones.',
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rentalType: 'Ambos',
    bedrooms: 4,
    integration: 'Integrada en Heartbeat Miches',
  },
  {
    id: 'home-madrid-1',
    slug: 'home-madrid-1',
    name: 'Loft Madrid Centro',
    destinationSlug: 'madrid-urban',
    destinationName: 'Madrid',
    description: 'Loft urbano con acceso a coworking y gimnasio.',
    image:
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rentalType: 'Recurrente',
    bedrooms: 1,
    integration: 'Parte de Heartbeat House Madrid',
  },
  {
    id: 'home-madrid-2',
    slug: 'home-madrid-2',
    name: 'Estudio Madrid Norte',
    destinationSlug: 'madrid-urban',
    destinationName: 'Madrid',
    description: 'Estudio compacto para estancias largas.',
    image:
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rentalType: 'Recurrente',
    bedrooms: 1,
    integration: 'Dentro de Heartbeat House Madrid',
  },
];

export const getDestinationBySlug = (
  slug: string
): AccommodationDestination | undefined => {
  return ACCOMMODATION_DESTINATIONS.find((dest) => dest.slug === slug);
};

export const getHotelsByDestination = (destinationSlug: string): Hotel[] => {
  return HOTELS.filter((hotel) => hotel.destinationSlug === destinationSlug);
};

export const getSocialByDestination = (
  destinationSlug: string
): SocialAccommodation[] => {
  return SOCIAL_ACCOMMODATIONS.filter(
    (social) => social.destinationSlug === destinationSlug
  );
};

export const getHomesByDestination = (
  destinationSlug: string
): HomeAccommodation[] => {
  return HOMES.filter((home) => home.destinationSlug === destinationSlug);
};

export const getHomesByRentalType = (rentalType: RentalType): HomeAccommodation[] => {
  return HOMES.filter(
    (home) => home.rentalType === rentalType || home.rentalType === 'Ambos'
  );
};
