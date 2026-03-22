import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <Link href="/" className="font-serif text-3xl font-bold text-white tracking-tight mb-4 inline-block">
               Bubble House<span className="text-primary-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Luxo e Sofisticação em Cerimônias. Especialistas em aluguel de brinquedos instagramáveis de alto padrão para eventos inesquecíveis no Rio de Janeiro.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/bubble-house" className="hover:text-primary-400 transition-colors">Bubble House</Link></li>
              <li><Link href="/castelo-inflavel-branco" className="hover:text-primary-400 transition-colors">Castelo Inflável Branco</Link></li>
              <li><Link href="/piscina-de-bolinhas-branca" className="hover:text-primary-400 transition-colors">Piscina de Bolinhas Branca</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Dicas para Eventos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span>(21) 96499-4409<br/><span className="text-xs text-gray-500">Atendimento WhatsApp</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={18} />
                <span>contato@bubblehousealuguel.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={18} />
                <span>Atendemos Barra da Tijuca, Recreio, Copacabana, Zona Sul e arredores (RJ).</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aluguel de Bubble House. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
