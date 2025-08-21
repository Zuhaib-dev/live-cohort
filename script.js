class Libarary {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  listALlBooks() {
    this.books.forEach(function (book) {
      console.log(book);
    });
  }
}
let l1 = new Libarary();
l1.addBook("The epci Shit");
l1.addBook("Wealth");
l1.addBook("poor Father rich son");

l1.listALlBooks();
