import React from 'react';
import { BookOpen, Library, Sparkles } from 'lucide-react';

const libraryHighlights = [
  {
    title: 'Coleção Escolar Atualizada',
    description: 'Livros recomendados para o ensino básico, secundário e preparação para exames.',
    icon: BookOpen
  },
  {
    title: 'Espaço de Estudo Tranquilo',
    description: 'Ambiente organizado com mesas de leitura e iluminação confortável para focar.',
    icon: Library
  },
  {
    title: 'Indicações Personalizadas',
    description: 'Sugestões de leitura feitas pela nossa equipa para cada objetivo de estudo.',
    icon: Sparkles
  }
];

const LibrarySection: React.FC = () => {
  return (
    <section id="library" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-red mb-4">Biblioteca Mzungu</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Um espaço dedicado a livros, leitura e pesquisa para apoiar estudantes e profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {libraryHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-white shadow-md">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
