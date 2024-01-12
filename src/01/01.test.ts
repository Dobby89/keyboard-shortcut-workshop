import * as actual from "./exercise";
import * as expected from "./expected";

test("01", () => {
  expect(actual.tasks).toEqual(expected.tasks);
});
