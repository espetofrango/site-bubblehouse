import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Aluguel de Castelo Inflável Branco RJ - Alto Padrão Aqui !',
  description: 'Aluguel de Castelo Inflável de Alto padrão no Rio de janeiro, Brinquedos de luxo instagramavéis para seu Evento , Casamento , Formatura , Chá Revelação É Aqui !',
};

export default function AluguelCasteloBrancoRJ() {
  const motivos = [
    "Casamentos Memoráveis: O cenário ideal para fotos únicas de noivos e convidados, trazendo diversão inesperada e elegante.",
    "Para Todas as Idades: Suporta pesos consideráveis, permitindo que a família inteira se divirta unida.",
    "Decoração Versátil: Pode ser personalizado com balões ou arco de flores, adaptando-se perfeitamente à sua paleta.",
    "Serviço Completo: Montagem e desmontagem profissionais com rigorosos protocolos de higienização."
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary-50 py-24 px-4 border-b border-primary-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Aluguel Castelo Inflável Branco RJ (Luxo)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Rio de Janeiro é o palco perfeito para celebrações inesquecíveis. E se você pudesse adicionar um toque de magia, diversão e elegância ao seu evento? Apresentamos a mais nova tendência: o <strong>aluguel de castelo inflável branco no RJ</strong>.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-primary-100">
             <Image src="/aluguel-1castelo-inflavel-branco-.png" alt="Castelo Inflável Branco Alto Padrão" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">A Elegância Inesperada que Transforma Seu Evento</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Esqueça a imagem infantilizada dos pula-pulas coloridos. O castelo inflável branco, conhecido como <em>white bounce</em>, é a reinvenção da diversão com um design clean e moderno. Ele não apenas entretém, mas eleva o padrão estético de festas e casamentos cariocas, criando um ambiente <strong>"instagramável"</strong> por excelência.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-6">Por que alugar o Castelo Branco?</h3>
              <ul className="space-y-4 mb-10">
                {motivos.map((motivo, idx) => {
                  const [boldPart, rest] = motivo.split(": ");
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
                ORÇAMENTO NO WHATSAPP
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-primary-50/50 border-y border-primary-100">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              O Cenário dos Sonhos para Casamentos e Eventos
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Casamentos no Rio pedem cenários memoráveis. O castelo surge como uma opção encantadora, oferecendo um respiro divertido à formalidade, sem perder a elegância. Seja em um mini wedding charmoso, em uma casa em Santa Teresa ou um evento corporativo na Barra da Tijuca, o branco integra-se à sua identidade visual naturalmente.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4">"Alugar o castelo inflável branco da Bubble House foi a cereja do bolo no nosso casamento! Nossos convidados amaram e as fotos ficaram incríveis."</p>
                  <p className="font-semibold text-gray-900">– Mariana L., Santa Teresa (RJ)</p>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-yellow-500 mb-4"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
                  <p className="italic text-gray-600 mb-4">"Queria uma atração que fosse a cara do Instagram para minha comemoração de 30 anos. O castelo fez toda a diferença aqui na festa!"</p>
                  <p className="font-semibold text-gray-900">– Pedro G., Niterói (RJ)</p>
               </div>
          </div>
        </section>


        <section className="py-24 px-4 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center">FAQ – Aluguel de Castelo Inflável Branco</h2>
            
            <div className="space-y-8 text-primary-100">
              <div>
                <p className="font-semibold text-xl text-white mb-2">1. O aluguel de castelo inflável branco é seguro para eventos?</p>
                <p>Absolutamente! A segurança é nossa prioridade. Fabricados em PVC reforçado, nossos brinquedos são inspecionados, higienizados e instalados seguindo rigorosas normas de segurança.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">2. Adultos podem usar o castelo inflável branco?</p>
                <p>Sim! Nossos modelos são projetados para suportar uso por adultos e crianças, sendo perfeitos para casamentos e confraternizações. Avise-nos o público para recomendarmos o melhor tamanho.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">3. Qual espaço é necessário para a montagem?</p>
                <p>Recomendamos uma área plana. Um castelo de 4m x 4m exige área livre aproximada de 6x6 metros para segurança. Precisa também de um ponto de tomada (110v ou 220v) constante.</p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white mb-2">4. Posso personalizar o castelo inflável?</p>
                <p>Com certeza. A grande vantagem do branco é ser como uma tela em branco. Você pode incluir balões nas cores da sua paleta ou belos arcos florais, perfeitos para casamentos.</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContactCTA 
          title="Diversão Incrível Garantida" 
          subtitle="Entre em contato hoje, solicite seu orçamento e descubra como o castelo inflável branco fará a diferença na sua celebração no Rio de Janeiro!"
        />
      </main>
      <Footer />
    </>
  );
}
