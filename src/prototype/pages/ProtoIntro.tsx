import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Plus, SkipForward, ArrowUpRight } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import { cn } from '../../lib/utils';

// --- DATA: CONTENIDO EDITORIAL PROFUNDO (REBRAND: ALMA TECNOLÓGICA) ---
const CONCEPTS = [
  {
    id: 'sports',
    title: 'Movimiento',
    subtitle: 'La oración del cuerpo.',
    image: 'https://lh3.googleusercontent.com/d/1m9kZBnTxSmivAwQSsQp_tCnRWdjUYvHU', 
    content: {
      heroImage: 'https://lh3.googleusercontent.com/d/1m9kZBnTxSmivAwQSsQp_tCnRWdjUYvHU',
      section1: {
        title: 'El cuerpo como antena',
        text: 'En Heartbeat, el deporte no es estética, es calibración. Usamos el movimiento para sintonizar tu biología con el entorno. Cada gota de sudor es un dato; cada respiración, una conexión.'
      },
      section2: {
        title: 'Disciplinas de Sincronización',
        items: ['Boxing Consciente', 'Running Meditativo', 'Escalada Zen', 'Flow State Surfing']
      },
      section3: {
        title: 'Tecnología Invisible',
        text: 'Nuestros espacios leen tu energía. Sensores biométricos integrados en el entorno ajustan la iluminación y el sonido para llevarte al estado de flujo. No entrenas solo; el espacio entrena contigo.'
      },
      cta: {
        text: 'Ver más',
        url: '/prototype/deportes'
      }
    }
  },
  {
    id: 'health',
    title: 'Biología',
    subtitle: 'Datos que sanan.',
    image: 'https://lh3.googleusercontent.com/d/1GnsbRLV08eCl_CdPTh1j7sE4J1JtVwhG',
    content: {
      heroImage: 'https://lh3.googleusercontent.com/d/1GnsbRLV08eCl_CdPTh1j7sE4J1JtVwhG',
      section1: {
        title: 'Tu código interno',
        text: 'Tu cuerpo genera terabytes de información que ignoras. Heartbeat actúa como el traductor de tu alma biológica. Convertimos señales confusas en claridad mental y vitalidad.'
      },
      section2: {
        title: 'Herramientas del Alma',
        items: ['Bio-feedback en tiempo real', 'Recuperación asistida por IA', 'Nutrición algorítmica']
      },
      section3: {
        title: 'Más allá de la salud',
        text: 'No buscamos "estar en forma". Buscamos la coherencia cardíaca y mental. Usamos la tecnología más avanzada para devolverte a tu estado natural más puro.'
      },
      cta: {
        text: 'Explorar bio-tech',
        url: '/prototype/ecosistema/tech' // CAMBIO
      }
    }
  },
  {
    id: 'consciousness',
    title: 'Consciencia',
    subtitle: 'El sistema operativo.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    content: {
      heroImage: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80',
      section1: {
        title: 'Despertar digital',
        text: 'La tecnología nos ha dormido, pero Heartbeat la usa para despertarte. Creamos interfaces que no demandan tu atención, sino que te devuelven a ella. Es tecnología que te hace más humano, no menos.'
      },
      section2: {
        title: 'Prácticas de Presencia',
        items: ['Desconexión guiada', 'Baños de bosque aumentados', 'Rituales de silencio']
      },
      section3: {
        title: 'El propósito',
        text: 'Una mente dispersa es una mente infeliz. Nuestro objetivo final es usar cada herramienta, cada espacio y cada dato para anclarte en el ahora absoluto.'
      },
      cta: null
    }
  },
  {
    id: 'urban',
    title: 'Entorno',
    subtitle: 'Templos modernos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    content: {
      heroImage: 'https://images.unsplash.com/photo-1596230529625-7ee10f7b09b6?auto=format&fit=crop&q=80',
      section1: {
        title: 'Catedrales de energía',
        text: 'Las ciudades han perdido su alma. Heartbeat recupera estructuras muertas y las convierte en templos de regeneración. Donde había ruido, ponemos armonía. Donde había gris, ponemos vida.'
      },
      section2: {
        title: 'Regeneración',
        items: ['Arquitectura biofílica', 'Espacios de respiración', 'Santuarios urbanos']
      },
      section3: {
        title: 'El impacto',
        text: 'No construimos gimnasios. Construimos refugios para el espíritu humano en medio del caos digital. Espacios donde la tecnología se vuelve invisible y la conexión se vuelve inevitable.'
      },
      cta: {
        text: 'Ver templos urbanos',
        url: '/prototype/ecosistema/urban' // CAMBIO
      }
    }
  }
];

