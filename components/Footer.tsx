import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-white font-serif text-lg font-bold">Dra. Zilda Simão</h3>
          <p className="text-sm mt-1">OAB/SP 000.000</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
          <a href="https://www.zildasimao.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Site Oficial</a>
        </div>
      </div>
    </footer>
  );
};