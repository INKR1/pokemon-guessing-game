import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // First Gen Pokémon

const getPokemonDetails = async (url) => {
    try {
      const response = await axios.get(url);
      return {
        name: response.data.name,
        type: response.data.types.map((p) => p.type.name),
        color: response.data.sprites.front_default,
        weight: response.data.weight,
        height: response.data.height,
      };
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
      return null;
    }
  };
  
  export const fetchPokemonList = async () => {
    try {
      const response = await axios.get(API_URL);
      const pokemonDetails = await Promise.all(
        response.data.results.map((pokemon) => getPokemonDetails(pokemon.url))
      );
      return pokemonDetails.filter((p) => p !== null);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return [];
    }
  };
