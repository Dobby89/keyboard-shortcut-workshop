import { emailsOnly as actual } from "./exercise";
import { emailsOnly as expected } from "./expected";

test("07", () => {
  expect(actual).toEqual(expected);
});
