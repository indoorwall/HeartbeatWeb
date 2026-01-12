import { Activity, Wind, Zap, Mountain, Waves, Box, Gauge, Trophy } from "lucide-react";

// Tipos para TypeScript actualizados con los nuevos Tipos de Heartbeat
export type Environment = 'Indoor' | 'Outdoor' | 'Hybrid';
// Nuevos tipos basados en el Universo Heartbeat
export type HeartbeatType = 'Life' | 'Centros Multideportivos' | 'Heartbeat Urban' | 'Hoteles Sostenibles' | 'Restaurantes KM0' | 'Tecnología';

export interface Sport {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  environment: Environment;
  intensity: 'Alta' | 'Media' | 'Flexible';
  image: string;
  icon: any;
  relatedExperiences: RelatedExperience[];
}

export interface Location {
  id: string;
  name: string;
  city: string;
  heartbeatType: HeartbeatType;
  sports: string[]; // IDs de deportes
  image: string;
  tags: string[];
  // Campos extendidos para la página de detalle
  subtitle: string;
  description: string;
  moments: { title: string; image: string; category: string }[];
  uniqueFeatures: string[];
  services: string[];
  agenda: { day: string; month: string; title: string; type: string }[];
  codes: string[];
  address: string;
  schedule: string;
  coordinates: { lat: number; lng: number }; // Simulado para mapa
}

export interface RelatedExperience {
  title: string;
  category: string;
  image: string;
}

