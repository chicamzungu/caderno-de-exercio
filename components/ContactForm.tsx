import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-brand-red">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Fale Conosco</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          
          {/* Info Side */}
          <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Informações</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0" />
                <p>Avenida Eduardo Mondlane, <br/>Maputo, Moçambique</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="flex-shrink-0" />
                <p>+258 84 000 0000</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="flex-shrink-0" />
                <p>contacto@mzungu.co.mz</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-white/50"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-white/50"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-white/50"
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-brand-red font-bold py-4 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {status === 'success' ? (
                  <span>Mensagem Enviada!</span>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;