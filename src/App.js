import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokemonAPIdata";
import EasyMode from "./components/easyMode";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [gameMode, setGameMode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchPokemonList()
      .then((data) => {
        setPokemonList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        setIsLoading(false);
      });
  }, []);
  
  if (isLoading) return <p>Loading Pokémon...</p>;

  return (
    <div>
      {!gameMode ? (
        <>
          <h1>Pokémon Guessing Game</h1>
          <button onClick={() => setGameMode("easy")}>Easy Mode</button>
        </>
      ) : (
        <EasyMode pokemonList={pokemonList} onGoHome={() => setGameMode(null)} />
      )}
    </div>
  );
};

export default App;