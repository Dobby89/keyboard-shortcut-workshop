import * as actual from "./exercise";
import * as expected from "./expected";

import { Person as PersonActual } from "./exercise";
import { Person as PersonExpected } from "./expected";

test("04", () => {
  expect(actual).toHaveProperty("Joe");
  expect(actual).toHaveProperty("Hiroshi");
  expect(actual).toHaveProperty("Isabella");
  expect(actual).toHaveProperty("Ahmed");
  expect(actual).toHaveProperty("Sofia");
  expect(actual).toHaveProperty("Dmitry");

  expect(actual.Joe).toEqual(expected.Joe);
  expect(actual.Hiroshi).toEqual(expected.Hiroshi);
  expect(actual.Isabella).toEqual(expected.Isabella);
  expect(actual.Ahmed).toEqual(expected.Ahmed);
  expect(actual.Sofia).toEqual(expected.Sofia);
  expect(actual.Dmitry).toEqual(expected.Dmitry);

  // Confirm Class works
  expect(new PersonActual("Joe", "Bloggs")).toEqual(
    new PersonExpected("Joe", "Bloggs")
  );
});
