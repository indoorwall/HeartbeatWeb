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

export interface RoomType {
  id: string;
  name: string;
  capacity: string;
  size: string;
  features: string[];
  priceFrom: string;
  image: string;
}

export interface HotelGallery {
  id: string;
  title: string;
  image: string;
  category: 'habitacion' | 'comun' | 'restaurante' | 'entorno' | 'deporte';
}

export interface HotelFAQ {
  q: string;
  a: string;
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
  concept: {
    architecture: string;
    sustainability: string;
    integration: string;
    sport: string;
  };
  gallery: HotelGallery[];
  roomTypes: RoomType[];
  includedServices: {
    name: string;
    description: string;
    link: string;
  }[];
  faqs: HotelFAQ[];
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
    concept: {
      architecture:
        'Diseño bioclimático que minimiza el impacto ambiental. Ventilación cruzada, materiales locales y estructuras que dialogan con el paisaje caribeño.',
      sustainability:
        'Energía 100% solar, gestión de agua mediante captación de lluvia y tratamiento natural. Cero plástico de un solo uso.',
      integration:
        'El hotel forma parte de un ecosistema donde deporte, alimentación y naturaleza conviven en equilibrio. No es un resort aislado, es parte de Miches.',
      sport:
        'Acceso directo al centro multideportivo. Los huéspedes pueden entrenar surf, crossfit, yoga y running sin salir del proyecto.',
    },
    gallery: [
      {
        id: 'g1',
        title: 'Suite Ocean View',
        image:
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'habitacion',
      },
      {
        id: 'g2',
        title: 'Lobby Principal',
        image:
          'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comun',
      },
      {
        id: 'g3',
        title: 'Restaurante KM0',
        image:
          'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'restaurante',
      },
      {
        id: 'g4',
        title: 'Vista al mar',
        image:
          'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'entorno',
      },
      {
        id: 'g5',
        title: 'Habitación Deluxe',
        image:
          'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'habitacion',
      },
      {
        id: 'g6',
        title: 'Centro deportivo integrado',
        image:
          'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'deporte',
      },
      {
        id: 'g7',
        title: 'Piscina infinity',
        image:
          'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comun',
      },
      {
        id: 'g8',
        title: 'Terraza sunset',
        image:
          'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comun',
      },
      {
        id: 'g9',
        title: 'Playa privada',
        image:
          'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'entorno',
      },
      {
        id: 'g10',
        title: 'Zona yoga outdoor',
        image:
          'https://images.pexels.com/photos/3822166/pexels-photo-3822166.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'deporte',
      },
    ],
    roomTypes: [
      {
        id: 'standard',
        name: 'Habitación Standard',
        capacity: '2 personas',
        size: '32 m²',
        features: [
          'Vista al jardín',
          'Baño completo',
          'Aire acondicionado',
          'Wifi de alta velocidad',
          'Minibar ecológico',
        ],
        priceFrom: '180€',
        image:
          'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 'deluxe',
        name: 'Habitación Deluxe',
        capacity: '2-3 personas',
        size: '45 m²',
        features: [
          'Vista parcial al mar',
          'Terraza privada',
          'Baño con ducha de lluvia',
          'Sofá cama',
          'Acceso prioritario spa',
        ],
        priceFrom: '250€',
        image:
          'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 'suite',
        name: 'Suite Ocean View',
        capacity: '4 personas',
        size: '68 m²',
        features: [
          'Vista frontal al océano',
          'Terraza amplia con hamaca',
          'Sala de estar independiente',
          'Bañera de hidromasaje',
          'Servicio de habitaciones 24h',
        ],
        priceFrom: '380€',
        image:
          'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
    includedServices: [
      {
        name: 'Acceso al centro multideportivo',
        description:
          'Uso ilimitado de instalaciones: gimnasio, piscina, pistas deportivas y clases grupales.',
        link: '/prototype/centros/miches',
      },
      {
        name: 'Restauración KM0',
        description:
          'Desayuno incluido y descuentos en todos los restaurantes del ecosistema.',
        link: '/prototype/alimentacion',
      },
      {
        name: 'Eventos activos',
        description:
          'Acceso prioritario a eventos, competiciones y actividades organizadas durante tu estancia.',
        link: '/prototype/agenda',
      },
      {
        name: 'Actividades outdoor',
        description:
          'Surf, running en playa, yoga al amanecer y rutas de naturaleza guiadas.',
        link: '/prototype/deportes',
      },
    ],
    faqs: [
      {
        q: '¿Incluye acceso al centro deportivo?',
        a: 'Sí. Todos los huéspedes tienen acceso ilimitado al centro multideportivo de Heartbeat Miches durante su estancia.',
      },
      {
        q: '¿Hay estancias largas disponibles?',
        a: 'Sí. Ofrecemos tarifas especiales para estancias de más de 7 noches. Contacta con nosotros para condiciones.',
      },
      {
        q: '¿Cuál es la política de cancelación?',
        a: 'Cancelación gratuita hasta 7 días antes de la llegada. Menos de 7 días: se cobra el 50% del total.',
      },
      {
        q: '¿Puedo entrenar durante mi estancia?',
        a: 'Por supuesto. El centro deportivo está diseñado para que entrenes como en casa. También organizamos sesiones grupales diarias.',
      },
      {
        q: '¿Hay opciones familiares?',
        a: 'Sí. Las Suites Ocean View son perfectas para familias. Además tenemos actividades específicas para niños.',
      },
      {
        q: '¿El hotel es sostenible?',
        a: 'Totalmente. Energía solar, gestión responsable del agua, materiales locales y cero plásticos de un solo uso.',
      },
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
    concept: {
      architecture:
        'Rehabilitación respetuosa de un edificio histórico de principios del siglo XX. Conservamos la estructura original mientras integramos confort contemporáneo.',
      sustainability:
        'Materiales reciclados, eficiencia energética y respeto absoluto por el patrimonio arquitectónico asturiano.',
      integration:
        'El hotel es el corazón de la regeneración de Perlora. Conecta con el centro deportivo, los senderos naturales y la comunidad local.',
      sport:
        'Acceso directo a escalada, trail running, surf en la costa cercana y rutas de montaña. El deporte aquí es pura conexión con la naturaleza.',
    },
    gallery: [
      {
        id: 'p1',
        title: 'Habitación Heritage',
        image:
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'habitacion',
      },
      {
        id: 'p2',
        title: 'Fachada histórica',
        image:
          'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'entorno',
      },
      {
        id: 'p3',
        title: 'Restaurante asturiano',
        image:
          'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'restaurante',
      },
      {
        id: 'p4',
        title: 'Sala común con chimenea',
        image:
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comun',
      },
      {
        id: 'p5',
        title: 'Suite Mirador',
        image:
          'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'habitacion',
      },
      {
        id: 'p6',
        title: 'Sendero integrado',
        image:
          'https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'deporte',
      },
      {
        id: 'p7',
        title: 'Biblioteca',
        image:
          'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comun',
      },
      {
        id: 'p8',
        title: 'Terraza con vistas',
        image:
          'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'comun',
      },
      {
        id: 'p9',
        title: 'Naturaleza asturiana',
        image:
          'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'entorno',
      },
      {
        id: 'p10',
        title: 'Zona de escalada cercana',
        image:
          'https://images.pexels.com/photos/449609/pexels-photo-449609.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'deporte',
      },
    ],
    roomTypes: [
      {
        id: 'cozy',
        name: 'Habitación Cozy',
        capacity: '2 personas',
        size: '25 m²',
        features: [
          'Diseño histórico conservado',
          'Baño con ducha',
          'Calefacción radiante',
          'Vistas al pueblo',
          'Wifi fibra óptica',
        ],
        priceFrom: '120€',
        image:
          'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 'heritage',
        name: 'Habitación Heritage',
        capacity: '2 personas',
        size: '35 m²',
        features: [
          'Techos originales restaurados',
          'Balcón privado',
          'Baño con bañera vintage',
          'Vista a la montaña',
          'Minibar de productos locales',
        ],
        priceFrom: '165€',
        image:
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 'suite-mirador',
        name: 'Suite Mirador',
        capacity: '3 personas',
        size: '50 m²',
        features: [
          'Vista panorámica 180°',
          'Salón con chimenea',
          'Terraza privada amplia',
          'Baño doble con hidromasaje',
          'Acceso preferente a actividades',
        ],
        priceFrom: '240€',
        image:
          'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
    includedServices: [
      {
        name: 'Acceso al centro multideportivo',
        description:
          'Escalada, crossfit, yoga y acceso a todas las instalaciones del centro Heartbeat Perlora.',
        link: '/prototype/centros/perlora',
      },
      {
        name: 'Gastronomía asturiana',
        description:
          'Desayuno incluido con productos locales. Descuentos en sidrerías y restaurantes integrados.',
        link: '/prototype/alimentacion',
      },
      {
        name: 'Rutas guiadas',
        description:
          'Senderismo, trail running y rutas culturales por Asturias con guías locales certificados.',
        link: '/prototype/deportes/running',
      },
      {
        name: 'Eventos culturales',
        description:
          'Acceso a eventos comunitarios, talleres y actividades de integración con el entorno.',
        link: '/prototype/agenda',
      },
    ],
    faqs: [
      {
        q: '¿Incluye acceso al centro deportivo?',
        a: 'Sí. Acceso completo al centro multideportivo Heartbeat Perlora durante toda tu estancia.',
      },
      {
        q: '¿El edificio es histórico?',
        a: 'Sí. Hemos restaurado con respeto un edificio de principios del siglo XX manteniendo su esencia.',
      },
      {
        q: '¿Hay actividades en la naturaleza?',
        a: 'Totalmente. Rutas de senderismo, escalada en roca natural y trail running en entornos asturianos únicos.',
      },
      {
        q: '¿Cuál es la política de cancelación?',
        a: 'Cancelación gratuita hasta 5 días antes del check-in. Menos de 5 días: se cobra el 40% del total.',
      },
      {
        q: '¿Es pet-friendly?',
        a: 'Sí. Aceptamos mascotas en habitaciones específicas. Suplemento de 15€/noche por mascota.',
      },
      {
        q: '¿Hay transporte desde el aeropuerto?',
        a: 'Sí. Ofrecemos servicio de traslado desde el aeropuerto de Asturias. Consulta tarifas al reservar.',
      },
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

export const getHotelBySlug = (slug: string): Hotel | undefined => {
  return HOTELS.find((hotel) => hotel.slug === slug);
};
