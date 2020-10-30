import React, { useState } from 'react';
// import Home from '../src/pages/Home';
import {fetchPokemon} from './api/fetchPokemon';


const App = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState({});

  const search = async (e) => {
  
    if(e.key === 'Enter') {
      const data = await fetchPokemon(query)
      console.log(data)
     
      setPokemon(data);

      setQuery('')
    }
  }

  return (
  <div className='main-container'>
    <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
    <div className='pokemon'>
      <h2 className='pokemonName'>
        <span>Name: {pokemon.name}</span> <br />
        <span>Height: {pokemon.height}</span>
        {/* <span>{pokemon.moves[0].move.name}</span> */}
      </h2>
    </div>
  </div>
  );
}

export default App;
