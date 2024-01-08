import fsPromises from "fs/promises";
import path from "path";

test("01", async () => {
  const exercise = (
    await fsPromises.readFile(path.resolve(__dirname, "exercise.txt"))
  ).toString();

  expect(exercise).toMatchFileSnapshot("./expected.txt");
});
