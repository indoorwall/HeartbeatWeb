import { Activity, MapPin, Heart, Zap, Leaf, Coffee, Cpu, Building, Trees, ShoppingBag, Dumbbell } from "lucide-react";

// REBRAND: Heartbeat (Sin Planet)
export const HOME_CONTENT = {
  hero: {
    h1: "HEARTBEAT.",
    subclaim: "Tu alma tecnológica. Una interfaz viva para elevar tu consciencia a través del movimiento.",
    ctaPrimary: "Sincronizar",
    ctaSecondary: "Explorar el alma"
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
      title: "Elige tu templo",
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
      cta: "Descubrir Vibe",
      icon: Heart,
      path: "/prototype/heartbeats",
      color: "bg-purple-50 text-purple-900 border-purple-100"
    }
  ],
  sportsGrid: [
    { name: "Boxing", phrase: "Enfoque absoluto.", id: "boxing" },
    { name: "Running", phrase: "Meditación activa.", id: "running" },
    { name: "Escalada", phrase: "Ascenso interior.", id: "climbing" },
    { name: "Simuladores", phrase: "Fusión hombre-máquina.", id: "simulators" },
    { name: "Surf", phrase: "Fluir con el todo.", id: "surf" },
    { name: "Crossfit", phrase: "Potencia vital.", id: "crossfit" },
    { name: "Skate", phrase: "Creatividad urbana.", id: "skate" }
  ],
  heartbeatTypes: [
    // CAMBIO: Life Reserve -> Life
    { title: "Life", desc: "Santuarios y Resorts regenerativos.", icon: Trees },
    { title: "Centros Multideportivos", desc: "Reactores de energía.", icon: Activity },
    { title: "Hoteles Sostenibles", desc: "Descanso del alma.", icon: Building },
    { title: "Heartbeat Urban", desc: "Renacimiento de la ciudad.", icon: MapPin },
    { title: "Restaurantes KM0", desc: "Alimento consciente.", icon: Coffee },
    { title: "Tecnología", desc: "Bio-datos y espíritu.", icon: Cpu },
    { title: "Ropa (WIP)", desc: "Segunda piel.", icon: ShoppingBag, disabled: true },
    { title: "Máquinas (WIP)", desc: "Energía cinética.", icon: Dumbbell, disabled: true }
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
    cta: "Sincronizar"
  }
};
