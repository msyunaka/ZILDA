import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Iniciar Atendimento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Entre em contato para agendar uma reunião em Paulínia ou videoconferência. 
            Seu patrimônio merece atenção especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <div className="flex items-start space-x-5 group">
              <div className="mt-1">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-primary mb-1">Telefone / WhatsApp</h4>
                <p className="text-gray-500 font-light mb-2">Atendimento em horário comercial</p>
                <a href="tel:+5519999999999" className="text-lg font-medium text-gray-800 hover:text-secondary transition-colors">(19) 99999-9999</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-5 group">
              <div className="mt-1">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-primary mb-1">Email</h4>
                <p className="text-gray-500 font-light mb-2">Envie os detalhes do seu caso</p>
                <a href="mailto:contato@zildasimao.com.br" className="text-lg font-medium text-gray-800 hover:text-secondary transition-colors">contato@zildasimao.com.br</a>
              </div>
            </div>

            <div className="flex items-start space-x-5 group">
              <div className="mt-1">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-primary mb-1">Escritório</h4>
                <p className="text-gray-500 font-light">
                  Atendimento presencial em Paulínia e Campinas.<br/>
                  <span className="text-sm text-gray-400 italic">Disponível também por videoconferência.</span>
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome Completo" 
                className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 p-4 text-gray-900 placeholder-gray-400 focus:ring-0 focus:border-secondary transition-colors outline-none"
              />
              <input 
                type="email" 
                placeholder="Email Principal" 
                className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 p-4 text-gray-900 placeholder-gray-400 focus:ring-0 focus:border-secondary transition-colors outline-none"
              />
              <div className="relative">
                <select className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 p-4 text-gray-900 focus:ring-0 focus:border-secondary transition-colors outline-none appearance-none">
                  <option value="" disabled selected>Selecione o Assunto</option>
                  <option>Compra de Imóvel (Due Diligence)</option>
                  <option>Inventário / Sucessão</option>
                  <option>Regularização Imobiliária</option>
                  <option>Outros</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
              <textarea 
                rows={4} 
                placeholder="Breve descrição da sua necessidade..." 
                className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 p-4 text-gray-900 placeholder-gray-400 focus:ring-0 focus:border-secondary transition-colors outline-none resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-primary text-white font-medium py-4 px-8 hover:bg-slate-800 transition-all flex justify-between items-center group">
              <span className="tracking-widest uppercase text-sm">Enviar Mensagem</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};