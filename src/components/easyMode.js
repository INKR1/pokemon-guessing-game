import { useState, useEffect } from "react";
import { questions } from "./questionnaire";

const EasyMode = ({ pokemonList, onAnswer }) => {
  const [question, setQuestion] = useState(null);
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    if (pokemonList.length === 0) return;
    
    const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctOptions = pokemonList.filter(selectedQuestion.filter);
    if (correctOptions.length === 0) return;

    const correctPokemon = correctOptions[Math.floor(Math.random() * correctOptions.length)];
    let otherChoices = pokemonList.filter(p => p.name !== correctPokemon.name);
    otherChoices = otherChoices.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    setQuestion(selectedQuestion);
    setChoices([correctPokemon, ...otherChoices].sort(() => Math.random() - 0.5));
    setCorrectAnswer(correctPokemon);
  }, [pokemonList]);

  const handleChoiceClick = (choice) => {
    onAnswer(choice.name === correctAnswer.name);
  };

  return (
    <div>
      <h2>{question?.text}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {choices.map((pokemon) => (
          <button key={pokemon.name} onClick={() => handleChoiceClick(pokemon)}>
            <img src={pokemon.color} alt={pokemon.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EasyMode;
