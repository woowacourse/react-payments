import { CARD_TYPE_PREFIXES } from "../constants";

export function getCardType(cardNumber: string) {
  return (
    Object.entries(CARD_TYPE_PREFIXES).find(([, prefixes]) =>
      prefixes.some((prefix) => cardNumber.startsWith(prefix))
    )?.[0] ?? "NONE"
  );
}

export function maskCardNumber(cardNumber: string[]) {
  return [
    ...cardNumber.slice(0, 2),
    ...cardNumber.slice(2).map((letter) => "·".repeat(letter.length)),
  ];
}
