import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Wifi, Moon, Check, ShieldCheck, Lock, Eye, Share2, Database } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import HeartbeatIcon from '../../components/animations/HeartbeatIcon';

export default function ProtoTecnologia() {
  return (
    <div className="bg-white">

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4498162/pexels-photo-4498162.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Pulsera Heartbeat"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <HeartbeatIcon size={64} />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-neutral-900">
              La Pulsera Heartbeat
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl font-bold text-neutral-700 mb-6">
              Una IA que te acompaña cada día.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Mide cómo estás. Interpreta lo que necesitas. Conecta tu cuerpo con cada espacio Heartbeat para que puedas dormir mejor y vivir mejor.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Descubrir cómo funciona <ArrowRight size={20} />
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-white via-neutral-100 to-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-neutral-900">
              Más que tecnología
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-xl md:text-2xl text-neutral-700 space-y-6 leading-relaxed">
              <p>Heartbeat no es un gadget.</p>
              <p>Es un sistema inteligente que aprende de ti y actúa contigo.</p>
              <p className="font-bold text-neutral-900">No invade. No sustituye. Te acompaña.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="como-funciona" className="py-32 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-20 text-center text-neutral-900">
              Cómo funciona
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 min-h-[400px]">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Activity size={32} className="text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl font-black mb-6 text-neutral-900">1. La pulsera mide</div>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Estrés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Recuperación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Variabilidad cardíaca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Sueño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Energía</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 min-h-[400px]">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Wifi size={32} className="text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl font-black mb-6 text-neutral-900">2. La IA interpreta</div>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Comprende tu estado real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Detecta desequilibrios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Anticipa necesidades</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 min-h-[400px]">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Share2 size={32} className="text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl font-black mb-6 text-neutral-900">3. El entorno responde</div>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Entrenamiento adaptado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Casa preparada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Alimentación recomendada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Descanso optimizado</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 min-h-[400px]">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Moon size={32} className="text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl font-black mb-6 text-neutral-900">4. Duermes mejor</div>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Recuperación profunda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Mejor rendimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Mayor claridad mental</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-center text-neutral-900">
              En tu día a día
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-20 max-w-3xl mx-auto">
              Escenarios reales donde Heartbeat responde a tu estado
            </p>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-3xl border-2 border-red-100">
                <div className="max-w-4xl">
                  <div className="text-sm font-bold text-red-700 uppercase tracking-wider mb-4">Escenario 1</div>
                  <h3 className="text-3xl font-black mb-6 text-neutral-900">Reunión estresante</h3>
                  <div className="space-y-4 text-lg text-neutral-700">
                    <p>La pulsera detecta alteración.</p>
                    <p className="font-bold text-neutral-900">Cuando llegas a casa:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <Check className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <span>Luz más cálida</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <span>Aroma relajante</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <span>Ducha preparada</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <span>Música suave</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl border-2 border-blue-100">
                <div className="max-w-4xl">
                  <div className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">Escenario 2</div>
                  <h3 className="text-3xl font-black mb-6 text-neutral-900">Día de Boxing</h3>
                  <div className="space-y-4 text-lg text-neutral-700">
                    <p>Recuperación baja.</p>
                    <p className="font-bold text-neutral-900">La IA adapta sesión:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <span>Técnica</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <span>Precisión</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <span>Ritmo controlado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl border-2 border-green-100">
                <div className="max-w-4xl">
                  <div className="text-sm font-bold text-green-700 uppercase tracking-wider mb-4">Escenario 3</div>
                  <h3 className="text-3xl font-black mb-6 text-neutral-900">Cena en restaurante Heartbeat</h3>
                  <div className="space-y-4 text-lg text-neutral-700">
                    <p>Alta carga de entrenamiento.</p>
                    <p className="font-bold text-neutral-900">La IA sugiere:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span>Proteína adecuada</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span>Micronutrientes necesarios</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span>Timing correcto</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-3xl border-2 border-amber-100">
                <div className="max-w-4xl">
                  <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-4">Escenario 4</div>
                  <h3 className="text-3xl font-black mb-6 text-neutral-900">Día óptimo</h3>
                  <div className="space-y-4 text-lg text-neutral-700">
                    <p>La IA propone intensidad.</p>
                    <p className="font-bold text-neutral-900">Aprovechas tu mejor versión.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-20 text-center">
              Tecnología en cada entorno
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Link to="/prototype/centros" className="block bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Centros deportivos</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Identificación automática</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Entrenamiento adaptativo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Seguimiento personalizado</span>
                  </li>
                </ul>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link to="/prototype/sports" className="block bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Deportes</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Ajuste de intensidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Recomendación técnica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Adaptación según estrés</span>
                  </li>
                </ul>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link to="/prototype/alojamiento" className="block bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Alojamiento</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Ajuste automático de luz y temperatura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Optimización del descanso</span>
                  </li>
                </ul>
              </Link>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link to="/prototype/alimentacion" className="block bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Alimentación</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Sugerencias según gasto energético</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Equilibrio para mejorar sueño</span>
                  </li>
                </ul>
              </Link>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="block bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Heartbeat Home</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Automatización inteligente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Ritmos biológicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Preparación del entorno antes de tu llegada</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={40} className="text-white" strokeWidth={2} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-center text-neutral-900">
              Tus datos son tuyos
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white p-12 rounded-3xl border-2 border-neutral-200">
              <div className="space-y-6 text-lg text-neutral-700 text-center">
                <p>Control total del usuario.</p>
                <p>Puedes decidir qué se conecta.</p>
                <p>Modo privado disponible.</p>
                <p className="font-bold text-neutral-900">Transparencia absoluta.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-neutral-900 rounded-2xl flex items-center justify-center">
                <Database size={40} className="text-white" strokeWidth={2} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-center text-neutral-900">
              Un sistema replicable
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-neutral-50 p-12 rounded-3xl border-2 border-neutral-200">
              <div className="space-y-6 text-lg text-neutral-700">
                <p>Conecta todos los espacios físicos.</p>
                <p>Crea continuidad entre deporte, hogar y descanso.</p>
                <p>Es escalable a cualquier ubicación.</p>
                <p className="font-bold text-neutral-900">Diferenciación real frente a competidores tradicionales.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12">
              Vivir conectado es vivir mejor.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              to="/prototype/que-es-heartbeat"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-start to-brand-end text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Explorar el ecosistema Heartbeat <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
