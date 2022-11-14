
import { connectToDatabase, getBooks, updateBook, getBookById } from './model/book.model.js';
import path from 'path';
import { fileURLToPath } from 'url';

// get root directory for paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = async () => {

  // Connect to Database
  await connectToDatabase();

  const aBook = await getBooks()[0];
  console.table(aBook)

  const PROMO = { price: 10 }
  await updateBook({ ...PROMO, id: aBook.id })


};

app();
