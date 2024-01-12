type Animals = keyof typeof animalFoodMap;

export type AnimalFood = {
  [Animal in Animals]: Animal extends Animals
    ? `${Capitalize<Animal>}s like to eat ${(typeof animalFoodMap)[Animal]}`
    : never;
}[Animals];

export const animalFoodMap = {
  elephant: "Acacia leaves and grasses",
  koala: "Eucalyptus leaves",
  orca: "Salmon",
  fox: "Small mammals and berries",
  turtle: "Sea grass and jellyfish",
  penguin: "Fish and squid",
  dolphin: "Fish",
  cheetah: "Gazelle and impala",
  panda: "Bamboo shoots and leaves",
  anteater: "Ants and termites",
} as const;

export function getAnimalFood<T extends Animals>(
  animal: T
): (typeof animalFoodMap)[T] {
  return animalFoodMap[animal];
}

export const elephantFood: AnimalFood = `Elephants like to eat ${getAnimalFood(
  "elephant"
)}`;
export const koalaFood: AnimalFood = `Koalas like to eat ${getAnimalFood(
  "koala"
)}`;
export const orcaFood: AnimalFood = `Orcas like to eat ${getAnimalFood(
  "orca"
)}`;
export const foxFood: AnimalFood = `Foxs like to eat ${getAnimalFood("fox")}`;
export const turtleFood: AnimalFood = `Turtles like to eat ${getAnimalFood(
  "turtle"
)}`;
export const penguinFood: AnimalFood = `Penguins like to eat ${getAnimalFood(
  "penguin"
)}`;
export const dolphinFood: AnimalFood = `Dolphins like to eat ${getAnimalFood(
  "dolphin"
)}`;
export const cheetahFood: AnimalFood = `Cheetahs like to eat ${getAnimalFood(
  "cheetah"
)}`;
export const pandaFood: AnimalFood = `Pandas like to eat ${getAnimalFood(
  "panda"
)}`;
export const anteaterFood: AnimalFood = `Anteaters like to eat ${getAnimalFood(
  "anteater"
)}`;
