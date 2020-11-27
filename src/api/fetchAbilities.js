import axios from 'axios';

 /* Abilities Array to pull all the arrays from the request of the fetchPokemon
 and push into an array for displaying all the abilities of each pokemon */
export const fetchAbilities = async (query) => {
    const {data} = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${query}`
    );

    console.log(data)
    return data;
}
    // console.log(`abilities data: ${data}`)
    
    


    // Array to pass the abilities from fetchPokemon into it
    // const abilityArray = [];

    // const abilities 
    
    // For Loop passing in the abilities of the searched Pokemon
    // for(let i = 0; i < abilityArray.length; i++ ) {
    //     abilityArray.push(abilities)
    // };

    // console.log(abilityArray);




 