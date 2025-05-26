
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '', bgClassName = 'bg-brand-bg-white' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClassName} ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-brand-light-text text-center mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
