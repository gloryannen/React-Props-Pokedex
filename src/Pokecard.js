import React from 'react';
import './Pokecard.css';

let PokeCard = ({ name, type, exp, id }) => {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className='Pokecard'>
      <h4 className='Pokecard-name'>{ name }</h4>
      <img className='Pokecard-img' src={ imgSrc } alt="" />
      <ul>
        <li>Type: { type }</li>
        <li>Exp: { exp }</li>
      </ul>
    </div>
  )
};

export default PokeCard;