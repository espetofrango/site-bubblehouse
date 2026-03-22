import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  // Em um projeto real, buscaríamos os dados do slug do banco/CMS
  return {
    title: `${params.slug.replace(/-/g, ' ').toUpperCase()} | Blog Bubble House`,
    description: `Dicas sobre ${params.slug.replace(/-/g, ' ')} para o seu evento de luxo no Rio de Janeiro.`,
  };
}

export default function BlogPost({ params }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="py-24 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-primary-600 font-medium hover:underline mb-8 inline-block">
              &larr; Voltar para as Dicas
            </Link>
            
            <header className="mb-12">
              <span className="text-sm text-gray-500 mb-4 block">Publicado em Dicas de Eventos</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6 capitalize">
                {params.slug.replace(/-/g, ' ')}
              </h1>
              <div className="w-20 h-1 bg-primary-600"></div>
            </header>
            
            <div className="prose prose-lg prose-primary max-w-none mb-16 text-gray-700 leading-relaxed">
              <p className="lead text-xl text-gray-600 font-serif italic mb-8">
                Trazendo sofisticação e luxo para seu evento no Rio de Janeiro. O mercado de festas premium está cada vez mais exigente.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">A Importância da Estética</h2>
              <p className="mb-6">
                Ao organizar casamentos, chás de bebê ou festas de 15 anos, a identidade visual é fundamental. Elementos limpos como o Castelo Inflável Branco ou a Bubble House oferecem interatividade sem poluir a paleta de cores.
              </p>

              <div className="my-12 relative h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-primary-100">
                <Image 
                  src="/aluguel-de-bubble-house-1.png" 
                  alt="Decoração de luxo para festas com Bubble House" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Locais de Atendimento</h2>
              <p className="mb-6">
                Focamos nosso atendimento na Barra da Tijuca, Recreio, Zona Sul e todas as áreas nobres do Rio para garantir a pontualidade e o padrão VIP que entregamos aos nossos clientes.
              </p>
            </div>
          </div>
        </article>
        
        <ContactCTA 
          title="Ficou inspirado pelas nossas dicas?" 
          subtitle="Entre em contato com nossa equipe para transformar sua ideia em realidade."
        />
      </main>
      <Footer />
    </>
  );
}
