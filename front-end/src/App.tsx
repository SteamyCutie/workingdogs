import React from 'react';

import MainLight from './components/MainLight';
import Header from './components/Header';
import Hero from './components/Hero';
import Pack from './components/Pack';
import Roadmap from './components/Roadmap';
import YellowTape from './components/YellowTape';
import Gallery from './components/Gallery';

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
    </div>
  );
}

export default App;
