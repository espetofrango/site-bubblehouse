"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qual o tamanho ideal de Bubble House para minha festa?",
    answer: "O tamanho ideal da Bubble House depende do espaço disponível no local da festa e do número de convidados. Oferecemos diferentes tamanhos para se adequar a diversas necessidades. Entre em contato com nossa equipe para que possamos te ajudar a escolher a melhor opção para sua festa."
  },
  {
    question: "As Bubble Houses são seguras para crianças?",
    answer: "Sim, a segurança é nossa prioridade. Nossas Bubble Houses e todos os brinquedos infláveis são fabricados com materiais de alta qualidade e seguem rigorosos padrões de segurança. Além disso, nossa equipe é treinada para realizar a montagem e desmontagem de forma segura e eficiente, garantindo a tranquilidade dos pais e a diversão das crianças em sua festa."
  },
  {
    question: "Posso decorar a Bubble House com o tema da minha festa?",
    answer: "Com certeza! A versatilidade da Bubble House permite que ela seja decorada de inúmeras formas, com balões, flores, luzes e outros elementos que complementem o tema da sua festa. Nossa equipe pode te auxiliar com ideias e sugestões para personalizar sua Bubble House e torná-la ainda mais especial."
  },
  {
    question: "A piscina de bolinhas branca é adequada para adultos?",
    answer: "Sim! A piscina de bolinhas branca é projetada para ser divertida para todas as idades. Com bolinhas seguras e uma estrutura robusta, adultos também podem desfrutar de momentos de descontração e tirar fotos incríveis em sua festa."
  },
  {
    question: "Como faço para solicitar um orçamento para minha festa?",
    answer: "É muito simples! Você pode solicitar seu orçamento diretamente pelo nosso site, nos chamando no WhatsApp. Nossa equipe está pronta para te atender e oferecer a melhor solução para sua festa."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-lg text-gray-600">
            Para facilitar o planejamento da sua festa, reunimos as perguntas mais frequentes sobre o aluguel de Bubble Houses, piscinas de bolinhas brancas e pula-pulas castelo inflável branco.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary-300 bg-primary-50/30' : 'border-gray-200 bg-white hover:border-primary-200'}`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-lg text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown className={`shrink-0 text-primary-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          Se sua dúvida não estiver aqui, <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline">entre em contato conosco!</a>
        </div>
      </div>
    </section>
  );
}
