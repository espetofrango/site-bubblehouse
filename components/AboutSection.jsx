import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Bubble House Aluguel: A Magia que Transforma Sua Festa em um Evento Inesquecível
          </h2>
          <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 text-lg text-gray-600 leading-relaxed">
          <div>
            <p className="mb-6">
              Na <strong>Bubble House Aluguel</strong>, acreditamos que cada festa é uma oportunidade de criar memórias mágicas e inesquecíveis. Somos especialistas em transformar celebrações comuns em eventos extraordinários, oferecendo a atração mais inovadora e encantadora do mercado: as Bubble Houses.
            </p>
            <p>
              Imagine uma esfera transparente e imponente, repleta de balões coloridos ou temáticos, que convida crianças e adultos a mergulharem em um universo de diversão e fantasia. É a combinação perfeita de elegância, interatividade e um toque de sonho que fará sua festa brilhar.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              O Que é uma Bubble House e Por Que Ela é Perfeita para Sua Festa?
            </h3>
            <p className="mb-6">
              A Bubble House é muito mais do que um simples brinquedo inflável; é uma experiência imersiva e um cenário deslumbrante para qualquer tipo de festa. Fabricada em PVC transparente de alta qualidade, ela cria um ambiente seguro e climatizado, ideal para fotos incríveis e momentos de pura alegria.
            </p>
            <p>
              Seja para um aniversário infantil, um chá de bebê, um casamento elegante ou um evento corporativo inovador, a Bubble House se adapta perfeitamente, adicionando um toque de sofisticação e originalidade. Sua versatilidade permite que seja decorada de inúmeras formas, com balões, flores, luzes ou qualquer elemento que complemente o tema da sua festa, tornando-a verdadeiramente única e personalizada.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              A Bubble House como Ponto Central da Sua Celebração
            </h3>
            <p>
              Escolher uma Bubble House para sua festa significa garantir um ponto focal de entretenimento e beleza. Ela atrai olhares, estimula a interação e proporciona um ambiente lúdico onde a diversão é garantida. As crianças se encantam com a liberdade de pular e brincar em um espaço tão mágico, enquanto os adultos se divertem registrando cada momento e aproveitando a atmosfera descontraída. É uma atração que transcende idades, unindo todos em uma celebração de alegria e encantamento. Com a Bubble House Aluguel, sua festa será lembrada por sua originalidade e pelo brilho que só uma atração tão especial pode oferecer.
            </p>
          </div>
          
          <div className="pt-8 text-center">
             <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="btn-primary text-xl px-12 py-5 shadow-lg shadow-primary-900/10 inline-block font-medium">
               ORÇAMENTO CLICK AQUI !
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
