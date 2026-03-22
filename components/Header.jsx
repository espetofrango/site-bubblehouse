import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="bg-primary-900 text-primary-50 py-2 px-4 text-xs font-medium tracking-wide flex justify-center items-center gap-6 hidden sm:flex">
        <span className="flex items-center gap-2"><Phone size={14} /> (21) 96499-4409</span>
        <span className="flex items-center gap-2"><Mail size={14} /> contato@bubblehousealuguel.com.br</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-serif text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
             <Image src="/bubble house logo favicon.png" alt="Bubble House Logo" width={48} height={48} className="object-contain" />
             <span>Bubble House<span className="text-primary-600">.</span></span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Início</Link>
            <Link href="/aluguel-de-bubble-house-rj" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Bubble House</Link>
            <Link href="/aluguel-de-castelo-inflavel-branco-rj-luxo" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Castelo Inflável</Link>
            <Link href="/aluguel-de-piscina-de-bolinhas-branca-rj" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Piscina de Bolinhas</Link>
            <Link href="/sobre-nos-bubble-house-aluguel" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Sobre</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Dicas</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-5 hidden sm:inline-flex">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
