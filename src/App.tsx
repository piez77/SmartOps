import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FinalCTA } from './components/cta/FinalCTA';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import PricingSection from './components/ui/pricing-section';
import { PortfolioGrid } from './components/portfolio/PortfolioGrid';
import { portfolioItems } from './data/portfolioData';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid items={portfolioItems} />
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
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;