import { SPORTS_CATALOG, getCentrosBySport } from './centros_data';

export interface SportSession {
  day: string;
  time: string;
  type: string;
  level: string;
  duration: string;
  centroId: string;
}

export interface SportPrice {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface SportFAQ {
  q: string;
  a: string;
}

export interface SportDetailData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  level: string;
  environment: 'Indoor' | 'Outdoor' | 'Hybrid';
  intensity: 'Alta' | 'Media' | 'Flexible';

  whatIsIt: {
    approach: string;
    differences: string[];
    features: string[];
  };

  community: {
    title: string;
    text: string;
    image: string;
  };

  technology: {
    title: string;
    text: string;
    image: string;
  };

  events: {
    title: string;
    text: string;
    image: string;
  };

  prices: SportPrice[];

  faqs: SportFAQ[];

  ecosystem: {
    relatedCentros: string[];
    relatedServices: string[];
  };
}

export const SPORT_DETAILS: Record<string, SportDetailData> = {
  boxing: {
    id: 'boxing',
    name: 'Boxing',
    slug: 'boxing',
    tagline: 'Golpea con propósito. Técnica y liberación.',
    description: 'Más que golpes, es una danza de estrategia y resistencia. En Heartbeat, el boxeo es una herramienta para enfocar la mente y liberar tensiones, combinando técnica clásica con entrenamiento funcional de alta intensidad.',
    heroImage: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Indoor',
    intensity: 'Alta',

    whatIsIt: {
      approach: 'En Heartbeat, el boxing no es solo combate. Es consciencia, respiración y movimiento sincronizado. Trabajamos técnica de golpeo, footwork y resistencia cardiovascular con un enfoque que respeta tu cuerpo.',
      differences: [
        'Clases divididas por nivel: desde fundamentos hasta sparring avanzado',
        'Equipamiento profesional: sacos acuáticos, sensores de impacto, guantes de última generación',
        'Enfoque holístico: combinamos boxeo con movilidad y recuperación activa'
      ],
      features: [
        'Nivel: Iniciación, Intermedio, Avanzado',
        'Modalidad: Indoor',
        'Duración: 55 minutos por sesión',
        'Grupo máximo: 12 personas'
      ]
    },

    community: {
      title: 'Comunidad sin egos',
      text: 'En nuestros centros de boxing, entrenas con tu compañero, no contra él. El respeto es la primera regla. Cada clase es una oportunidad para mejorar tu técnica mientras te rodeas de gente que comparte tu pasión por el movimiento consciente.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Tecnología al servicio del golpe',
      text: 'Nuestros sacos equipados con sensores registran la potencia, velocidad y precisión de cada golpe. Los datos te ayudan a entender tu progreso, pero nunca reemplazan la intuición del entrenador.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Eventos y competiciones internas',
      text: 'Organizamos sparring controlado, torneos amistosos y workshops con boxeadores profesionales. No es obligatorio competir, pero la opción está ahí para quien quiera ponerse a prueba.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfc441d82c?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Pase Suelto',
        price: '18€',
        period: '/sesión',
        features: ['Acceso a 1 clase', 'Toalla incluida', 'Validez 30 días']
      },
      {
        name: 'Pack 10',
        price: '140€',
        period: '/pack',
        features: ['14€ por clase', 'Acceso a todos los centros', 'Validez 3 meses'],
        recommended: true
      },
      {
        name: 'Unlimited',
        price: '89€',
        period: '/mes',
        features: ['Clases ilimitadas', 'Acceso Open Box', 'Eventos comunidad']
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia previa?', a: 'No. Nuestras clases "Fundamentals" están diseñadas desde cero para personas que nunca han boxeado.' },
      { q: '¿Qué material necesito?', a: 'Solo ropa cómoda y zapatillas limpias. Nosotros proporcionamos guantes, vendas y todo el equipamiento necesario.' },
      { q: '¿Hay clases para principiantes?', a: 'Sí. Tenemos clases específicas de iniciación donde aprenderás la técnica básica de forma segura.' },
      { q: '¿Qué incluye la membresía?', a: 'La membresía Heartbeat te da acceso ilimitado a todas las clases de boxing en cualquier centro, además de eventos y acceso a Open Box.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Por supuesto. Muchos de nuestros miembros combinan boxing con yoga, running o escalada para un entrenamiento más completo.' }
    ],

    ecosystem: {
      relatedCentros: ['madrid', 'sevilla'],
      relatedServices: ['Cryo Recovery', 'Fisioterapia Deportiva', 'Análisis de Movimiento']
    }
  },

  crossfit: {
    id: 'crossfit',
    name: 'Crossfit',
    slug: 'crossfit',
    tagline: 'Funcionalidad y potencia pura.',
    description: 'Prepárate para cualquier desafío. Entrenamientos constantemente variados, movimientos funcionales ejecutados a alta intensidad en un entorno de comunidad que te empuja a ser mejor.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Indoor',
    intensity: 'Alta',

    whatIsIt: {
      approach: 'Crossfit en Heartbeat significa entrenamiento funcional, escalable y comunidad real. Cada WOD está diseñado para desafiarte sin importar tu nivel. La técnica siempre es prioritaria.',
      differences: [
        'Coaches certificados L1/L2 que supervisan cada movimiento',
        'Programación estructurada y progresiva',
        'Material de competición: Rogue, Eleiko, Assault Bikes'
      ],
      features: [
        'Nivel: Escalable para todos',
        'Modalidad: Indoor/Outdoor según centro',
        'Duración: 60 minutos',
        'Grupo máximo: 16 personas'
      ]
    },

    community: {
      title: 'Comunidad que celebra juntos',
      text: 'El último en terminar es el que recibe más aplausos. Aquí no compites contra otros, compites contigo mismo. La comunidad crossfit de Heartbeat es conocida por su apoyo mutuo y buen rollo.',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Tracking opcional, progreso real',
      text: 'Puedes registrar tus tiempos, pesos y récords en nuestra app, pero no es obligatorio. La tecnología está ahí si la quieres, pero no condiciona tu experiencia.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Comps y throwdowns',
      text: 'Organizamos competiciones internas trimestrales y participamos en throwdowns regionales. Es la mejor forma de medir tu progreso y conocer a la comunidad crossfit más amplia.',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Drop-in',
        price: '15€',
        period: '/clase',
        features: ['Acceso a WOD', 'Uso de instalaciones']
      },
      {
        name: '3 días/semana',
        price: '75€',
        period: '/mes',
        features: ['12 clases al mes', 'Open Box incluido', 'App de seguimiento'],
        recommended: true
      },
      {
        name: 'Unlimited',
        price: '110€',
        period: '/mes',
        features: ['Clases ilimitadas', 'Halterofilia', 'Gymnastics']
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia?', a: 'No. Empezarás con nuestro curso "On Ramp" de 4 sesiones donde aprenderás los movimientos básicos de forma segura.' },
      { q: '¿Qué material necesito?', a: 'Ropa deportiva, zapatillas estables y una botella de agua. Todo lo demás te lo proporcionamos.' },
      { q: '¿Hay clases para principiantes?', a: 'Todas las clases son aptas para principiantes. Los coaches escalan cada ejercicio a tu nivel.' },
      { q: '¿Qué incluye la membresía?', a: 'Acceso a todas las clases de crossfit, open box para entrenar por tu cuenta, y eventos de comunidad.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Sí. Crossfit es complementario con casi cualquier deporte. Mejora tu fuerza, resistencia y movilidad.' }
    ],

    ecosystem: {
      relatedCentros: ['madrid', 'valencia', 'sevilla'],
      relatedServices: ['Fisioterapia Deportiva', 'Nutrición Deportiva', 'Paleo Kitchen']
    }
  },

  escalada: {
    id: 'escalada',
    name: 'Escalada',
    slug: 'escalada',
    tagline: 'Resuelve el problema. Fuerza y mente.',
    description: 'La escalada es el puzzle definitivo para tu cuerpo. Nuestros muros indoor simulan roca real, y nuestras salidas outdoor te llevan a los mejores picos. Desarrolla fuerza, equilibrio y una concentración absoluta.',
    heroImage: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Hybrid',
    intensity: 'Alta',

    whatIsIt: {
      approach: 'Escalada en Heartbeat es accesible y desafiante a partes iguales. Tenemos vías desde V0 hasta 8a, bouldering y cuerda, y salidas mensuales a roca natural para los que buscan la experiencia completa.',
      differences: [
        'Muros renovados cada mes con nuevos problemas',
        'Zona moonboard para entrenamiento específico',
        'Salidas guiadas a roca natural en fines de semana'
      ],
      features: [
        'Nivel: Desde iniciación hasta avanzado',
        'Modalidad: Indoor y Outdoor',
        'Duración: Sin límite de tiempo',
        'Grupos: Individuales o clases guiadas'
      ]
    },

    community: {
      title: 'Confianza y compañerismo',
      text: 'En escalada, confías tu vida a quien te asegura. Esa confianza crea vínculos únicos. Nuestra comunidad organiza salidas, entrenos conjuntos y sesiones de proyectos.',
      image: 'https://images.unsplash.com/photo-1583692348560-6c927e1c8d01?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Tech mínima, roca máxima',
      text: 'No necesitas sensores para escalar. Lo único que importa es tu cuerpo, la pared y el siguiente agarre. Simple, honesto, real.',
      image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Comps y salidas a roca',
      text: 'Organizamos competiciones flash mensuales y salidas outdoor programadas a los mejores sectores de España. También viajes internacionales anuales.',
      image: 'https://images.unsplash.com/photo-1601924376249-14e36589330d?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Entrada Día',
        price: '15€',
        period: '/día',
        features: ['Acceso ilimitado', 'Sin límite de tiempo', 'Sauna incluida']
      },
      {
        name: 'Bono 10',
        price: '120€',
        period: '/pack',
        features: ['Compartible', 'Validez 6 meses', 'Alquiler pies de gato 50%'],
        recommended: true
      },
      {
        name: 'Climber Member',
        price: '65€',
        period: '/mes',
        features: ['Acceso total', 'Clases técnica incluidas', 'Salidas a roca']
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia?', a: 'No. Boulder no requiere curso. Para cuerda necesitas hacer un test de seguridad básico que te enseñamos en 30 minutos.' },
      { q: '¿Qué material necesito?', a: 'Ropa cómoda. Nosotros alquilamos pies de gato, arneses y cuerdas.' },
      { q: '¿Hay clases para principiantes?', a: 'Sí. Clases de iniciación todos los sábados a las 11h.' },
      { q: '¿Qué incluye la membresía?', a: 'Acceso ilimitado, clases técnicas, alquiler de material y salidas outdoor mensuales.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Perfecto para combinar con yoga (flexibilidad) o crossfit (fuerza).' }
    ],

    ecosystem: {
      relatedCentros: ['asturias'],
      relatedServices: ['Yoga para escaladores', 'Fisioterapia', 'Guías de montaña']
    }
  },

  running: {
    id: 'running',
    name: 'Running',
    slug: 'running',
    tagline: 'Medita en movimiento. Ciudad y montaña.',
    description: 'Redescubre el acto de correr. Ya sea en nuestras pistas técnicas urbanas o en senderos naturales protegidos, el running en Heartbeat se trata de ritmo, respiración y conexión con el entorno.',
    heroImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Outdoor',
    intensity: 'Media',

    whatIsIt: {
      approach: 'Running en Heartbeat no es correr sin más. Es entender tu pisada, tu respiración y tu ritmo natural. Ofrecemos grupos divididos por pace, salidas urbanas y de trail, y coaching técnico.',
      differences: [
        'Grupos por ritmo: desde 6:30/km hasta 4:15/km',
        'Análisis de pisada y técnica de carrera',
        'Salidas de trail en naturaleza los fines de semana'
      ],
      features: [
        'Nivel: Iniciación a élite',
        'Modalidad: Outdoor (urbano y trail)',
        'Duración: 60-90 minutos',
        'Grupos: 15-30 personas por salida'
      ]
    },

    community: {
      title: 'La tribu que corre junta',
      text: 'Nunca corres solo. El grupo te lleva más lejos de lo que irías por tu cuenta. Salidas semanales, preparación de carreras y celebraciones post-entreno.',
      image: 'https://images.unsplash.com/photo-1552674605-46f5383a67d4?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Datos útiles, no obsesivos',
      text: 'Puedes conectar tu reloj GPS a nuestra app para seguir tu progreso, pero no es obligatorio. Lo importante es escuchar a tu cuerpo.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Carreras y viajes de running',
      text: 'Participamos en maratones, medias maratones y carreras de trail como equipo. También organizamos viajes para correr en destinos épicos.',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Drop-in Run',
        price: '10€',
        period: '/sesión',
        features: ['Sesión guiada', 'Avituallamiento', 'Taquilla']
      },
      {
        name: 'Run Club',
        price: '45€',
        period: '/mes',
        features: ['Salidas ilimitadas', 'Camiseta técnica', 'Plan de entreno app'],
        recommended: true
      },
      {
        name: 'Marathon Prep',
        price: '120€',
        period: '/pack',
        features: ['12 semanas', 'Coach personal', 'Nutrición']
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia?', a: 'No. Tenemos grupos de iniciación que empiezan con walk/run.' },
      { q: '¿Qué material necesito?', a: 'Zapatillas de running y ropa deportiva. Todo lo demás te lo proporcionamos.' },
      { q: '¿Hay clases para principiantes?', a: 'Sí. Grupos específicos para quienes empiezan desde cero.' },
      { q: '¿Qué incluye la membresía?', a: 'Acceso ilimitado a todas las salidas, análisis de técnica, y eventos de comunidad.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Perfecto para combinar con cualquier disciplina. Running mejora tu base aeróbica.' }
    ],

    ecosystem: {
      relatedCentros: ['vilanova', 'asturias', 'valencia'],
      relatedServices: ['Análisis de pisada', 'Fisioterapia', 'Nutrición deportiva']
    }
  },

  surf: {
    id: 'surf',
    name: 'Surf',
    slug: 'surf',
    tagline: 'Fluye con la energía del océano.',
    description: 'Más que un deporte, una filosofía. Aprende a leer las olas, mejora tu equilibrio y conecta con la fuerza bruta de la naturaleza en nuestros spots costeros certificados.',
    heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Outdoor',
    intensity: 'Alta',

    whatIsIt: {
      approach: 'Surf en Heartbeat es respeto al mar, paciencia y lectura del entorno. Enseñamos desde cero en spots seguros, o perfeccionamos tu técnica en olas más exigentes.',
      differences: [
        'Escuela certificada con instructores ISA',
        'Material de calidad: tablas de foam, softboards y fibra',
        'Spots seleccionados por seguridad y calidad de ola'
      ],
      features: [
        'Nivel: Desde cero hasta intermedio-avanzado',
        'Modalidad: Outdoor (playa)',
        'Duración: 2 horas por clase',
        'Grupos: Máximo 6 alumnos por instructor'
      ]
    },

    community: {
      title: 'Respeto en el pico',
      text: 'El surf tiene sus códigos no escritos. En Heartbeat los enseñamos desde el primer día. Respeto a los locales, prioridades en la ola, y cuidado del océano.',
      image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Low-tech, high-feeling',
      text: 'El surf no necesita tecnología. Solo tú, tu tabla y el océano. A veces grabamos video para corregir técnica, pero nada más.',
      image: 'https://images.unsplash.com/photo-1415931633537-351070d20b81?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Surf trips y limpiezas de playa',
      text: 'Organizamos viajes a los mejores destinos de surf de Europa y participamos activamente en la limpieza y conservación de nuestras playas.',
      image: 'https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Clase Grupo',
        price: '35€',
        period: '/2h',
        features: ['Material incluido', 'Max 6 alumnos', 'Seguro']
      },
      {
        name: 'Curso 5 Días',
        price: '150€',
        period: '/semana',
        features: ['Progresión rápida', 'Video-análisis', 'Diploma'],
        recommended: true
      },
      {
        name: 'Surf Coaching',
        price: '60€',
        period: '/hora',
        features: ['1 to 1', 'Corrección técnica', 'Material Pro']
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia?', a: 'No. Nuestras clases de nivel 1 son para personas que nunca han surfeado.' },
      { q: '¿Qué material necesito?', a: 'Solo bañador y toalla. Nosotros proporcionamos tabla y neopreno.' },
      { q: '¿Hay clases para principiantes?', a: 'Sí. Empezamos en la arena explicando técnica y seguridad antes de entrar al agua.' },
      { q: '¿Qué incluye la membresía?', a: 'Si eres miembro Heartbeat Life en centros costeros, tienes descuentos en clases y alquiler de material.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Perfecto con yoga (flexibilidad) y crossfit (fuerza de remo).' }
    ],

    ecosystem: {
      relatedCentros: ['vilanova', 'asturias', 'miches'],
      relatedServices: ['Breathwork', 'Yoga', 'Beach Cleanups']
    }
  },

  skate: {
    id: 'skate',
    name: 'Skate',
    slug: 'skate',
    tagline: 'Creatividad sobre ruedas.',
    description: 'La ciudad es tu patio de recreo. Domina el asfalto en nuestros parques diseñados para el flujo y la técnica. Clases para principiantes y sesiones libres para perfeccionar tu estilo.',
    heroImage: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Hybrid',
    intensity: 'Media',

    whatIsIt: {
      approach: 'Skate en Heartbeat es expresión, no solo técnica. Tenemos parques indoor y outdoor, clases para niños y adultos, y una comunidad que valora el estilo tanto como el truco.',
      differences: [
        'Bowl de hormigón pulido diseñado por skaters',
        'Zona de street con elementos modulares',
        'Talleres de reparación y mantenimiento de tablas'
      ],
      features: [
        'Nivel: Desde aprender a rodar hasta tricks avanzados',
        'Modalidad: Indoor/Outdoor según centro',
        'Duración: Sin límite en sesión libre, 90min en clases',
        'Grupos: Clases de máximo 10 personas'
      ]
    },

    community: {
      title: 'Cultura y estilo',
      text: 'El skate es música, arte y ruedas. Organizamos sesiones con DJs, murales con artistas locales y eventos que van más allá del patín.',
      image: 'https://images.unsplash.com/photo-1535132015016-1077916f598e?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Analógico al 100%',
      text: 'No hay sensores ni métricas en skate. Solo práctica, repetición y estilo. A veces filmamos para análisis técnico, pero eso es todo.',
      image: 'https://images.unsplash.com/photo-1520045864914-89971a1bbb59?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Jams y comps',
      text: 'Organizamos skate jams mensuales, competiciones amistosas y eventos culturales que mezclan skate, música y arte urbano.',
      image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Pase de Día',
        price: '10€',
        period: '/día',
        features: ['Acceso libre', 'Sin límite', 'Uso de protecciones']
      },
      {
        name: 'Clase Grupal',
        price: '20€',
        period: '/clase',
        features: ['Monitor', 'Seguro', 'Material incluido']
      },
      {
        name: 'Skate Academy',
        price: '60€',
        period: '/mes',
        features: ['1 clase/sem', 'Acceso libre ilimitado', 'Descuento tienda'],
        recommended: true
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia?', a: 'No. Tenemos clases de iniciación donde aprendes desde mantener el equilibrio.' },
      { q: '¿Qué material necesito?', a: 'Ropa cómoda y zapatillas de suela plana. Nosotros proporcionamos skate, casco y protecciones.' },
      { q: '¿Hay clases para principiantes?', a: 'Sí. Clases de kids y adultos para empezar desde cero.' },
      { q: '¿Qué incluye la membresía?', a: 'Acceso libre ilimitado, 1 clase semanal, descuentos en tienda y eventos.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Perfecto con surf (equilibrio) y crossfit (fuerza de piernas).' }
    ],

    ecosystem: {
      relatedCentros: ['valencia'],
      relatedServices: ['Street Art Workshop', 'Filmmaking', 'Tienda técnica']
    }
  },

  simuladores: {
    id: 'simuladores',
    name: 'Simuladores',
    slug: 'simuladores',
    tagline: 'Velocidad real en entorno virtual.',
    description: 'Entrena como un piloto profesional. Nuestros simuladores de F1 y GT ofrecen feedback háptico real y telemetría avanzada para mejorar tus reflejos y concentración sin riesgo físico.',
    heroImage: 'https://images.unsplash.com/photo-1626855227702-8c42a033c56e?auto=format&fit=crop&q=80',
    level: 'Todos los niveles',
    environment: 'Indoor',
    intensity: 'Media',

    whatIsIt: {
      approach: 'Simuladores en Heartbeat no son videojuegos. Son plataformas de entrenamiento cognitivo y reflejos. Usamos las mismas plataformas que equipos profesionales de motorsport.',
      differences: [
        'Simuladores con movimiento 4DOF',
        'Volantes Direct Drive de alta fidelidad',
        'Pantallas curvas 180º o realidad virtual'
      ],
      features: [
        'Nivel: Desde novato hasta piloto avanzado',
        'Modalidad: Indoor',
        'Duración: Sesiones de 30, 60 o 120 minutos',
        'Grupos: Hasta 12 simuladores en simultáneo'
      ]
    },

    community: {
      title: 'Ligas y competición',
      text: 'Organizamos ligas internas por categorías, eventos con premios y sesiones de entrenamiento en grupo. La comunidad sim racing es muy activa.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80'
    },

    technology: {
      title: 'Telemetría profesional',
      text: 'Cada vuelta se analiza. Frenada, aceleración, trazada. Un ingeniero te ayuda a interpretar los datos y mejorar tu tiempo.',
      image: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80'
    },

    events: {
      title: 'Endurance y esports',
      text: 'Participamos en ligas online internacionales y organizamos endurance races de 4-6 horas en equipo. Pura estrategia y resistencia mental.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80'
    },

    prices: [
      {
        name: 'Sesión 30min',
        price: '25€',
        period: '/sesión',
        features: ['Briefing incluido', 'Coche y circuito a elegir', 'Telemetría básica']
      },
      {
        name: 'Race Pack',
        price: '90€',
        period: '/5 sesiones',
        features: ['60 min por sesión', 'Análisis de ingeniero', 'Setup personalizado'],
        recommended: true
      },
      {
        name: 'Pro License',
        price: '150€',
        period: '/mes',
        features: ['Horas ilimitadas (valle)', 'Liga privada', 'Coaching cognitivo']
      }
    ],

    faqs: [
      { q: '¿Necesito experiencia?', a: 'No. Ajustamos las ayudas (ABS, TC) a tu nivel.' },
      { q: '¿Qué material necesito?', a: 'Nada. Todo está incluido.' },
      { q: '¿Hay clases para principiantes?', a: 'Sí. Sesiones de academy para aprender conceptos básicos de pilotaje.' },
      { q: '¿Qué incluye la membresía?', a: 'Horas ilimitadas en horarios valle, participación en ligas, y coaching.' },
      { q: '¿Puedo combinar con otros deportes?', a: 'Sí. Sim racing mejora reflejos y toma de decisiones bajo presión.' }
    ],

    ecosystem: {
      relatedCentros: ['madrid'],
      relatedServices: ['Neuro-Training', 'E-Sports League', 'Coaching cognitivo']
    }
  }
};

export const getSportDetail = (slug: string): SportDetailData | undefined => {
  return SPORT_DETAILS[slug];
};

export const getAllSportSlugs = (): string[] => {
  return Object.keys(SPORT_DETAILS);
};
