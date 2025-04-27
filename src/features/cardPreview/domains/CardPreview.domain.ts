import { CARD_IDENTIFYING_NUMBER } from "../constants/CardPreview.constant";

export function getIdentifyFns(id: string) {
  return [
    {
      identify: () => Number(id[0]) === CARD_IDENTIFYING_NUMBER.VISA,
      logoSrc: "./images/Visa.svg",
    },
    {
      identify: () =>
        Number(id) >= CARD_IDENTIFYING_NUMBER.MASTERCARD.MIN &&
        Number(id) <= CARD_IDENTIFYING_NUMBER.MASTERCARD.MAX,
      logoSrc: "./images/Mastercard.svg",
    },
  ];
}
