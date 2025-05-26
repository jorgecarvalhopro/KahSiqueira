
import React from 'react';
import { SITE_NAME_DISPLAY, contactEmail, socialLinks, DEVELOPER_NAME, DEVELOPER_INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-heading mb-4">{SITE_NAME_DISPLAY}</h3>
        <p className="mb-2">Transformando ideias em resultados digitais.</p>
        <p className="mb-4">
          <a href={`mailto:${contactEmail}`} className="hover:text-brand-secondary transition-colors">
            {contactEmail}
          </a>
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">
            Instagram
          </a>
          {/* Add more social links as needed */}
        </div>
        <p className="text-sm text-gray-300">
          &copy; {currentYear} {SITE_NAME_DISPLAY.split(' - ')[0]}. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Site desenvolvido por{' '}
          <a 
            href={DEVELOPER_INSTAGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-secondary transition-colors underline"
          >
            {DEVELOPER_NAME}
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
