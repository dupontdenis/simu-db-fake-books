import { readFile } from "fs/promises";
import { v4 as uuidv4 } from 'uuid';

let BOOKS=[];

// Read data in when app starts
// Database is kept in memory only
export const connectToDatabase = async () =>{
  const fakeData = JSON.parse(
  await readFile(new URL("../data/fake-books.json", import.meta.url)));

  for await(const item of fakeData){
    await addBook(item)
  }

}

export const getBooks = () => BOOKS.sort((a, b) => b.id - a.id);

export const getBookById = (id) =>
  BOOKS.find((book) => book.id === id);

export const deleteBookById = (id) => {
  const index = BOOKS.findIndex((book) => book.id === id);
  if (index !== -1) {
    BOOKS.splice(index, 1);
  }
  console.log(getBooks());
};

export const addBook = (book) => {
  BOOKS.push({
    id: uuidv4(),
    ...book,
  });
  //console.table(getBooks());
}

export const updateBook = (book) => {
  const index = BOOKS.findIndex((r) => r.id === book.id);
  if (index !== -1) {
    BOOKS[index] = {
      ...BOOKS[index],
      ...book,
    };
  }
  console.table(getBooks());
};