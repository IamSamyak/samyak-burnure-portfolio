import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import CodingProfiles from '../components/CodingProfiles';
import Skills from '../components/Skills';
import Creative from '../components/Creative';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display">
      <Header />
      <main className="flex-1">
        <Hero />
        <Journey />
        <Projects />
        <CodingProfiles />
        <Skills />
        <Creative />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
