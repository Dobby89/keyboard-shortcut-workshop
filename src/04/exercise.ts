export interface Person {
  forename: string;
  surname: string;
}

export class Person implements Person {
  constructor(first: Person["forename"], last: Person["surname"]) {
    return {
      forename: first,
      surname: last,
    };
  }
}

// Joe Bloggs
export const Joe = new Person("Joe", "Bloggs");

// Hiroshi Tanaka
// Isabella Rossi
// Ahmed Al-Farsi
// Sofia Rodriguez
// Dmitry Ivanov
