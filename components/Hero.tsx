import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-24 bg-gradient-to-b from-brand-red to-brand-dark">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Qualidade para o seu escritório e escola
        </h2>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto opacity-90">
          Encontre os melhores materiais escolares e de escritório em Moçambique. 
          Entrega rápida e preços competitivos.
        </p>
        <div className="pt-8">
          <a 
            href="#products" 
            className="inline-block bg-white text-brand-red font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;