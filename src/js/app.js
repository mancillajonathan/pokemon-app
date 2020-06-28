import API from './Api.js';
import Pokemon from './Pokemon.js';

const api = new API();

let firsPokemon = 18;

async function initIndex(initPokemonId) {
    const pokemonData = await api.getPokemon(initPokemonId);
    console.log(pokemonData);
    new Pokemon(pokemonData);
}

initIndex(firsPokemon);