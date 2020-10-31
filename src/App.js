import React, { useState } from 'react';
// import Home from '../src/pages/Home';
import {fetchPokemon} from './api/fetchPokemon';


const App = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState({});

  const search = async (e) => {
  
    if(e.key === 'Enter') {
      //Pass the query of the pokemon name to the api call to search
      const data = await fetchPokemon(query)
      //Console logging the results of the search
      console.log(data)
     //Passing the data of the response to the pokemon state to display information on the site
      setPokemon(data);
      // Clears the search box after the search is made
      setQuery('')
    }
  }

  return (
  <div className='main-container'>
    <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
    {pokemon.name && (
      <div className='pokemon'>
        <h2 className='pokemonName'> </h2>
          <span>Name: {pokemon.name}</span> <br />
          <span>Height: {pokemon.height}</span> <br />

          {/* Going to need to put the abilities array in an if statement since
          Not all pokemon have the same number of abilities */}
          <h3>Abilities:</h3>
          <span>{pokemon.abilities[0].ability.name}</span> <br />
          <span>{pokemon.abilities[1].ability.name}</span> <br />
          <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
     
    </div>
  
    )}
    </div>
  );
}

export default App;
