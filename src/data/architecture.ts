import { Activity, MapPin, Zap, Leaf, Heart, BookOpen, Globe, Calendar } from "lucide-react";

// 1. DEFINICIÓN DEL MENÚ Y SITEMAP (NIVEL 1 Y 2)
export const SITE_STRUCTURE = [
  {
    id: "deportes",
    label: "Deportes",
    path: "/deportes",
    description: "Entrada por Actividad (El 'Qué').",
    icon: Activity,
    children: [
      { label: "High Energy", description: "Boxing, Crossfit, HIIT" },
      { label: "Flow & Balance", description: "Yoga, Pilates, Movimiento" },
      { label: "Outdoor", description: "Surf, Escalada, Running" },
      { label: "Tech Sports", description: "Simuladores, e-Sports físicos" }
    ]
  },
  {
    id: "lugares",
    label: "Lugares",
    path: "/lugares",
    description: "Entrada por Ubicación (El 'Dónde').",
    icon: MapPin,
    children: [
      { label: "Urban Hubs", description: "Centros tecnológicos en ciudad" },
      { label: "Nature Bases", description: "Retiros y regeneración" },
      { label: "Partner Spots", description: "Espacios certificados" }
    ]
  },
  {
    id: "universo",
    label: "Universo",
    path: "/universo",
    description: "Catálogo de formatos y conceptos (El 'Ecosistema').",
    icon: Globe,
    children: [
      { label: "Life Reserves", description: "Santuarios naturales" },
      { label: "Urban Hubs", description: "Regeneración de ciudad" },
      { label: "Hoteles", description: "Hospitalidad sostenible" },
      { label: "Tech", description: "Apps y Wearables" }
    ]
  },
  // Reemplazamos "Heartbeats" (que es conceptual) por "Agenda" en el menú principal para más utilidad,
  // o mantenemos Heartbeats si es crítico. El usuario pidió "Sección /agenda".
  // Mantendré Heartbeats como concepto de búsqueda en Home, pero en el menú pondré Agenda para acción.
  // AJUSTE: El usuario pidió "Define el menú final con máximo 6 secciones".
  // Voy a incluir Agenda aquí.
  {
    id: "agenda",
    label: "Agenda",
    path: "/agenda",
    description: "Eventos, clases especiales y viajes.",
    icon: Calendar,
    children: [
      { label: "Eventos", description: "Actividades puntuales" },
      { label: "Retiros", description: "Viajes de inmersión" }
    ]
  },
  {
    id: "journal",
    label: "Journal",
    path: "/historias", // Updated path
    description: "El pulso de la marca. Historias vivas.",
    icon: BookOpen,
    children: [
      { label: "Naturaleza", description: "Ciencia y entorno" },
      { label: "Innovación", description: "Tech & Human" }
    ]
  }
];

// 2. DEFINICIÓN DE FLUJOS DE USUARIO
export const USER_FLOWS = [
  {
    id: "flow-a",
    title: "A) Deporte → Reserva",
    description: "El usuario sabe QUÉ quiere hacer (ej: Boxing).",
    steps: [
      { 
        label: "Menú: Deportes", 
        detail: "Selecciona 'Boxing' en el mega-menú o landing de deportes.",
        screen: "Navegación / Home"
      },
      { 
        label: "Landing de Deporte", 
        detail: "Inspiración visual. Entiende la filosofía del Boxing aquí.",
        screen: "Página: Boxing Discipline"
      },
      { 
        label: "Selector de Centro", 
        detail: "Módulo: 'Dónde practicarlo'. Filtra por su ciudad.",
        screen: "Lista de Ubicaciones (Filtrada)"
      },
      { 
        label: "Página de Ubicación", 
        detail: "Confirma que el centro le encaja (horarios/vibe).",
        screen: "Página: Urban Hub Madrid"
      },
      { 
        label: "Acción: Reservar", 
        detail: "CTA Flotante o Sticky: 'Reservar Clase'.",
        screen: "Checkout / Booking Engine"
      }
    ]
  },
  {
    id: "flow-b",
    title: "B) Ubicación → Reserva",
    description: "El usuario busca cercanía o pertenencia a un lugar.",
    steps: [
      { 
        label: "Menú: Lugares", 
        detail: "Busca en mapa o lista el centro más cercano.",
        screen: "Directorio de Lugares"
      },
      { 
        label: "Página de Ubicación", 
        detail: "Aterriza en la 'Home' del centro. Ve el ambiente.",
        screen: "Página: Nature Base Pyrenees"
      },
      { 
        label: "Explorar Oferta", 
        detail: "Hace scroll hasta 'Actividades Disponibles'.",
        screen: "Sección: Deportes & Horarios"
      },
      { 
        label: "Elección de Actividad", 
        detail: "Elige 'Escalada' dentro del contexto del centro.",
        screen: "Modal/Detalle de Actividad Local"
      },
      { 
        label: "Acción: Reservar", 
        detail: "Reserva su slot específico en ese lugar.",
        screen: "Checkout"
      }
    ]
  },
  {
    id: "flow-c",
    title: "C) Heartbeat (Vibe) → Descubrimiento",
    description: "El usuario busca una sensación o propósito, no una actividad concreta.",
    steps: [
      { 
        label: "Menú: Heartbeats", 
        detail: "Elige 'Regeneration' (Necesito desconectar/sanar).",
        screen: "Selector de Mood"
      },
      { 
        label: "Página de Descubrimiento", 
        detail: "Mix de contenido: Yoga suave, Spa, Retiros de silencio.",
        screen: "Landing: Regeneration Vibe"
      },
      { 
        label: "Inspiración → Acción", 
        detail: "Le atrae un 'Retiro de Fin de Semana' sugerido.",
        screen: "Card de Experiencia/Proyecto"
      },
      { 
        label: "Detalle de Experiencia", 
        detail: "Ve info del retiro en una ubicación natural.",
        screen: "Página: Experiencia Concreta"
      },
      { 
        label: "Acción: Unirse", 
        detail: "Se apunta a la lista o reserva plaza.",
        screen: "Formulario de Registro"
      }
    ]
  }
];

// MOCK DATA PARA PROTOTIPO (Actualizado ligeramente)
export const MOCK_SPORTS = [
  { id: "boxing", name: "Boxing", image: "🥊", category: "High Energy" },
  { id: "yoga", name: "Yoga", image: "🧘", category: "Flow" },
  { id: "climbing", name: "Escalada", image: "🧗", category: "Outdoor" },
  { id: "simulators", name: "Sim Racing", image: "🏎️", category: "Tech" },
];

export const MOCK_LOCATIONS = [
  { id: "madrid-hub", name: "Madrid Tech Hub", type: "Urban", sports: ["boxing", "simulators"] },
  { id: "bcn-beach", name: "Barcelona Coast", type: "Nature", sports: ["yoga", "outdoor"] },
  { id: "pyrenees", name: "Pyrenees Base", type: "Nature", sports: ["climbing", "yoga"] },
];
