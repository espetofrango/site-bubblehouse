export default function ContactCTA({ title, subtitle }) {
  return (
    <section className="py-24 bg-primary-900 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          {title || "Pronto para elevar o nível da sua festa?"}
        </h2>
        <p className="text-lg text-primary-100/90 mb-10 max-w-2xl mx-auto">
          {subtitle || "Entre em contato agora mesmo para consultarmos a disponibilidade da data para o seu evento no Rio de Janeiro."}
        </p>
        <a href="https://wa.me/5521964994409" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary-900 hover:bg-gray-50 text-lg px-12 py-5 shadow-xl">
          Agendar via WhatsApp (21) 96499-4409
        </a>
      </div>
    </section>
  );
}
