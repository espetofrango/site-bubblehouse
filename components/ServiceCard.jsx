import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, href, image, delay = 0 }) {
  return (
    <div 
      className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500 translate-y-0 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-64 bg-primary-50 rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-primary-100/50 relative">
        {image ? (
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" quality={90} />
        ) : (
          <span className="text-primary-300 font-serif italic text-lg opacity-60">Imagem Exclusiva</span>
        )}
      </div>
      
      <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      
      <Link href={href} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors group/link">
        Saiba os detalhes
        <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
