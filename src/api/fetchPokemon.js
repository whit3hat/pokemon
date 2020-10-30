import axios from 'axios';


export const fetchPokemon = async (query) => {
    const {data} = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${query}`
    );

    return data;
}

