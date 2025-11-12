import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { FinalCTA } from './components/cta/FinalCTA';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import PricingSection from './components/ui/pricing-section';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;