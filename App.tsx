import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LibrarySection from './components/LibrarySection';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LibrarySection />
        <ProductList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
