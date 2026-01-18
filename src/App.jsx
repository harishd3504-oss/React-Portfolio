import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import Resume from './components/Resume';
import CodingExperience from './components/CodingExperience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home': return <Hero />;
      case 'Projects': return <Projects />;
      case 'Skills': return <Skills />;
      case 'Certificates': return <Certificates />;
      case 'Blog': return <Blog />;
      case 'Resume': return <Resume />;
      case 'Coding Experience': return <CodingExperience />;
      case 'About Me': return <AboutMe />;
      case 'Contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-[calc(100vh-160px)]"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
