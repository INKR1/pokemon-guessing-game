export const questions = [
  //EVOLUTION
  {
    id: "canEvolve",
    text: "Which Pokémon can evolve?",
    filter: (pokemon) => pokemon.canEvolve || false,
  },
  {
    id: "canNotEvolve",
    text: "Which Pokémon does not evolve?",
    filter: (pokemon) => !pokemon.canEvolve || false,
  },
  {
    id: "finalForm",
    text: "Which Pokémon is a final evolution stage?",
    filter: (pokemon) => pokemon.finalEvolution || false,
  },
  {
    id: "megaEvolution",
    text: "Which Pokémon has a Mega Evolution?",
    filter: (pokemon) => pokemon.hasMegaEvolution || false,
  },
  //TYPES
  {
    id: "isFireType",
    text: "Which Pokémon is Fire-type?",
    filter: (pokemon) => pokemon?.type?.includes("fire") || false,
  },
  {
    id: "isGrassType",
    text: "Which Pokémon is a Grass-type?",
    filter: (pokemon) => pokemon?.type?.includes("grass") || false,
  },
  {
    id: "isWaterType",
    text: "Which Pokémon is a Water-type?",
    filter: (pokemon) => pokemon?.type?.includes("water") || false,
  },
  {
    id: "canFly",
    text: "Which Pokémon can fly?",
    filter: (pokemon) => pokemon?.type?.includes("flying") || false,
  },
  {
    id: "isIceType",
    text: "Which Pokémon is a Ice-type?",
    filter: (pokemon) => pokemon?.type?.includes("ice") || false,
  },
  {
    id: "isSteelType",
    text: "Which Pokémon is a Steel-type?",
    filter: (pokemon) => pokemon?.type?.includes("steel") || false,
  },
  {
    id: "isPoisonType",
    text: "Which Pokémon is a Poison-type?",
    filter: (pokemon) => pokemon?.type?.includes("poison") || false,
  },
  {
    id: "isBugType",
    text: "Which Pokémon is a Bug?",
    filter: (pokemon) => pokemon?.type?.includes("bug") || false,
  },
  {
    id: "isNormalType",
    text: "Which Pokémon is a Normal-type?",
    filter: (pokemon) => pokemon?.type?.includes("normal") || false,
  },
  {
    id: "isElectricType",
    text: "Which Pokémon is a Electric-type?",
    filter: (pokemon) => pokemon?.type?.includes("electric") || false,
  },
  {
    id: "isGroundType",
    text: "Which Pokémon is a Ground-type?",
    filter: (pokemon) => pokemon?.type?.includes("ground") || false,
  },
  {
    id: "isFightingType",
    text: "Which Pokémon is a Fighting-type?",
    filter: (pokemon) => pokemon?.type?.includes("fighting") || false,
  },
  {
    id: "isPsychicType",
    text: "Which Pokémon is a Psychic-type?",
    filter: (pokemon) => pokemon?.type?.includes("psychic") || false,
  },
  {
    id: "isRockType",
    text: "Which Pokémon is a Rock-type?",
    filter: (pokemon) => pokemon?.type?.includes("rock") || false,
  },
  {
    id: "isGhostType",
    text: "Which Pokémon is a Ghost-type?",
    filter: (pokemon) => pokemon?.type?.includes("ghost") || false,
  },
  {
    id: "isDragonType",
    text: "Which Pokémon is a Dragon-type?",
    filter: (pokemon) => pokemon?.type?.includes("dragon") || false,
  },
  {
    id: "multiType",
    text: "Which Pokémon has more than one type?",
    filter: (pokemon) => Array.isArray(pokemon?.type) && pokemon.type.length > 1,
  },
  //ATRIBUTES
  {
    id: "isLegendary",
    text: "Which Pokémon is a Legendary Pokémon?",
    filter: (pokemon) => pokemon?.isLegendary || false,
  },
  {
    id: "isMythical",
    text: "Which Pokémon is a Legendary Mythical?",
    filter: (pokemon) => pokemon.isMythical || false,
  },
  //RESISTANT
  {
    id: "immuneElectric",
    text: "Which Pokémon is immune to Electric attacks?",
    filter: (pokemon) => pokemon?.type?.includes("ground") || false,
  },
  {
    id: "immuneNormal",
    text: "Which Pokémon is immune to Normal attacks?",
    filter: (pokemon) => pokemon?.type?.includes("ghost") || false,
  },
  {
    id: "immuneFighting",
    text: "Which Pokémon is immune to Fighting attacks?",
    filter: (pokemon) => pokemon?.type?.includes("ghost") || false,
  },
  {
    id: "immunePoison",
    text: "Which Pokémon is immune to Poison attacks?",
    filter: (pokemon) => pokemon?.type?.includes("steel") || false,
  },
  {
    id: "immuneGround",
    text: "Which Pokémon is immune to Ground attacks?",
    filter: (pokemon) => pokemon?.type?.includes("flying") || false,
  },
  {
    id: "immuneFairy",
    text: "Which Pokémon is immune to Dragon type attacks?",
    filter: (pokemon) => pokemon?.type?.includes("fairy") || false,
  },
  //WEAKNESS
  {
    id: "weaknessWater",
    text: "Which Pokémon is weak to Water-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("water") || false,
  },
  {
    id: "weaknessFire",
    text: "Which Pokémon is weak to Fire-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("fire") || false,
  },
  {
    id: "weaknessElectric",
    text: "Which Pokémon is weak to Electric-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("electric") || false,
  },
  {
    id: "weaknessGrass",
    text: "Which Pokémon is weak to Grass-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("grass") || false,
  },
  {
    id: "weaknessIce",
    text: "Which Pokémon is weak to Ice-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("ice") || false,
  },
  {
    id: "weaknessFighting",
    text: "Which Pokémon is weak to Fighting-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("fighting") || false,
  },
  {
    id: "weaknessPoison",
    text: "Which Pokémon is weak to Poison-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("poison") || false,
  },
  {
    id: "weaknessGround",
    text: "Which Pokémon is weak to Ground-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("ground") || false,
  },
  {
    id: "weaknessFlying",
    text: "Which Pokémon is weak to Flying-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("flying"),
  },
  {
    id: "weaknessPsychic",
    text: "Which Pokémon is weak to Psychic-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("psychic"),
  },
  {
    id: "weaknessBug",
    text: "Which Pokémon is weak to Bug-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("bug"),
  },
  {
    id: "weaknessRock",
    text: "Which Pokémon is weak to Rock-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("rock"),
  },
  {
    id: "weaknessGhost",
    text: "Which Pokémon is weak to Ghost-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("ghost"),
  },
  {
    id: "weaknessDragon",
    text: "Which Pokémon is weak to Dragon-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("dragon"),
  },
  {
    id: "weaknessSteel",
    text: "Which Pokémon is weak to steel-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("steel"),
  },
  {
    id: "weaknessFairy",
    text: "Which Pokémon is weak to Fairy-type moves?",
    filter: (pokemon) => pokemon?.weaknesses?.includes("fairy"),
  },
  //SPECIAL ABILITIES & UNIQUENESS
  {
    id: "canSurf",
    text: "Which Pokémon can learn Surf?",
    filter: (pokemon) => pokemon?.moves?.includes("surf") || false,
  },
  {
    id: "canLevitate",
    text: "Which Pokémon has the ability Levitate?",
    filter: (pokemon) => pokemon?.abilities?.includes("Levitate") || false,
  },
  {
    id: "smallestPokemon",
    text: "Which Pokémon is the smallest Pokémon?",
    filter: (pokemon) => pokemon.name === "Diglett",
  },
  {
    id: "heaviestPokemon",
    text: "Which Pokémon is the heaviest?",
    filter: (pokemon) => pokemon.name === "Snorlax",
  },
  {
    id: "mostEvolutions",
    text: "Which Pokémon has the most evolutions?",
    filter: (pokemon) => pokemon.name === "Eevee",
  },
  {
    id: "changeForm",
    text: "Which Pokémon can transform into other Pokémon?",
    filter: (pokemon) => pokemon.name === "Ditto",
  },
];