export default function ProtoIntro() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <div className="bg-neutral-50 min-h-screen font-sans text-neutral-900 relative selection:bg-black selection:text-white">
      
      {/* BACKGROUND (GIF) - DIRECTO DESDE DRIVE (CDN) */}
      <div className="absolute top-0 left-0 w-full h-[90vh] overflow-hidden z-0 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/d/1T__Xnb9QClCSq3PUT7nc62Kohrn4G8nS"
          alt="Heartbeat Intro Background"
          className="w-full h-full object-cover opacity-40" // Eliminado grayscale y saturate-0, ajustada opacidad
        />
        
        {/* Degradado para fundirse suavemente con el fondo blanco */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/10 to-neutral-50" />
      </div>

      {/* BOTÓN SALTAR (Fixed) */}
      <Link 
        to="/prototype"
        className="fixed top-6 right-6 z-40 flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur border border-neutral-200 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
      >
        Saltar Intro <SkipForward size={14} />
      </Link>

      <div className="max-w-[1600px] mx-auto px-6 py-20 md:py-32 flex flex-col min-h-screen relative z-10">
        
        {/* NIVEL 1: INTRODUCCIÓN (ALMA TECNOLÓGICA) */}
        <header className="mb-20 md:mb-32 max-w-4xl">
          <FadeIn>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
              HEARTBEAT.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl font-bold text-neutral-400 uppercase tracking-widest mb-6">
              HEARTBEAT.
            </h2>
            <p className="text-xl md:text-3xl text-neutral-600 font-medium leading-relaxed max-w-3xl">
              No somos una red de gimnasios. Somos una interfaz de consciencia.
              <span className="text-neutral-900 block mt-4">
                Usamos la tecnología para escuchar lo que tu cuerpo grita y tu mente calla. 
                Bienvenido a la sincronización.
              </span>
            </p>
          </FadeIn>
        </header>

        {/* NIVEL 2: GRID DE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 flex-1">
          {CONCEPTS.map((card) => (
            <motion.div
              layoutId={`card-container-${card.id}`}
              key={card.id}
              onClick={() => setSelectedId(card.id)}
              className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-white"
            >
              {/* Background Image */}
              <motion.img
                layoutId={`card-image-${card.id}`}
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                     target.src = "https://images.unsplash.com/photo-1515023115689-589c33041697?auto=format&fit=crop&q=80";
                  }
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Content Collapsed */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <motion.h3 
                  layoutId={`card-title-${card.id}`}
                  className="text-4xl font-black uppercase tracking-tighter mb-2"
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  layoutId={`card-subtitle-${card.id}`}
                  className="text-lg font-medium text-neutral-300 mb-8 opacity-90"
                >
                  {card.subtitle}
                </motion.p>
                
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Plus size={16} /> Profundizar
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NIVEL 3: CARD EXPANDIDA (OVERLAY) */}
        <AnimatePresence>
          {selectedId && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />

              {/* Expanded Card Modal */}
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                {CONCEPTS.map((card) => {
                  if (card.id !== selectedId) return null;
                  return (
                    <motion.div
                      layoutId={`card-container-${card.id}`}
                      key={card.id}
                      className="w-full max-w-5xl h-full max-h-[90vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
                    >
                      {/* Close Button */}
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <X size={20} />
                      </button>

                      {/* Left: Hero Image (40%) */}
                      <div className="w-full md:w-2/5 h-64 md:h-full relative shrink-0">
                        <motion.img
                          layoutId={`card-image-${card.id}`}
                          src={card.content.heroImage}
                          alt={card.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.src.includes('unsplash')) {
                               target.src = "https://images.unsplash.com/photo-1515023115689-589c33041697?auto=format&fit=crop&q=80";
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute bottom-8 left-8 text-white">
                          <motion.h3 
                            layoutId={`card-title-${card.id}`}
                            className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2"
                          >
                            {card.title}
                          </motion.h3>
                          <motion.p 
                            layoutId={`card-subtitle-${card.id}`}
                            className="text-xl font-medium opacity-90"
                          >
                            {card.subtitle}
                          </motion.p>
                        </div>
                      </div>

                      {/* Right: Content (60%) - Scrollable */}
                      <div className="flex-1 overflow-y-auto bg-white p-8 md:p-12 lg:p-16">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="space-y-12 max-w-2xl"
                        >
                          {/* Section 1: Vision */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                              {card.content.section1.title}
                            </h4>
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-900">
                              {card.content.section1.text}
                            </p>
                          </div>

                          {/* Section 2: List */}
                          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
                              {card.content.section2.title}
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                              {card.content.section2.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg font-bold text-neutral-800">
                                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Section 3: Context */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                              {card.content.section3.title}
                            </h4>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                              {card.content.section3.text}
                            </p>
                          </div>

                          {/* CTA (If exists) */}
                          {card.content.cta && (
                            <div className="pt-8 border-t border-neutral-100">
                              <Link 
                                to={card.content.cta.url}
                                className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                              >
                                {card.content.cta.text} <ArrowUpRight size={20} />
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </AnimatePresence>

        {/* BOTÓN FINAL GLOBAL */}
        <footer className="mt-20 md:mt-32 flex justify-center pb-20">
          <Link 
            to="/prototype"
            className="group relative bg-black text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10 flex items-center gap-4">
              Entrar al Directorio <ArrowRight size={16} />
            </span>
            <div className="absolute inset-0 bg-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </Link>
        </footer>

      </div>
    </div>
  );
}
