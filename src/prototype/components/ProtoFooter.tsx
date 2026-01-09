import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_CONTENT } from '../../data/footer_data';
import { ArrowUpRight } from 'lucide-react';

export default function ProtoFooter() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 px-4 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand + Columns */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <Link to="/prototype" className="block">
              <img 
                src="https://lh3.googleusercontent.com/d/1S3g_GObesK4zvMbwiJGwjxJOhk4QQyIC" 
                alt="HEARTBEAT" 
                className="h-14 w-auto object-contain mb-4 brightness-0 invert" // Logo en blanco para fondo oscuro
                onError={(e) => {
                   const parent = e.currentTarget.parentElement;
                   if (parent) {
                     e.currentTarget.style.display = 'none';
                     parent.innerText = 'HEARTBEAT';
                     parent.className = 'font-black text-2xl tracking-tighter uppercase leading-none block';
                   }
                }}
              />
            </Link>
            <p className="text-neutral-400 text-sm font-medium max-w-xs">
              {FOOTER_CONTENT.brand.slogan}
            </p>
            <div className="flex gap-4 pt-4">
              {FOOTER_CONTENT.social.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-start hover:to-brand-end hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (6 cols) */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_CONTENT.columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-500 mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        to={link.path} 
                        className="text-sm text-neutral-300 hover:text-brand-start hover:underline decoration-1 underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* "Empieza por aquí" Block (3 cols) */}
          <div className="md:col-span-3">
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h4 className="font-bold text-sm mb-4 text-white">
                {FOOTER_CONTENT.startHere.title}
              </h4>
              <ul className="space-y-3">
                {FOOTER_CONTENT.startHere.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path} 
                      className="group flex items-center justify-between text-sm text-neutral-300 hover:text-white transition-colors bg-neutral-900/50 p-3 rounded-lg hover:bg-neutral-900 border border-neutral-700 hover:border-neutral-500"
                    >
                      {link.label}
                      <link.icon size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-end" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div className="flex gap-6">
            {FOOTER_CONTENT.legal.map((item, idx) => (
              <a key={idx} href={item.path} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span>© 2025 Heartbeat.</span>
            <span className="hidden md:inline">•</span>
            <span>Technological Soul.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
