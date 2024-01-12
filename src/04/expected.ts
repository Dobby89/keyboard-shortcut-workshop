export interface Person {
  firstName: string;
  lastName: string;
}

export class Person implements Person {
  constructor(first: Person["firstName"], last: Person["lastName"]) {
    return {
      firstName: first,
      lastName: last,
    };
  }
}

// Joe Bloggs
export const Joe = new Person("Joe", "Bloggs");

// Hiroshi Tanaka
export const Hiroshi = new Person("Hiroshi", "Tanaka");

// Isabella Rossi
export const Isabella = new Person("Isabella", "Rossi");

// Ahmed Al-Farsi
export const Ahmed = new Person("Ahmed", "Al-Farsi");

// Sofia Rodriguez
export const Sofia = new Person("Sofia", "Rodriguez");

// Dmitry Ivanov
export const Dmitry = new Person("Dmitry", "Ivanov");
