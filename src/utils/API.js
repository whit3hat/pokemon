import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (query) => {
    const { data } = await axios.get(URL, {
        params: {

        }
    });

    return data;
}

