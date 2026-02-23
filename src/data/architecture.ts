import { Activity, MapPin, Zap, Leaf, Heart, BookOpen, Globe, Calendar } from "lucide-react";

// 1. DEFINICIÓN DEL MENÚ Y SITEMAP (NIVEL 1 Y 2)
export const SITE_STRUCTURE = [
  {
    id: "home",
    label: "Inicio",
    path: "/",
    description: "Página de inicio",
    icon: Heart
  },
  {
    id: "centros",
    label: "Centros Multideportivos",
    path: "/centros",
    description: "Centros deportivos activos y próximos proyectos",
    icon: Activity,
    children: []
  },
  {
    id: "alojamiento",
    label: "Alojamiento",
    path: "/alojamiento",
    description: "Hoteles sostenibles, Heartbeat House y Heartbeat Social",
    icon: MapPin,
    children: []
  },
  {
    id: "invertir",
    label: "Invertir",
    path: "/invertir",
    description: "Proyectos de inversión en desarrollo sostenible",
    icon: Zap,
    children: []
  },
  {
    id: "alimentacion",
    label: "Alimentación",
    path: "/alimentacion",
    description: "Restaurantes KM0 y supermercados sostenibles",
    icon: Leaf,
    children: []
  },
  {
    id: "eventos",
    label: "Eventos",
    path: "/eventos",
    description: "Calendario de eventos deportivos y culturales",
    icon: Calendar,
    children: []
  },
  {
    id: "life",
    label: "Heartbeat Life",
    path: "/life",
    description: "Filosofía, visión y regeneración consciente",
    icon: Heart,
    children: []
  },
  {
    id: "magazine",
    label: "Magazine",
    path: "/magazine",
    description: "Periodismo lento. Cultura, cuerpo y planeta",
    icon: BookOpen,
    children: []
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
        detail: "Confirma que el centro le encaja (horarios/tipo de Heartbeat).",
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
    title: "C) Heartbeat → Descubrimiento",
    description: "El usuario busca una sensación o propósito, no una actividad concreta.",
    steps: [
      { 
        label: "Menú: Ecosistema", 
        detail: "Elige 'Life' (Necesito desconectar/sanar).",
        screen: "Selector de Mood"
      },
      { 
        label: "Página de Descubrimiento", 
        detail: "Mix de contenido: Yoga suave, Spa, Retiros de silencio.",
        screen: "Landing: Life"
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
