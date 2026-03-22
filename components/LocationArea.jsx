import { MapPin } from 'lucide-react';

export default function LocationArea() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-primary-900 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
          
          <div className="p-12 md:p-16 flex-1 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-800/50 mb-8 border border-primary-700/50">
              <MapPin size={32} className="text-primary-300" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Atendimento Premium Exclusivo
            </h2>
            
            <p className="text-lg text-primary-100/80 leading-relaxed mb-10 max-w-xl">
              Nosso compromisso é com a excelência. Por isso, focamos nosso atendimento nas áreas mais nobres do Rio de Janeiro, garantindo a pontualidade e a sofisticação que seu evento merece.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {['Barra da Tijuca', 'Recreio dos Bandeirantes', 'Copacabana', 'Zona Sul', 'Leblon', 'Ipanema'].map((bairro) => (
                <span key={bairro} className="px-5 py-2 rounded-full bg-primary-800/80 text-primary-50 text-sm font-medium border border-primary-700">
                  {bairro}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
