import Buyable from "./Buyable";

export default class Phone implements Buyable {
  readonly isSupportingAdding = true;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
   ) { }
}
