import * as actual from "./exercise";
import * as expected from "./expected";

test("02", () => {
  expect(actual.animals).toEqual(expected.animals);
});