import { useState } from "react";

export const questions = [
  {
    id: "canEvolve",
    text: "Which Pokémon can evolve?",
    filter: (pokemon) => pokemon.canEvolve,
  },
  {
    id: "isFireType",
    text: "Which Pokémon is Fire-type?",
    filter: (pokemon) => pokemon.type.includes("fire"),
  },
  {
    id: "isGrassType",
    text: "Which Pokémon is a Grass-type?",
    filter: (pokemon) => pokemon.type.includes("grass"),
  },
  {
    id: "isWaterType",
    text: "Which Pokémon is a Water-type?",
    filter: (pokemon) => pokemon.type.includes("water"),
  },
  {
    id: "canFly",
    text: "Which Pokémon can fly?",
    filter: (pokemon) => pokemon.type.includes("flying"),
  },
  {
    id: "isIceType",
    text: "Which Pokémon is a Ice-type?",
    filter: (pokemon) => pokemon.type.includes("ice"),
  },
  {
    id: "isSteelType",
    text: "Which Pokémon is a Steel-type?",
    filter: (pokemon) => pokemon.type.includes("steel"),
  },
  {
    id: "isPoisonType",
    text: "Which Pokémon is a Poison-type?",
    filter: (pokemon) => pokemon.type.includes("poison"),
  },
  {
    id: "isBugType",
    text: "Which Pokémon is a Bug?",
    filter: (pokemon) => pokemon.type.includes("bug"),
  },
  {
    id: "isNormalType",
    text: "Which Pokémon is a Normal-type?",
    filter: (pokemon) => pokemon.type.includes("normal"),
  },
  {
    id: "isElectricType",
    text: "Which Pokémon is a Electric-type?",
    filter: (pokemon) => pokemon.type.includes("electric"),
  },
  {
    id: "isGroundType",
    text: "Which Pokémon is a Ground-type?",
    filter: (pokemon) => pokemon.type.includes("ground"),
  },
  {
    id: "isFightingType",
    text: "Which Pokémon is a Fightinf-type?",
    filter: (pokemon) => pokemon.type.includes("fighting"),
  },
  {
    id: "isPsychicType",
    text: "Which Pokémon is a Psychic-type?",
    filter: (pokemon) => pokemon.type.includes("psychic"),
  },
  {
    id: "isRockType",
    text: "Which Pokémon is a Rock-type?",
    filter: (pokemon) => pokemon.type.includes("rock"),
  },
  {
    id: "isGhostType",
    text: "Which Pokémon is a Ghost-type?",
    filter: (pokemon) => pokemon.type.includes("ghost"),
  },
  {
    id: "isDragonType",
    text: "Which Pokémon is a Dragon-type?",
    filter: (pokemon) => pokemon.type.includes("dragon"),
  },
  {
    id: "multiType",
    text: "Which Pokémon has more than one type?",
    filter: (pokemon) => pokemon.type.length > 1,
  },
];
