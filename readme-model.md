# Book Model API

This file documents the API for `book.model.js` in the `simu-db-fake-books` project.

## Overview

The model provides an in-memory database for books, simulating Mongoose-like methods for CRUD operations and queries.

## Functions

### find(fields = null)

Returns all books, optionally with only specified fields.

- **Usage:**

  - `find()` returns all books with all fields.
  - `find(['title', 'author'])` returns all books, but only with the `title` and `author` fields.
  - `find('author')` returns all books with only the `author` field.

- **Example:**

```js
find(["title", "author"]);
// Output: [{ title: '1984', author: 'George Orwell' }, ...]
```

### findOne(query = null)

Returns the first book matching the query object. If no query is provided, returns the first book in the collection.

- **Usage:**
  - `findOne({ author: 'Harper Lee' })` returns the first book with author 'Harper Lee'.
  - `findOne()` returns the first book in the collection.

### findById(id)

Returns the book with the given id.

### create(book)

Adds a new book and returns it.

### update(book)

Updates a book by id and returns the updated book.

### remove(id)

Removes a book by id and returns the removed book.

## Notes

- The model uses the `title` field for book names, following standard conventions.
- All operations are synchronous and in-memory.
- The API is designed to mimic Mongoose for easy migration to a real database.
