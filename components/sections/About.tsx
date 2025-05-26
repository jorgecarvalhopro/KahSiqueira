
import React from 'react';
import { aboutMeText } from '../../constants';
import SectionWrapper from '../ui/SectionWrapper';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Sobre Mim" bgClassName="bg-brand-bg-light">
      <div className="max-w-3xl mx-auto">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="https://picsum.photos/seed/kah/400/400" // Placeholder professional photo
              alt="Kah Siqueira" 
              className="rounded-full shadow-xl mx-auto w-64 h-64 md:w-full md:h-auto object-cover border-4 border-brand-secondary"
            />
          </div>
          <div className="md:w-2/3 text-brand-light-text space-y-4 text-left md:text-left">
            <p className="text-lg">{aboutMeText.p1}</p>
            <p className="text-lg">{aboutMeText.p2}</p>
            <p className="text-lg">{aboutMeText.p3}</p>
            <p className="text-lg font-semibold text-brand-primary">
              "Meu trabalho é minha paixão, e é essa energia que me move todos os dias."
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
