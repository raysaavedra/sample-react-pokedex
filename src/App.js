import React from 'react';

import 'App.css';
import Header from 'components/Header'
import Footer from 'components/Footer'
import PokedexView from 'features/Pokedex'

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <PokedexView />
      <Footer />
    </div>
  );
}

export default App;
