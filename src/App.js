import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokemonAPIdata";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList().then(setPokemonList);
  }, []);

  return (
    <div>
      <h1>Pokémon Guessing Game</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
