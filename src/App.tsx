import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import HonorsAwards from './components/HonorsAwards';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Education />
        <HonorsAwards />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
