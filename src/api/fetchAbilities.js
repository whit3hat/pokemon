import React, { useState } from 'react';
import axios from 'axios';

 /* Abilities Array to pull all the arrays from the request of the fetchPokemon
 and push into an array for displaying all the abilities of each pokemon */
 export const Abilities = () => {
    const [ability, setAbility] = useState([]);
    
    const fetchAbilities = async (query) => {
      
    const {data} = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${query}`
    );

    console.log(data.abilities)
    
    //**  Fetch Abilities array **//
//   const fetchAbilities = [pokemon.abilities]

//   console.log(fetchAbilities);
  
// for(var i = 0; i < fetchAbilities.length; i++){
  
// }

    }

    return (
        <span></span>
    );

} 
 




 