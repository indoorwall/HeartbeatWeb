export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
  isPremium?: boolean;
  
  // Nuevos campos de taxonomía
  format: 'serie' | 'dossier' | 'guia' | 'nota' | 'articulo';
  seriesId?: string; // Si pertenece a una serie
  dossierId?: string; // Si pertenece a un dossier
  tags: string[];
}

// --- 1. SERIES (COLECCIONES VIVAS) ---
export const MAGAZINE_SERIES = [
  {
    id: 'el-latido',
    title: 'El Latido',
    manifesto: 'Ensayos breves sobre la vida consciente. Pausas para pensar en un mundo que no para.',
    image: 'https://images.unsplash.com/photo-1499728603963-39737f636591?auto=format&fit=crop&q=80',
    color: 'text-brand-start'
  },
  {
    id: 'notas-de-campo',
    title: 'Notas de Campo',
    manifesto: 'Observación directa del territorio. Historias de personas, naturaleza y comunidad real.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
    color: 'text-green-600'
  },
  {
    id: 'laboratorio-humano',
    title: 'Laboratorio Humano',
    manifesto: 'Donde la biología se encuentra con los datos. Tecnología que cuida, no que controla.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    color: 'text-blue-600'
  },
  {
    id: 'ciudad-regenerada',
    title: 'Ciudad Regenerada',
    manifesto: 'Urbanismo para la vida. Cómo transformar el hormigón en ecosistemas habitables.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    color: 'text-neutral-600'
  },
  {
    id: 'movimiento',
    title: 'Movimiento',
    manifesto: 'El cuerpo como lenguaje. Técnica, cultura y la belleza del esfuerzo humano.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    color: 'text-orange-600'
  },
  {
    id: 'futuro-lento',
    title: 'Futuro Lento',
    manifesto: 'Innovación con propósito. Diseño, materialidad y la vuelta a lo esencial.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    color: 'text-purple-600'
  }
];

// --- 2. DOSSIERS (EDICIONES COLECCIONABLES) ---
export const MAGAZINE_DOSSIERS = [
  {
    id: 'biologia-que-escucha',
    title: 'Biología que escucha',
    subtitle: 'Edición Nº1',
    desc: 'Un recorrido profundo por la nueva relación entre nuestros cuerpos y la tecnología de bio-feedback.',
    chapters: 5,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    isPremium: true
  },
  {
    id: 'moverse-para-vivir',
    title: 'Moverse para vivir',
    subtitle: 'Edición Nº2',
    desc: 'Desmontando el fitness estético para recuperar la funcionalidad y el placer del movimiento.',
    chapters: 6,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    isPremium: true
  },
  {
    id: 'regenerar-la-ciudad',
    title: 'Regenerar la ciudad',
    subtitle: 'Edición Nº3',
    desc: 'Casos de éxito global sobre cómo la naturaleza está reconquistando las metrópolis.',
    chapters: 4,
    image: 'https://images.unsplash.com/photo-1449824913929-203a13284448?auto=format&fit=crop&q=80',
    isPremium: true
  },
  {
    id: 'agua-costa-cuidado',
    title: 'Agua, costa y cuidado',
    subtitle: 'Edición Nº4',
    desc: 'La salud azul. Por qué el océano es el mayor terapeuta del planeta y cómo protegerlo.',
    chapters: 5,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
    isPremium: true
  }
];

