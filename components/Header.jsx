'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="bg-primary-900 text-primary-50 py-2 px-4 text-xs font-medium tracking-wide flex justify-center items-center gap-6 hidden sm:flex">
        <span className="flex items-center gap-2"><Phone size={14} /> (21) 96499-4409</span>
        <span className="flex items-center gap-2"><Mail size={14} /> contato@bubblehousealuguel.com.br</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2 sm:gap-3">
             <Image src="/favicon.png" alt="Bubble House Logo" width={40} height={40} className="object-contain sm:w-12 sm:h-12" />
             <span className="whitespace-nowrap">Bubble House<span className="text-primary-600">.</span></span>
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
            
            {/* Botão Menu Mobile */}
            <button 
              className="md:hidden p-2 text-gray-900 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Lateral Mobile (Overlay) */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Drawer Content */}
        <div className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl font-bold">Menu</span>
              <button 
                className="p-2 text-gray-900" 
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              <Link href="/" className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link href="/aluguel-de-bubble-house-rj" className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Bubble House</Link>
              <Link href="/aluguel-de-castelo-inflavel-branco-rj-luxo" className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Castelo Inflável</Link>
              <Link href="/aluguel-de-piscina-de-bolinhas-branca-rj" className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Piscina de Bolinhas</Link>
              <Link href="/blog" className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="/sobre-nos-bubble-house-aluguel" className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            </nav>
            
            <div className="mt-auto pt-8">
              <a 
                href="https://wa.me/5521964994409" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center py-4 text-base font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
              
              <div className="flex flex-col gap-3 mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><Phone size={16} /> (21) 96499-4409</span>
                <span className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> contato@bubblehousealuguel.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
