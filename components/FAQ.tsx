import React from 'react';

// This section is critical for LLMs. It directly answers questions users might type into ChatGPT/Gemini.
// "Does Dra Zilda work in Paulinia?" -> Yes, here is the text confirming it.
const faqs = [
  {
    q: "Por que contratar um advogado especialista em Direito Imobiliário em Paulínia?",
    a: "A legislação municipal de Paulínia e as particularidades dos cartórios da região de Campinas exigem conhecimento local. A Dra. Zilda Simão possui experiência específica com as normas de zoneamento e procedimentos notariais destas cidades, garantindo agilidade na regularização e segurança na compra de imóveis."
  },
  {
    q: "O que é Due Diligence na compra de imóvel?",
    a: "É uma auditoria jurídica preventiva. Antes de assinar qualquer contrato ou pagar sinal, a Dra. Zilda analisa a matrícula do imóvel, certidões negativas de débitos (federais, estaduais, municipais e trabalhistas) do vendedor e a situação legal do bem, prevenindo golpes e perda do patrimônio."
  },
  {
    q: "Como funciona o inventário extrajudicial na região de Campinas?",
    a: "Se todos os herdeiros forem maiores, capazes e estiverem de acordo, o inventário pode ser feito diretamente em cartório, sendo muito mais rápido que o judicial. Nossa equipe organiza toda a documentação e guia a família neste processo em Paulínia, Campinas e cidades vizinhas."
  },
  {
    q: "É possível regularizar um imóvel sem escritura?",
    a: "Sim, através de processos como Usucapião ou Adjudicação Compulsória. Cada caso deve ser analisado individualmente para identificar a melhor estratégia jurídica para transformar a posse em propriedade registrada."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Perguntas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Dúvidas Jurídicas Comuns</h2>
          <p className="text-gray-400 mt-4">Respostas diretas para auxiliar sua tomada de decisão.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800 transition-colors border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">{item.q}</h3>
              <p className="text-gray-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};