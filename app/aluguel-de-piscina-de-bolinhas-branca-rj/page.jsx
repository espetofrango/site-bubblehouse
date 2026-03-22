import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Aluguel de Piscina de Bolinhas Branca RJ Elegância Diversão',
  description: 'Aluguel de Piscina de Bolinhas Branca RJ, O Rio agora conta com uma atração que une diversão clássica e sofisticação moderna: a piscina de bolinhas Branca.',
};

export default function AluguelPiscinaBolinhasBrancaRJ() {
  const caracteristicas = [
    "Design Clean: A cor neutra integra-se perfeitamente a decorações modernas, rústicas e clássicas.",
    "Para Todas as Idades: Estrutura robusta projetada para a diversão segura de crianças e adultos.",
    "Imersão Fotográfica: Cenário perfeito para cliques interativos e espontâneos que seus convidados vão amar (e postar!).",
    "Serviço Premium: Montagem garantida com higienização pré e pós-evento."
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary-50 py-24 px-4 border-b border-primary-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Aluguel de Piscina de Bolinhas Branca RJ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Rio de Janeiro, cidade de beleza ímpar e eventos memoráveis, agora conta com uma atração que une diversão clássica e sofisticação moderna: o alto padrão da <strong>piscina de bolinhas branca</strong>.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-primary-100">
             <Image src="/piscina-de-bolas-branca-aluguel.png" alt="Piscina de bolinhas branca de luxo no Rio de Janeiro" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Um Toque de Classe com a Piscina de Bolinhas</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Longe da imagem infantil e colorida, esta versão minimalista e elegante é perfeita para adicionar charme e entretenimento a qualquer celebração (casamentos, aniversários infantis e eventos corporativos). Sua cor neutra eleva o padrão estético do seu evento, enquanto convida à interação em um ambiente incrível.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-6">Diferenciais da Nossa Experiência</h3>
              <ul className="space-y-4 mb-10">
                {caracteristicas.map((item, idx) => {
                  const [boldPart, rest] = item.split(": ");
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
                SOLICITE SEU ORÇAMENTO
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-primary-50/50 border-y border-primary-100">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Veja Quem Já se Divertiu no RJ
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A piscina de bolinhas branca tem sido um sucesso em diversos bairros e ocasiões, rendendo elogios e momentos memoráveis para quem contratou a Bubble House Aluguel.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4 text-sm">"Contratamos para o aniversário da minha filha. Além de linda, as crianças e adultos se divertiram demais. A Bubble House foi impecável do início ao fim."</p>
                  <p className="font-semibold text-gray-900 text-sm">– Mariana S., Copacabana (RJ)</p>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4 text-sm">"Fiquei surpreso com a elegância. Encaixou perfeitamente na decoração do evento corporativo. Serviu como um excelente ponto de interação."</p>
                  <p className="font-semibold text-gray-900 text-sm">– Fernando L., Barra da Tijuca</p>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4 text-sm">"Minha filha de 8 anos queria algo diferente. Passaram horas brincando, as fotos ficaram incríveis. A equipe montou tudo rapidinho. Amamos!"</p>
                  <p className="font-semibold text-gray-900 text-sm">– Paula R., Niterói</p>
               </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center">Perguntas Frequentes e Detalhes</h2>
            
            <div className="space-y-8 text-primary-100">
               <div>
                <p className="font-semibold text-xl text-white mb-2">Para quais tipos de eventos a Piscina de Bolinhas Branca serve?</p>
                <p>Ela é versátil! Ideal para casamentos, chás de bebê, aniversários adultos ou infantis, além de eventos corporativos, ações promocionais e lançamentos onde a estética importe.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">As piscinas aguentam adultos?</p>
                <p>Sim! Diferente das mini piscinas de buffet, nossas estruturas são fabricadas com materiais resistentes que garantem a segurança e suportam a diversão do público adulto e infantil em conjunto.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">Qual o espaço necessário?</p>
                <p>Possuímos modelos que variam de 1,5x1,5m a 2x2m para cima. O local apenas precisa ser plano, limpo, de fácil acesso e possuir um ponto de energia por perto, se o modelo for inflável.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">Quais regiões do Rio vocês atendem?</p>
                <p>Cobrimos Zona Sul, Zona Oeste, Zona Norte, Centro, Barra da Tijuca, Recreio, Baixada Fluminense e Niterói! A diversão chega até você, basta consultar a disponibilidade.</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContactCTA 
          title="Pronto Para a Festa Perfeita?" 
          subtitle="Garanta uma atração sofisticada que trará nostalgia e muitas risadas para seus convidados. Entre em contato e reserve sua piscina hoje mesmo."
        />
      </main>
      <Footer />
    </>
  );
}
