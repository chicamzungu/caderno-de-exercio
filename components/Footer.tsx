import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-8 px-4 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Papelaria Mzungu</h3>
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Twitter">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;