import { people as actual } from "./exercise";
import { people as expected } from "./expected";

test("06", () => {
  expect(actual).toEqual(expected);
});
