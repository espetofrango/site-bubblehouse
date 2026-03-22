import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import Image from 'next/image';
import { ShieldCheck, Heart, Sparkles, UserCheck } from 'lucide-react';

export const metadata = {
  title: 'Sobre Nós: A Paixão por Festas Inesquecíveis com a Bubble House Aluguel',
  description: 'Na Bubble House Aluguel, entendemos que sua festa é um momento especial e único. Nosso compromisso vai além do aluguel de brinquedos infláveis.',
};

export default function SobreNos() {
  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="bg-primary-50 py-24 px-4 border-b border-primary-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-5 pointer-events-none">
            <Sparkles size={400} />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              A Paixão por Festas <span className="text-primary-700">Inesquecíveis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bem-vindo à Bubble House Aluguel, onde a magia e a diversão se encontram para transformar seus eventos em momentos verdadeiramente inesquecíveis. Somos uma equipe dedicada e apaixonada por criar experiências únicas, oferecendo as mais inovadoras atrações.
            </p>
          </div>
        </section>

        {/* História e Valores */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Heart className="text-primary-600" /> Nossa História e Compromisso
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A <strong>Bubble House Aluguel</strong> nasceu da visão de que festas podem ser mais do que apenas reuniões; elas podem ser cenários de sonhos e aventuras. Com anos de experiência no setor de eventos, percebemos a necessidade de oferecer atrações que combinassem alta qualidade, segurança rigorosa e um design que elevasse o padrão estético das celebrações.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trabalhamos incansavelmente para garantir que cada Bubble House, Pula Pula Castelo Branco e Piscina de Bola Branca seja entregue em perfeitas condições, higienizada e montada com a máxima segurança. Acreditamos que a confiança dos nossos clientes é o nosso maior ativo.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary-100">
              <Image 
                src="/bubblehouse.webp" 
                alt="Bubble House em um evento no Rio de Janeiro" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw" 
                className="object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Nossas Atrações */}
        <section className="py-24 px-4 bg-primary-50/50 border-y border-primary-100 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <Sparkles className="text-primary-600" /> Nossas Atrações Estrela
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Diversão e elegância para a sua festa. Encontre a atração perfeita para tornar sua celebração memorável.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Bubble House</h3>
              <p className="text-gray-600 leading-relaxed">
                A atração principal e um verdadeiro show à parte. Esta esfera inflável maravilhosa, preenchida com balões coloridos, confetes ou temáticos, convida à imaginação em casamentos, aniversários, e eventos corporativos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Castelo Inflável Branco</h3>
              <p className="text-gray-600 leading-relaxed">
                Para quem busca um clássico com um toque de sofisticação. Design imponente e cor neutra, integrando-se harmoniosamente à decoração. Combina a alegria tradicional do pula-pula com um visual clean e luxuoso.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Piscina de Bola Branca</h3>
              <p className="text-gray-600 leading-relaxed">
                A atração que une diversão e delicadeza. Suas bolinhas brancas ou translúcidas oferecem charme ideal para chás de bebê, festas de 15 anos e eventos que buscam um toque requintado e suave para os convidados.
              </p>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Nossa Equipe Dedicada</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Por trás de cada evento de sucesso e de cada sorriso, há profissionais experientes que garantem a excelência em cada etapa, desde o contato até a desmontagem.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <UserCheck className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Isabela Costa</h3>
                <p className="text-sm text-primary-600 font-semibold mb-4 uppercase tracking-wide">Gerente de Eventos & Experiência</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Com vasta experiência na organização de eventos e um olhar apurado para os detalhes, a mente por trás da experiência impecável que oferecemos. Ela garante o planejamento e execução com perfeição.
                </p>
              </div>
              <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rafael Silva</h3>
                <p className="text-sm text-primary-600 font-semibold mb-4 uppercase tracking-wide">Especialista em Logística & Segurança</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  O nosso guardião da eficiência. Com aprofundado conhecimento em manutenção e segurança de infláveis, ele comanda a precisão das montagens e desmontagens para tranquilidade total da festa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso Final */}
        <section className="py-24 px-4 bg-primary-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Nosso Compromisso com Você</h2>
            <p className="text-primary-100 text-lg leading-relaxed mb-0">
              Oferecemos um serviço completo, com atendimento personalizado, pontualidade na montagem e total suporte para que desfrute sem preocupações. Nossa paixão é ver a alegria estampada no rosto de cada criança e adulto que interage com nossas atrações!
            </p>
          </div>
        </section>
        
        <ContactCTA 
          title="Pronto para Fazer Parte Dessa História?" 
          subtitle="Convidamos você a transformar sua próxima festa em um evento verdadeiramente mágico."
        />
      </main>
      <Footer />
    </>
  );
}
