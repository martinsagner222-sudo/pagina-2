
import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import UrgencySection from './components/UrgencySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white antialiased" style={{ lineHeight: 1.5 }}>
      <Header />
      <main>
        <Benefits />
        <HowItWorks />
        <TestimonialsSection />
        <UrgencySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
