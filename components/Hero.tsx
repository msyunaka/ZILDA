import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Decorative Background Elements (Abstract) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border border-gray-500/20"></div>
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full border border-gray-500/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center space-x-3 mb-8 border-b border-secondary/50 pb-2">
          <ShieldCheck className="h-5 w-5 text-secondary" />
          <span className="text-secondary text-sm font-medium tracking-[0.2em] uppercase">Segurança Jurídica & Excelência</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.1] mb-8">
          Advocacia <br/>
          <span className="italic text-gray-400">Patrimonial</span> & <br/>
          <span className="text-gold-gradient font-normal">Sucessória</span>
        </h1>
        
        <div className="w-24 h-1 bg-secondary mb-8"></div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light mb-12">
          Transformamos imóveis em patrimônio e garantimos a sucessão familiar sem conflitos. 
          Atuação especializada em <span className="text-white font-normal">Paulínia, Campinas e Região</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a 
            href="#contact" 
            className="group bg-secondary hover:bg-amber-700 text-white px-10 py-4 text-lg tracking-wider font-medium transition-all flex items-center justify-center space-x-3"
          >
            <span>Agendar Consultoria</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#imobiliario" 
            className="border border-white/20 hover:border-white/50 text-white px-10 py-4 text-lg tracking-wider font-light transition-all text-center hover:bg-white/5"
          >
            Nossas Especialidades
          </a>
        </div>
      </div>
    </section>
  );
};