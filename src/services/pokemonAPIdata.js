import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // First Gen Pokémon

const getEvolutionInfo = async (speciesUrl, pokemonName) => {
  try {
    const { data: speciesData } = await axios.get(speciesUrl);
    const { data: evolutionData } = await axios.get(speciesData.evolution_chain.url);

    const findEvolutionStage = (chain) => {
      if (chain.species.name === pokemonName) {
        return chain.evolves_to.length > 0;
      }
      for (let evolution of chain.evolves_to) {
        const result = findEvolutionStage(evolution);
        if (result) return true;
      }
      return false;
    };

    const canEvolve = findEvolutionStage(evolutionData.chain);

    return { canEvolve };
  } catch (error) {
    console.error("Error fetching evolution data:", error);
    return { canEvolve: false };
  }
};

const getPokemonDetails = async (url) => {
  try {
    const { data: pokemonData } = await axios.get(url);
    const evolutionData = await getEvolutionInfo(pokemonData.species.url, pokemonData.name);
    return {
      name: pokemonData.name,
      type: pokemonData.types.map((p) => p.type.name),
      color: pokemonData.sprites.front_default,
      weight: pokemonData.weight,
      height: pokemonData.height,
      canEvolve: evolutionData.canEvolve,
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
