
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', highlight = false }) => {
  return (
    <div className={`bg-brand-bg-white p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl ${highlight ? 'border-2 border-brand-accent' : 'border border-gray-200'} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
