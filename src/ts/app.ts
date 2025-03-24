import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from "./domain/Movie";
import Phone from "./domain/Phone";

const cart = new Cart();
console.log(cart.items);

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)
cart.add(book);
cart.add(book);
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
const movie = new Movie(
  1010,
  'Мстители',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137,
  500
);
cart.add(movie);
cart.add(movie);
cart.add(movie);

console.log(cart.items);
console.log();

console.log(cart.totalPrice());
console.log(cart.totalDiscountedPrice(20));
console.log();

cart.deleteItem(1001);

console.log(cart.totalPrice());
console.log(cart.totalDiscountedPrice(20));

const phone = new Phone(100, 'huawei', 100_000);
cart.add(phone);
cart.add(phone);
cart.add(phone);
console.log(cart);
console.log(cart.totalPrice());
console.log(cart.totalDiscountedPrice(20));

cart.deleteItem(phone.id);
console.log(cart);
console.log(cart.totalPrice());
console.log(cart.totalDiscountedPrice(20));

cart.deleteItem(phone.id);
console.log(cart);
console.log(cart.totalPrice());
console.log(cart.totalDiscountedPrice(20));

cart.deleteItem(phone.id);
console.log(cart);
console.log(cart.totalPrice());
console.log(cart.totalDiscountedPrice(20));
