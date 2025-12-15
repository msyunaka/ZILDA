import React from 'react';
import { StructuredData } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-secondary selection:text-white">
      {/* Invisible SEO Layer */}
      <StructuredData />
      
      {/* Application Structure */}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;