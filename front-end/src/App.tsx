import React from 'react';

import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Pack from './components/Pack';
import YellowTape from './components/YellowTape';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Hero />
      <Pack />
      <YellowTape />
    </div>
  );
}

export default App;
