var isBookAvailable = function (book) { return book.isAvailable; };
var listBookByAuthor = function (books, author) {
    return books.filter(function (book) { return book.author === author; });
};
var PublicLibrary = /** @class */ (function () {
    function PublicLibrary(name) {
        this.name = name;
        this.books = [];
        this.name = name;
    }
    PublicLibrary.prototype.addBook = function (book) {
        this.books.push(book);
    };
    PublicLibrary.prototype.isBookAvailable = function (book) {
        return book.isAvailable;
    };
    PublicLibrary.prototype.listBookByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    return PublicLibrary;
}());
var library = new PublicLibrary("City Library");
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
console.log(library.isBookAvailable(library.books.find(function (book) { return book.title === "JavaScript: The Good Parts"; }))); // false
