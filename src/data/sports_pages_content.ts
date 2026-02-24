import { Sport } from "./sports_data";

// Definimos la interfaz del contenido extendido para las páginas de detalle
export interface SportPageContent {
  id: string;
  seo: {
    title: string;
    desc: string;
    keywords: string;
  };
  hero: {
    image: string;
    subheadline: string;
    chips: string[];
  };
  gallery: string[];
  plans: {
    name: string;
    price: string;
    period: string;
    features: string[];
    target: string;
    recommended?: boolean;
  }[];
  schedule: {
    days: string[];
    sessions: { time: string; type: string; level: string; spots: number }[];
  };
  inclusions: string[];
  experience: { title: string; text: string; image: string }[];
  practical: {
    level: string;
    bring: string[];
    provided: string[];
    duration: string;
  };
  faqs: { q: string; a: string }[];
}

export const SPORTS_PAGES_CONTENT: Record<string, SportPageContent> = {
  // --- BOXING ---
  boxing: {
    id: 'boxing',
    seo: {
      title: 'Boxing en Heartbeat | Centros, precios y reservas',
      desc: 'Practica Boxing en Heartbeat. Elige centro, consulta precios y reserva. Experiencia consciente, comunidad y espacios únicos.',
      keywords: 'boxing madrid, clases boxeo, gimnasio boxeo, entrenamiento funcional'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80',
      subheadline: 'Elige centro, mira precios y reserva en segundos.',
      chips: ['Todos los niveles', 'Indoor', 'Clases + Open']
    },
    gallery: [
      'https://images.unsplash.com/photo-1549719386-74dfc441d82c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1591117207239-78898dd1e04e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
    ],
    plans: [
      { name: 'Pase Suelto', price: '18€', period: '/sesión', features: ['Acceso a 1 clase', 'Toalla incluida', 'Validez 30 días'], target: 'Para probar' },
      { name: 'Pack 10', price: '140€', period: '/pack', features: ['14€ por clase', 'Acceso a todos los centros', 'Validez 3 meses'], target: 'Regularidad flexible', recommended: true },
      { name: 'Unlimited', price: '89€', period: '/mes', features: ['Clases ilimitadas', 'Acceso Open Box', 'Eventos comunidad'], target: 'Compromiso total' }
    ],
    schedule: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      sessions: [
        { time: '07:00', type: 'Technique', level: 'Todos', spots: 4 },
        { time: '14:00', type: 'HIIT Boxing', level: 'Intermedio', spots: 8 },
        { time: '19:00', type: 'Sparring', level: 'Avanzado', spots: 2 },
        { time: '20:00', type: 'Fundamentals', level: 'Iniciación', spots: 12 }
      ]
    },
    inclusions: [
      'Guantes y vendas de cortesía (limpieza UV).',
      'Acceso a vestuarios premium con duchas.',
      'Sacos de agua y sensores de impacto.',
      'Coach certificado en cada sesión.',
      'Hidratación filtrada ilimitada.'
    ],
    experience: [
      { title: 'Consciencia', text: 'No golpeamos por ira. Golpeamos para enfocar. Cada movimiento se sincroniza con tu respiración.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80' },
      { title: 'Entorno', text: 'Iluminación circadiana y acústica diseñada para el flow. El espacio entrena contigo.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80' },
      { title: 'Comunidad', text: 'Sin egos. Entrenas con tu compañero, no contra él. El respeto es la primera regla.', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Diseñado para todos. El 60% de nuestros usuarios nunca había boxeado.',
      bring: ['Ropa cómoda', 'Zapatillas limpias', 'Botella reutilizable'],
      provided: ['Guantes', 'Vendas', 'Toalla', 'Gel/Champú'],
      duration: '55 minutos (10 min calentamiento, 35 min bloque principal, 10 min vuelta a la calma).'
    },
    faqs: [
      { q: '¿Necesito experiencia previa?', a: 'No. Nuestras clases "Fundamentals" están diseñadas desde cero.' },
      { q: '¿Qué incluye el pase suelto?', a: 'Acceso completo a la sesión, material (guantes/vendas), taquilla y ducha.' },
      { q: '¿Es boxeo con contacto?', a: 'En las clases estándar NO hay contacto físico entre personas, solo con sacos. El sparring es solo para sesiones avanzadas específicas.' },
      { q: '¿Cómo reservo?', a: 'Desde esta web o la app. Puedes reservar hasta 15 minutos antes si hay plaza.' },
      { q: '¿Puedo cancelar?', a: 'Sí, hasta 2 horas antes de la clase sin penalización.' }
    ]
  },

  // --- RUNNING ---
  running: {
    id: 'running',
    seo: {
      title: 'Running Club Heartbeat | Entrenamientos y Rutas',
      desc: 'Únete al club de corredores de Heartbeat. Técnica, montaña y asfalto. Entrena en grupo y mejora tu resistencia.',
      keywords: 'running club, trail running, maraton, entrenamiento correr'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80',
      subheadline: 'Recupera tu instinto. Ciudad y montaña.',
      chips: ['Outdoor', 'Trail & Road', 'Todos los niveles']
    },
    gallery: [
      'https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596464716127-f9a87595ca03?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80'
    ],
    plans: [
      { name: 'Drop-in Run', price: '10€', period: '/sesión', features: ['Sesión guiada', 'Avituallamiento', 'Taquilla'], target: 'Visita puntual' },
      { name: 'Run Club', price: '45€', period: '/mes', features: ['Salidas ilimitadas', 'Camiseta técnica', 'Plan de entreno app'], target: 'Habitual', recommended: true },
      { name: 'Marathon Prep', price: '120€', period: '/pack', features: ['12 semanas', 'Coach personal', 'Nutrición'], target: 'Objetivo 42k' }
    ],
    schedule: {
      days: ['Martes', 'Jueves', 'Sábado', 'Domingo'],
      sessions: [
        { time: '07:00', type: 'Morning Miles', level: 'Suave', spots: 20 },
        { time: '19:30', type: 'Series en Pista', level: 'Intermedio', spots: 15 },
        { time: '20:00', type: 'Urban Trail', level: 'Avanzado', spots: 10 },
        { time: '09:00', type: 'Long Run (Sáb)', level: 'Todos', spots: 30 }
      ]
    },
    inclusions: [
      'Coach de técnica de carrera.',
      'Avituallamiento post-entreno (fruta/agua).',
      'Acceso a vestuarios en el hub de salida.',
      'Seguro de accidentes.',
      'Fotos de la sesión.'
    ],
    experience: [
      { title: 'Meditación Activa', text: 'Correr no es solo cardio. Es un estado mental. Enfocamos en la respiración y el ritmo.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80' },
      { title: 'Tribu', text: 'Nunca corres solo. El grupo te lleva más lejos de lo que irías por tu cuenta.', image: 'https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80' },
      { title: 'Entorno', text: 'Descubre tu ciudad y tus montañas desde una nueva perspectiva.', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Grupos divididos por ritmo (Pace). Desde iniciación (cacos) hasta élite.',
      bring: ['Zapatillas de running', 'Reloj GPS (opcional)', 'Luz frontal (noche)'],
      provided: ['Hidratación', 'Taquilla', 'Chaleco reflectante'],
      duration: '60-90 minutos dependiendo de la sesión.'
    },
    faqs: [
      { q: '¿Qué ritmo debo tener?', a: 'Tenemos 3 grupos: Iniciación (6:30/km), Medio (5:00/km) y Rápido (4:15/km).' },
      { q: '¿Dónde dejamos las cosas?', a: 'Todos los entrenos salen desde un Hub Heartbeat con taquillas y duchas.' },
      { q: '¿Se corre si llueve?', a: 'Sí. La piel es impermeable. Solo cancelamos por tormenta eléctrica.' },
      { q: '¿Hay entrenos de montaña?', a: 'Sí, los fines de semana organizamos salidas de Trail desde nuestros centros cercanos a la naturaleza.' },
      { q: '¿Incluye dorsal para carreras?', a: 'Los miembros del Run Club tienen acceso preferente y descuentos en dorsales.' }
    ]
  },

  // --- ESCALADA ---
  escalada: {
    id: 'escalada',
    seo: {
      title: 'Escalada y Bouldering | Heartbeat Climbing',
      desc: 'Muros de competición y roca real. Entrena fuerza y mente resolviendo problemas verticales.',
      keywords: 'escalada, bouldering, rocódromo, clases escalada'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80',
      subheadline: 'El puzzle definitivo para tu cuerpo y mente.',
      chips: ['Indoor/Outdoor', 'Bouldering', 'Cuerda']
    },
    gallery: [
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601924376249-14e36589330d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583692348560-6c927e1c8d01?auto=format&fit=crop&q=80'
    ],
    plans: [
      { name: 'Entrada Día', price: '15€', period: '/día', features: ['Acceso ilimitado', 'Sin límite de tiempo', 'Sauna incluida'], target: 'Ocasional' },
      { name: 'Bono 10', price: '120€', period: '/pack', features: ['Compartible', 'Validez 6 meses', 'Alquiler pies de gato 50%'], target: 'Frecuente' },
      { name: 'Climber Member', price: '65€', period: '/mes', features: ['Acceso total', 'Clases técnica incluidas', 'Salidas a roca'], target: 'Estilo de vida', recommended: true }
    ],
    schedule: {
      days: ['Lunes', 'Miércoles', 'Viernes', 'Sábado'],
      sessions: [
        { time: '10:00', type: 'Bautismo', level: 'Iniciación', spots: 6 },
        { time: '18:00', type: 'Técnica de Pies', level: 'Intermedio', spots: 8 },
        { time: '19:30', type: 'Entreno Fuerza', level: 'Avanzado', spots: 10 },
        { time: '11:00', type: 'Salida a Roca (Sáb)', level: 'Todos', spots: 12 }
      ]
    },
    inclusions: [
      'Aseguradores automáticos (Auto-belay).',
      'Zona de entrenamiento específico (Moonboard).',
      'Magnesio líquido de cortesía.',
      'Duchas y taquillas.',
      'Zona de Chill-out y Wifi.'
    ],
    experience: [
      { title: 'Resolución', text: 'Cada vía es un problema matemático que resuelves con tu cuerpo.', image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80' },
      { title: 'Foco', text: 'En la pared no existe el teléfono, ni el email, ni el pasado. Solo el siguiente agarre.', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80' },
      { title: 'Confianza', text: 'Aprende a confiar en tu compañero que te asegura y en tus propias manos.', image: 'https://images.unsplash.com/photo-1583692348560-6c927e1c8d01?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Desde tu primera vez hasta el 8a. Tenemos vías para todos.',
      bring: ['Ropa elástica', 'Pies de gato (si tienes)', 'Arnés (si tienes)'],
      provided: ['Alquiler de material completo', 'Cuerdas', 'Magnesio'],
      duration: 'Sesiones libres sin límite. Clases de 90 min.'
    },
    faqs: [
      { q: '¿Necesito curso para empezar?', a: 'Para Boulder no. Para cuerda necesitas hacer un test de seguridad o tomar una clase de iniciación.' },
      { q: '¿Alquiláis material?', a: 'Sí, tenemos pies de gato de todas las tallas, arneses y cascos.' },
      { q: '¿Es peligroso?', a: 'La escalada indoor es muy segura. El suelo es colchoneta de 40cm y las cuerdas se revisan a diario.' },
      { q: '¿Puedo ir solo?', a: 'Sí, tenemos zona de Boulder y Auto-belays para escalar sin compañero.' },
      { q: '¿Hay límite de tiempo?', a: 'No. Con tu entrada puedes quedarte todo el día.' }
    ]
  },

  // --- SIMULADORES ---
  simuladores: {
    id: 'simuladores',
    seo: {
      title: 'Sim Racing & E-Sports | Heartbeat Tech',
      desc: 'Entrena como un piloto profesional. Simuladores con movimiento real y telemetría avanzada.',
      keywords: 'sim racing, simulador f1, esports, entrenamiento cognitivo'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1626855227702-8c42a033c56e?auto=format&fit=crop&q=80',
      subheadline: 'Velocidad real en entorno virtual. Adrenalina sin riesgo.',
      chips: ['Indoor', 'Tech', 'F1 & GT']
    },
    gallery: [
      'https://images.unsplash.com/photo-1626855227702-8c42a033c56e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80'
    ],
    plans: [
      { name: 'Sesión 30min', price: '25€', period: '/sesión', features: ['Briefing incluido', 'Coche y circuito a elegir', 'Telemetría básica'], target: 'Experiencia' },
      { name: 'Race Pack', price: '90€', period: '/5 sesiones', features: ['60 min por sesión', 'Análisis de ingeniero', 'Setup personalizado'], target: 'Mejora' },
      { name: 'Pro License', price: '150€', period: '/mes', features: ['Horas ilimitadas (valle)', 'Liga privada', 'Coaching cognitivo'], target: 'Competición', recommended: true }
    ],
    schedule: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      sessions: [
        { time: '10:00', type: 'Open Practice', level: 'Todos', spots: 8 },
        { time: '18:00', type: 'Academy Class', level: 'Iniciación', spots: 6 },
        { time: '20:00', type: 'League Race', level: 'Avanzado', spots: 12 },
        { time: '21:00', type: 'Endurance', level: 'Equipos', spots: 4 }
      ]
    },
    inclusions: [
      'Simuladores Motion 4DOF.',
      'Volantes Direct Drive.',
      'Pantallas curvas 180º o VR.',
      'Ingeniero de pista presencial.',
      'Guantes y botines de simracing.'
    ],
    experience: [
      { title: 'Inmersión', text: 'Siente cada bache, cada frenada y la pérdida de tracción. Tu cerebro no distinguirá lo real de lo virtual.', image: 'https://images.unsplash.com/photo-1626855227702-8c42a033c56e?auto=format&fit=crop&q=80' },
      { title: 'Neuro-Entreno', text: 'A 300km/h, la toma de decisiones debe ser instantánea. Entrenamos tus reflejos y tu gestión del estrés.', image: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80' },
      { title: 'Competición', text: 'Compite contra pilotos de todo el mundo o contra tus amigos en la misma sala.', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Ajustamos las ayudas (ABS, TC) a tu nivel. Desde novato hasta alien.',
      bring: ['Ropa cómoda', 'Calcetines finos'],
      provided: ['Guantes', 'Calzado específico', 'Auriculares'],
      duration: 'Sesiones de 30, 60 o 120 minutos.'
    },
    faqs: [
      { q: '¿Me marearé?', a: 'Nuestros sistemas de movimiento están calibrados para minimizar el motion sickness. Si usas VR es posible, pero con pantallas es raro.' },
      { q: '¿Pueden correr niños?', a: 'A partir de 1.40m de altura para llegar a los pedales.' },
      { q: '¿Qué coches tenéis?', a: 'Todos. F1, GT3, Rally, Turismos... Usamos Assetto Corsa Competizione e iRacing.' },
      { q: '¿Se puede jugar online?', a: 'Sí, todas las estaciones están conectadas a internet de baja latencia.' },
      { q: '¿Hay modo multijugador local?', a: 'Sí, podemos configurar una parrilla con todos los simuladores de la sala.' }
    ]
  },

  // --- SURF ---
  surf: {
    id: 'surf',
    seo: {
      title: 'Surf School & Trips | Heartbeat Ocean',
      desc: 'Aprende a surfear o perfecciona tu estilo. Clases, alquiler y viajes en las mejores costas.',
      keywords: 'clases surf, escuela surf, alquiler tablas, surf trip'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
      subheadline: 'Conecta con la energía del océano. Fluye.',
      chips: ['Outdoor', 'Playa', 'Todos los niveles']
    },
    gallery: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1415931633537-351070d20b81?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&fit=crop&q=80'
    ],
    plans: [
      { name: 'Clase Grupo', price: '35€', period: '/2h', features: ['Material incluido', 'Max 6 alumnos', 'Seguro'], target: 'Iniciación' },
      { name: 'Curso 5 Días', price: '150€', period: '/semana', features: ['Progresión rápida', 'Video-análisis', 'Diploma'], target: 'Vacaciones', recommended: true },
      { name: 'Surf Coaching', price: '60€', period: '/hora', features: ['1 to 1', 'Corrección técnica', 'Material Pro'], target: 'Perfeccionamiento' }
    ],
    schedule: {
      days: ['Lunes', 'Miércoles', 'Viernes', 'Sábado', 'Domingo'],
      sessions: [
        { time: '09:00', type: 'Morning Glass', level: 'Intermedio', spots: 6 },
        { time: '11:00', type: 'Escuela Nivel 1', level: 'Iniciación', spots: 12 },
        { time: '16:00', type: 'Escuela Nivel 2', level: 'Intermedio', spots: 8 },
        { time: '18:00', type: 'Sunset Session', level: 'Todos', spots: 10 }
      ]
    },
    inclusions: [
      'Tabla (Softboard o Fibra).',
      'Neopreno de temporada.',
      'Acceso a duchas y vestuarios.',
      'Taquilla para objetos de valor.',
      'Seguro de responsabilidad civil.'
    ],
    experience: [
      { title: 'Lectura del Mar', text: 'El surf es 90% observación. Aprende a entender las mareas, el viento y los fondos.', image: 'https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&fit=crop&q=80' },
      { title: 'Paciencia', text: 'El océano no tiene prisa. Tú tampoco deberías. Esperar la ola correcta es una meditación.', image: 'https://images.unsplash.com/photo-1415931633537-351070d20b81?auto=format&fit=crop&q=80' },
      { title: 'Respeto', text: 'En el agua somos invitados. Cuidamos la playa y respetamos las prioridades en el pico.', image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Clases para quien nunca ha visto el mar y coaching para quien quiere tubos.',
      bring: ['Bañador', 'Toalla', 'Protector solar'],
      provided: ['Todo el material técnico', 'Neopreno'],
      duration: 'Clases de 2 horas (30min teoría/arena, 90min agua).'
    },
    faqs: [
      { q: '¿Necesito saber nadar?', a: 'Imprescindible. Debes sentirte cómodo flotando en el mar.' },
      { q: '¿Qué pasa si no hay olas?', a: 'Hacemos entrenamiento funcional de surf, paddle surf o posponemos la clase.' },
      { q: '¿Hace frío?', a: 'Tenemos neoprenos de invierno de alta gama. No pasarás frío.' },
      { q: '¿Es difícil?', a: 'Es exigente, pero la sensación de deslizarte por primera vez compensa todo.' },
      { q: '¿Edad mínima?', a: 'Desde los 6 años si saben nadar bien.' }
    ]
  },

  // --- CROSSFIT ---
  crossfit: {
    id: 'crossfit',
    seo: {
      title: 'Crossfit & Functional | Heartbeat Power',
      desc: 'Entrenamiento funcional de alta intensidad. Comunidad, fuerza y acondicionamiento.',
      keywords: 'crossfit, box crossfit, wod, entrenamiento funcional'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
      subheadline: 'Prepárate para lo desconocido. Potencia y comunidad.',
      chips: ['Indoor/Outdoor', 'Alta Intensidad', 'Comunidad']
    },
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80'
    ],
    plans: [
      { name: 'Drop-in', price: '15€', period: '/clase', features: ['Acceso a WOD', 'Uso de instalaciones'], target: 'Viajeros' },
      { name: '3 días/sem', price: '75€', period: '/mes', features: ['12 clases al mes', 'Open Box incluido', 'App de seguimiento'], target: 'Mantenimiento' },
      { name: 'Unlimited', price: '110€', period: '/mes', features: ['Clases ilimitadas', 'Halterofilia', 'Gymnastics'], target: 'Atleta', recommended: true }
    ],
    schedule: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      sessions: [
        { time: '07:00', type: 'WOD', level: 'Todos', spots: 16 },
        { time: '14:00', type: 'Endurance', level: 'Todos', spots: 20 },
        { time: '18:00', type: 'Gymnastics', level: 'Técnica', spots: 12 },
        { time: '19:00', type: 'WOD', level: 'Todos', spots: 16 }
      ]
    },
    inclusions: [
      'Coach certificado L1/L2.',
      'Programación estructurada.',
      'Material Rogue/Eleiko.',
      'Zona de movilidad.',
      'Duchas y vestuarios.'
    ],
    experience: [
      { title: 'Intensidad', text: 'La magia está en el esfuerzo. Entrenamientos cortos pero potentes que cambian tu metabolismo.', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80' },
      { title: 'Variedad', text: 'Nunca te aburrirás. Cada día el entrenamiento (WOD) es diferente.', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80' },
      { title: 'Comunidad', text: 'El último en terminar es el que recibe más aplausos. Aquí sufrimos y celebramos juntos.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Todo es escalable. Si no puedes levantar 100kg, levantas 10kg. La intensidad es relativa.',
      bring: ['Ropa deportiva', 'Zapatillas estables', 'Calleras (opcional)'],
      provided: ['Magnesio', 'Combas', 'Material'],
      duration: '60 minutos (Briefing, Calentamiento, Técnica, WOD, Estiramiento).'
    },
    faqs: [
      { q: '¿Tengo que estar en forma?', a: 'No. Te pones en forma aquí. Empezamos desde tu nivel actual.' },
      { q: '¿Me voy a lesionar?', a: 'La técnica es prioridad. Los coaches vigilan cada repetición para evitar lesiones.' },
      { q: '¿Qué es un WOD?', a: 'Workout of the Day. El entrenamiento del día.' },
      { q: '¿Hay clases de iniciación?', a: 'Sí, el curso "On Ramp" es obligatorio para nuevos miembros sin experiencia.' },
      { q: '¿Puedo entrenar por libre?', a: 'Sí, tenemos horas de Open Box para que practiques tus debilidades.' }
    ]
  },

  // --- SKATE ---
  skate: {
    id: 'skate',
    seo: {
      title: 'Skate School & Park | Heartbeat Urban',
      desc: 'Clases de skate y acceso libre a skateparks diseñados para el flow. Cultura urbana y técnica.',
      keywords: 'clases skate, skatepark, escuela skate, skate madrid'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80',
      subheadline: 'Creatividad sobre ruedas. La ciudad es tu lienzo.',
      chips: ['Outdoor/Indoor', 'Street & Bowl', 'Cultura']
    },
    gallery: [
      'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1520045864914-89971a1bbb59?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535132015016-1077916f598e?auto=format&fit=crop&q=80'
    ],
    plans: [
      { name: 'Pase de Día', price: '10€', period: '/día', features: ['Acceso libre', 'Sin límite', 'Uso de protecciones'], target: 'Libre' },
      { name: 'Clase Grupal', price: '20€', period: '/clase', features: ['Monitor', 'Seguro', 'Material incluido'], target: 'Aprendizaje' },
      { name: 'Skate Academy', price: '60€', period: '/mes', features: ['1 clase/sem', 'Acceso libre ilimitado', 'Descuento tienda'], target: 'Progreso', recommended: true }
    ],
    schedule: {
      days: ['Lunes', 'Miércoles', 'Viernes', 'Sábado', 'Domingo'],
      sessions: [
        { time: '17:00', type: 'Kids Academy', level: 'Iniciación', spots: 10 },
        { time: '18:30', type: 'Adults Start', level: 'Iniciación', spots: 8 },
        { time: '20:00', type: 'Technique & Tricks', level: 'Avanzado', spots: 8 },
        { time: '11:00', type: 'Family Skate (Dom)', level: 'Todos', spots: 20 }
      ]
    },
    inclusions: [
      'Acceso a zonas de Street y Bowl.',
      'Casco y protecciones obligatorias.',
      'Zona de taller para reparaciones.',
      'Chill area con música.',
      'Taquillas.'
    ],
    experience: [
      { title: 'Estilo', text: 'El skate no es solo deporte, es expresión. Encuentra tu propia forma de moverte.', image: 'https://images.unsplash.com/photo-1520045864914-89971a1bbb59?auto=format&fit=crop&q=80' },
      { title: 'Perseverancia', text: 'Caerse es parte del proceso. Levantarse es el entrenamiento real.', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80' },
      { title: 'Cultura', text: 'Música, arte y ruedas. Un espacio donde la creatividad fluye en todas direcciones.', image: 'https://images.unsplash.com/photo-1535132015016-1077916f598e?auto=format&fit=crop&q=80' }
    ],
    practical: {
      level: 'Desde aprender a mantener el equilibrio hasta perfeccionar tu Tre Flip.',
      bring: ['Ropa resistente', 'Zapatillas de suela plana (Vans/Nike SB)'],
      provided: ['Skate completo', 'Casco', 'Rodilleras/Coderas'],
      duration: 'Clases de 60-90 min. Sesión libre ilimitada.'
    },
    faqs: [
      { q: '¿Es obligatorio el casco?', a: 'Sí, para menores de 18 y durante las clases. Muy recomendado siempre.' },
      { q: '¿Soy muy mayor para empezar?', a: 'Nunca. Tenemos alumnos de 50 años aprendiendo a rodar.' },
      { q: '¿Prestáis skate?', a: 'Sí, el alquiler está incluido en las clases y disponible por 5€ en sesión libre.' },
      { q: '¿Hay zona para principiantes?', a: 'Sí, tenemos una zona plana y rampas suaves separada de los pros.' },
      { q: '¿Puedo ir con scooter/bici?', a: 'Depende del horario. Consulta la agenda para sesiones mixtas.' }
    ]
  }
};
