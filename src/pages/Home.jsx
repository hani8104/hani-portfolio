import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = ({ onOpenResume }) => {
  return (
    <main>
      <Hero onOpenResume={onOpenResume} />
      <About onOpenResume={onOpenResume} />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
