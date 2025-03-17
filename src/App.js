import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokemonAPIdata";
import EasyMode from "./components/easyMode";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchPokemonList().then(setPokemonList);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Wrong answer! Try again.");
    }
  };

  return (
    <div>
      <h1>Pokémon Guessing Game</h1>
      <h2>Score: {score}</h2>
      {pokemonList.length > 0 && (
        <EasyMode pokemonList={pokemonList} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;
