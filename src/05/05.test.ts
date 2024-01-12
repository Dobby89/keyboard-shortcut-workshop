import * as actual from "./exercise";
import * as expected from "./expected";

test("05", () => {
  expect(actual.people).toEqual(expected.people);
});
