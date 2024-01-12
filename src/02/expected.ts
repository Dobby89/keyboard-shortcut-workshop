type ItemToSitOn =
  | "mat"
  | "rug"
  | "blanket"
  | "step"
  | "sofa"
  | "pillow"
  | "throne"
  | "bench"
  | "hammock"
  | "ottoman"
  | "stool"
  | "perch"
  | "cushion"
  | "table"
  | "bed"
  | "chair"
  | "carpet"
  | "bookshelf"
  | "branch"
  | "sideboard";

export type CrazyCats =
  `The CAT sat on the ${Uppercase<ItemToSitOn>}, then fell asleep`;

export const animals: CrazyCats[] = [
  "The CAT sat on the MAT, then fell asleep",
  "The CAT sat on the RUG, then fell asleep",
  "The CAT sat on the BLANKET, then fell asleep",
  "The CAT sat on the STEP, then fell asleep",
  "The CAT sat on the SOFA, then fell asleep",
  "The CAT sat on the PILLOW, then fell asleep",
  "The CAT sat on the THRONE, then fell asleep",
  "The CAT sat on the BENCH, then fell asleep",
  "The CAT sat on the HAMMOCK, then fell asleep",
  "The CAT sat on the OTTOMAN, then fell asleep",
  "The CAT sat on the STOOL, then fell asleep",
  "The CAT sat on the PERCH, then fell asleep",
  "The CAT sat on the CUSHION, then fell asleep",
  "The CAT sat on the TABLE, then fell asleep",
  "The CAT sat on the BED, then fell asleep",
  "The CAT sat on the CHAIR, then fell asleep",
  "The CAT sat on the CARPET, then fell asleep",
  "The CAT sat on the BOOKSHELF, then fell asleep",
  "The CAT sat on the BRANCH, then fell asleep",
  "The CAT sat on the SIDEBOARD, then fell asleep",
];
