import * as actual from "./exercise";
import * as expected from "./expected";

test("03", () => {
  expect(actual).toHaveProperty("elephantFood", expected.elephantFood);
  expect(actual).toHaveProperty("koalaFood", expected.koalaFood);
  expect(actual).toHaveProperty("orcaFood", expected.orcaFood);
  expect(actual).toHaveProperty("foxFood", expected.foxFood);
  expect(actual).toHaveProperty("turtleFood", expected.turtleFood);
  expect(actual).toHaveProperty("penguinFood", expected.penguinFood);
  expect(actual).toHaveProperty("dolphinFood", expected.dolphinFood);
  expect(actual).toHaveProperty("cheetahFood", expected.cheetahFood);
  expect(actual).toHaveProperty("pandaFood", expected.pandaFood);
  expect(actual).toHaveProperty("anteaterFood", expected.anteaterFood);
});
