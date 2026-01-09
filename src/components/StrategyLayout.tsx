import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Map, GitGraph, LayoutTemplate, MonitorPlay, Type, DoorOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export default function StrategyLayout() {
  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900 font-sans overflow-hidden">
      {/* Sidebar de Herramientas de Estrategia */}
      <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col shadow-sm z-10">
        <div className="p-6 border-b border-neutral-100">
          <h1 className="text-xl font-bold tracking-tight text-neutral-900">HEARTBEAT</h1>
          <p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider font-semibold">Technological Soul Kit</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <NavItem to="/" icon={<Map size={18} />} label="Sitemap General" />
          <NavItem to="/logic" icon={<GitGraph size={18} />} label="Lógica de Navegación" />
          <NavItem to="/flows" icon={<LayoutTemplate size={18} />} label="Flujos de Usuario" />
          <NavItem to="/copy" icon={<Type size={18} />} label="Sistema de Voz" />
        </nav>

        <div className="p-4 border-t border-neutral-100 bg-neutral-50 space-y-2">
          {/* Botón Intro */}
          <NavLink 
            to="/prototype/intro" 
            className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <DoorOpen size={18} />
            <span className="font-medium text-sm">Ver Intro (Alma)</span>
          </NavLink>

          {/* Botón Home */}
          <NavLink 
            to="/prototype" 
            className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200"
          >
            <MonitorPlay size={18} />
            <span className="font-medium text-sm">Ver Directorio</span>
          </NavLink>
        </div>
      </aside>

      {/* Área de Contenido Principal */}
      <main className="flex-1 overflow-auto bg-neutral-50/50 p-8">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all",
        isActive 
          ? "bg-neutral-100 text-neutral-900 shadow-sm ring-1 ring-neutral-200" 
          : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
      )}
    >
      {icon}
      {label}
    </NavLink>
  );
}
