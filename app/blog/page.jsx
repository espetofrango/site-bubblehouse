import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog e Dicas de Eventos | Aluguel de Bubble House RJ',
  description: 'Dicas de organização de festas de luxo, tendências de eventos, chás de revelação, aniversários no Rio de Janeiro e muito mais.',
};

export default function BlogGrid() {
  const posts = [
    { title: "Celebrações Culturais no RJ com Bubble House", slug: "celebracoes-culturais-no-rj-com-aluguel-de-bubble-house", image: "/aluguel-de-bubble-house-1.png" },
    { title: "Eventos de Luxo no Rio de Janeiro com Bubble House", slug: "eventos-de-luxo-no-rio-de-janeiro-com-aluguel-de-bubble-house", image: "/bubblehouse.webp" },
    { title: "Eventos de Destino no Brasil com Bubble House", slug: "eventos-de-destino-no-brasil-com-aluguel-de-bubble-house", image: "/aluguel-1castelo-inflavel-branco-.png" },
    { title: "Casamentos dos Sonhos no RJ com Bubble House", slug: "casamentos-dos-sonhos-no-rj-com-aluguel-de-bubble-house", image: "/bubblehouse.webp" },
    { title: "Ensaios Fotográficos Incríveis no RJ com Bubble House", slug: "ensaios-fotograficos-incriveis-no-rj-com-aluguel-de-bubble-house", image: "/aluguel-de-bubble-house-1.png" },
    { title: "Chás de Bebê e Revelação Inesquecíveis no RJ", slug: "chas-de-bebe-e-revelacao-inesqueciveis-no-rj-com-aluguel-de-bubble-house", image: "/piscina-de-bolas-branca.png" },
    { title: "Guia para Festas ao Ar Livre no Rio de Janeiro", slug: "guia-para-festas-ao-ar-livre-no-rio-de-janeiro-com-aluguel-de-bubble-house-verao-e-primavera", image: "/aluguel-3castelo-inflavel-branco-.png" },
    { title: "As Melhores Tendências de Festas no RJ em 2025", slug: "as-melhores-tendencias-de-festas-no-rj-com-aluguel-de-bubble-house-em-2025", image: "/aluguel-de-bubble-house-1.png" },
    { title: "Festas nos Melhores Bairros do RJ", slug: "festas-com-bubble-house-nos-melhores-bairros-do-rj-zona-sul-norte-e-oeste", image: "/cropped-Imagem-colada.png" },
    { title: "Como Criar Festas Instagramáveis no RJ", slug: "como-criar-festas-instagramaveis-no-rj-com-aluguel-de-bubble-house", image: "/aluguel-bubble-house-valor.png" },
    { title: "Como Organizar Eventos Comunitários no RJ", slug: "como-organizar-eventos-comunitarios-no-rj-com-aluguel-de-bubble-house", image: "/piscina-de-bolas-branca.png" },
    { title: "Como Elevar Eventos Corporativos no RJ", slug: "como-elevar-eventos-corporativos-no-rj-com-aluguel-de-bubble-house", image: "/aluguel-2castelo-inflavel-branco-.png" },
    { title: "Introdução ao Pula Pula Branco Aluguel", slug: "introducao-ao-pula-pula-branco-aluguel", image: "/aluguel-1castelo-inflavel-branco-.png" },
    { title: "Festas Temáticas Inesquecíveis no RJ com Aluguel de Bubble House", slug: "festas-tematicas-inesqueciveis-no-rj-com-aluguel-de-bubble-house", image: "/aluguel-de-bubble-house-1.png" },
    { title: "Festas de Fim de Ano e Carnaval com Bubble House no RJ", slug: "festas-de-fim-de-ano-e-carnaval-com-bubble-house-no-rj-guia-para-2025", image: "/bubblehouse.webp" },
    { title: "Guia para Festas Infantis Inesquecíveis no RJ com Aluguel de Bubble House", slug: "guia-para-festas-infantis-inesqueciveis-no-rj-com-aluguel-de-bubble-house", image: "/piscina-de-bolas-branca-aluguel.png" },
    { title: "Como Planejar uma Festa Incrível e Barata no RJ com Bubble House", slug: "como-planejar-uma-festa-incrivel-e-barata-no-rj-com-aluguel-de-bubble-house", image: "/aluguel-bubble-house-valor.png" },
    { title: "Tendências de Festas Infantis no Rio de Janeiro", slug: "tendencias-de-festas", image: "/aluguel-de-bubble-house-1.png" },
    { title: "Como organizar um Chá Revelação memorável", slug: "como-organizar-cha-revelacao", image: "/piscina-de-bolas-branca-aluguel.png" },
    { title: "Qual o tamanho ideal do espaço para a Bubble House?", slug: "tamanho-ideal-espaco-bubble-house", image: "/aluguel-bubble-house-valor.png" },
    { title: "Casamentos ao Ar Livre: O uso do Castelo Branco", slug: "casamentos-ar-livre-castelo-branco", image: "/aluguel-1castelo-inflavel-branco-.png" }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary-50 py-24 px-4 border-b border-primary-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Dicas & Inspirações</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubra tendências, ideias de decoração e conselhos para transformar o seu evento em um momento espetacular.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Link href={`/${post.slug}`} key={idx} className="group flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 relative bg-primary-50 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-primary-600 font-medium tracking-wide">Ler Artigo &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
