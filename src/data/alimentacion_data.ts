export interface FoodSpace {
  id: string;
  slug: string;
  name: string;
  type: 'Restaurante' | 'Supermercado';
  location: string;
  project: string;
  projectSlug?: string;
  image: string;
  cuisineType?: string;
  description: string;
  seasonalMenu?: boolean;
  km0Focus: boolean;
  localProducers?: string[];
  features: string[];
  integratedWith: string[];
}

export const FOOD_SPACES: FoodSpace[] = [
  {
    id: 'restaurant-miches-1',
    slug: 'cocina-miches',
    name: 'Cocina Miches',
    type: 'Restaurante',
    location: 'Miches, República Dominicana',
    project: 'Heartbeat Miches',
    projectSlug: 'miches',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cuisineType: 'Caribeña local',
    description: 'Restaurante integrado en el proyecto Miches con carta basada en producto local de temporada.',
    seasonalMenu: true,
    km0Focus: true,
    localProducers: ['Pescadores locales de Miches', 'Huertos comunitarios', 'Productores de fruta tropical'],
    features: ['Carta de temporada', 'Pescado fresco diario', 'Huerto propio', 'Menú deportivo'],
    integratedWith: ['Heartbeat Miches Resort', 'Centro deportivo', 'Alojamiento']
  },
  {
    id: 'restaurant-asturias-1',
    slug: 'cocina-asturias',
    name: 'Casa del Norte',
    type: 'Restaurante',
    location: 'Asturias, España',
    project: 'Heartbeat Asturias',
    projectSlug: 'asturias',
    image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cuisineType: 'Asturiana sostenible',
    description: 'Restaurante en Asturias con producto de la región. Apoyo directo a ganaderos y productores locales.',
    seasonalMenu: true,
    km0Focus: true,
    localProducers: ['Ganaderos asturianos', 'Productores de sidra natural', 'Huertas locales', 'Queseros artesanales'],
    features: ['Producto certificado', 'Sidra natural', 'Carne de pasto', 'Menú de recuperación'],
    integratedWith: ['Centro Life Reserve', 'Alojamiento natura', 'Retiros']
  },
  {
    id: 'supermarket-miches-1',
    slug: 'market-miches',
    name: 'Heartbeat Market Miches',
    type: 'Supermercado',
    location: 'Miches, República Dominicana',
    project: 'Heartbeat Miches',
    projectSlug: 'miches',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Supermercado con selección curada de producto local fresco. Apoyo a economía regional.',
    km0Focus: true,
    localProducers: ['Cooperativas locales', 'Pescadores artesanales', 'Productores de café local'],
    features: ['Producto fresco diario', 'Sin plásticos', 'Economía circular', 'Selección deportiva'],
    integratedWith: ['Heartbeat House', 'Hoteles', 'Comunidad residente']
  },
  {
    id: 'supermarket-asturias-1',
    slug: 'market-asturias',
    name: 'Despensa Asturiana',
    type: 'Supermercado',
    location: 'Asturias, España',
    project: 'Heartbeat Asturias',
    projectSlug: 'asturias',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Supermercado con selección de producto ecológico y regional. Prioridad a pequeños productores.',
    km0Focus: true,
    localProducers: ['Productores ecológicos certificados', 'Cooperativas agrarias', 'Queserías artesanales'],
    features: ['Bio certificado', 'Cero residuos', 'Producto de temporada', 'Envases retornables'],
    integratedWith: ['Life Reserve', 'Alojamiento', 'Eventos gastronómicos']
  },
  {
    id: 'restaurant-urban-1',
    slug: 'urban-fuel',
    name: 'Urban Fuel',
    type: 'Restaurante',
    location: 'Madrid, España',
    project: 'Heartbeat Urban Madrid',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cuisineType: 'Bowl saludable',
    description: 'Restaurante rápido dentro del centro urbano con foco en nutrición deportiva y producto local.',
    seasonalMenu: true,
    km0Focus: true,
    localProducers: ['Huertas periurbanas', 'Productores de Madrid'],
    features: ['Menú post-entreno', 'Bowl personalizable', 'Sin ultraprocesados', 'Take away sostenible'],
    integratedWith: ['Centro Urban', 'Membresía deportiva']
  }
];

export const KM0_PHILOSOPHY = {
  whatItMeans: [
    {
      title: 'Producto local',
      description: 'Alimentos producidos en un radio cercano al punto de consumo.'
    },
    {
      title: 'Reducción de transporte',
      description: 'Menos kilómetros recorridos significa menor huella de carbono.'
    },
    {
      title: 'Economía regional activa',
      description: 'El dinero se queda en la comunidad y activa la economía local.'
    },
    {
      title: 'Temporada real',
      description: 'Producto de temporada natural, sin forzar cultivos fuera de ciclo.'
    }
  ],
  whyWeDoIt: [
    {
      title: 'Mejora nutricional',
      description: 'Producto más fresco conserva mejor sus propiedades nutricionales.'
    },
    {
      title: 'Sostenibilidad',
      description: 'Reducción drástica de la huella de carbono del sistema alimentario.'
    },
    {
      title: 'Apoyo a productores',
      description: 'Relación directa con productores locales y precios justos.'
    },
    {
      title: 'Trazabilidad',
      description: 'Sabes de dónde viene tu comida y quién la produjo.'
    }
  ],
  howItWorks: [
    {
      title: 'Acuerdos con productores',
      description: 'Colaboraciones directas con agricultores, ganaderos y pescadores locales.'
    },
    {
      title: 'Carta de temporada',
      description: 'Los menús se adaptan a lo que produce la región en cada momento.'
    },
    {
      title: 'Supermercados curados',
      description: 'Selección consciente de producto local y ecológico en nuestros mercados.'
    },
    {
      title: 'Integración total',
      description: 'Conectado con centros deportivos, alojamiento y eventos del ecosistema.'
    }
  ],
  realImpact: [
    {
      title: 'Menor huella de carbono',
      description: 'Reducción del 70% en emisiones de transporte alimentario.'
    },
    {
      title: 'Comunidad productiva activa',
      description: 'Más de 50 productores locales en red directa.'
    },
    {
      title: 'Educación alimentaria',
      description: 'Talleres, eventos y comunicación sobre alimentación consciente.'
    }
  ]
};

export const ECOSYSTEM_INTEGRATION = [
  {
    title: 'Entrena y come en el mismo proyecto',
    description: 'Acceso directo desde el centro deportivo a restauración integrada.',
    relatedLinks: ['/prototype/centros']
  },
  {
    title: 'Alojamiento con alimentación consciente',
    description: 'Los espacios de alojamiento están conectados con restaurantes y supermercados KM0.',
    relatedLinks: ['/prototype/alojamiento']
  },
  {
    title: 'Eventos gastronómicos',
    description: 'Participación en talleres, catas y encuentros con productores locales.',
    relatedLinks: ['/prototype/eventos', '/prototype/heartbeat-life']
  }
];

export function filterFoodSpaces(
  type?: 'Restaurante' | 'Supermercado' | '',
  location?: string
): FoodSpace[] {
  let filtered = FOOD_SPACES;

  if (type) {
    filtered = filtered.filter(space => space.type === type);
  }

  if (location && location.trim() !== '') {
    filtered = filtered.filter(space =>
      space.location.toLowerCase().includes(location.toLowerCase()) ||
      space.project.toLowerCase().includes(location.toLowerCase())
    );
  }

  return filtered;
}
