
import React, { useState, useCallback } from 'react';
import { calculableServicesData } from '../../constants';
import { CalculableService } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';

interface SelectedServiceQuantities {
  [key: string]: number;
}

const Calculator: React.FC<{ id: string }> = ({ id }) => {
  const [serviceQuantities, setServiceQuantities] = useState<SelectedServiceQuantities>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateAndUpdateTotal = useCallback((currentQuantities: SelectedServiceQuantities) => {
    let currentTotal = 0;
    for (const serviceId in currentQuantities) {
      if (currentQuantities[serviceId] > 0) {
        const service = calculableServicesData.find(s => s.id === serviceId);
        if (service) {
          currentTotal += service.price * currentQuantities[serviceId];
        }
      }
    }
    setTotalPrice(currentTotal);
  }, []);

  const handleQuantityChange = useCallback((serviceId: string, newQuantity: number) => {
    const quantity = Math.max(0, newQuantity); // Ensure quantity is not negative
    setServiceQuantities(prevQuantities => {
      const updatedQuantities = { ...prevQuantities, [serviceId]: quantity };
      calculateAndUpdateTotal(updatedQuantities);
      return updatedQuantities;
    });
  }, [calculateAndUpdateTotal]);


  return (
    <SectionWrapper 
      id={id} 
      title="Calculadora de Orçamento Personalizado"
      subtitle="Selecione a quantidade de cada serviço que você precisa para ter uma estimativa de investimento. Este é um valor aproximado, entre em contato para um orçamento detalhado."
    >
      <div className="max-w-4xl mx-auto bg-brand-bg-white p-6 md:p-8 rounded-xl shadow-xl">
        <div className="space-y-6 mb-8">
          {calculableServicesData.map((service: CalculableService) => (
            <div 
              key={service.id} 
              className="p-4 border border-gray-200 rounded-lg transition-colors hover:bg-brand-bg-light/50"
              role="group"
              aria-labelledby={`service-name-${service.id}`}
            >
              <div className="md:flex md:justify-between md:items-center">
                <div className="mb-3 md:mb-0 md:flex-1 md:pr-4">
                  <span id={`service-name-${service.id}`} className="font-medium text-brand-text text-lg">{service.name}</span>
                  {service.description && <p className="text-xs text-brand-light-text mt-1">{service.description}</p>}
                  <p className="text-sm font-semibold text-brand-primary mt-1">R$ {service.price.toFixed(2)} <span className="text-xs text-brand-light-text">/unidade ou hora</span></p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(service.id, (serviceQuantities[service.id] || 0) - 1)}
                    className="bg-gray-200 text-brand-text hover:bg-gray-300 p-1 rounded-md focus:outline-none h-10 w-10 flex items-center justify-center text-lg font-semibold transition-colors"
                    aria-label={`Diminuir quantidade de ${service.name}`}
                    disabled={(serviceQuantities[service.id] || 0) === 0}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={serviceQuantities[service.id] || 0}
                    onChange={(e) => handleQuantityChange(service.id, parseInt(e.target.value, 10) || 0)}
                    className="w-16 text-center border border-gray-300 rounded-md h-10 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    aria-label={`Quantidade de ${service.name}`}
                    min="0"
                  />
                  <button
                    onClick={() => handleQuantityChange(service.id, (serviceQuantities[service.id] || 0) + 1)}
                    className="bg-gray-200 text-brand-text hover:bg-gray-300 p-1 rounded-md focus:outline-none h-10 w-10 flex items-center justify-center text-lg font-semibold transition-colors"
                    aria-label={`Aumentar quantidade de ${service.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-heading text-brand-primary mb-2">Total Estimado:</h3>
          <p className="text-4xl font-bold text-brand-accent mb-6" aria-live="polite">
            R$ {totalPrice.toFixed(2)}
          </p>
          <Button href="#contact" variant="primary" size="lg">
            Solicitar Orçamento Detalhado
          </Button>
          <p className="text-xs text-brand-light-text mt-4">
            Este valor é uma estimativa. O preço final pode variar conforme a complexidade e escopo do projeto.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Calculator;
