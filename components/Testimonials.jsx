import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Paula S.",
      text: "Alugamos a Bubble House para o aniversário de 5 anos da minha filha e foi um sucesso absoluto! As crianças amaram e os adultos ficaram encantados com a beleza e a originalidade. As fotos ficaram maravilhosas! A equipe da Bubble House Aluguel foi super profissional, desde o atendimento até a montagem. Recomendo para todas as festas!",
      event: "Aniversário Infantil"
    },
    {
      name: "Carlos M.",
      text: "Para o nosso casamento, queríamos algo diferente e elegante. A piscina de bolinhas branca da Bubble House Aluguel superou nossas expectativas! Deu um toque de diversão e sofisticação à festa, e todos os convidados se divertiram muito. Foi um diferencial que tornou nosso dia ainda mais especial. Muito obrigado pelo excelente serviço!",
      event: "Casamento"
    }
  ];

  return (
    <section className="py-24 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Histórias de Festas Inesquecíveis
          </h2>
          <p className="text-lg text-primary-100 opacity-90">
            A satisfação dos nossos clientes é a nossa maior recompensa. Veja o que algumas pessoas que já transformaram suas festas com a Bubble House Aluguel têm a dizer:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10 relative">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-serif italic mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center font-bold text-xl uppercase border border-primary-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <span className="text-primary-200 text-sm block">{t.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
