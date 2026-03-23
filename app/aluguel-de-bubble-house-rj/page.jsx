import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Aluguel de Bubble House RJ - Aluguel de Bubble House Aqui !',
  description: 'Aluguel de Bubble House no Rio de Janeiro! Transforme sua festa com Bubble Houses de Luxo, pula-pulas e piscinas de bolinhas. alto Padrão Solicite orçamento!',
};

export default function AluguelBubbleHouseRJ() {
  const beneficios = [
    "Atrações Instagramáveis: Crie memórias incríveis com cenários únicos, perfeitos para fotos.",
    "Diversão para Todas as Idades: Brinquedos infláveis e Bubble Houses que encantam crianças e adultos.",
    "Atendimento Local: Somos cariocas e entendemos o que faz uma festa no Rio de Janeiro brilhar.",
    "Segurança Garantida: Todos os brinquedos são higienizados e inspecionados regularmente."
  ];

  const motivosRJ = [
    "Cenário Carioca Incomparável: Realize seu evento em locais icônicos como Copacabana, Ipanema, Barra da Tijuca ou Recreio.",
    "Festas Memoráveis: Combine a energia descontraída do carioca com nossas atrações exclusivas.",
    "Clima Ideal: O clima tropical do Rio de Janeiro é perfeito para festas ao ar livre."
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary-50 py-24 px-4 border-b border-primary-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Aluguel de Bubble House no Rio de Janeiro: Transforme Sua Festa!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crie momentos inesquecíveis com o <strong>aluguel de Bubble House no RJ</strong>! No coração do Rio de Janeiro, oferecemos <strong>Bubble Houses de Luxo</strong>, pula-pulas e piscinas de bolinhas para tornar qualquer evento mágico, seja um aniversário infantil, chá de bebê, casamento ou evento corporativo.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-primary-100">
             <Image src="/aluguel-de-bubble-house-1.png" alt="Bubble House no Rio de Janeiro" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority quality={90} />
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Por que Escolher o Aluguel de Bubble House no Rio de Janeiro?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Na <strong>Bubble House Aluguel RJ</strong>, somos especialistas em transformar festas em experiências únicas. Com foco em segurança, qualidade e diversão, cuidamos de todos os detalhes, desde a montagem até a higienização, para que você curta o evento sem preocupações. Nossas atrações, como a <strong>Bubble House de Luxo</strong>, são perfeitas para festas em bairros icônicos como Copacabana, Barra da Tijuca, Recreio e outras áreas do RJ.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-6">Benefícios do Nosso Serviço</h3>
              <ul className="space-y-4 mb-10">
                {beneficios.map((beneficio, idx) => {
                  const [boldPart, rest] = beneficio.split(": ");
                  return (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4 shrink-0 mt-1">
                        <Check size={14} className="text-primary-700" />
                      </span>
                      <span><strong>{boldPart}:</strong> {rest}</span>
                    </li>
                  )
                })}
              </ul>
              <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 inline-block">
                ORÇAMENTO AQUI !
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-primary-50/50 border-y border-primary-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-16">
              Nossos Brinquedos para Aluguel no RJ
            </h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-primary-600 mb-4">Bubble House de Luxo</h3>
                <p className="text-gray-600 leading-relaxed mb-2">Uma esfera inflável transparente repleta de balões flutuantes, ideal para criar um ambiente mágico e <strong>instagramável</strong>. Perfeita para festas infantis, chás de revelação, casamentos ou eventos corporativos no Rio de Janeiro.</p>
                <p className="text-sm font-medium text-gray-500"><strong>Dimensões:</strong> 4m de diâmetro x 3m de altura (personalizável conforme o espaço).</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-primary-600 mb-4">Castelo Inflável Branco</h3>
                <p className="text-gray-600 leading-relaxed mb-2">O clássico das festas, o pula pula castelo, agora em um elegante <strong>design branco de alto padrão</strong>, ideal para casamentos, chás de revelação, aniversários infantis e diversos outros eventos. Disponível em diversos tamanhos, garantindo diversão segura.</p>
                <p className="text-sm font-medium text-gray-500"><strong>Dimensões:</strong> 3m x 3m x 2,5m (pequeno), 4m x 4m x 3m (médio), 5m x 5m x 3,5m (grande).</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-primary-600 mb-4">Piscina de Bolinhas Branca com Escorregador</h3>
                <p className="text-gray-600 leading-relaxed mb-2">Atrações interativas em <strong>branco de alto padrão</strong>, perfeitas para casamentos, chás de revelação, festas infantis e outros eventos, trazendo emoção e risadas com sofisticação.</p>
                <p className="text-sm font-medium text-gray-500"><strong>Dimensões:</strong> 1,5m x 1,5m (padrão).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Por que o Rio de Janeiro é o Lugar Perfeito para Sua Festa?</h2>
             <ul className="space-y-6 mb-16">
                {motivosRJ.map((motivo, idx) => {
                  const [boldPart, rest] = motivo.split(": ");
                  return (
                    <li key={idx} className="flex items-start text-gray-700 bg-primary-50 p-6 rounded-xl">
                      <span className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center mr-4 shrink-0 mt-1 pb-1">🌟</span>
                      <span className="text-lg"><strong>{boldPart}:</strong> {rest}</span>
                    </li>
                  )
                })}
             </ul>

             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center mt-20">Depoimentos de Clientes</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4">"Contratamos a Bubble House de Luxo para o aniversário da minha filha na Barra da Tijuca, e foi um sucesso! As crianças adoraram, e as fotos ficaram incríveis. A equipe foi super profissional!"</p>
                  <p className="font-semibold text-gray-900">– Fernanda S., Rio de Janeiro</p>
               </div>
               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4">"A Bubble House transformou nosso evento corporativo em Copacabana em algo único. Todos os convidados ficaram impressionados com a originalidade e a diversão!"</p>
                  <p className="font-semibold text-gray-900">– Marcelo R., RJ</p>
               </div>
             </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center">FAQ – Aluguel de Bubble House no Rio de Janeiro</h2>
            
            <div className="space-y-8 text-primary-100">
              <div>
                <p className="font-semibold text-xl text-white mb-2">1. O que é uma Bubble House?</p>
                <p>Uma Bubble House é uma esfera inflável transparente decorada com balões flutuantes, criando um ambiente mágico e perfeito para fotos em festas e eventos no RJ.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">2. Para quais tipos de eventos posso alugar uma Bubble House no RJ?</p>
                <p>Nossas Bubble Houses, pula-pulas e piscinas de bolinhas são ideais para aniversários infantis, chás de bebê, casamentos, eventos corporativos e muito mais, em qualquer bairro do Rio de Janeiro.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">3. Os brinquedos são seguros?</p>
                <p>Sim! Todos os nossos brinquedos, incluindo Bubble Houses, pula-pulas e piscinas de bolinhas, são higienizados, inspecionados e instalados por profissionais, garantindo segurança total.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">4. Vocês atendem em quais áreas do Rio de Janeiro?</p>
                <p>Atendemos em todo o RJ, incluindo Copacabana, Ipanema, Barra da Tijuca, Recreio, Leblon e outras regiões. Consulte-nos para confirmar a disponibilidade na sua localidade.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">5. Como faço para reservar uma Bubble House no RJ?</p>
                <p>Entre em contato pelo nosso formulário ou WhatsApp para um orçamento personalizado. Garanta sua reserva com antecedência para datas concorridas!</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContactCTA 
          title="Reserve Sua Bubble House no RJ Hoje!" 
          subtitle="Pronto para transformar sua festa no Rio de Janeiro com o aluguel de Bubble House? Entre em contato agora e solicite um orçamento personalizado."
        />
      </main>
      <Footer />
    </>
  );
}
