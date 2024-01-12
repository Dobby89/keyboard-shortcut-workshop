import * as actual from "../01/exercise";
import * as expected from "../01/expected";

test("01", () => {
  expect(actual.tasks).toEqual(expected.tasks);
});
