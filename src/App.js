import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokemonAPIdata";
import EasyMode from "./components/easyMode";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [gameMode, setGameMode] = useState(null);

  useEffect(() => {
    fetchPokemonList().then(setPokemonList);
  }, []);

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
