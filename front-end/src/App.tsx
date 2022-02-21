import React from 'react';

import MainLight from './components/MainLight';
import Header from './components/Header';
import Hero from './components/Hero';
import Pack from './components/Pack';
import Roadmap from './components/Roadmap';
import YellowTape from './components/YellowTape';
import Gallery from './components/Gallery';
import Rarity from './components/Rarity';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MainLight />
      <Header />
      <Hero />
      <Pack />
      <YellowTape />
      <Roadmap />
      <Gallery />
      <Rarity />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
