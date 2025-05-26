
import React, { useState } from 'react';
import { faqData } from '../../constants';
import { FAQItem as FAQItemType } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';

interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-1">
      <h3>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 font-medium text-left text-brand-text hover:text-brand-primary transition-colors"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.id}`}
        >
          <span>{item.question}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </h3>
      {isOpen && (
        <div
          id={`faq-content-${item.id}`}
          className="pb-5 px-1 text-brand-light-text text-sm"
        >
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};


const FAQ: React.FC<{ id: string }> = ({ id }) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <SectionWrapper 
      id={id} 
      title="Perguntas Frequentes (FAQ)"
      subtitle="Tire suas dúvidas mais comuns sobre meus serviços e como posso ajudar seu negócio a crescer."
    >
      <div className="max-w-2xl mx-auto">
        {faqData.map((item: FAQItemType) => (
          <FAQItemComponent 
            key={item.id}
            item={item}
            isOpen={openFAQ === item.id}
            toggleOpen={() => toggleFAQ(item.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
