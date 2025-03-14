import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokemonAPIdata";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const capitalizeName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    fetchPokemonList().then(setPokemonList);
  }, []);

  return (
    <div>
      <h1>Pokémon Guessing Game</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <img src={pokemon.color} alt={pokemon.name} />
            {capitalizeName(pokemon.name)} - Type: {pokemon.type.join(", ")} <br />
            {pokemon.canEvolve ? "Can evolve 🔺" : "Final form 🔹"}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
