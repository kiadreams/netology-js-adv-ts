import Buyable from "../domain/Buyable";


export default class Cart {
  private _items: Buyable[] = [];

  get items(): Buyable[] {
    return [...this._items];
  }

  add(item: Buyable): void {
    if (item.isSupportingAdding) {
      this._items.push(item);
    } else {
      const currentItem = this._items.find(value => value.id === item.id);
      if (currentItem === undefined) {
        this._items.push(item);
      }
    }
  }

  deleteItem(id: number): void {
    const index: number = this._items.findIndex(value => value.id === id);
    if (index >= 0) {
      this._items.splice(index, 1);
    }
  }

  totalPrice(): number {
    return this._items.reduce((partialSum: number, item: Buyable): number => partialSum + item.price, 0);
  }

  totalDiscountedPrice(discount: number): number {
    return this.totalPrice() * (1 - discount / 100);
  }
}
