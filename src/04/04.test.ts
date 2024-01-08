import { people as actual } from "./exercise";
import { people as expected } from "./expected";

test("04", () => {
  expect(actual).toEqual(expected);
});
