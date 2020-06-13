import axios from 'axios';

function fetchPokemon() {
    return axios
    .get('https://pokeapi.co/api/v2/')
}

export default fetchPokemon;