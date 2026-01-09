import React from 'react';
import { ArrowRight, MousePointerClick, MapPin, Activity, Heart } from 'lucide-react';

export default function LogicView() {
  return (
    <div className="space-y-10 pb-20">
      <header>
        <h2 className="text-3xl font-bold text-neutral-900">Lógica de Navegación: "Triple Entrada"</h2>
        <p className="text-neutral-500 mt-2 text-lg">
          El usuario puede entrar por el <strong>QUÉ</strong> (Deporte), el <strong>DÓNDE</strong> (Lugar) o el <strong>CÓMO</strong> (Heartbeat).
        </p>
      </header>

      {/* Diagrama de las 3 Entradas */}
      <section className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
        <h3 className="text-xl font-bold mb-8 text-center">Las 3 Puertas de Entrada al Ecosistema</h3>
        
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Columna 1: Deporte */}
          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2 border-4 border-white shadow-lg">
              <Activity size={32} />
            </div>
            <h4 className="font-bold text-lg">1. DEPORTES</h4>
            <p className="text-sm text-neutral-500 px-4">
              Búsqueda funcional.<br/>"Quiero hacer Boxeo".
            </p>
            <div className="w-full h-32 border-l-2 border-dashed border-blue-200 absolute top-20 left-1/2 -ml-[1px] -z-10"></div>
          </div>

          {/* Columna 2: Ubicación */}
          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2 border-4 border-white shadow-lg">
              <MapPin size={32} />
            </div>
            <h4 className="font-bold text-lg">2. LUGARES</h4>
            <p className="text-sm text-neutral-500 px-4">
              Búsqueda geográfica.<br/>"¿Qué hay cerca de mí?"
            </p>
            <div className="w-full h-32 border-l-2 border-dashed border-green-200 absolute top-20 left-1/2 -ml-[1px] -z-10"></div>
          </div>

          {/* Columna 3: Heartbeat */}
          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2 border-4 border-white shadow-lg">
              <Heart size={32} />
            </div>
            <h4 className="font-bold text-lg">3. HEARTBEATS</h4>
            <p className="text-sm text-neutral-500 px-4">
              Búsqueda emocional.<br/>"Necesito energía" o "Paz".
            </p>
            <div className="w-full h-32 border-l-2 border-dashed border-purple-200 absolute top-20 left-1/2 -ml-[1px] -z-10"></div>
          </div>
        </div>

        {/* Convergencia */}
        <div className="mt-12 bg-neutral-900 text-white p-6 rounded-xl text-center relative shadow-xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded-full">
            Punto de Convergencia
          </div>
          <h3 className="text-xl font-bold mb-2">PÁGINA DE DESTINO (CONVERSIÓN)</h3>
          <p className="text-neutral-400 text-sm">
            Independientemente de la entrada, el usuario siempre aterriza en una <strong>Reserva</strong> o <strong>Inscripción</strong>.
          </p>
        </div>
      </section>

      {/* Regla de Diseño UX */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <MousePointerClick size={18} />
            Regla de los 5 Segundos
          </h4>
          <p className="text-sm text-neutral-600">
            En cualquier página, el usuario debe saber en menos de 5 segundos:
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Dónde está (Breadcrumbs/Título).</li>
              <li>Qué puede hacer (CTA Principal).</li>
              <li>Cómo volver al inicio (Navegación clara).</li>
            </ul>
          </p>
        </div>
        
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <ArrowRight size={18} />
            "Dead End" Zero Policy
          </h4>
          <p className="text-sm text-neutral-600">
            Ninguna página termina en un footer vacío.
            <br/>
            <strong>Siempre:</strong> "Siguiente paso sugerido" (ej: Ver horarios, Artículos relacionados, Centros cercanos).
          </p>
        </div>
      </section>
    </div>
  );
}
