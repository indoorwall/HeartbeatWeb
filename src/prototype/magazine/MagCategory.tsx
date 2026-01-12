import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MAGAZINE_ARTICLES, MAGAZINE_CATEGORIES } from '../../data/magazine_data';

export default function MagCategory() {
  const { id } = useParams();
  const categoryInfo = MAGAZINE_CATEGORIES.find(c => c.id === id);
  
  // Filtrar artículos (simulado, ya que la data es pequeña, mostramos todos o filtramos por string)
  const articles = MAGAZINE_ARTICLES.filter(a => 
    id === 'reportajes' ? true : a.category.toLowerCase() === id
  );

  if (!categoryInfo) return <div className="p-20 text-center">Categoría no encontrada.</div>;

  return (
    <div className="min-h-screen pb-20">
      
      {/* HEADER CATEGORÍA */}
      <header className="py-24 md:py-32 px-6 text-center border-b border-neutral-200">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 block">
          Sección
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 capitalize">
          {categoryInfo.label}
        </h1>
        <p className="font-serif text-xl text-neutral-500 max-w-2xl mx-auto">
          {categoryInfo.desc}
        </p>
      </header>

      {/* LISTADO ARTÍCULOS */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {articles.length > 0 ? (
          <div className="space-y-16 md:space-y-24">
            {articles.map(article => (
              <article key={article.id} className="group cursor-pointer grid md:grid-cols-12 gap-8 items-center border-b border-neutral-100 pb-16 last:border-0 last:pb-0">
                <div className="md:col-span-5 aspect-[4/3] overflow-hidden bg-neutral-100">
                   <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3 mb-4 font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    <span className="text-black">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link to={`/prototype/magazine/article/${article.slug}`}>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="font-serif text-neutral-500 leading-relaxed mb-6">
                    {article.subtitle}
                  </p>
                  <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                    Por {article.author}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-400 font-serif italic">
            No hay artículos en esta sección todavía.
          </div>
        )}
      </div>

    </div>
  );
}
