import Cart from '../service/Cart';
import Book from "../domain/Book";
import {describe, expect, test} from "@jest/globals";
import Phone from "../domain/Phone";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";





const cart = new Cart();
describe('Check methods of cart.', () => {

  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
  });

  test.each([
    {testName: 'add first book', item: new Book(1, 'Slave', 'Шутов', 100, 400), count: 1},
    {testName: 'add the same book', item: new Book(1, 'Slave', 'Шутов', 100, 400), count: 1},
    {testName: 'add music album', item: new MusicAlbum(3, 'A', 'B', 100), count: 2},
    {testName: 'add first phone', item: new Phone(2, 'huawei', 1000), count: 3},
    {testName: 'add the same phone', item: new Phone(2, 'huawei', 1000), count: 4},
    {testName: 'add movie', item: new Movie(4, 'a', 2025, 'USA', 'b', ['a'], 128, 300), count: 5}
  ])('Check add method of cart: $testName', ({testName, item, count}) => {
    cart.add(item);
    expect(cart.items.length).toBe(count);
  });

  test.each([
    {testName: 'delete first book', id: 1, count: 4},
    {testName: 'delete the same book', id: 1, count: 4},
    {testName: 'delete music album', id: 3, count: 3},
    {testName: 'delete first phone', id: 2, count: 2},
    {testName: 'delete the same phone', id: 2, count: 1},
    {testName: 'delete movie', id: 4, count: 0}
  ])('Check add method of cart: $testName', ({testName, id, count}) => {
    cart.deleteItem(id);
    expect(cart.items.length).toBe(count);
  });

  test('Check totalPrice method of cart', () => {
    cart.add(new Book(1, 'Slave', 'Шутов', 350, 400));
    cart.add(new MusicAlbum(3, 'A', 'B', 150));
    expect(cart.totalPrice()).toBe(500);
  });

  test('Check totalDiscountedPrice method of cart', () => {
    expect(cart.totalDiscountedPrice(10)).toBe(450);
  });
});


