import React, { useState } from 'react';
import { Check, Lock, Mail, KeyRound } from 'lucide-react';

export default function MagSubscribe() {
  const [activeTab, setActiveTab] = useState<'access' | 'pricing'>('access');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#111] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-start mb-6 block">
            Acceso a Heartbeat Magazine
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-8">
            Periodismo lento.<br/>Dos formas de acceso.
          </h1>
          <p className="font-serif text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Si eres socio de Heartbeat, tienes acceso gratuito. Si no lo eres, puedes suscribirte por un precio económico.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="px-6 py-8 border-b border-neutral-200">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('access')}
              className={`flex-1 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${
                activeTab === 'access'
                  ? 'border-black text-black'
                  : 'border-transparent text-neutral-400 hover:text-neutral-600'
              }`}
            >
              Ya soy socio Heartbeat
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex-1 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${
                activeTab === 'pricing'
                  ? 'border-black text-black'
                  : 'border-transparent text-neutral-400 hover:text-neutral-600'
              }`}
            >
              Quiero suscribirme
            </button>
          </div>
        </div>
      </section>

      {/* CONTENIDO DINÁMICO */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'access' && (
            <div className="max-w-xl mx-auto">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center">
                    <Check size={24} />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-medium">Acceso gratuito</h2>
                    <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest">
                      Para socios Heartbeat
                    </p>
                  </div>
                </div>

                <p className="font-serif text-neutral-600 mb-8 leading-relaxed">
                  Como socio de Heartbeat, tienes acceso completo e ilimitado a todo el contenido de la revista. Simplemente inicia sesión con tu email y contraseña.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-serif"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                      Contraseña
                    </label>
                    <div className="relative">
                      <KeyRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-serif"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-lg"
                  >
                    Iniciar sesión
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 text-center font-serif">
                    ¿Olvidaste tu contraseña?{' '}
                    <button className="underline hover:no-underline font-bold">
                      Recupérala aquí
                    </button>
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-green-800 mb-3">
                  Beneficios incluidos
                </h3>
                <ul className="space-y-2">
                  {[
                    'Acceso completo e ilimitado a todos los artículos',
                    'Todos los dossiers premium sin coste adicional',
                    'Newsletter semanal exclusiva',
                    'Archivo completo de la revista',
                    'Sin publicidad',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 font-serif">
                      <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div>
              <div className="max-w-3xl mx-auto mb-16 text-center">
                <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6">
                  Suscripción para no socios
                </h2>
                <p className="font-serif text-lg text-neutral-600 leading-relaxed">
                  Accede a todo el contenido con un plan mensual económico. Sin permanencia, cancela cuando quieras.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                {/* Plan Mensual */}
                <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 flex flex-col">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                    Plan Mensual
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-5xl font-medium">7€</span>
                    <span className="font-sans text-sm text-neutral-500">/mes</span>
                  </div>
                  <p className="font-serif text-neutral-600 mb-8 text-sm">
                    Facturado mensualmente. Cancela cuando quieras.
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      'Acceso completo a artículos',
                      'Newsletter semanal',
                      'Archivo completo',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-serif text-neutral-700">
                        <Check size={16} className="text-black mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-neutral-900 text-white py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-lg">
                    Elegir mensual
                  </button>
                </div>

                {/* Plan Anual - DESTACADO */}
                <div className="bg-black text-white rounded-2xl p-8 flex flex-col relative overflow-hidden border-2 border-black transform scale-105 shadow-2xl">
                  <div className="absolute top-0 right-0 bg-brand-start text-white text-[10px] font-bold uppercase px-4 py-2">
                    Más popular
                  </div>

                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 mt-6">
                    Plan Anual
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-5xl font-medium">5€</span>
                    <span className="font-sans text-sm text-neutral-400">/mes</span>
                  </div>
                  <p className="font-serif text-neutral-400 mb-8 text-sm">
                    Facturado anualmente (60€). Ahorra un 30%.
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      'Todo lo del plan mensual',
                      'Acceso a dossiers premium',
                      'Contenido exclusivo anual',
                      'Descuentos en eventos',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-serif text-neutral-200">
                        <Check size={16} className="text-brand-start mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-white text-black py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-lg">
                    Elegir anual
                  </button>
                </div>

                {/* Plan Mecenas */}
                <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 flex flex-col">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                    Mecenas
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-5xl font-medium">12€</span>
                    <span className="font-sans text-sm text-neutral-500">/mes</span>
                  </div>
                  <p className="font-serif text-neutral-600 mb-8 text-sm">
                    Apoyo completo. Regalo anual exclusivo.
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      'Todo lo del plan anual',
                      'Regalo físico anual',
                      'Acceso anticipado',
                      'Agradecimiento público',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-serif text-neutral-700">
                        <Check size={16} className="text-black mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-neutral-900 text-white py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-lg">
                    Ser mecenas
                  </button>
                </div>
              </div>

              {/* Comparación */}
              <div className="max-w-3xl mx-auto bg-neutral-50 border border-neutral-200 rounded-xl p-8">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6">
                  ¿No eres socio de Heartbeat?
                </h3>
                <p className="font-serif text-neutral-700 leading-relaxed mb-6">
                  Si quieres acceso gratuito a la revista y formar parte del ecosistema completo de Heartbeat, considera convertirte en socio. Tendrás acceso a centros deportivos, eventos, alojamiento y mucho más.
                </p>
                <a
                  href="/prototype/centros"
                  className="inline-block bg-black text-white px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-lg"
                >
                  Explorar membresía Heartbeat
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center">
            Lo que dicen nuestros lectores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Finalmente, una revista que no me hace sentir culpable por no estar optimizado 24/7.',
                author: 'María S.',
                role: 'Suscriptora anual',
              },
              {
                quote: 'Como socio de Heartbeat, tener acceso gratuito a contenido de esta calidad es increíble.',
                author: 'Carlos M.',
                role: 'Socio Heartbeat Life',
              },
              {
                quote: 'Los dossiers son obras de arte. Los guardo todos físicamente.',
                author: 'Ana L.',
                role: 'Mecenas',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-neutral-200">
                <p className="font-serif text-lg text-neutral-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-black">
                    {testimonial.author}
                  </p>
                  <p className="font-serif text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center">
            Preguntas frecuentes
          </h3>
          <div className="space-y-6">
            {[
              {
                q: '¿Qué diferencia hay entre ser socio de Heartbeat y suscribirme a la revista?',
                a: 'Los socios de Heartbeat tienen acceso gratuito a la revista como parte de su membresía, además de acceso a centros deportivos, eventos y otros beneficios. La suscripción a la revista es solo para el contenido editorial.',
              },
              {
                q: '¿Puedo cancelar en cualquier momento?',
                a: 'Sí. No hay permanencia. Puedes cancelar tu suscripción cuando quieras desde tu cuenta.',
              },
              {
                q: '¿Qué incluye el plan Mecenas?',
                a: 'Además de todo el contenido premium, recibes un regalo físico exclusivo anual, acceso anticipado a nuevos contenidos y tu nombre aparece en la sección de agradecimientos.',
              },
              {
                q: '¿Puedo regalar una suscripción?',
                a: 'Sí. Contáctanos en magazine@heartbeat.com y te preparamos una suscripción regalo.',
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-neutral-200 pb-6">
                <h4 className="font-serif text-xl font-medium mb-3">{faq.q}</h4>
                <p className="font-serif text-neutral-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
