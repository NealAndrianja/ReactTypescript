interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

interface DigitalBook extends Book {
  format: "pdf" | "epub" | "mobi";
  downloadLink: string;
}

type addBook = (book: Book) => void;

const isBookAvailable = (book: Book) => book.isAvailable;

const listBookByAuthor = (books: Book[], author: string) =>
  books.filter((book) => book.author === author);

interface Library {
  name: string;
  books: Book[];
  addBook: addBook;
  isBookAvailable: (book: Book) => boolean;
  listBookByAuthor: (author: string) => Book[];
}

class PublicLibrary implements Library {
  public books: Book[] = [];
  constructor(public name: string) {
    this.name = name;
  }

  addBook(book: Book | DigitalBook) {
    this.books.push(book);
  }

  isBookAvailable(book: Book) {
    return book.isAvailable;
  }

  listBookByAuthor(author: string) {
    return this.books.filter((book) => book.author === author);
  }
}

const library = new PublicLibrary("City Library");

library.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  isAvailable: true,
});
library.addBook({
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
  isAvailable: false,
});
library.addBook({
  title: "TypeScript Handbook",
  author: "Microsoft",
  year: 2021,
  isAvailable: true,
  format: "pdf",
  downloadLink: "https://typescriptlang.org",
});

console.log(library.listBookByAuthor("F. Scott Fitzgerald")); // [{ title: "The Great Gatsby", ... }]
console.log(library.isBookAvailable(library.books.find(book=>book.title==="JavaScript: The Good Parts") as Book)); // false
