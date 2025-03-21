import { useState, useEffect, useCallback } from "react";
import { questions } from "./questionnaire";

const MAX_GUESSES = 10;

const EasyMode = ({ pokemonList, onGoHome }) => {
  const [question, setQuestion] = useState(null);
  const [choices, setChoices] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateQuestion = useCallback(() => {
    if (!pokemonList || pokemonList.length === 0) return;

    setIsLoading(true);

      const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];

      if (!selectedQuestion) {
        console.error("Error: No question selected!");
        setIsLoading(false);
        return;
      }

      const correctOptions = pokemonList.filter(selectedQuestion.filter);

      if (!correctOptions || correctOptions.length === 0) {
        console.warn("No valid Pokémon found for this question.");
        setIsLoading(false);
        return;
      }

      let otherChoices = pokemonList.filter((p) => !correctOptions.includes(p));
      otherChoices = otherChoices.sort(() => Math.random() - 0.5).slice(0, 2);

      setQuestion(selectedQuestion);
      setChoices([...correctOptions.slice(0, 1), ...otherChoices].sort(() => Math.random() - 0.5));
      setCorrectAnswers(correctOptions.map((p) => p.name));

      setIsLoading(false);
    }, [pokemonList]);

  useEffect(() => {
    if (pokemonList && pokemonList.length > 0) {
      generateQuestion();
    }
  }, [pokemonList, generateQuestion]);

  useEffect(() => {
    if (guesses > 0 && guesses < MAX_GUESSES) {
      generateQuestion();
    }
  }, [guesses, generateQuestion]);

  const handleChoiceClick = (selectedPokemon) => {
    if (!pokemonList || pokemonList.length === 0 || !question) return; 
  
    if (correctAnswers.includes(selectedPokemon.name)) {
      setScore((prevScore) => prevScore + 1);
    }
  
    setGuesses((prevGuesses) => {
      const newGuesses = prevGuesses + 1;
      if (newGuesses >= MAX_GUESSES) {
        setGameOver(true);
      } else {
        generateQuestion();
      }
      return newGuesses;
    });
  };

  const handleRestart = () => {
    setScore(0);
    setGuesses(0);
    setGameOver(false);
    generateQuestion();
  };

  return (
    <div>
      {!gameOver ? (
        <>
          <h2>{question?.text}</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {choices.map((pokemon) => (
              <button 
                key={pokemon.name} 
                onClick={() => handleChoiceClick(pokemon)} 
                disabled={isLoading} 
              >
                <img src={pokemon.color} alt={pokemon.name} />
              </button>
            ))}
          </div>
          <p>Guesses: {guesses} / {MAX_GUESSES}</p>
        </>
      ) : (
        <>
          <h2>Game Over!</h2>
          <p>Your final score: {score} / {MAX_GUESSES}</p>
          <button onClick={handleRestart}>Play Again</button>
          <button onClick={onGoHome}>Go Back Home</button>
        </>
      )}
    </div>
  );
};

export default EasyMode;