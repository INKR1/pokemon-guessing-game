import { useState, useEffect } from "react";
import { questions } from "./questionnaire";

const MAX_GUESSES = 10;

const EasyMode = ({ pokemonList, onGoHome  }) => {
  const [question, setQuestion] = useState(null);
  const [choices, setChoices] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateQuestion = () => {
    if (pokemonList.length === 0) return;

    const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctOptions = pokemonList.filter(selectedQuestion.filter);
    if (correctOptions.length === 0) return;

    let otherChoices = pokemonList.filter(p => !correctOptions.includes(p));
    otherChoices = otherChoices.sort(() => 0.5 - Math.random()).slice(0, 2);

    setQuestion(selectedQuestion);
    setChoices([...correctOptions.slice(0, 1), ...otherChoices].sort(() => Math.random() - 0.5));
    setCorrectAnswers(correctOptions.map(p => p.name)); // Store all correct answer names
  };

  useEffect(() => {
    generateQuestion();
  }, [pokemonList]);

  const handleChoiceClick = (choice) => {
    if (gameOver) return;

    if (correctAnswers.includes(choice.name)) {
      setScore(score + 1);
    }

    setGuesses(guesses + 1);

    if (guesses + 1 >= MAX_GUESSES) {
      setGameOver(true);
    } else {
      generateQuestion();
    }
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
              <button key={pokemon.name} onClick={() => handleChoiceClick(pokemon)}>
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