// --- DATA DEPORTES (Mantenida igual) ---
export const SPORTS_DATA: Sport[] = [
  {
    id: "boxing",
    name: "Boxing",
    shortDesc: "Golpea con propósito. Técnica y liberación.",
    fullDesc: "Más que golpes, es una danza de estrategia y resistencia. En Heartbeat, el boxeo es una herramienta para enfocar la mente y liberar tensiones, combinando técnica clásica con entrenamiento funcional de alta intensidad.",
    environment: "Indoor",
    intensity: "Alta",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80",
    icon: Box,
    relatedExperiences: [
      { title: "Cryo Recovery", category: "Recuperación", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80" },
      { title: "Protein Bar", category: "Nutrición", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80" },
      { title: "Mindset Workshop", category: "Mental", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "running",
    name: "Running",
    shortDesc: "Medita en movimiento. Ciudad y montaña.",
    fullDesc: "Redescubre el acto de correr. Ya sea en nuestras pistas técnicas urbanas o en senderos naturales protegidos, el running en Heartbeat se trata de ritmo, respiración y conexión con el entorno.",
    environment: "Outdoor",
    intensity: "Media",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80",
    icon: Wind,
    relatedExperiences: [
      { title: "Análisis de Pisada", category: "Tecnología", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80" },
      { title: "Club de Corredores", category: "Comunidad", image: "https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "climbing",
    name: "Escalada",
    shortDesc: "Resuelve el problema. Fuerza y mente.",
    fullDesc: "La escalada es el puzzle definitivo para tu cuerpo. Nuestros muros indoor simulan roca real, y nuestras salidas outdoor te llevan a los mejores picos. Desarrolla fuerza, equilibrio y una concentración absoluta.",
    environment: "Hybrid",
    intensity: "Alta",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80",
    icon: Mountain,
    relatedExperiences: [
      { title: "Yoga para Escaladores", category: "Flexibilidad", image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80" },
      { title: "Viajes de Fin de Semana", category: "Retiros", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "simulators",
    name: "Simuladores",
    shortDesc: "Velocidad real en entorno virtual.",
    fullDesc: "Entrena como un piloto profesional. Nuestros simuladores de F1 y GT ofrecen feedback háptico real y telemetría avanzada para mejorar tus reflejos y concentración sin riesgo físico.",
    environment: "Indoor",
    intensity: "Media",
    image: "https://images.unsplash.com/photo-1626855227702-8c42a033c56e?auto=format&fit=crop&q=80",
    icon: Gauge,
    relatedExperiences: [
      { title: "Neuro-Training", category: "Cognitivo", image: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80" },
      { title: "E-Sports League", category: "Competición", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "surf",
    name: "Surf",
    shortDesc: "Fluye con la energía del océano.",
    fullDesc: "Más que un deporte, una filosofía. Aprende a leer las olas, mejora tu equilibrio y conecta con la fuerza bruta de la naturaleza en nuestros spots costeros certificados.",
    environment: "Outdoor",
    intensity: "Alta",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
    icon: Waves,
    relatedExperiences: [
      { title: "Breathwork", category: "Respiración", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80" },
      { title: "Beach Cleanups", category: "Impacto", image: "https://images.unsplash.com/photo-1618477461853-5f8dd3791985?auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "crossfit",
    name: "Crossfit",
    shortDesc: "Funcionalidad y potencia pura.",
    fullDesc: "Prepárate para cualquier desafío. Entrenamientos constantemente variados, movimientos funcionales ejecutados a alta intensidad en un entorno de comunidad que te empuja a ser mejor.",
    environment: "Indoor",
    intensity: "Alta",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    icon: Zap,
    relatedExperiences: [
      { title: "Fisioterapia Deportiva", category: "Salud", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" },
      { title: "Paleo Kitchen", category: "Nutrición", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "skate",
    name: "Skate",
    shortDesc: "Creatividad sobre ruedas.",
    fullDesc: "La ciudad es tu patio de recreo. Domina el asfalto en nuestros parques diseñados para el flujo y la técnica. Clases para principiantes y sesiones libres para perfeccionar tu estilo.",
    environment: "Hybrid",
    intensity: "Media",
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80",
    icon: Trophy,
    relatedExperiences: [
      { title: "Street Art Workshop", category: "Cultura", image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80" },
      { title: "Filmmaking", category: "Creatividad", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80" }
    ]
  }
];

// --- DATA UBICACIONES (Actualizada con nuevos HeartbeatTypes) ---
export const LOCATIONS_DATA: Location[] = [
  { 
    id: "madrid-hub", 
    name: "Madrid Tech Hub", 
    city: "Madrid", 
    heartbeatType: "Heartbeat Urban", // Actualizado
    sports: ["boxing", "simulators", "crossfit"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    tags: ["Indoor", "Tech", "Coworking"],
    subtitle: "Donde la tecnología amplifica tu potencial humano.",
    description: "Un oasis urbano de alto rendimiento. Aquí fusionamos entrenamiento físico con bio-hacking y recuperación avanzada. Diseñado para el atleta corporativo que busca optimizar cada minuto de su día.",
    moments: [
      { title: "Simuladores F1", image: "https://images.unsplash.com/photo-1626855227702-8c42a033c56e?auto=format&fit=crop&q=80", category: "Tech" },
      { title: "Recovery Lounge", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80", category: "Relax" },
      { title: "Afterwork Sessions", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80", category: "Social" }
    ],
    uniqueFeatures: [
      "Laboratorio de Bio-metría en tiempo real.",
      "Zona de Coworking insonorizada con aire purificado.",
      "Ring de boxeo con sensores de impacto."
    ],
    services: ["Vestuarios Premium", "Toallas & Amenities", "Cafetería Nutricional", "Parking Privado", "Wifi 6E"],
    agenda: [
      { day: "18", month: "OCT", title: "Bio-Hacking 101", type: "Workshop" },
      { day: "22", month: "OCT", title: "Torneo Sim Racing", type: "Competición" }
    ],
    codes: [
      "Tecnología con propósito: úsala para mejorar, no para distraerte.",
      "Respeto al foco ajeno en zonas de trabajo.",
      "La comunidad se construye saludando."
    ],
    address: "C/ Innovación 42, Distrito Tech, Madrid",
    schedule: "L-V: 06:00 - 23:00 | S-D: 08:00 - 21:00",
    coordinates: { lat: 40.4168, lng: -3.7038 }
  },
  { 
    id: "bcn-beach", 
    name: "Barcelona Coast", 
    city: "Barcelona", 
    heartbeatType: "Life", // Actualizado (Life Resort/Reserve)
    sports: ["surf", "skate", "running", "yoga"],
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
    tags: ["Outdoor", "Playa", "Solar"],
    subtitle: "La energía del Mediterráneo como motor de entrenamiento.",
    description: "Ubicado a pie de playa, este centro respira salitre y libertad. Es el punto de encuentro para quienes necesitan el horizonte abierto para entrenar. Surf al amanecer, skate al atardecer y yoga bajo el sol.",
    moments: [
      { title: "Sunrise Surf", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80", category: "Action" },
      { title: "Skate Bowl", image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80", category: "Fun" },
      { title: "Beach Yoga", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80", category: "Balance" }
    ],
    uniqueFeatures: [
      "Acceso directo a la playa con duchas exteriores.",
      "Bowl de skate de hormigón pulido.",
      "Alquiler de tablas y neoprenos incluido."
    ],
    services: ["Taquillas de Surf", "Duchas Exteriores", "Smoothie Bar", "Tienda Técnica"],
    agenda: [
      { day: "20", month: "OCT", title: "Limpieza de Playa", type: "Comunidad" },
      { day: "25", month: "OCT", title: "Full Moon Yoga", type: "Experiencia" }
    ],
    codes: [
      "Respeta el mar y a los locales.",
      "Deja la arena en la playa, no en el vestuario.",
      "Buena vibra obligatoria en el pico."
    ],
    address: "Paseo Marítimo 10, Barceloneta, BCN",
    schedule: "L-D: 07:00 - 22:00 (Según mareas)",
    coordinates: { lat: 41.3851, lng: 2.1734 }
  },
  { 
    id: "pyrenees", 
    name: "Pyrenees Base", 
    city: "Huesca", 
    heartbeatType: "Life", // Actualizado (Life Reserve)
    sports: ["climbing", "running", "yoga"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    tags: ["Nature", "Retiro", "Silencio"],
    subtitle: "Tu refugio de altura para reconectar con lo salvaje.",
    description: "Lejos del ruido, cerca del cielo. Pyrenees Base es un centro de alto rendimiento en la naturaleza. Aquí vienes a desconectar del estrés digital y a reconectar con tu biología a través del aire puro y el movimiento primario.",
    moments: [
      { title: "Escalada en Roca", image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80", category: "Adventure" },
      { title: "Spa Glaciar", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", category: "Relax" },
      { title: "Fuego Nocturno", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80", category: "Community" }
    ],
    uniqueFeatures: [
      "Muro de escalada con vistas panorámicas.",
      "Spa de contraste con agua de deshielo.",
      "Cabañas de aislamiento para deep work."
    ],
    services: ["Alojamiento", "Restaurante KM0", "Guías de Montaña", "Alquiler de Material"],
    agenda: [
      { day: "12", month: "NOV", title: "Retiro de Silencio", type: "Retreat" },
      { day: "15", month: "NOV", title: "Trail Running Camp", type: "Training" }
    ],
    codes: [
      "El silencio es un lujo, cuídalo.",
      "No dejes rastro en la montaña.",
      "Aquí el wifi es opcional, la conexión humana no."
    ],
    address: "Valle de Benasque, Huesca",
    schedule: "Abierto 24/7 para residentes",
    coordinates: { lat: 42.6056, lng: 0.5234 }
  },
  { 
    id: "valencia-urban", 
    name: "Valencia Green", 
    city: "Valencia", 
    heartbeatType: "Centros Multideportivos", // Actualizado
    sports: ["running", "crossfit", "skate"],
    image: "https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80",
    tags: ["Urban", "Park", "Open"],
    subtitle: "El pulmón verde donde la ciudad respira deporte.",
    description: "Integrado en el antiguo cauce del río, este espacio elimina las barreras entre el gimnasio y el parque. Entrenamientos funcionales al aire libre, club de corredores y una comunidad que celebra el movimiento bajo los árboles.",
    moments: [
      { title: "Running Club", image: "https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80", category: "Team" },
      { title: "Outdoor Box", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80", category: "Power" },
      { title: "Picnic Area", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80", category: "Relax" }
    ],
    uniqueFeatures: [
      "Box de Crossfit 100% exterior techado.",
      "Circuito de calistenia profesional.",
      "Punto de encuentro para corredores con taquillas."
    ],
    services: ["Fuentes Filtradas", "Taquillas Inteligentes", "Zona de Estiramientos", "Kiosco Saludable"],
    agenda: [
      { day: "05", month: "OCT", title: "Maratón Valencia Warm-up", type: "Evento" },
      { day: "10", month: "OCT", title: "Calistenia Jam", type: "Competición" }
    ],
    codes: [
      "El parque es de todos, compártelo.",
      "Anima al que se esfuerza a tu lado.",
      "Mantén limpio tu espacio de entreno."
    ],
    address: "Jardín del Turia, Tramo 5, Valencia",
    schedule: "L-D: 06:00 - 00:00",
    coordinates: { lat: 39.4699, lng: -0.3763 }
  }
];
