import { connectToDatabase } from "./model/db.connect.js";
import {
  find,
  update,
  findById,
  findOne,
  remove,
  create,
} from "./model/book.model.js";
import path from "path";
import { fileURLToPath } from "url";

// get root directory for paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = async () => {
  // Connect to Database
  await connectToDatabase();

  // Find all authors
  const authors = find(["author", "title"]);
  console.table(authors);

  const aBook = findOne({});
  console.table(aBook);

  const PROMO = { price: 10 };
  update({ ...PROMO, id: aBook.id });
};

app();
