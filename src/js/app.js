import API from './api.js';
import Pokemon from './pokemon.js';
import Options from './options.js';

const api = new API();
//return a random pokemon between 1 and 807
const randomPokemon = Math.floor(Math.random() * (807 - 1)) + 1; 

async function initIndex(initPokemonId) {
    const pokemonData = await api.getPokemon(initPokemonId);
    console.log(pokemonData);
    new Pokemon(pokemonData);
    new Options(pokemonData);
}

initIndex(randomPokemon);