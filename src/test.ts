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

    addBook(book: Book) {
        this.books.push(book);
    }

    isBookAvailable(book: Book) {
        return book.isAvailable;
    }

    listBookByAuthor(author: string) {
        return this.books.filter((book) => book.author === author);
    }
}

const addBook: addBook = (book) => {
  console.log(book);
};

let book1: DigitalBook = {
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  year: 2000,
  isAvailable: true,
  format: "pdf",
  downloadLink:
    "https://www.amazon.com/The-Pragmatic-Programmer-Journeyman-Master/dp/020161622X",
};

addBook(book1);
