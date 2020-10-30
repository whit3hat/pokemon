import React, { useState } from 'react';
import Home from '../src/pages/Home';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


const App = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState({});

  const search = async (e) => {
  
    if(e.key === 'Enter') {
      
      P.getPokemonByName(query)
      .then(function(pokemon) {
        console.log(pokemon);

      })
      .catch(function(err) {
        console.log(`There was an error ${err}`)
      })

      setQuery('')
    }
  }

  return (
  <div className='main-container'>
    <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
   
  </div>
  );
}

export default App;
