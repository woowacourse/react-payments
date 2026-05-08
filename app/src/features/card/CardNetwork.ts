import { Visa, MasterCard, UnionPay, Amex, Diners } from "./CardNetworkBrand";

const ALL_CARD_NETWORK_BRAND = [Visa, MasterCard, UnionPay, Amex, Diners];

export class CardNetwork {
  #name: string | undefined;

  constructor(cardNumber: string) {
    this.#name = undefined;
    for (const networkBrand of ALL_CARD_NETWORK_BRAND) {
      this.#name = networkBrand.check(cardNumber);
      if (this.#name !== undefined) {
        break;
      }
    }
  }

  get name() {
    return this.#name;
  }
}
