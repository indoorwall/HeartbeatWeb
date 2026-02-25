import { Watch, Brain, Home, Utensils, Activity, Zap, Heart, Shield } from 'lucide-react';

export const TECH_SYSTEM_CORE = {
  tagline: "Un sistema inteligente que mide, interpreta y adapta",
  description: "La tecnología es el núcleo de Heartbeat. Una pulsera conectada y una IA que trabajan juntas para optimizar tu descanso y rendimiento.",
  purpose: "Todo tiene un propósito: Dormir mejor para vivir mejor."
};

export const TECH_HOW_IT_WORKS = [
  {
    step: 1,
    icon: Watch,
    title: "La pulsera mide",
    description: "Monitoriza tu actividad, recuperación, estrés, variabilidad cardíaca y patrones de sueño en tiempo real.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: 2,
    icon: Brain,
    title: "La IA interpreta",
    description: "Analiza tus datos biométricos y comprende qué necesitas en cada momento del día.",
    color: "from-purple-500 to-pink-500"
  },
  {
    step: 3,
    icon: Home,
    title: "El entorno responde",
    description: "Centros deportivos, hoteles, restaurantes y tu hogar se adaptan automáticamente a tu estado.",
    color: "from-green-500 to-emerald-500"
  },
  {
    step: 4,
    icon: Heart,
    title: "Duermes mejor",
    description: "Todo el sistema trabaja coordinado para optimizar tu recuperación y bienestar.",
    color: "from-red-500 to-rose-500"
  }
];

export const TECH_APPLICATIONS = {
  centros: {
    title: "En centros deportivos",
    items: [
      "Identificación automática con pulsera",
      "Adaptación del entrenamiento según estado de recuperación",
      "Recomendación personalizada de intensidad",
      "Seguimiento de esfuerzo y recuperación"
    ]
  },
  deportes: {
    title: "En disciplinas deportivas",
    examples: {
      boxing: {
        tired: "Si estás fatigado, propone técnica y precisión",
        strong: "Si estás fuerte, propone intensidad y potencia",
        stressed: "Si vienes estresado, adapta ritmo para liberar tensión"
      },
      yoga: {
        tired: "Sugiere práctica restaurativa",
        energized: "Propone flujo dinámico",
        stressed: "Enfoca en pranayama y meditación"
      },
      running: {
        tired: "Reduce intensidad y volumen",
        strong: "Propone intervalos o series",
        recovery: "Recomienda rodaje suave"
      }
    }
  },
  alojamiento: {
    title: "Tu estancia conectada",
    items: [
      "La habitación responde a tu estado",
      "Ajuste automático de luz, temperatura y aroma",
      "Integración con tu entrenamiento del día",
      "Preparación del espacio cuando llegas",
      "Optimización del ambiente para descanso profundo"
    ]
  },
  alimentacion: {
    title: "Alimentación conectada",
    items: [
      "La IA sugiere alimentos según tu gasto energético",
      "Ajuste según entrenamiento del día",
      "Equilibrio nutricional para mejorar descanso",
      "Recomendaciones personalizadas de timing"
    ]
  },
  home: {
    title: "Heartbeat Home",
    items: [
      "Automatización según ritmos biológicos",
      "Gestión energética inteligente",
      "Preparación del hogar para optimizar sueño",
      "Integración completa con el ecosistema Heartbeat"
    ]
  }
};

export const TECH_PRINCIPLES = [
  {
    icon: Shield,
    title: "No invade",
    description: "La tecnología es invisible. Solo actúa cuando aporta valor."
  },
  {
    icon: Activity,
    title: "No sustituye",
    description: "Potencia la experiencia física, no la reemplaza."
  },
  {
    icon: Brain,
    title: "Conecta datos y bienestar",
    description: "Transforma información en acciones que mejoran tu vida."
  },
  {
    icon: Zap,
    title: "Permite gestión eficiente",
    description: "Optimiza recursos para maximizar tu recuperación."
  }
];

export const AI_SPORT_ADAPTATIONS: Record<string, any> = {
  boxing: {
    title: "Cómo la IA adapta Boxing",
    scenarios: [
      {
        condition: "Fatiga alta / Recuperación baja",
        adaptation: "Propone sesión de técnica: trabajo de sombra, esquivas, precisión en el saco."
      },
      {
        condition: "Energía alta / Buena recuperación",
        adaptation: "Propone intensidad: sparring, rounds explosivos, trabajo de potencia."
      },
      {
        condition: "Estrés elevado",
        adaptation: "Adapta ritmo: sesión de liberación controlada, foco en respiración."
      }
    ]
  },
  crossfit: {
    title: "Cómo la IA adapta Crossfit",
    scenarios: [
      {
        condition: "Fatiga muscular alta",
        adaptation: "Reduce volumen, enfoca en movilidad y técnica."
      },
      {
        condition: "Óptimo estado",
        adaptation: "WOD completo con máxima intensidad."
      },
      {
        condition: "Recuperación parcial",
        adaptation: "Sesión de fuerza controlada sin fatiga metabólica."
      }
    ]
  },
  yoga: {
    title: "Cómo la IA adapta Yoga",
    scenarios: [
      {
        condition: "Fatiga o estrés alto",
        adaptation: "Sugiere práctica restaurativa: yin yoga, nidra."
      },
      {
        condition: "Energía alta",
        adaptation: "Propone flujo dinámico: vinyasa, ashtanga."
      },
      {
        condition: "Necesidad de balance",
        adaptation: "Combina asanas con pranayama y meditación."
      }
    ]
  },
  running: {
    title: "Cómo la IA adapta Running",
    scenarios: [
      {
        condition: "Fatiga acumulada",
        adaptation: "Reduce distancia e intensidad, rodaje regenerativo."
      },
      {
        condition: "Buena forma",
        adaptation: "Propone series, intervalos o tempo run."
      },
      {
        condition: "Fase de recuperación",
        adaptation: "Rodaje suave, énfasis en técnica de carrera."
      }
    ]
  },
  escalada: {
    title: "Cómo la IA adapta Escalada",
    scenarios: [
      {
        condition: "Fatiga en dedos/antebrazos",
        adaptation: "Sesión de fuerza general, movilidad, core."
      },
      {
        condition: "Estado óptimo",
        adaptation: "Vías de alta dificultad, boulder explosivo."
      },
      {
        condition: "Día de recuperación",
        adaptation: "Escalada técnica, volumen bajo, estiramientos."
      }
    ]
  },
  surf: {
    title: "Cómo la IA adapta Surf",
    scenarios: [
      {
        condition: "Fatiga o sueño insuficiente",
        adaptation: "Sesión corta, olas suaves, enfoque en fluidez."
      },
      {
        condition: "Energía alta",
        adaptation: "Busca olas más exigentes, maniobras técnicas."
      },
      {
        condition: "Recuperación activa",
        adaptation: "Sesión larga de remada suave, conexión con el mar."
      }
    ]
  }
};

export const TECH_BENEFITS_INVESTOR = [
  {
    title: "Datos como activo estratégico",
    description: "Información valiosa sobre patrones de uso, preferencias y comportamiento que optimiza operaciones."
  },
  {
    title: "Integración vertical completa",
    description: "Tecnología que conecta todos los espacios físicos creando un ecosistema único."
  },
  {
    title: "Sistema replicable",
    description: "Modelo tecnológico escalable a cualquier ubicación manteniendo coherencia."
  },
  {
    title: "Diferenciación competitiva real",
    description: "Barrera de entrada tecnológica que separa Heartbeat de competidores tradicionales."
  }
];