// --- 3. GUÍAS (SEO EVERGREEN) ---
export const MAGAZINE_GUIDES = [
  { id: 'g1', title: 'Cómo empezar en boxing sin lesionarte', category: 'Movimiento', slug: 'guia-boxing-principiantes' },
  { id: 'g2', title: 'Entrenar con datos sin obsesionarte', category: 'Laboratorio', slug: 'guia-datos-saludables' },
  { id: 'g3', title: 'Dormir mejor: lo que sí funciona', category: 'Salud', slug: 'guia-sueno-profundo' },
  { id: 'g4', title: 'Cómo elegir centro según tu objetivo', category: 'Heartbeat', slug: 'guia-elegir-centro' },
  { id: 'g5', title: 'Respiración y recuperación: protocolo sencillo', category: 'Salud', slug: 'guia-respiracion' },
  { id: 'g6', title: 'Moverte en ciudad sin romperte', category: 'Ciudad', slug: 'guia-running-urbano' },
  { id: 'g7', title: 'Ayuno intermitente y ritmo circadiano', category: 'Nutrición', slug: 'guia-ayuno' },
  { id: 'g8', title: 'Equipamiento minimalista: qué necesitas realmente', category: 'Estilo', slug: 'guia-equipo-basico' },
  { id: 'g9', title: 'Meditación para escépticos', category: 'Mente', slug: 'guia-meditacion-practica' },
  { id: 'g10', title: 'Baños de hielo: guía de seguridad', category: 'Recuperación', slug: 'guia-cold-plunge' },
  { id: 'g11', title: 'Suplementación consciente', category: 'Nutrición', slug: 'guia-suplementos' },
  { id: 'g12', title: 'Teletrabajo y postura: corrige tu espalda', category: 'Salud', slug: 'guia-ergonomia' }
];

// --- ARTÍCULOS REALES (MUESTRA) ---
export const MAGAZINE_ARTICLES: Article[] = [
  // SERIES: EL LATIDO
  {
    id: 'a1',
    slug: 'el-silencio-como-nutriente',
    title: 'El silencio como nutriente',
    subtitle: 'En un mundo de ruido infinito, la ausencia de estímulos no es un lujo, es una necesidad biológica.',
    author: 'Dra. Elena M.',
    authorRole: 'Editora de Salud',
    date: '12 Oct 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1499728603963-39737f636591?auto=format&fit=crop&q=80',
    format: 'serie',
    seriesId: 'el-latido',
    tags: ['Salud Mental', 'Neurociencia']
  },
  {
    id: 'a2',
    slug: 'la-estetica-del-esfuerzo',
    title: 'La estética del esfuerzo',
    subtitle: 'Por qué sudar se ha convertido en el nuevo símbolo de estatus y qué dice eso de nosotros.',
    author: 'Ana L.',
    authorRole: 'Crítica Cultural',
    date: '10 Oct 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    format: 'serie',
    seriesId: 'el-latido',
    tags: ['Cultura', 'Sociedad']
  },
  // SERIES: LABORATORIO HUMANO
  {
    id: 'a3',
    slug: 'tu-corazon-es-un-algoritmo',
    title: 'Tu corazón es un algoritmo (y se puede hackear)',
    subtitle: 'La variabilidad de la frecuencia cardíaca (VFC) explicada sin tecnicismos.',
    author: 'Marc Tech',
    authorRole: 'Analista de Datos',
    date: '08 Oct 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    format: 'serie',
    seriesId: 'laboratorio-humano',
    tags: ['Wearables', 'Salud']
  },
  // SERIES: CIUDAD REGENERADA
  {
    id: 'a4',
    slug: 'catedrales-de-hormigon',
    title: 'Catedrales de hormigón: el renacer de los parkings',
    subtitle: 'Visitamos tres aparcamientos subterráneos convertidos en granjas hidropónicas.',
    author: 'Javier S.',
    authorRole: 'Arquitecto',
    date: '05 Oct 2025',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    format: 'serie',
    seriesId: 'ciudad-regenerada',
    tags: ['Urbanismo', 'Sostenibilidad']
  },
  // DOSSIER CONTENT (Ejemplo)
  {
    id: 'd1-c1',
    slug: 'biologia-capitulo-1',
    title: 'Capítulo 1: El cuerpo eléctrico',
    subtitle: 'Entendiendo cómo nuestras células se comunican antes de hablar.',
    author: 'Equipo Heartbeat',
    authorRole: 'Investigación',
    date: '01 Oct 2025',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    format: 'dossier',
    dossierId: 'biologia-que-escucha',
    isPremium: true,
    tags: ['Biología', 'Dossier']
  }
];
