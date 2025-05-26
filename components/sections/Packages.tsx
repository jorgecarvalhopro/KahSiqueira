
import React from 'react';
import { packagesList, WHATSAPP_LINK } from '../../constants';
import { PackageTier } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface PackagesProps {
  id: string;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-primary mr-2">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);


const Packages: React.FC<PackagesProps> = ({ id }) => {
  return (
    <SectionWrapper 
      id={id} 
      title="Pacotes Prontos"
      subtitle="Escolha o pacote que melhor se adapta às suas necessidades e comece a transformar sua presença digital hoje mesmo."
      bgClassName="bg-brand-bg-light"
    >
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {packagesList.map((pkg: PackageTier) => (
          <Card key={pkg.id} className={`flex flex-col ${pkg.highlight ? 'ring-2 ring-brand-accent scale-105' : ''}`}>
            {pkg.highlight && (
              <div className="bg-brand-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-t-lg -mt-6 -mx-6 md:-mt-8 md:-mx-8 mb-4 self-center">Mais Popular</div>
            )}
            <h3 className="text-2xl font-heading text-brand-primary mb-2 text-center">{pkg.name}</h3>
            <p className="text-3xl font-bold text-brand-accent mb-1 text-center">{pkg.priceStartingFrom}</p>
            <p className="text-xs text-brand-light-text mb-6 text-center">por mês</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-brand-light-text">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#contact" variant={pkg.highlight ? 'primary' : 'secondary'} className="w-full mt-auto">
              Quero Este Pacote
            </Button>
          </Card>
        ))}
      </div>
      <p className="text-center mt-12 text-brand-light-text">
        Não encontrou o pacote ideal?{' '}
        <a href="#calculator" className="text-brand-accent font-semibold hover:underline">
          Monte um orçamento personalizado
        </a>{' '}
        ou{' '}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold hover:underline">
          entre em contato
        </a>
        !
      </p>
    </SectionWrapper>
  );
};

export default Packages;
