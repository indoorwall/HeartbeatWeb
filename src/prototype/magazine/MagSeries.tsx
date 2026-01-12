import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MAGAZINE_SERIES, MAGAZINE_ARTICLES } from '../../data/magazine_data';
import { ArrowRight } from 'lucide-react';

// LISTA DE SERIES
export function MagSeriesList() {
  return (
    <div className="min-h-screen pb-20">
      <header className="px-6 md:px-12 py-24 md:py-32 border-b border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6 block">
            Colecciones Vivas
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8">Series Editoriales</h1>
          <p className="font-serif text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Nuestras columnas vertebrales. Publicaciones recurrentes con identidad propia que exploran los pilares de Heartbeat.
          </p>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {MAGAZINE_SERIES.map((serie, idx) => (
            <Link key={serie.id} to={`/prototype/magazine/series/${serie.id}`} className="group block">
              <div className="aspect-[16/9] overflow-hidden mb-8 bg-neutral-100">
                <img src={serie.image} alt={serie.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className={`font-serif text-4xl md:text-5xl ${serie.color} group-hover:underline decoration-1 underline-offset-8`}>
                  {serie.title}
                </h2>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-neutral-200 px-3 py-1 rounded-full">
                  8 Artículos
                </span>
              </div>
              <p className="font-serif text-xl text-neutral-600 leading-relaxed max-w-lg mb-6">
                {serie.manifesto}
              </p>
              <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-black">
                Explorar Serie <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// DETALLE DE SERIE
export function MagSeriesDetail() {
  const { id } = useParams();
  const serie = MAGAZINE_SERIES.find(s => s.id === id);
  const articles = MAGAZINE_ARTICLES.filter(a => a.seriesId === id);

  if (!serie) return <div className="p-20 text-center font-serif">Serie no encontrada.</div>;

  return (
    <div className="min-h-screen pb-20 bg-[#FDFBF7]">
      <header className="px-6 md:px-12 py-24 md:py-32 border-b border-neutral-200 text-center">
        <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6 block">
          Serie Editorial
        </span>
        <h1 className={`font-serif text-6xl md:text-8xl font-medium mb-8 ${serie.color}`}>
          {serie.title}
        </h1>
        <p className="font-serif text-2xl text-neutral-800 max-w-3xl mx-auto leading-relaxed italic">
          "{serie.manifesto}"
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-20">
          {articles.length > 0 ? articles.map((article, idx) => (
            <article key={article.id} className="group cursor-pointer border-b border-neutral-200 pb-20 last:border-0">
              <div className="flex items-center gap-4 mb-6 font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                <span className="text-black">Nº {articles.length - idx}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <Link to={`/prototype/magazine/article/${article.slug}`}>
                <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 group-hover:underline decoration-1 underline-offset-8">
                  {article.title}
                </h2>
                <p className="font-serif text-xl text-neutral-500 leading-relaxed mb-8">
                  {article.subtitle}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
                    Por {article.author}
                  </span>
                </div>
              </Link>
            </article>
          )) : (
            <div className="text-center py-20 opacity-50">
              <p className="font-serif text-xl">Próximamente nuevos artículos en esta serie.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
