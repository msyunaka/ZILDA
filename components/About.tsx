import React from 'react';
import { Award, Scale, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          
          {/* Left Column: Title & Quote */}
          <div className="md:col-span-5 flex flex-col justify-center border-l-4 border-secondary pl-8 py-4">
             <h2 className="text-secondary font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4">Sobre a Dra. Zilda Simão</h2>
             <h3 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-8">
               Ética,<br/>Autoridade &<br/>Transparência.
             </h3>
             <blockquote className="text-xl md:text-2xl font-serif italic text-gray-600 leading-relaxed">
               "A segurança jurídica não é um custo, é o alicerce que protege todo o esforço de uma vida."
             </blockquote>
          </div>

          {/* Right Column: Content */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-8">
            <p className="text-gray-600 text-lg leading-loose font-light">
              Com uma carreira consolidada na advocacia, a Dra. Zilda Simão atua como uma verdadeira parceira estratégica para seus clientes. 
              Ao invés de apenas resolver problemas, seu foco é a <strong className="text-primary font-medium">advocacia preventiva</strong>: 
              antecipar riscos em transações imobiliárias e planejar sucessões para evitar o desgaste familiar.
            </p>
            
            <p className="text-gray-600 text-lg leading-loose font-light">
              Especialista em navegar pelas complexidades dos cartórios e legislações municipais de Paulínia e Campinas, 
              ela oferece um atendimento que une rigor técnico jurídico com a sensibilidade necessária para tratar de patrimônios e legados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <Scale className="h-8 w-8 text-secondary" />
                <h4 className="font-serif text-xl text-primary">Excelência Técnica</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Análise minuciosa de contratos e riscos (Due Diligence).</p>
              </div>
              <div className="flex flex-col space-y-3">
                <MapPin className="h-8 w-8 text-secondary" />
                <h4 className="font-serif text-xl text-primary">Atuação Regional</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Conhecimento profundo das normas de Paulínia e RMC.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};