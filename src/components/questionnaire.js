import { useState } from "react";

const questions = [
  {
    id: "canEvolve",
    text: "Can this Pokémon evolve?",
    filter: (pokemon) => pokemon.canEvolve,
  },
  // TYPES
  {
    id: "isFireType",
    text: "Is this Pokémon a Fire-type?",
    filter: (pokemon) => pokemon.type.includes("fire"),
  },
  {
    id: "isGrassType",
    text: "Is this Pokémon a Grass-type?",
    filter: (pokemon) => pokemon.type.includes("grass"),
  },
  {
    id: "isWaterType",
    text: "Is this Pokémon a Water-type?",
    filter: (pokemon) => pokemon.type.includes("water"),
  },
  {
    id: "isIceType",
    text: "Is this Pokémon a Ice-type?",
    filter: (pokemon) => pokemon.type.includes("ice"),
  },
  {
    id: "isSteelType",
    text: "Is this Pokémon a Steel-type?",
    filter: (pokemon) => pokemon.type.includes("steel"),
  },
  {
    id: "isPoisonType",
    text: "Is this Pokémon a Poison-type?",
    filter: (pokemon) => pokemon.type.includes("poison"),
  },
  {
    id: "isBugType",
    text: "Is this Pokémon a Bug?",
    filter: (pokemon) => pokemon.type.includes("bug"),
  },
  {
    id: "isNormalType",
    text: "Is this Pokémon a Normal-type?",
    filter: (pokemon) => pokemon.type.includes("normal"),
  },
  {
    id: "isElectricType",
    text: "Is this Pokémon a Electric-type?",
    filter: (pokemon) => pokemon.type.includes("electric"),
  },
  {
    id: "isGroundType",
    text: "Is this Pokémon a Ground-type?",
    filter: (pokemon) => pokemon.type.includes("ground"),
  },
  {
    id: "isFightingType",
    text: "Is this Pokémon a Fightinf-type?",
    filter: (pokemon) => pokemon.type.includes("fighting"),
  },
  {
    id: "isPsychicType",
    text: "Is this Pokémon a Psychic-type?",
    filter: (pokemon) => pokemon.type.includes("psychic"),
  },
  {
    id: "isRockType",
    text: "Is this Pokémon a Rock-type?",
    filter: (pokemon) => pokemon.type.includes("rock"),
  },
  {
    id: "isGhostType",
    text: "Is this Pokémon a Ghost-type?",
    filter: (pokemon) => pokemon.type.includes("ghost"),
  },
  {
    id: "isDragonType",
    text: "Is this Pokémon a Dragon-type?",
    filter: (pokemon) => pokemon.type.includes("dragon"),
  },
  {
    id: "canFly",
    text: "Is this Pokémon can fly?",
    filter: (pokemon) => pokemon.type.includes("flying"),
  },
];

const Questionnaire = ({ pokemonList, setFilteredPokemon }) => {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleFilterChange = (questionId) => {
    setSelectedQuestion(questionId);
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      setFilteredPokemon(pokemonList.filter(question.filter));
    } else {
      setFilteredPokemon(pokemonList);
    }
  };

  return (
    <div>
      <h2>Filter Pokémon</h2>
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">Show All</option>
        {questions.map((q) => (
          <option key={q.id} value={q.id}>
            {q.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Questionnaire;
