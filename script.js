class Libarary {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  listALlBooks() {
    this.books.forEach(function (book, index) {
      console.log(` ${index + 1}  ${book.name} by ${book.author}`);
    });
  }
}
class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }
  info() {
    console.log(
      ` ${this.readStatus ? "❌" : "✔"} ${this.name} is written by the ${
        this.author
      } and you have ${
        this.readStatus ? "read it" : "you have not read this is available"
      }  and having isbn no this  ${this.isbn} with the pricing of ${
        this.price
      }`
    );
  }
  changeReadStatus() {
    this.readStatus = !this.readStatus;
  }
}
let jhansiLibarary = new Libarary();
let book1 = new Book("The Epic Shit", "iqevfiv", 1200, "Nelson Mendela");
let book2 = new Book("The Epic Shit", "iqevfiv", 1200, "Nelson Mendela");
let book3 = new Book("The Epic Shit", "iqevfiv", 1200, "Nelson Mendela");
jhansiLibarary.addBook(book1);
jhansiLibarary.addBook(book2);
jhansiLibarary.addBook(book3);
jhansiLibarary.listALlBooks();
