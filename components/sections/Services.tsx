
import React from 'react';
import { servicesList } from '../../constants';
import { ServiceItem } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

interface ServicesProps {
  id: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <SectionWrapper 
      id={id} 
      title="Meus Serviços"
      subtitle="Soluções personalizadas para impulsionar sua marca no universo digital. Desde a estratégia até a execução, cuido de cada detalhe para que você alcance seus objetivos."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service: ServiceItem) => (
          <Card key={service.id} className="flex flex-col">
            <div className="mb-4 text-brand-accent flex justify-center">
              {service.icon || <div className="w-10 h-10 bg-brand-accent rounded-full text-white flex items-center justify-center text-xl font-bold">S</div>}
            </div>
            <h3 className="text-xl font-heading text-brand-primary mb-3 text-center">{service.title}</h3>
            <p className="text-brand-light-text text-sm flex-grow text-center">{service.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
