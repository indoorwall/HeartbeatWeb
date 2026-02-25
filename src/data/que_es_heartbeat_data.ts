import { Activity, Home, Coffee, MapPin, Users, Cpu, Zap } from 'lucide-react';

export const QUE_ES_HEARTBEAT_DATA = {
  hero: {
    title: "Qué es Heartbeat",
    subtitle: "Un modelo replicable que integra deporte, territorio, tecnología y comunidad.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    cta: "Explorar proyectos",
    ctaLink: "/prototype/lugares"
  },

  essence: {
    text: "Heartbeat es un sistema tecnológico que integra una pulsera, inteligencia artificial y espacios físicos (centros, hoteles, restaurantes, hogares) para optimizar tu descanso y rendimiento."
  },

  whatIsNot: [
    "No es solo un gimnasio.",
    "No es solo un resort.",
    "No es una cadena de hoteles.",
    "No son proyectos aislados.",
    "No es tecnología por sí sola."
  ],

  layers: {
    nucleus: {
      title: "NÚCLEO",
      item: "Pulsera + IA",
      icon: Cpu
    },
    verticals: {
      title: "MANIFESTACIONES FÍSICAS",
      items: [
        { name: "Centros deportivos", icon: Activity },
        { name: "Alojamiento", icon: Home },
        { name: "Alimentación", icon: Coffee },
        { name: "Urban / regeneración", icon: MapPin },
        { name: "Comunidad y eventos", icon: Users }
      ]
    },
    transversal: {
      title: "OBJETIVO",
      item: "Dormir mejor",
      icon: Zap,
      description: "La pulsera mide, la IA interpreta, el entorno responde y tú duermes mejor. Todo el sistema trabaja con un propósito claro."
    }
  },

  technology: {
    title: "Tecnología con propósito",
    points: [
      "No invade.",
      "No sustituye la experiencia física.",
      "Conecta datos y bienestar.",
      "Integra centros y viviendas.",
      "Permite gestión eficiente."
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },

  developmentTypes: [
    {
      id: "centro",
      name: "Centro individual",
      description: "Centro deportivo especializado con instalaciones profesionales y comunidad local.",
      link: "/prototype/centros",
      layers: ["Centro"]
    },
    {
      id: "reserve",
      name: "Life Reserve",
      description: "Desarrollo inmobiliario con acceso a centros deportivos en el territorio.",
      link: "/prototype/life-reserve",
      layers: ["Centro", "Alojamiento", "Tecnología"]
    },
    {
      id: "resort",
      name: "Life Resort",
      description: "Experiencia completa con centro, hotel, alimentación y programas de bienestar.",
      link: "/prototype/life-resort",
      layers: ["Centro", "Alojamiento", "Alimentación", "Tecnología"]
    },
    {
      id: "urban",
      name: "Proyecto Urban",
      description: "Regeneración urbana que integra deporte, vivienda, comercio y comunidad.",
      link: "/prototype/heartbeat-types",
      layers: ["Centro", "Alojamiento", "Alimentación", "Urban", "Tecnología"]
    }
  ],

  replication: {
    title: "Cómo se replica",
    points: [
      "Se adapta a cada ubicación.",
      "Se construye por fases.",
      "Puede comenzar por un centro y crecer.",
      "Mantiene coherencia estructural."
    ]
  },

  examples: [
    {
      id: "miches",
      name: "Miches",
      location: "República Dominicana",
      type: "Life Resort",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80",
      layers: ["Centro", "Alojamiento", "Alimentación", "Tecnología"],
      link: "/prototype/lugares"
    },
    {
      id: "asturias",
      name: "Asturias",
      location: "España",
      type: "Life Reserve",
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80",
      layers: ["Centro", "Alojamiento", "Tecnología"],
      link: "/prototype/lugares"
    },
    {
      id: "madrid",
      name: "Madrid",
      location: "España",
      type: "Urban",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80",
      layers: ["Centro", "Urban", "Alimentación", "Tecnología"],
      link: "/prototype/lugares"
    },
    {
      id: "vilanova",
      name: "Vilanova",
      location: "España",
      type: "Life Resort",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80",
      layers: ["Centro", "Alojamiento", "Alimentación", "Tecnología"],
      link: "/prototype/lugares"
    }
  ],

  finalCta: {
    title: "Explora cómo se construye Heartbeat",
    cta: "Ver ubicaciones",
    link: "/prototype/lugares"
  }
};

export const layerIcons: Record<string, any> = {
  "Centro": Activity,
  "Alojamiento": Home,
  "Alimentación": Coffee,
  "Urban": MapPin,
  "Tecnología": Cpu
};
