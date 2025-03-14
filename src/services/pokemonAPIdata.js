import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // First Gen Pokémon

export const fetchPokemonList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};
