import { Trees, Building, MapPin, Coffee, Cpu, ShoppingBag, Dumbbell, Activity, Sun, Umbrella } from "lucide-react";

export interface HeartbeatType {
  id: string;
  title: string;
  subtitle: string;
  valueProp: string;
  status: 'active' | 'development';
  icon: any;
  image: string;
  description: string;
  moments: { title: string; image: string; category: string }[];
  locations: string[];
  relatedTypes: string[];
  ctaContext: 'places' | 'sports' | 'waitlist';
  hidden?: boolean; // Nueva propiedad para ocultar sub-tipos del grid principal
}

export const HEARTBEAT_TYPES: HeartbeatType[] = [
  // 1. LIFE (Categoría Madre)
  {
    id: "life",
    title: "Life",
    subtitle: "El origen de la desconexión. Reservas y Resorts.",
    valueProp: "Elige tu nivel de inmersión: Santuario salvaje o Refugio confortable.",
    status: 'active',
    icon: Trees,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    description: "Life es nuestra división dedicada al descanso profundo y la regeneración. Hemos creado dos caminos para volver a la naturaleza: 'Life Reserve' para la inmersión total y 'Life Resort' para la hospitalidad consciente.",
    moments: [
      { title: "Silencio Absoluto", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80", category: "Esencia" },
      { title: "Arquitectura Invisible", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80", category: "Diseño" },
      { title: "Tiempo Lento", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80", category: "Ritmo" }
    ],
    locations: ["pyrenees", "bcn-beach"],
    relatedTypes: ["life-reserve-item", "life-resort-item"], // Enlaces a los sub-tipos
    ctaContext: 'places'
  },
  // 1.1 Life Reserve (Sub-tipo)
  {
    id: "life-reserve-item",
    title: "Life Reserve",
    subtitle: "Santuarios naturales protegidos.",
    valueProp: "Inmersión total en lo salvaje. Sin wifi, solo biología.",
    status: 'active',
    icon: Trees,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    description: "Las Reservas son espacios donde la naturaleza manda. Ubicadas en parques nacionales o zonas protegidas, aquí la arquitectura es mínima y la experiencia es cruda. Es el destino para el 'Deep Rest' y la desconexión digital radical.",
    moments: [
      { title: "Forest Bathing", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80", category: "Mindfulness" },
      { title: "Dark Sky Stargazing", image: "https://images.unsplash.com/photo-1534234828563-02511c75626d?auto=format&fit=crop&q=80", category: "Naturaleza" },
      { title: "Cabañas Aisladas", image: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80", category: "Estancia" }
    ],
    locations: ["pyrenees"],
    relatedTypes: ["life-resort-item", "km0"],
    ctaContext: 'places',
    hidden: true
  },
  // 1.2 Life Resort (Sub-tipo)
  {
    id: "life-resort-item",
    title: "Life Resort",
    subtitle: "Hospitalidad regenerativa de alto confort.",
    valueProp: "Lujo sostenible donde el descanso es una ciencia.",
    status: 'active',
    icon: Sun,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    description: "Life Resort redefine el hotel de lujo. Aquí el confort no está reñido con la consciencia. Disfruta de spas de recuperación, gastronomía orgánica y suites diseñadas para optimizar tu ciclo circadiano.",
    moments: [
      { title: "Spa Glaciar", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", category: "Relax" },
      { title: "Organic Bedding", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80", category: "Confort" },
      { title: "Infinity Pool", image: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?auto=format&fit=crop&q=80", category: "Agua" }
    ],
    locations: ["bcn-beach", "tulum-eco (2026)"],
    relatedTypes: ["life-reserve-item", "multisport"],
    ctaContext: 'places',
    hidden: true
  },
  
  // Resto de tipos...
  {
    id: "multisport",
    title: "Centros Multideportivos",
    subtitle: "Espacios de alto rendimiento para múltiples disciplinas.",
    valueProp: "Potencia tu cuerpo en comunidad con instalaciones de élite.",
    status: 'active',
    icon: Activity,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    description: "El núcleo de nuestra actividad física. Grandes superficies donde conviven el boxeo, la escalada, el yoga y la natación. Diseñados para eliminar la fricción entre deportes y fomentar el atleta híbrido.",
    moments: [
      { title: "Competición Inter-disciplina", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80", category: "Evento" },
      { title: "Recovery Zone", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", category: "Salud" },
      { title: "Social Lounge", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80", category: "Comunidad" }
    ],
    locations: ["madrid-hub", "valencia-urban"],
    relatedTypes: ["tech", "urban"],
    ctaContext: 'places'
  },
  {
    id: "hotels",
    title: "Hoteles Sostenibles",
    subtitle: "Alojamientos eco-conscientes integrados en el entorno.",
    valueProp: "Descanso profundo con huella de carbono negativa.",
    status: 'active',
    icon: Building,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    description: "Dormir es la base del rendimiento. Nuestros hoteles están construidos con materiales locales, operan con energía 100% renovable y ofrecen habitaciones diseñadas científicamente para optimizar el ciclo circadiano.",
    moments: [
      { title: "Circadian Lighting", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80", category: "Tech" },
      { title: "Organic Bedding", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80", category: "Confort" },
      { title: "Farm-to-Table Breakfast", image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80", category: "Nutrición" }
    ],
    locations: ["bcn-beach", "tulum-eco (2026)"],
    relatedTypes: ["life", "km0"],
    ctaContext: 'places'
  },
  {
    id: "urban",
    title: "Heartbeat Urban",
    subtitle: "Antiguos centros comerciales renacidos como hubs de salud.",
    valueProp: "Transforma el consumo masivo en bienestar colectivo.",
    status: 'active',
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description: "Nuestra estrategia de regeneración urbana. Adquirimos infraestructuras obsoletas (parkings, naves, centros comerciales) y las devolvemos a la ciudad como pulmones verdes y espacios de movimiento social.",
    moments: [
      { title: "Rooftop Park", image: "https://images.unsplash.com/photo-1596230529625-7ee10f7b09b6?auto=format&fit=crop&q=80", category: "Arquitectura" },
      { title: "Coworking Activo", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", category: "Trabajo" },
      { title: "Mercado Local", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80", category: "Comunidad" }
    ],
    locations: ["madrid-hub", "london-dock (2025)"],
    relatedTypes: ["multisport", "tech"],
    ctaContext: 'places'
  },
  {
    id: "km0",
    title: "Restaurantes KM0",
    subtitle: "Gastronomía regenerativa con ingredientes locales.",
    valueProp: "Nutre tu organismo apoyando a productores de la zona.",
    status: 'active',
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80",
    description: "La comida es información para tus células. Eliminamos procesados y largas cadenas de transporte. Cocinamos lo que la tierra da en cada estación, maximizando nutrientes y sabor.",
    moments: [
      { title: "Huerto Propio", image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80", category: "Origen" },
      { title: "Talleres de Cocina", image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80", category: "Educación" },
      { title: "Cenas Comunitarias", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", category: "Social" }
    ],
    locations: ["Todas las ubicaciones"],
    relatedTypes: ["life", "hotels"],
    ctaContext: 'places'
  },
  {
    id: "tech",
    title: "Tecnología",
    subtitle: "Ecosistema digital de bio-metría e IA.",
    valueProp: "Datos precisos para sincronizar tu ritmo interno.",
    status: 'active',
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    description: "No usamos tecnología para evadirnos, sino para conocernos. Desde anillos de sueño hasta espejos de entrenamiento inteligentes, todo conectado a la Heartbeat App para darte feedback real sobre tu salud.",
    moments: [
      { title: "Heartbeat App", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80", category: "Software" },
      { title: "Bio-Scanners", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80", category: "Hardware" },
      { title: "AI Coach", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80", category: "Inteligencia" }
    ],
    locations: ["App Store", "Google Play"],
    relatedTypes: ["urban", "multisport"],
    ctaContext: 'waitlist'
  },
  {
    id: "clothes",
    title: "Heartbeat Clothes",
    subtitle: "Tejidos técnicos 100% biodegradables.",
    valueProp: "Rendimiento deportivo sin residuos plásticos.",
    status: 'development',
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
    description: "Estamos reinventando la ropa deportiva. Adiós al poliéster virgen. Hola a las fibras de algas y micelio. Ropa que respira contigo y vuelve a la tierra cuando terminas de usarla.",
    moments: [],
    locations: [],
    relatedTypes: [],
    ctaContext: 'waitlist'
  },
  {
    id: "machines",
    title: "Heartbeat Machines",
    subtitle: "Equipamiento que genera energía limpia al usarlo.",
    valueProp: "Tu sudor ilumina el centro.",
    status: 'development',
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    description: "La energía cinética humana es la fuente renovable más desaprovechada. Nuestras bicicletas y remos convierten tus vatios en electricidad para la red del edificio.",
    moments: [],
    locations: [],
    relatedTypes: [],
    ctaContext: 'waitlist'
  }
];
