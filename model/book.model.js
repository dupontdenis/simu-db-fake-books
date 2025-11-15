import { v4 as uuidv4 } from "uuid";

let BOOKS = [];
console.log("Book model initialized with in-memory storage.");
console.log("Initial BOOKS state:", BOOKS);

// Get all books, sorted by id descending
// find([fields]) returns all books, optionally with only specified fields
export const find = (fields = null) => {
  const sorted = [...BOOKS].sort((a, b) => b.id.localeCompare(a.id));
  if (!fields) return sorted;
  if (!Array.isArray(fields)) fields = [fields];
  return sorted.map((book) => {
    const filtered = {};
    for (const key of fields) {
      if (key in book) filtered[key] = book[key];
    }
    return filtered;
  });
};

// Find the first book matching a query object
// Example:
//   findOne({ author: "Harper Lee" })
//   => returns the first book with author 'Harper Lee'
export const findOne = (query = null) => {
  if (!query || Object.keys(query).length === 0) {
    return BOOKS[0] || null;
  }
  return (
    BOOKS.find((book) => {
      return Object.entries(query).every(([key, value]) => book[key] === value);
    }) || null
  );
};

// Get a book by its id
export const findById = (id) => {
  return BOOKS.find((book) => book.id === id);
};

// Remove a book by id
export const remove = (id) => {
  const idx = BOOKS.findIndex((book) => book.id === id);
  if (idx !== -1) {
    const removed = BOOKS[idx];
    BOOKS.splice(idx, 1);
    return removed;
  }
  return null;
};

// Add a new book
export const create = (book) => {
  const newBook = {
    id: uuidv4(),
    ...book,
  };
  BOOKS.push(newBook);
  return newBook;
};

// Update a book by id
export const update = (book) => {
  const idx = BOOKS.findIndex((b) => b.id === book.id);
  if (idx !== -1) {
    BOOKS[idx] = {
      ...BOOKS[idx],
      ...book,
    };
    return BOOKS[idx];
  }
  return null;
};
