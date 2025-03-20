interface Buyable {
  id: number,
  name: string,
  getInfo(): void,
  readonly price: number,
  discount?: number,
};

function addToCart(item: Buyable): void {
  // TODO:
}
