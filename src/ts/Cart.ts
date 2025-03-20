export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalPrice(): number {
    return this._items.reduce((partialSum: number, item: Buyable): number => partialSum + item.price, 0);
  }

  totalDiscountedPrice(discount: number): number {
    return 1;
  }
}
