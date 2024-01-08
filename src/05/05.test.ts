import { people as actual } from "./exercise";
import { people as expected } from "./expected";

test("05", () => {
  expect(actual).toEqual(expected);
});
