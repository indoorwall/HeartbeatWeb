export interface Story {
  id: string;
  title: string;
  summary: string;
  category: 'Naturaleza' | 'Comunidad' | 'Innovación' | 'Entrenamiento' | 'Cultura Local';
  image: string;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
}

export const STORIES_DATA: Story[] = [
  // 3 Destacados (Featured)
  {
    id: "1",
    title: "El bosque como terapeuta: por qué tu cerebro exige verde",
    summary: "La ciencia detrás de los 'baños de bosque' y cómo 20 minutos entre árboles reducen tu cortisol un 40%.",
    category: "Naturaleza",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    readTime: "5 min",
    author: "Dra. Elena M.",
    date: "12 Oct 2025",
    featured: true
  },
  {
    id: "2",
    title: "Bio-data vs. Intuición: cuando los datos confirman lo que sentías",
    summary: "Analizamos cómo los wearables modernos por fin están aprendiendo a escuchar al cuerpo, no solo a medirlo.",
    category: "Innovación",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    readTime: "7 min",
    author: "Marc Tech",
    date: "10 Oct 2025",
    featured: true
  },
  {
    id: "3",
    title: "La mentira del 'No Pain No Gain': entrenar desde el placer",
    summary: "Por qué el sufrimiento innecesario bloquea tu progreso y cómo el disfrute dispara el rendimiento a largo plazo.",
    category: "Entrenamiento",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    readTime: "4 min",
    author: "Coach Alex",
    date: "08 Oct 2025",
    featured: true
  },
  // Listado General
  {
    id: "4",
    title: "Cenas en silencio: conectar sin decir una palabra",
    summary: "La experiencia social más radical de nuestros hubs urbanos está cambiando la forma de relacionarse.",
    category: "Comunidad",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    readTime: "3 min",
    author: "Sarah J.",
    date: "05 Oct 2025"
  },
  {
    id: "5",
    title: "Artesanos del Pirineo: recuperando oficios para el atleta moderno",
    summary: "Visitamos a los creadores locales que diseñan equipamiento sostenible con técnicas ancestrales.",
    category: "Cultura Local",
    image: "https://images.unsplash.com/photo-1581553672347-3a0b38749a4f?auto=format&fit=crop&q=80",
    readTime: "6 min",
    author: "Pau R.",
    date: "01 Oct 2025"
  },
  {
    id: "6",
    title: "Correr de noche: recuperando el instinto primitivo",
    summary: "Apaga el frontal. Tus ojos se adaptan. Tu miedo desaparece. Bienvenido al trail running nocturno.",
    category: "Naturaleza",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80",
    readTime: "4 min",
    author: "Ultra Runner X",
    date: "28 Sep 2025"
  },
  {
    id: "7",
    title: "Tejidos vivos: ropa que respira contigo (literalmente)",
    summary: "Probamos los prototipos de Heartbeat Clothes hechos con fibras de algas que reaccionan al sudor.",
    category: "Innovación",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
    readTime: "5 min",
    author: "Lab Team",
    date: "25 Sep 2025"
  },
  {
    id: "8",
    title: "Micro-dosis de movimiento: 5 minutos cada hora",
    summary: "Olvida la hora de gimnasio. La ciencia dice que moverse poco muchas veces es más efectivo.",
    category: "Entrenamiento",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    readTime: "3 min",
    author: "Fisio Tom",
    date: "20 Sep 2025"
  },
  {
    id: "9",
    title: "Urban Gardeners: cultivando comida en el techo del gimnasio",
    summary: "Nuestros socios de Madrid están convirtiendo la azotea en un huerto regenerativo.",
    category: "Comunidad",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80",
    readTime: "4 min",
    author: "Green Squad",
    date: "15 Sep 2025"
  },
  {
    id: "10",
    title: "Surf de invierno en el Mediterráneo: la soledad perfecta",
    summary: "El agua está fría, pero las olas están vacías. Crónica de una mañana de enero en Barcelona.",
    category: "Cultura Local",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
    readTime: "5 min",
    author: "Local Surfer",
    date: "10 Sep 2025"
  }
];
