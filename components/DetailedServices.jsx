import React from 'react';

export default function DetailedServices() {
  return (
    <section className="py-24 bg-primary-50/50 border-t border-primary-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Além da Bubble House: Piscina de Bolinhas Branca e Pula-Pula Castelo Inflável Branco
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Na Bubble House Aluguel, nossa oferta de diversão e elegância vai além das Bubble Houses. Para complementar sua festa e garantir ainda mais opções de entretenimento, disponibilizamos também a Piscina de Bolinhas Branca e o Pula-Pula Castelo Inflável Branco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-primary-900/5 border border-primary-100/50">
            <h3 className="text-2xl font-serif font-bold text-primary-700 mb-4">
              Piscina de Bolinhas Branca: Charme e Diversão para Todas as Idades
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A piscina de bolinhas branca é a reinvenção de um clássico. Longe das cores vibrantes tradicionais, esta versão minimalista e sofisticada se integra harmoniosamente a qualquer decoração de festa, adicionando um toque de charme e diversão. Repleta de bolinhas translúcidas ou brancas, ela convida crianças e adultos a mergulharem em um mar de alegria, proporcionando momentos de descontração e fotos incríveis. É a escolha perfeita para quem busca um entretenimento elegante e versátil para sua festa, seja ela um aniversário, um chá de bebê ou um evento corporativo.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-primary-900/5 border border-primary-100/50">
            <h3 className="text-2xl font-serif font-bold text-primary-700 mb-4">
              Pula-Pula Castelo Inflável Branco: A Realeza da Diversão em Sua Festa
            </h3>
            <p className="text-gray-600 leading-relaxed">
              O pula-pula castelo inflável branco é a atração que faltava para transformar sua festa em um verdadeiro conto de fadas. Com seu design imponente e cor alva, ele se destaca como um elemento de luxo e diversão. Ideal para festas infantis, casamentos e eventos que buscam um toque de realeza, este castelo inflável oferece um espaço seguro e divertido para as crianças pularem e brincarem à vontade. Sua estética clean e sofisticada permite que ele se adapte a diferentes temas de festa, garantindo que a diversão seja sempre acompanhada de muito estilo. É a garantia de risadas, energia e fotos memoráveis para todos os convidados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
