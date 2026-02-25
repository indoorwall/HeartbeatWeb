import { Activity, MapPin, Heart, Zap, Leaf, Coffee, Cpu, Building, Trees, ShoppingBag, Dumbbell, Watch, Brain, Home as HomeIcon } from "lucide-react";

// REBRAND: Heartbeat (Sin Planet)
export const HOME_CONTENT = {
  hero: {
    h1: "HEARTBEAT.",
    subclaim: "Un sistema inteligente que mide, interpreta y adapta tu entorno para que duermas mejor.",
    ctaPrimary: "Reservar",
    ctaSecondary: "Conocer el sistema"
  },

  systemCore: {
    title: "El sistema",
    subtitle: "Tecnología invisible que conecta tu cuerpo con el espacio",
    steps: [
      {
        icon: Watch,
        title: "La pulsera mide",
        description: "Monitoriza tu actividad, recuperación, estrés y patrones de sueño en tiempo real."
      },
      {
        icon: Brain,
        title: "La IA interpreta",
        description: "Analiza tus datos y comprende qué necesitas en cada momento del día."
      },
      {
        icon: HomeIcon,
        title: "El entorno responde",
        description: "Centros, hoteles, restaurantes y tu hogar se adaptan automáticamente a tu estado."
      },
      {
        icon: Heart,
        title: "Duermes mejor",
        description: "Todo el sistema trabaja para optimizar tu descanso y recuperación."
      }
    ],
    image: "https://images.unsplash.com/photo-1544257116-c11aed8f5b43?auto=format&fit=crop&q=80"
  },
  quickAccess: [
    {
      id: "sport",
      title: "Elige tu disciplina",
      phrase: "Movimiento con intención sagrada.",
      cta: "Explorar Disciplinas",
      icon: Activity,
      path: "/prototype/deportes",
      color: "bg-blue-50 text-blue-900 border-blue-100"
    },
    {
      id: "location",
      title: "Elige tu ubicación",
      phrase: "Espacios para reconectar.",
      cta: "Ver Lugares",
      icon: MapPin,
      path: "/prototype/lugares",
      color: "bg-green-50 text-green-900 border-green-100"
    },
    {
      id: "heartbeat",
      title: "Elige tu frecuencia",
      phrase: "¿Qué necesita tu energía hoy?",
      cta: "Descubrir Ecosistema", // CONFIRMADO: Ecosistema
      icon: Heart,
      path: "/prototype/ecosistema", // CONFIRMADO: Ruta correcta
      color: "bg-purple-50 text-purple-900 border-purple-100"
    }
  ],
  sportsGrid: [
    { name: "Boxing", phrase: "Enfoque absoluto.", id: "boxing" },
    { name: "Running", phrase: "Meditación activa.", id: "running" },
    { name: "Escalada", phrase: "Ascenso interior.", id: "escalada" },
    { name: "Simuladores", phrase: "Fusión hombre-máquina.", id: "simuladores" },
    { name: "Surf", phrase: "Fluir con el todo.", id: "surf" },
    { name: "Crossfit", phrase: "Potencia vital.", id: "crossfit" },
    { name: "Skate", phrase: "Creatividad urbana.", id: "skate" }
  ],
  physicalManifestations: {
    title: "Manifestaciones físicas del sistema",
    subtitle: "Espacios donde la tecnología se materializa",
    items: [
      { title: "Centros Multideportivos", desc: "Tu entrenamiento se adapta según tu estado de recuperación.", icon: Activity, id: "multisport", path: "/prototype/centros" },
      { title: "Hoteles Conectados", desc: "Tu habitación responde a tus necesidades de descanso.", icon: Building, id: "hotels", path: "/prototype/alojamiento/hoteles" },
      { title: "Restaurantes KM0", desc: "La IA sugiere qué comer según tu gasto energético.", icon: Coffee, id: "km0", path: "/prototype/alimentacion" },
      { title: "Life Reserve & Resort", desc: "Territorios completos conectados al sistema.", icon: Trees, id: "life", path: "/prototype/heartbeat-life" },
      { title: "Heartbeat Home", desc: "Tu hogar automatizado según tus ritmos biológicos.", icon: HomeIcon, id: "home", path: "/prototype/alojamiento/home" },
      { title: "Urban Hubs", desc: "Regeneración urbana con tecnología integrada.", icon: MapPin, id: "urban", path: "/prototype/ecosistema/urban" }
    ]
  },

  heartbeatTypes: [
    { title: "Life", desc: "Santuarios y Resorts regenerativos.", icon: Trees, id: "life" },
    { title: "Centros Multideportivos", desc: "Reactores de energía.", icon: Activity, id: "multisport" },
    { title: "Hoteles Sostenibles", desc: "Descanso del alma.", icon: Building, id: "hotels" },
    { title: "Heartbeat Urban", desc: "Renacimiento de la ciudad.", icon: MapPin, id: "urban" },
    { title: "Restaurantes KM0", desc: "Alimento consciente.", icon: Coffee, id: "km0" },
    { title: "Tecnología", desc: "Bio-datos y espíritu.", icon: Cpu, id: "tech" },
    { title: "Ropa (WIP)", desc: "Segunda piel.", icon: ShoppingBag, disabled: true, id: "clothes" },
    { title: "Máquinas (WIP)", desc: "Energía cinética.", icon: Dumbbell, disabled: true, id: "machines" }
  ],
  featuredLocations: [
    {
      name: "Madrid Tech Hub",
      type: "Urban Soul",
      sports: ["Boxing", "Simuladores"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
    },
    {
      name: "Pyrenees Base Camp",
      type: "Nature Soul",
      sports: ["Escalada", "Running"],
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80"
    },
    {
      name: "Barcelona Coast",
      type: "Ocean Soul",
      sports: ["Surf", "Yoga"],
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
    }
  ],
  stories: [
    {
      title: "El algoritmo de tu respiración",
      category: "Mindset",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
    },
    {
      title: "Alimentación para la consciencia superior",
      category: "Nutrición",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
    },
    {
      title: "Tech & Spirit: La nueva simbiosis",
      category: "Innovación",
      image: "https://images.unsplash.com/photo-1534258936925-c48947387603?auto=format&fit=crop&q=80"
    }
  ],
  agenda: [
    { day: "12", month: "OCT", title: "Retiro de Inmersión Alpina", type: "Experience" },
    { day: "15", month: "OCT", title: "Masterclass Boxing Pro", type: "Workshop" },
    { day: "20", month: "OCT", title: "Community Run: City Lights", type: "Event" }
  ],
  manifesto: [
    "No somos un gimnasio. No somos una app.",
    "Somos tu alma tecnológica.",
    "La interfaz que conecta tu biología con tu propósito.",
    "Usamos la tecnología para escuchar lo que tu cuerpo grita",
    "y tu mente calla."
  ],
  newsletter: {
    title: "Conecta tu alma.",
    subtitle: "Recibe códigos, rituales y novedades.",
    cta: "Reservar"
  }
};
