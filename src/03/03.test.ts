import fsPromises from "fs/promises";
import path from "path";

test("03", async () => {
  const exercise = (
    await fsPromises.readFile(path.resolve(__dirname, "exercise.js"))
  ).toString();

  expect(exercise).toMatchFileSnapshot("./expected.js");
});
