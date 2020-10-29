// import axios from 'axios';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


export const fetchPokemon = async (query) => {

    P.getPokemonByName(query)
    .then(function(res) {
        console.log(res);
    })
    .catch(function(err) {
        console.log(`There was an ERR ${err}`)
    })

}



// const URL = `https://pokeapi.co/api/v2/pokemon${p}/`;

// export const fetchPokemon = async (query) => {
//     const { data } = await axios.get(URL, {
//         params: {
//             p: query
//         }
//     });
    
//     return data;
// }

