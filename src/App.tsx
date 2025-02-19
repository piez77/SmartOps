import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AIAssistant } from './components/ai-assistant/AIAssistant';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { FinalCTA } from './components/cta/FinalCTA';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AIAssistant />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
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