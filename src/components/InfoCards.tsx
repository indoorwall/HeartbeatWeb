import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from './animations/FadeIn';

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <FadeIn delay={0.6}>
        <div className="bg-gradient-to-br from-brand-start to-brand-end p-12 rounded-3xl text-white shadow-2xl shadow-brand-start/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Tecnología</span>
          </div>
          <h3 className="text-3xl font-black mb-4 leading-tight">
            Con la tecnología Heartbeat
          </h3>
          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            Todos nuestros espacios están integrados con el sistema inteligente que adapta tu experiencia en tiempo real.
          </p>
          <Link
            to="/prototype/tecnologia"
            className="inline-flex items-center gap-3 bg-white text-brand-start px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
          >
            Descubrir la tecnología <ArrowRight size={18} />
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <div className="bg-white p-12 rounded-3xl border-2 border-neutral-200 shadow-xl hover:border-brand-start transition-all">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-300 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">Modelo</span>
          </div>
          <h3 className="text-3xl font-black mb-4 leading-tight text-neutral-900">
            ¿Qué es Heartbeat?
          </h3>
          <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
            Un ecosistema replicable que integra deporte, territorio, tecnología y comunidad.
          </p>
          <Link
            to="/prototype/que-es-heartbeat"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Descubrir el modelo <ArrowRight size={18} />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
