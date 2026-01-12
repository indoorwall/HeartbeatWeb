import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles, MapPin, Activity, ArrowRight, CornerDownLeft, Mic, MicOff } from 'lucide-react';
import { cn } from '../lib/utils';

// --- CEREBRO DE NAVEGACIÓN (INTENT ENGINE) ---
// Mapea palabras clave a rutas y respuestas
const KNOWLEDGE_BASE = [
  // 1. DEPORTES ESPECÍFICOS
  {
    keywords: ['boxing', 'boxeo', 'box', 'pelear'],
    response: "El Boxing en Heartbeat es disciplina y enfoque mental. Te llevo a la zona de combate.",
    path: '/prototype/deportes/boxing'
  },
  {
    keywords: ['running', 'correr', 'run', 'carrera'],
    response: "Meditación en movimiento. Tenemos grupos de salida en ciudad y montaña.",
    path: '/prototype/deportes/running'
  },
  {
    keywords: ['yoga', 'pilates', 'estirar', 'flexibilidad'],
    response: "Conexión y equilibrio. Te muestro dónde recuperar tu centro.",
    path: '/prototype/deportes/yoga' // Asumiendo que existe o redirige a general
  },
  {
    keywords: ['escalada', 'climb', 'boulder', 'rocodromo', 'rocódromo'],
    response: "Resuelve el problema vertical. Muros indoor y salidas a roca.",
    path: '/prototype/deportes/climbing'
  },
  {
    keywords: ['simulador', 'sim racing', 'coche', 'conducir', 'f1'],
    response: "Velocidad real, riesgo virtual. Nuestros simuladores te esperan.",
    path: '/prototype/deportes/simulators'
  },
  {
    keywords: ['surf', 'mar', 'ola', 'playa'],
    response: "Conecta con la energía del océano. Te llevo a la costa.",
    path: '/prototype/deportes/surf'
  },
  {
    keywords: ['crossfit', 'funcional', 'pesas', 'fuerza'],
    response: "Alta intensidad y comunidad. Prepárate para sudar.",
    path: '/prototype/deportes/crossfit'
  },
  {
    keywords: ['skate', 'patinar', 'rampa'],
    response: "Creatividad sobre ruedas. Vamos al park.",
    path: '/prototype/deportes/skate'
  },

  // 2. LUGARES / CIUDADES
  {
    keywords: ['madrid', 'capital'],
    response: "Madrid Tech Hub: Nuestro centro urbano más avanzado.",
    path: '/prototype/lugares/madrid-hub'
  },
  {
    keywords: ['barcelona', 'bcn', 'costa'],
    response: "Barcelona Coast: Donde la ciudad toca el mar.",
    path: '/prototype/lugares/bcn-beach'
  },
  {
    keywords: ['huesca', 'pirineo', 'montaña', 'nieve'],
    response: "Pyrenees Base: Aire puro y desconexión radical.",
    path: '/prototype/lugares/pyrenees'
  },
  {
    keywords: ['valencia', 'turia'],
    response: "Valencia Green: Deporte integrado en el pulmón de la ciudad.",
    path: '/prototype/lugares/valencia-urban'
  },

  // 3. INTENCIONES DE NEGOCIO (PRECIO, HORARIO, RESERVA)
  {
    keywords: ['precio', 'coste', 'cuanto', 'tarifa', 'pagar', 'dinero'],
    response: "Entendido. Te llevo directamente a los planes y tarifas.",
    path: '#prices', // Lógica especial para anchor links
    action: 'scroll-prices'
  },
  {
    keywords: ['horario', 'hora', 'cuando', 'abierto', 'cerrado'],
    response: "Aquí tienes la disponibilidad en tiempo real.",
    path: '#schedule', // Lógica especial
    action: 'scroll-schedule'
  },
  {
    keywords: ['reserva', 'apuntar', 'inscribir', 'clase', 'ir'],
    response: "Vamos a formalizar tu compromiso. Elige tu sesión.",
    path: '#schedule',
    action: 'scroll-schedule'
  },

  // 4. CONTENIDO / MAGAZINE
  {
    keywords: ['revista', 'leer', 'articulo', 'blog', 'noticia', 'aprender'],
    response: "Heartbeat Magazine: Periodismo lento para mentes rápidas.",
    path: '/prototype/magazine'
  },
  {
    keywords: ['salud', 'biologia', 'cuerpo', 'ciencia'],
    response: "Explorando la biología humana en nuestro Magazine.",
    path: '/prototype/magazine/category/salud'
  },

  // 5. FILOSOFÍA / GENERAL
  {
    keywords: ['que es', 'quienes sois', 'mision', 'proposito', 'alma'],
    response: "No somos un gimnasio. Somos tu alma tecnológica. Mira esto.",
    path: '/prototype/intro'
  },
  {
    keywords: ['ecosistema', 'universo', 'tipos', 'formatos'],
    response: "Explora todas las formas en las que Heartbeat se manifiesta.",
    path: '/prototype/ecosistema'
  }
];

