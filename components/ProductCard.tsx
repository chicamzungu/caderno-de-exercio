import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      <div className="relative overflow-hidden h-48 bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-gray-900 font-bold text-xl mb-2">{product.name}</h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-brand-red font-extrabold text-xl">
            {product.price.toLocaleString('pt-MZ')} MT
          </span>
          <button className="p-2 bg-brand-red text-white rounded-full hover:bg-brand-dark transition-colors" aria-label="Adicionar">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;