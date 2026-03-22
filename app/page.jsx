import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServiceCard from '../components/ServiceCard';
import DetailedServices from '../components/DetailedServices';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LocationArea from '../components/LocationArea';
import Footer from '../components/Footer';

export default function Home() {
  const servicos = [
    {
      title: "Bubble House",
      description: "A clássica bolha transparente que transforma qualquer ambiente em um cenário de sonhos. Ideal para fotos inesquecíveis e momentos mágicos de interação para todas as idades.",
      href: "/aluguel-de-bubble-house-rj",
      image: "/aluguel-de-bubble-house-1.png"
    },
    {
      title: "Castelo Inflável Branco",
      description: "Com um design minimalista e imponente, nosso castelo inflável branco é a tela perfeita para decorações florais ou balões, trazendo luxo estrutural para o seu evento.",
      href: "/aluguel-de-castelo-inflavel-branco-rj-luxo",
      image: "/aluguel-1castelo-inflavel-branco-.png"
    },
    {
      title: "Piscina de Bolinhas Branca com Escorregador",
      description: "Nossa piscina de bolinhas traz a nostalgia da infância em um formato elegante e refinado, complementando a decoração de qualquer evento de luxo.",
      href: "/aluguel-de-piscina-de-bolinhas-branca-rj",
      image: "/piscina-de-bolas-branca-aluguel.png"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <AboutSection />
        
        <section id="experiencias" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Nosso Portfólio de <span className="text-primary-600 italic">Estruturas</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Selecionamos e desenvolvemos cuidadosamente cada peça para garantir que o nível visual da sua celebração seja impecável, sem perder a diversão.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicos.map((servico, index) => (
                <ServiceCard 
                  key={index} 
                  title={servico.title} 
                  description={servico.description} 
                  href={servico.href} 
                  image={servico.image}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        <DetailedServices />

        <LocationArea />
        
        <Testimonials />
        
        <FAQ />
        
        <section className="py-32 bg-primary-50 relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Planeje Sua Festa dos Sonhos com a Bubble House Aluguel!</h2>
             <p className="text-xl text-gray-600 mb-12">Quer uma festa inesquecível? Fale conosco e receba um orçamento sob medida para levar a diversão da Bubble House, da piscina de bolinhas branca ou do pula-pula castelo inflável branco ao seu evento!</p>
             <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="btn-primary text-xl px-12 py-5 shadow-xl shadow-primary-900/20 inline-block">
               Entre em Contato via WhatsApp (21) 96499-4409
             </a>
           </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
