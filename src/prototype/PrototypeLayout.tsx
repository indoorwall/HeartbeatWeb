import React from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { SITE_STRUCTURE } from '../data/architecture';
import { Menu, X, ArrowLeft, DoorOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import ProtoFooter from './components/ProtoFooter';

export default function PrototypeLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 flex flex-col">
      {/* Banner de Modo Prototipo */}
      <div className="bg-neutral-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex justify-between items-center z-[60] relative">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-neutral-400">Modo Prototipo</span>
          {/* ENLACE AL UMBRAL */}
          <Link to="/prototype/intro" className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors border-l border-neutral-700 pl-4">
            <DoorOpen size={14} />
            <span>⬅ Ir a Intro (Alma)</span>
          </Link>
        </div>
        <button onClick={() => navigate('/')} className="hover:underline flex items-center gap-1 text-neutral-400 hover:text-white">
          <ArrowLeft size={12} /> Volver a Estrategia
        </button>
      </div>

      {/* Header Real del Sitio */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/prototype" className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1S3g_GObesK4zvMbwiJGwjxJOhk4QQyIC" 
              alt="HEARTBEAT" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback si no hay imagen aún
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  e.currentTarget.style.display = 'none';
                  parent.innerText = 'HEARTBEAT';
                  parent.className = 'font-black text-xl tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end';
                }
              }}
            />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_STRUCTURE.filter(i => i.id !== 'home').map((item) => (
              <NavLink 
                key={item.id}
                to={`/prototype${item.path}`}
                className={({ isActive }) => cn(
                  "text-sm font-medium hover:text-brand-start transition-colors",
                  isActive ? "text-black font-bold" : "text-neutral-500"
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl">
              Sincronizar
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-24 bg-white z-40 p-4 md:hidden">
           <nav className="flex flex-col gap-4 text-lg font-bold">
            {SITE_STRUCTURE.filter(i => i.id !== 'home').map((item) => (
              <NavLink 
                key={item.id}
                to={`/prototype${item.path}`}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 border-b border-neutral-100"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Completo */}
      <ProtoFooter />
    </div>
  );
}
