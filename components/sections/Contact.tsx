
import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { contactEmail, contactPhone, socialLinks, WHATSAPP_LINK } from '../../constants';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Obrigada pelo seu contato! Em breve retornarei. (Esta é uma demonstração, o formulário não envia dados reais.)");
    // In a real app, you would handle form submission here.
  };

  return (
    <SectionWrapper 
      id={id} 
      title="Entre em Contato"
      subtitle="Vamos conversar sobre como posso ajudar a sua marca a brilhar! Preencha o formulário ou utilize um dos canais abaixo."
      bgClassName="bg-brand-bg-light"
    >
      <div className="max-w-4xl mx-auto md:flex md:space-x-12">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-2xl font-heading text-brand-primary mb-4">Informações de Contato</h3>
          <p className="text-brand-light-text mb-2">Sinta-se à vontade para me contatar diretamente:</p>
          <ul className="space-y-3 text-brand-light-text mb-6">
            <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-brand-accent hover:underline">{contactEmail}</a></li>
            <li><strong>WhatsApp/Telefone:</strong> <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">{contactPhone}</a></li>
          </ul>
           <h3 className="text-xl font-heading text-brand-primary mb-2">Siga-me nas redes:</h3>
          <div className="flex space-x-4">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-primary transition-colors text-sm">Instagram</a>
          </div>
          <img src="https://picsum.photos/seed/contact/600/400" alt="Detalhe de escritório" className="mt-8 rounded-lg shadow-md object-cover"/>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 bg-white p-8 rounded-xl shadow-xl">
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-brand-text">Seu Nome</label>
            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-brand-text text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-2.5" placeholder="Nome Completo" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-brand-text">Seu Email</label>
            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-brand-text text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-2.5" placeholder="email@exemplo.com" required />
          </div>
          <div className="mb-5">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-brand-text">Assunto</label>
            <input type="text" id="subject" name="subject" className="bg-gray-50 border border-gray-300 text-brand-text text-sm rounded-lg focus:ring-brand-accent focus:border-brand-accent block w-full p-2.5" placeholder="Sobre o que gostaria de falar?" />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-brand-text">Sua Mensagem</label>
            <textarea id="message" name="message" rows={4} className="block p-2.5 w-full text-sm text-brand-text bg-gray-50 rounded-lg border border-gray-300 focus:ring-brand-accent focus:border-brand-accent" placeholder="Deixe sua mensagem aqui..." required></textarea>
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
