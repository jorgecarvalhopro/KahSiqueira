
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Packages from './components/sections/Packages';
import Calculator from './components/sections/Calculator';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import { SITE_NAME_DISPLAY, SITE_ROLE_DISPLAY } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="font-body text-brand-text bg-brand-bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero id="home" siteName={SITE_NAME_DISPLAY} siteRole={SITE_ROLE_DISPLAY} />
          <About id="about" />
          <Services id="services" />
          <Packages id="packages" />
          <Calculator id="calculator" />
          <Contact id="contact" />
          <FAQ id="faq" />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;
