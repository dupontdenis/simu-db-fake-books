import { readFile } from "fs/promises";
import { create } from "./book.model.js";

export const connectToDatabase = async () => {
  const fakeData = JSON.parse(
    await readFile(new URL("../data/fake-books.json", import.meta.url))
  );
  for (const item of fakeData) {
    create(item);
  }
  console.log("Database connected with fake data.");
};
