import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/pokemonAPIdata";
import EasyMode from "./easyMode";

function Game({ difficulty }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonList().then(setPokemonList);
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      pickRandomPokemon();
    }
  }, [pokemonList]);

  const pickRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setCurrentPokemon(pokemonList[randomIndex]);
  };

  if (!currentPokemon) return <p>Loading...</p>;

  return (
    <div>
      {difficulty === "easy" && <EasyMode pokemonList={pokemonList} currentPokemon={currentPokemon} />}
    </div>
  );
}

export default Game;
