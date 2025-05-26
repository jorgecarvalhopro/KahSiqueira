
import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  id: string;
  siteName: string;
  siteRole: string;
}

const Hero: React.FC<HeroProps> = ({ id, siteName, siteRole }) => {
  return (
    <section 
      id={id} 
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }} // Placeholder image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-heading text-white mb-4">
          {siteName.split(' - ')[0]}
        </h1>
        <p className="text-2xl md:text-3xl font-body text-brand-secondary mb-8">
          {siteRole} | {siteName.split(' - ')[1]}
        </p>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Transformando sua presença digital com estratégia, criatividade e paixão.
        </p>
        <Button href="#services" variant="primary" size="lg">
          Descubra Meus Serviços
        </Button>
      </div>
    </section>
  );
};

export default Hero;
