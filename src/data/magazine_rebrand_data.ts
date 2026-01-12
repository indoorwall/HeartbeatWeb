import { BookOpen, Map, Activity, Cpu, Leaf, Zap, FileText, Layers, Archive, Mail } from "lucide-react";

// --- TIPOS DE DATOS ---

export interface MagAuthor {
  name: string;
  role: string;
  image: string;
}

export interface MagArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  seriesId?: string; // Pertenece a una serie
  dossierId?: string; // Pertenece a un dossier
  type: 'article' | 'guide' | 'essay' | 'field-note';
  author: MagAuthor;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  isPremium: boolean;
  content?: string; // HTML simulado
}

export interface MagSeries {
  id: string;
  title: string;
  manifesto: string;
  image: string;
  icon: any;
  articles: MagArticle[]; // Artículos asociados
}

export interface MagDossier {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  coverImage: string;
  chapters: { title: string; readTime: string; isPremium: boolean }[];
  status: 'published' | 'coming-soon';
}

export interface MagGuide {
  id: string;
  title: string;
  intent: string; // Intención de búsqueda SEO
  readTime: string;
  image: string;
  isPremium: boolean;
}

// --- 1. SERIES (6 SERIES OBLIGATORIAS) ---

export const MAG_SERIES: MagSeries[] = [
  {
    id: "el-latido",
    title: "El Latido",
    manifesto: "Ensayos breves sobre lo que significa estar vivo hoy. Una pausa reflexiva en el ruido digital para recalibrar tu brújula interna.",
    image: "https://images.unsplash.com/photo-1499728603963-39737f636591?auto=format&fit=crop&q=80",
    icon: Activity,
    articles: [
      {
        id: "l1", slug: "el-silencio-nutriente", title: "El silencio como nutriente", subtitle: "Por qué tu cerebro exige el vacío para regenerarse.",
        type: "essay", author: { name: "Dra. Elena M.", role: "Neurocientífica", image: "" }, date: "12 Oct", readTime: "5 min", image: "https://images.unsplash.com/photo-1499728603963-39737f636591?auto=format&fit=crop&q=80", tags: ["Mente", "Silencio"], isPremium: false
      },
      {
        id: "l2", slug: "aburrimiento-productivo", title: "Elogio del aburrimiento", subtitle: "La creatividad nace cuando dejas de consumir contenido.",
        type: "essay", author: { name: "Marc T.", role: "Editor", image: "" }, date: "10 Oct", readTime: "4 min", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80", tags: ["Creatividad"], isPremium: false
      },
      // ... más artículos simulados
    ]
  },
  {
    id: "notas-de-campo",
    title: "Notas de Campo",
    manifesto: "Observación directa del territorio. Historias de personas, comunidades y paisajes que están redefiniendo nuestra relación con la naturaleza.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    icon: Map,
    articles: []
  },
  {
    id: "laboratorio-humano",
    title: "Laboratorio Humano",
    manifesto: "Biología, datos y tecnología que cuida. Sin frialdad clínica. Entendemos el cuerpo como un sistema complejo que merece ser escuchado.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    icon: Cpu,
    articles: []
  },
  {
    id: "ciudad-regenerada",
    title: "Ciudad Regenerada",
    manifesto: "El urbanismo no es cemento, es convivencia. Exploramos cómo las ciudades están volviendo a ser espacios para la biología humana.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    icon: BuildingIcon,
    articles: []
  },
  {
    id: "movimiento",
    title: "Movimiento",
    manifesto: "El deporte como lenguaje. Técnica, cultura y rituales de quienes usan su cuerpo para expresarse, no solo para quemar calorías.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
    icon: Zap,
    articles: []
  },
  {
    id: "futuro-lento",
    title: "Futuro Lento",
    manifesto: "Innovación con propósito. Diseño, materialidad y tecnología que no acelera el tiempo, sino que le da calidad.",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80",
    icon: Leaf,
    articles: []
  }
];

// --- 2. DOSSIERS (4 EDICIONES COLECCIONABLES) ---