interface Message {
  id: string;
  role: 'user' | 'guide';
  text: string;
  actionLabel?: string; // Si la guía sugiere un botón
  actionPath?: string;
}

export default function SoulGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'guide', text: 'Sincronizada. ¿Qué buscas hoy?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll al fondo del chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Foco al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // --- LÓGICA DE PROCESAMIENTO (CORE) ---
  const processIntent = (text: string) => {
    // 1. Añadir mensaje usuario
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Procesar Intención (Simulado delay de pensamiento)
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let match = KNOWLEDGE_BASE.find(k => k.keywords.some(word => lowerText.includes(word)));
      
      let responseMsg: Message;

      if (match) {
        // --- CASO: INTENCIÓN ENCONTRADA ---
        
        // Lógica especial para anchors (#prices, #schedule)
        if (match.action === 'scroll-prices' || match.action === 'scroll-schedule') {
          // Si ya estamos en una página de deporte/lugar, hacemos scroll
          if (location.pathname.includes('/deportes/') || location.pathname.includes('/lugares/')) {
             // Scroll local
             const elementId = match.path.replace('#', '');
             const element = document.getElementById(elementId);
             if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
               responseMsg = { 
                 id: Date.now().toString(), 
                 role: 'guide', 
                 text: match.response 
               };
             } else {
               // Fallback si no encuentra el ID en esta página
               responseMsg = { 
                 id: Date.now().toString(), 
                 role: 'guide', 
                 text: "Te llevo al listado general para que elijas dónde consultar eso.",
                 actionLabel: "Ver opciones",
                 actionPath: "/prototype/deportes"
               };
             }
          } else {
            // Si NO estamos en una página de detalle, preguntamos o llevamos al catálogo
            responseMsg = {
              id: Date.now().toString(),
              role: 'guide',
              text: "Para ver precios u horarios, primero elige una disciplina.",
              actionLabel: "Ir a Deportes",
              actionPath: "/prototype/deportes"
            };
          }
        } else {
          // Navegación estándar
          responseMsg = {
            id: Date.now().toString(),
            role: 'guide',
            text: match.response,
            actionLabel: "Ir ahora",
            actionPath: match.path
          };
          
          // Ejecutar navegación automática tras un breve delay si es muy clara
          setTimeout(() => {
             if (match?.path && !match.path.startsWith('#')) {
                navigate(match.path);
             }
          }, 1500);
        }

      } else {
        // --- CASO: NO ENTENDIDO ---
        responseMsg = {
          id: Date.now().toString(),
          role: 'guide',
          text: "No estoy segura de esa ruta. ¿Buscas un deporte, un lugar o leer algo?",
          actionLabel: "Explorar Mapa",
          actionPath: "/prototype"
        };
      }

      setMessages(prev => [...prev, responseMsg]);
      setIsTyping(false);

    }, 600); // Delay artificial para "humanizar"
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput('');
    processIntent(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // --- LÓGICA DE VOZ (WEB SPEECH API) ---
  const toggleVoice = () => {
    if (isListening) {
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'guide', 
        text: "Tu navegador no soporta comandos de voz. Intenta con Chrome o Safari." 
      }]);
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setIsListening(false);
      setInput(transcript);
      // Auto-enviar después de un breve momento para que el usuario vea lo que se escribió
      setTimeout(() => processIntent(transcript), 800);
    };

    recognition.onspeechend = () => {
      setIsListening(false);
      recognition.stop();
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      console.error('Error de voz:', event.error);
      if (event.error === 'not-allowed') {
        setMessages(prev => [...prev, { 
          id: Date.now().toString(), 
          role: 'guide', 
          text: "No tengo acceso al micrófono. Por favor, permite el acceso en tu navegador para continuar." 
        }]);
      }
    };
  };

  return (
    <>
      {/* --- TRIGGER (ORB) --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[90] group"
          >
            <div className="relative flex items-center justify-center w-14 h-14">
              {/* Core */}
              <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              
              {/* Pulse Ring 1 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-start to-brand-end opacity-80 blur-sm animate-pulse" />
              
              {/* Pulse Ring 2 (Expansion) */}
              <div className="absolute inset-[-4px] rounded-full border border-brand-start/30 animate-[spin_4s_linear_infinite]" />
              
              {/* Label on Hover */}
              <span className="absolute right-full mr-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Soul Guide
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- INTERFACE (PANEL) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[90] w-[90vw] max-w-[380px] h-[500px] flex flex-col bg-white/80 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100/50 bg-white/50">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-brand-start" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600">Soul Guide</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
              >
                <X size={16} className="text-neutral-500" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "self-end items-end" : "self-start items-start"
                  )}
                >
                  <div className={cn(
                    "px-4 py-3 text-sm font-medium rounded-2xl leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-black text-white rounded-br-none" 
                      : "bg-white border border-neutral-100 text-neutral-800 rounded-bl-none shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                  
                  {/* Action Button (if guide provides one) */}
                  {msg.role === 'guide' && msg.actionPath && (
                    <button
                      onClick={() => {
                        if (msg.actionPath) navigate(msg.actionPath);
                      }}
                      className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-start hover:text-brand-end transition-colors bg-white/50 px-3 py-1 rounded-full border border-neutral-100"
                    >
                      {msg.actionLabel || "Ir ahora"} <ArrowRight size={12} />
                    </button>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="self-start bg-white border border-neutral-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/50 border-t border-neutral-100/50">
              <div className="relative flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isListening ? "Escuchando..." : "Escribe o habla..."}
                    className={cn(
                      "w-full bg-white border rounded-full pl-5 pr-12 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black/5 transition-all placeholder:text-neutral-400",
                      isListening ? "border-brand-start ring-1 ring-brand-start/20" : "border-neutral-200"
                    )}
                  />
                  {/* Botón de Enviar (Solo si hay texto y no está escuchando) */}
                  {!isListening && input.trim() && (
                    <button 
                      onClick={handleSend}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-all"
                    >
                      <CornerDownLeft size={14} />
                    </button>
                  )}
                </div>

                {/* Botón de Voz */}
                <button 
                  onClick={toggleVoice}
                  className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm",
                    isListening 
                      ? "bg-brand-start text-white animate-pulse shadow-brand-start/30" 
                      : "bg-white border border-neutral-200 text-neutral-500 hover:text-black hover:border-black"
                  )}
                >
                  {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
              </div>

              {/* Sugerencias Rápidas */}
              {!isListening && (
                <div className="mt-3 flex justify-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {['Precios', 'Horarios', 'Boxing', 'Yoga'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => {
                          setInput(tag); 
                          // Simular envío rápido
                          setTimeout(() => processIntent(tag), 100);
                      }}
                      className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 hover:text-black transition-colors px-2 py-1 rounded-md hover:bg-neutral-100 whitespace-nowrap"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
