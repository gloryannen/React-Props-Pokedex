import React from 'react';
import Pokedex from './Pokedex';
import pokemon from './pokemon';
import './App.css';

function App () {
  return (
    <div className='content'>
      <Pokedex pokemon={ pokemon } name="Glory" />
    </div>
  );
}

export default App;