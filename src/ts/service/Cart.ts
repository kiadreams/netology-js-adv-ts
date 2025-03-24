import Buyable from "../domain/Buyable";
import Multipliable from "../domain/Multipliable";


export default class Cart {
  private _items: Buyable[] = [];

  get items(): Buyable[] {
    return [...this._items];
  }

  add(item: Buyable): void {
    const currentItem = this._items.find(value => value.id === item.id);
    if (currentItem !== undefined && this.isItemMultipliable(currentItem)) {
      currentItem.numberOfItems++;
    } else if (currentItem === undefined) {
      this._items.push(item);
    }
  }

  deleteItem(id: number): void {
    const currentItem = this._items.find(item => item.id === id);
    if (currentItem === undefined) {
      return;
    } else if (this.isItemMultipliable(currentItem) && currentItem.numberOfItems > 1) {
      currentItem.numberOfItems--;
      return;
    }
    this._items = this._items.filter(item => item.id !== id);
  }

  totalPrice(): number {
    return this._items.reduce(
      (partialSum: number, item) => {
        partialSum += this.isItemMultipliable(item) ? item.numberOfItems * item.price : item.price;
        return partialSum;
      },
      0
    )
  }

  totalDiscountedPrice(discount: number): number {
    return this.totalPrice() * (1 - discount / 100);
  }

  private isItemMultipliable(item: Buyable | Multipliable): item is Multipliable {
    return (item as Multipliable).numberOfItems !== undefined;
  }
}
