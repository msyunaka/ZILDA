import React from 'react';
import { FileText, Search, AlertTriangle, Check, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-secondary font-sans font-bold tracking-[0.2em] uppercase text-xs">Áreas de Atuação</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">Expertise Jurídica</h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Card 1: Due Diligence */}
          <div id="imobiliario" className="bg-white p-10 md:p-14 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary group">
            <div className="mb-8 flex justify-between items-start">
              <div className="p-4 bg-primary/5 rounded-full">
                <Search className="h-10 w-10 text-primary" />
              </div>
              <span className="text-6xl font-serif text-gray-100 font-bold group-hover:text-gray-200 transition-colors">01</span>
            </div>
            
            <h3 className="text-3xl font-serif text-primary mb-4">Due Diligence Imobiliária</h3>
            <p className="text-lg text-gray-500 mb-8 font-light italic">
              "Não compre imóvel sem analisar antes."
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Uma investigação completa para garantir a segurança da sua compra. Identificamos riscos ocultos que podem comprometer seu patrimônio.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Análise de certidões (Vintenária, Ônus Reais)",
                "Investigação de dívidas fiscais e trabalhistas",
                "Verificação de fraudes à execução",
                "Revisão contratual minuciosa"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-700">
                  <AlertTriangle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center text-primary font-semibold tracking-wide hover:text-secondary transition-colors">
              <span className="uppercase text-sm border-b border-current pb-1">Solicitar Análise</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Card 2: Inventário */}
          <div id="inventario" className="bg-primary p-10 md:p-14 shadow-xl text-white group">
            <div className="mb-8 flex justify-between items-start">
              <div className="p-4 bg-white/10 rounded-full">
                <FileText className="h-10 w-10 text-secondary" />
              </div>
              <span className="text-6xl font-serif text-white/10 font-bold group-hover:text-white/20 transition-colors">02</span>
            </div>
            
            <h3 className="text-3xl font-serif text-white mb-4">Inventário & Sucessões</h3>
            <p className="text-lg text-gray-400 mb-8 font-light italic">
              "Regularidade e paz para a família."
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Atuação célere e humanizada em processos de inventário, focando na harmonia familiar e na correta transmissão dos bens.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Inventário Extrajudicial (Cartório)",
                "Inventário Judicial",
                "Planejamento Sucessório",
                "Regularização de bens de herança"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-200">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center text-white font-semibold tracking-wide hover:text-secondary transition-colors">
              <span className="uppercase text-sm border-b border-current pb-1">Consultar Especialista</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};