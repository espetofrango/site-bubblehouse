import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary-50">

      {/* Abstract Background Elements to simulate a premium look without an image initially */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-200/40 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm border border-primary-200">
              Eventos Premium no RJ
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-gray-900 leading-[1.1] mb-8">
              Luxo e Sofisticação em <span className="text-primary-600 italic">Cerimônias</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Transforme seu evento com nossos brinquedos instagramáveis de alto padrão. Aluguel de Bubble House, Castelos e Piscinas de Bolinhas para celebrações exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4 w-full sm:w-auto text-center">
                Reservar Agora via WhatsApp
              </a>
              <a href="#experiencias" className="btn-outline text-lg px-10 py-4 w-full sm:w-auto bg-white/50 backdrop-blur-sm text-center">
                Conheça as Experiências
              </a>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl block">
            <Image
              src="/aluguel-de-bubble-house-1.png"
              alt="Bubble House premium event"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
