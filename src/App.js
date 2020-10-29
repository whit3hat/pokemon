import React, { useState } from 'react';
import Home from '../src/pages/Home';
import { fetchPokemon } from './utils/API';


const App = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState({});

  const search = async (e) => {
  
    if(e.key === 'Enter') {
      const data = await fetchPokemon(query)
      // console.log(data)

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
