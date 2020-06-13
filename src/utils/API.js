import axios from 'axios';

function fetchPokemon() {
    return axios
    .get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => { console.log(res)
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(function () {

    })
}

export default fetchPokemon;