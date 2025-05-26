
import React, { useState, useEffect } from 'react';
import { navLinks, SITE_NAME_DISPLAY } from '../constants';
import { NavLink as NavLinkType } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-heading font-bold ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
          {SITE_NAME_DISPLAY.split(' - ')[0]}
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link: NavLinkType) => (
            <a
              key={link.id}
              href={link.href}
              className={`hover:text-brand-accent transition-colors ${isScrolled ? 'text-brand-text' : 'text-gray-100'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${isScrolled ? 'text-brand-primary' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${isScrolled ? 'bg-brand-bg-white' : 'bg-brand-primary bg-opacity-95'} shadow-lg rounded-b-lg`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link: NavLinkType) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`hover:text-brand-accent transition-colors px-4 py-2 ${isScrolled ? 'text-brand-text' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
