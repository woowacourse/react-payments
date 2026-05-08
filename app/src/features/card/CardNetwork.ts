import {
  Visa,
  MasterCard,
  UnionPay,
  Amex,
  Diners,
  type CardNetworkBrand,
} from "./CardNetworkBrand";

const ALL_CARD_NETWORK_BRAND = [Visa, MasterCard, UnionPay, Amex, Diners];

export class CardNetwork {
  #brand: CardNetworkBrand;

  constructor(cardNumber: string) {
    this.#brand = undefined;
    for (const networkBrand of ALL_CARD_NETWORK_BRAND) {
      const thisBrand = networkBrand.check(cardNumber);
      if (thisBrand !== undefined) {
        this.#brand = networkBrand;
        break;
      }
    }
  }

  get name() {
    return this.#brand?.title;
  }
}
