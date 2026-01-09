export interface Event {
  id: string;
  title: string;
  date: string; // Formato legible o ISO
  time: string;
  locationName: string; // Nombre del centro
  city: string;
  sport: string;
  heartbeatType: string;
  description: string;
  image: string;
  spotsLeft?: number;
}

export const AGENDA_DATA: Event[] = [
  // 2 Running
  {
    id: "run-1",
    title: "City Lights Run: Madrid Nocturno",
    date: "15 OCT",
    time: "20:30",
    locationName: "Madrid Tech Hub",
    city: "Madrid",
    sport: "Running",
    heartbeatType: "Urban",
    description: "10K a ritmo social descubriendo la arquitectura lumínica de la ciudad. Post-run smoothie incluido.",
    image: "https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80",
    spotsLeft: 12
  },
  {
    id: "run-2",
    title: "Trail Technique: Bajadas Técnicas",
    date: "18 OCT",
    time: "09:00",
    locationName: "Pyrenees Base",
    city: "Huesca",
    sport: "Running",
    heartbeatType: "Nature",
    description: "Masterclass con campeones locales para perder el miedo a descender rápido y seguro.",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80",
    spotsLeft: 5
  },
  // 2 Escalada
  {
    id: "climb-1",
    title: "Bautismo de Roca: De la presa al granito",
    date: "22 OCT",
    time: "10:00",
    locationName: "Pyrenees Base",
    city: "Huesca",
    sport: "Escalada",
    heartbeatType: "Nature",
    description: "Tu primera experiencia en pared real. Material y guías de alta montaña incluidos.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80",
    spotsLeft: 4
  },
  {
    id: "climb-2",
    title: "Psicobloc & Deep Water Solo",
    date: "PRÓXIMAMENTE",
    time: "TBC",
    locationName: "Barcelona Coast",
    city: "Barcelona",
    sport: "Escalada",
    heartbeatType: "Adrenaline",
    description: "Escalada sin cuerda sobre el mar. Solo para niveles intermedios/avanzados.",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80"
  },
  // 1 Surf
  {
    id: "surf-1",
    title: "Sunrise Session & Breakfast",
    date: "25 OCT",
    time: "07:00",
    locationName: "Barcelona Coast",
    city: "Barcelona",
    sport: "Surf",
    heartbeatType: "Nature",
    description: "Aprovecha las primeras luces. Sesión guiada seguida de desayuno orgánico en la arena.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
    spotsLeft: 8
  },
  // 1 Boxing
  {
    id: "box-1",
    title: "Fight Club: Técnica Defensiva",
    date: "20 OCT",
    time: "19:00",
    locationName: "Madrid Tech Hub",
    city: "Madrid",
    sport: "Boxing",
    heartbeatType: "Urban",
    description: "Aprende a esquivar antes de golpear. Taller intensivo de movimiento de pies y cintura.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80",
    spotsLeft: 10
  },
  // 1 Tech
  {
    id: "tech-1",
    title: "Wearables Workshop: Interpreta tu VFC",
    date: "28 OCT",
    time: "18:30",
    locationName: "Madrid Tech Hub",
    city: "Madrid",
    sport: "Tech",
    heartbeatType: "Future",
    description: "Deja de mirar datos y empieza a entenderlos. Cómo usar la Variabilidad de Frecuencia Cardíaca.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    spotsLeft: 20
  },
  // 1 Comunidad
  {
    id: "comm-1",
    title: "Plogging: Correr y limpiar la playa",
    date: "01 NOV",
    time: "10:00",
    locationName: "Barcelona Coast",
    city: "Barcelona",
    sport: "Comunidad",
    heartbeatType: "Community",
    description: "Deporte con impacto directo. Guantes y bolsas biodegradables facilitados por Heartbeat.",
    image: "https://images.unsplash.com/photo-1618477461853-5f8dd3791985?auto=format&fit=crop&q=80",
    spotsLeft: 50
  }
];