export const MAG_DOSSIERS: MagDossier[] = [
  {
    id: "biologia-que-escucha",
    title: "Biología que escucha",
    subtitle: "Dossier Nº 01",
    intro: "Una investigación profunda sobre cómo los datos biométricos están cambiando la medicina preventiva y el autoconocimiento.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    status: 'published',
    chapters: [
      { title: "Cap 1: El fin de la intuición ciega", readTime: "10 min", isPremium: false },
      { title: "Cap 2: VFC, el lenguaje del estrés", readTime: "15 min", isPremium: true },
      { title: "Cap 3: Sueño y arquitectura neuronal", readTime: "12 min", isPremium: true },
      { title: "Cap 4: Nutrición personalizada por IA", readTime: "14 min", isPremium: true },
      { title: "Cap 5: El futuro de la longevidad", readTime: "20 min", isPremium: true }
    ]
  },
  {
    id: "moverse-para-vivir",
    title: "Moverse para vivir",
    subtitle: "Dossier Nº 02",
    intro: "Desmontando el mito del fitness estético. Una guía sobre el movimiento funcional para la longevidad.",
    coverImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
    status: 'published',
    chapters: []
  },
  {
    id: "regenerar-la-ciudad",
    title: "Regenerar la ciudad",
    subtitle: "Dossier Nº 03",
    intro: "Cómo transformar junglas de asfalto en ecosistemas habitables para el ser humano.",
    coverImage: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80",
    status: 'coming-soon',
    chapters: []
  },
  {
    id: "agua-costa-cuidado",
    title: "Agua, costa y cuidado",
    subtitle: "Dossier Nº 04",
    intro: "La relación terapéutica entre el mar y la mente humana. Ciencia azul.",
    coverImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
    status: 'coming-soon',
    chapters: []
  }
];

// --- 3. GUÍAS SEO (12 EVERGREEN) ---

export const MAG_GUIDES: MagGuide[] = [
  { id: "g1", title: "Cómo empezar en boxing sin lesionarte", intent: "Técnica básica y prevención", readTime: "12 min", image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g2", title: "Entrenar con datos sin obsesionarte", intent: "Salud mental y wearables", readTime: "10 min", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g3", title: "Dormir mejor: lo que sí funciona", intent: "Higiene del sueño basada en ciencia", readTime: "15 min", image: "https://images.unsplash.com/photo-1541781777631-fa182f3c72eb?auto=format&fit=crop&q=80", isPremium: true },
  { id: "g4", title: "Cómo elegir centro según tu objetivo", intent: "Guía de compra gimnasios", readTime: "8 min", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g5", title: "Respiración y recuperación: protocolo sencillo", intent: "Breathwork para principiantes", readTime: "10 min", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80", isPremium: true },
  { id: "g6", title: "Moverte en ciudad sin romperte", intent: "Running urbano seguro", readTime: "12 min", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g7", title: "Ayuno intermitente y ritmos circadianos", intent: "Nutrición temporal", readTime: "14 min", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80", isPremium: true },
  { id: "g8", title: "Escalada indoor: de 0 a 6a", intent: "Progresión escalada", readTime: "15 min", image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g9", title: "Meditación para escépticos", intent: "Mindfulness laico", readTime: "8 min", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g10", title: "Suplementación: guía honesta", intent: "Qué tomar y qué no", readTime: "18 min", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80", isPremium: true },
  { id: "g11", title: "Teletrabajo y postura corporal", intent: "Ergonomía en casa", readTime: "10 min", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", isPremium: false },
  { id: "g12", title: "Baños de hielo: manual de seguridad", intent: "Crioterapia casera", readTime: "12 min", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80", isPremium: true },
];

// --- 4. NEWSLETTERS (3 PRODUCTOS) ---

export const MAG_NEWSLETTERS = [
  {
    id: "pulso",
    title: "Pulso Semanal",
    desc: "Curación editorial para leer en domingo. Sin ruido.",
    frequency: "Semanal",
    icon: Activity
  },
  {
    id: "laboratorio",
    title: "Laboratorio",
    desc: "Deep dive en salud, longevidad y tecnología.",
    frequency: "Quincenal",
    icon: Cpu
  },
  {
    id: "mapa",
    title: "Mapa",
    desc: "Guía de lugares, arquitectura y naturaleza.",
    frequency: "Mensual",
    icon: Map
  }
];

// Helper para iconos (ya que no podemos importar lucide en data puro a veces, pero aquí sí porque es ts)
function BuildingIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>; }
