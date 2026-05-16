import {
  Visa,
  MasterCard,
  UnionPay,
  Amex,
  Diners,
  type CardNetworkBrand,
} from "./CardNetworkBrand";

const ALL_CARD_NETWORK_BRAND = [Visa, MasterCard, UnionPay, Amex, Diners];

export function detectCardNetwork(cardNumber: string): CardNetworkBrand | undefined {
  for (const networkBrand of ALL_CARD_NETWORK_BRAND) {
    if (networkBrand.check(cardNumber) !== undefined) return networkBrand;
  }
  return undefined;
}
