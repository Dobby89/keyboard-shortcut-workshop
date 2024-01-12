import * as actual from "../04/exercise";
import * as expected from "../04/expected";

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
  expect(new actual.Person("Joe", "Bloggs")).toEqual(
    new expected.Person("Joe", "Bloggs")
  );
});
