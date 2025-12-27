import React from 'react';
import { MessageCircle, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-red border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Simple Icon Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-red font-bold text-xl">
            M
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Papelaria Mzungu</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-gray-200 transition-colors">Início</a>
          <a href="#products" className="hover:text-gray-200 transition-colors">Produtos</a>
          <a href="#contact" className="hover:text-gray-200 transition-colors">Contacto</a>
          <a 
            href="https://wa.me/258840000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark p-4 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <a href="#home" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#products" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsMenuOpen(false)}>Produtos</a>
            <a href="#contact" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            <a 
              href="https://wa.me/258840000000" 
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;