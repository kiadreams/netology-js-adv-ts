import Buyable from "./Buyable";
import Multipliable from "./Multipliable";

export default class Phone implements Buyable, Multipliable {
  numberOfItems: number;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
   ) {
    this.numberOfItems = 1;
  }
}
