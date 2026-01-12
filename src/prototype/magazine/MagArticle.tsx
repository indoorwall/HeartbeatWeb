import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MAGAZINE_ARTICLES } from '../../data/magazine_data';
import { Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';

export default function MagArticle() {
  const { slug } = useParams();
  const article = MAGAZINE_ARTICLES.find(a => a.slug === slug);

  if (!article) return <div className="p-20 text-center font-serif">Artículo no encontrado.</div>;

  return (
    <article className="bg-white min-h-screen pb-24">
      
      {/* 1. HERO EDITORIAL */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8 font-sans text-xs font-bold uppercase tracking-widest text-neutral-500">
          <Link to={`/prototype/magazine/category/${article.category.toLowerCase()}`} className="text-brand-start hover:underline">
            {article.category}
          </Link>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={12}/> {article.readTime}</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-neutral-900">
          {article.title}
        </h1>
        
        <p className="font-serif text-xl md:text-2xl text-neutral-500 leading-relaxed max-w-3xl mx-auto mb-12">
          {article.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 bg-neutral-100 rounded-full overflow-hidden">
            {/* Placeholder avatar */}
            <div className="w-full h-full bg-neutral-200" />
          </div>
          <div className="text-left">
            <div className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-900">
              {article.author}
            </div>
            <div className="font-serif text-xs text-neutral-500 italic">
              {article.authorRole}
            </div>
          </div>
        </div>
      </header>

      {/* 2. IMAGEN DESTACADA */}
      <div className="w-full aspect-[21/9] overflow-hidden mb-16 md:mb-24">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="max-w-5xl mx-auto px-6 mt-4">
           <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest text-right">Foto: Unsplash Editorial</p>
        </div>
      </div>

      {/* 3. CUERPO DEL TEXTO */}
      <div className="px-6 md:px-12">
        <div className="max-w-[680px] mx-auto font-serif text-lg md:text-xl leading-[1.8] text-neutral-800 space-y-8">
          
          {/* Contenido Simulado (HTML injection) */}
          <div dangerouslySetInnerHTML={{ __html: article.content || '' }} className="article-content space-y-8" />
          
          {/* Texto de relleno para simular longitud */}
          <p>
            La arquitectura de nuestros días ha olvidado su propósito fundamental: servir al cuerpo biológico. Construimos cajas herméticas de cristal y acero que niegan el ciclo del sol, el flujo del aire y la variabilidad térmica que nuestro sistema inmune necesita para mantenerse alerta.
          </p>
          <p>
            Pero una nueva ola de "bio-arquitectos" está desafiando este paradigma estéril. No se trata solo de poner plantas en el lobby. Se trata de diseñar edificios que funcionen como organismos vivos. Estructuras que respiran, que sudan, que cambian de piel con las estaciones.
          </p>

          <h3 className="font-sans text-2xl font-bold mt-12 mb-6 text-black">Volver al origen</h3>
          
          <p>
            Cuando entras en un espacio diseñado bajo estos principios, tu ritmo cardíaco desciende. No es magia, es biología. Nuestros receptores sensoriales reconocen patrones fractales en la madera, en la piedra sin pulir, en la luz filtrada por hojas. Son señales de seguridad evolutiva.
          </p>

          <figure className="my-12 -mx-6 md:-mx-20">
            <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80" alt="Detalle arquitectónico" className="w-full h-auto" />
            <figcaption className="font-sans text-xs text-neutral-400 mt-3 text-center uppercase tracking-widest">Materiales naturales en el Heartbeat Hub de Kyoto.</figcaption>
          </figure>

          <p>
            La pregunta ya no es cuánto cuesta el metro cuadrado, sino cuánto bienestar genera por hora de ocupación. El futuro del lujo no es el mármol, es el aire puro. No es la domótica compleja, es la luz natural perfecta.
          </p>

          {/* 4. PAYWALL / CTA */}
          <div className="my-16 p-8 bg-[#FDFBF7] border border-neutral-200 text-center">
            <p className="font-serif text-xl italic text-neutral-600 mb-6">
              "El periodismo de calidad requiere tiempo, silencio y apoyo."
            </p>
            <p className="font-sans text-sm text-neutral-500 mb-8 max-w-md mx-auto">
              Estás leyendo Heartbeat Magazine. Suscríbete para acceder a reportajes de investigación, nuestro archivo completo y la newsletter curada.
            </p>
            <Link to="/prototype/magazine/subscribe" className="inline-block bg-black text-white px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
              Suscribirse a la Revista
            </Link>
          </div>

        </div>
      </div>

      {/* 5. FOOTER ARTÍCULO (Lecturas relacionadas) */}
      <div className="max-w-5xl mx-auto px-6 mt-24 pt-12 border-t border-neutral-200">
        <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-12 text-center">Seguir leyendo</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {MAGAZINE_ARTICLES.slice(0, 3).filter(a => a.id !== article.id).map(rel => (
            <Link key={rel.id} to={`/prototype/magazine/article/${rel.slug}`} className="group">
              <div className="aspect-[3/2] bg-neutral-100 mb-4 overflow-hidden">
                <img src={rel.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-serif text-xl leading-tight group-hover:underline decoration-1 underline-offset-4">{rel.title}</h4>
            </Link>
          ))}
        </div>
      </div>

    </article>
  );
}
