import Book from "./domain/Book";
import Cart from "./Cart";

const book1 = new Book(1, 'voina', 'igor', 300, 1000);
const book2 = new Book(1, 'voina', 'igor', 200, 200);
const cart = new Cart();
console.log(book1, book1.pages);

cart.add(book1);
cart.add(book2);

console.log(cart.totalPrice)
