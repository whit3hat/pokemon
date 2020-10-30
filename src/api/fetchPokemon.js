import axios from 'axios';

// function to query the pokemon api site and pass the query from the app.js file to the search
// then passes the data to the app.js file
export const fetchPokemon = async (query) => {
    const {data} = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${query}`
    );

    return data;
}

