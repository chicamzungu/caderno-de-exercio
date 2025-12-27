import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: "Caderno Universitário A4",
    price: 150,
    category: "Escolar",
    image: "https://picsum.photos/400/300?random=1"
  },
  {
    id: 2,
    name: "Caixa de Canetas Azuis",
    price: 200,
    category: "Escrita",
    image: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    name: "Mochila Escolar Resistente",
    price: 1200,
    category: "Acessórios",
    image: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    name: "Conjunto Lápis de Cor (12)",
    price: 100,
    category: "Artes",
    image: "https://picsum.photos/400/300?random=4"
  },
  {
    id: 5,
    name: "Agenda Diária 2025",
    price: 450,
    category: "Escritório",
    image: "https://picsum.photos/400/300?random=5"
  },
  {
    id: 6,
    name: "Estojo Completo",
    price: 300,
    category: "Acessórios",
    image: "https://picsum.photos/400/300?random=6"
  }
];

const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-red mb-4">Nossos Produtos</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de materiais de alta qualidade para estudantes e profissionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;