import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function MagazineLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const MENU_ITEMS = [
    { label: 'Portada', path: '/prototype/magazine' },
    { label: 'Series', path: '/prototype/magazine/series', desc: 'Colecciones vivas' },
    { label: 'Dossiers', path: '/prototype/magazine/dossiers', desc: 'Ediciones a fondo' },
    { label: 'Guías', path: '/prototype/magazine/guides', desc: 'Utilidad pura' },
    { label: 'Archivo', path: '/prototype/magazine/archive', desc: 'Biblioteca' },
    { label: 'Newsletter', path: '/prototype/magazine/newsletter', desc: 'Tu buzón' },
    { label: 'Acceso', path: '/prototype/magazine/subscribe', desc: 'Socios o suscripción', highlight: true },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-neutral-900 font-serif selection:bg-black selection:text-white">
      
      {/* HEADER PREMIUM */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-neutral-200 transition-all">
        <div className="px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          
          {/* Left: Menu & Brand */}
          <div className="flex items-center gap-6 md:gap-12">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 group"
            >
              <Menu size={24} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline font-sans text-[10px] font-bold uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">Menú</span>
            </button>

            <Link to="/prototype/magazine" className="group flex flex-col justify-center">
              <h1 className="font-serif text-2xl md:text-3xl font-black tracking-tighter leading-none group-hover:opacity-80 transition-opacity">
                HEARTBEAT
              </h1>
              <span className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] text-neutral-400 group-hover:text-black transition-colors ml-0.5">
                Magazine
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav (Solo items clave) */}
          <nav className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.slice(1, 4).map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "font-sans text-[10px] font-bold uppercase tracking-widest hover:text-brand-start transition-colors",
                  location.pathname === item.path ? "text-black border-b border-black pb-1" : "text-neutral-500"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-6">
            <button className="hidden md:block hover:opacity-70 transition-opacity">
              <Search size={20} strokeWidth={1} />
            </button>
            <div className="h-4 w-px bg-neutral-300 hidden md:block"></div>
            <Link to="/prototype" className="hidden md:block font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
              Volver a Heartbeat
            </Link>
            <Link
              to="/prototype/magazine/subscribe"
              className="font-sans text-[10px] font-bold uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-md"
            >
              Acceso
            </Link>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MENU OVERLAY */}
      <div className={cn(
        "fixed inset-0 bg-[#111] text-white z-[60] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center p-8 border-b border-white/10">
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-500">Navegación</span>
          <button onClick={() => setIsMenuOpen(false)} className="hover:rotate-90 transition-transform duration-300">
            <X size={32} strokeWidth={1} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row">
          <nav className="flex-1 p-8 md:p-20 flex flex-col justify-center space-y-6">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-baseline gap-6"
              >
                <span className={cn(
                  "font-serif text-4xl md:text-6xl font-medium group-hover:translate-x-4 transition-transform duration-300",
                  item.highlight ? "text-brand-start italic" : "text-white"
                )}>
                  {item.label}
                </span>
                <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </span>
              </Link>
            ))}
          </nav>

          {/* Menu Sidebar Content */}
          <div className="hidden md:flex w-1/3 bg-[#1a1a1a] p-16 flex-col justify-center border-l border-white/5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-start mb-8 block">
              Nota del Editor
            </span>
            <p className="font-serif text-xl leading-relaxed text-neutral-300 mb-8">
              "En esta edición exploramos el silencio. No como ausencia de ruido, sino como una herramienta biológica de regeneración. Bienvenidos al nuevo Heartbeat Magazine."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>
              <div>
                <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-white">Ana S.</span>
                <span className="block font-serif text-xs italic text-neutral-500">Editora Jefe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="animate-in fade-in duration-500">
        <Outlet />
      </main>

      {/* FOOTER EDITORIAL */}
      <footer className="bg-white border-t border-neutral-200 pt-24 pb-12 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4 pr-12">
            <h2 className="font-serif text-3xl font-black tracking-tighter mb-6">HEARTBEAT<br/>MAGAZINE</h2>
            <p className="font-serif text-lg text-neutral-500 leading-relaxed mb-8">
              Un archivo vivo de pensamiento, cuerpo y planeta. Diseñado para leerse despacio.
            </p>
            <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Parte de Heartbeat Planet Ecosystem
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest mb-8 text-black">Explorar</h4>
            <ul className="space-y-4 font-serif text-lg text-neutral-600">
              <li><Link to="/prototype/magazine/series" className="hover:text-black hover:underline decoration-1 underline-offset-4">Series</Link></li>
              <li><Link to="/prototype/magazine/dossiers" className="hover:text-black hover:underline decoration-1 underline-offset-4">Dossiers</Link></li>
              <li><Link to="/prototype/magazine/guides" className="hover:text-black hover:underline decoration-1 underline-offset-4">Guías</Link></li>
              <li><Link to="/prototype/magazine/archive" className="hover:text-black hover:underline decoration-1 underline-offset-4">Archivo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest mb-8 text-black">Comunidad</h4>
            <ul className="space-y-4 font-serif text-lg text-neutral-600">
              <li><Link to="/prototype/magazine/newsletter" className="hover:text-black hover:underline decoration-1 underline-offset-4">Newsletter</Link></li>
              <li><Link to="/prototype/magazine/subscribe" className="hover:text-black hover:underline decoration-1 underline-offset-4">Acceso</Link></li>
              <li><Link to="#" className="hover:text-black hover:underline decoration-1 underline-offset-4">Patrocinios</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 bg-[#FDFBF7] p-8 border border-neutral-100">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest mb-4 text-brand-start">Pulso Semanal</h4>
            <p className="font-serif text-base text-neutral-600 mb-6 leading-relaxed">
              Recibe nuestra selección de lecturas cada domingo. Sin ruido, solo esencia.
            </p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email" className="w-full bg-white border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-black transition-colors font-sans" />
              <button className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[10px] text-neutral-400 uppercase tracking-widest">
          <p>© 2025 Heartbeat Magazine. Editorial Independiente.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-neutral-600">Privacidad</Link>
            <Link to="#" className="hover:text-neutral-600">Términos</Link>
            <Link to="#" className="hover:text-neutral-600">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
