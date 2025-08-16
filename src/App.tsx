import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Volunteering from './components/Volunteering';
import HonorsAwards from './components/HonorsAwards';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import BackgroundElements from './components/BackgroundElements';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {/* <BackgroundElements /> */}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Volunteering />
        <HonorsAwards />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
