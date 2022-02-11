import React from 'react';
import PokeCard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemon, name }) => {
  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-header'>{ name }'s Pokedex</h1>
      <div className='Pokedex-card'>
        { pokemon.map(p => (
          <PokeCard id={ p.id } name={ p.name } img={ p.img } type={ p.type } exp={ p.base_experience } />
        )) }
      </div>
    </div>
  )
}

export default Pokedex;