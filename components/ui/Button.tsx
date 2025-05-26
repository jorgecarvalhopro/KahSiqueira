
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', href, target, rel, className, ...props }) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-brand-accent text-white hover:bg-opacity-90 focus:ring-brand-accent",
    secondary: "bg-brand-primary text-white hover:bg-opacity-90 focus:ring-brand-primary",
    outline: "bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white focus:ring-brand-accent",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className || ''}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
