
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.1-.3.2-.5.1-.3-.1-.9-.3-1.9-1.1-.7-.7-1.2-1.5-1.4-1.8-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.2-.3.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.4-.6-.5-.6h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2 1 2.3.1.1 1.5.7 3.5 2.5 1.8 1.5 2 1.3 2.4 1.2.5-.1.9-.4.8-1 .1-.6-.4-1.1-.6-1.2zM12 2a10 10 0 00-10 10c0 2.2.7 4.2 2 5.8L2.5 21.4l3.7-1.5c1.5.8 3.2 1.2 5 1.2h.1c5.4 0 9.8-4.4 9.8-9.8S17.4 2 12 2z"/>
  </svg>
);

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWhatsAppButton;
