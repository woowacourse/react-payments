import { CARD_BRAND, type CardBrand } from "./cardBrand";

export type CardNumber = [string, string, string, string];
export type CardNumberEachChunkLength = [number, number, number, number];

export const CARD_NUMBER_MASK_START_INDEX = 2;
export const CARD_NUMBER_MASK_CHAR = "·";
export const UNKNOWN_CARD_NUMBER_CHAR = "#";

export const getcardNumberEachChunkLength = (cardBrand: CardBrand) => {
  if (cardBrand === "visa") {
    return CARD_BRAND.VISA.CHUNK_LENGTHS;
  }
  if (cardBrand === "masterCard") {
    return CARD_BRAND.MASTERCARD.CHUNK_LENGTHS;
  }
  if (cardBrand === "diners") {
    return CARD_BRAND.DINER.CHUNK_LENGTHS;
  }
  if (cardBrand === "amex") {
    return CARD_BRAND.AMEX.CHUNK_LENGTHS;
  }
  if (cardBrand === "unionPay") {
    return CARD_BRAND.UNION_PAY.CHUNK_LENGTHS;
  }
  return CARD_BRAND.DEFAULT.CHUNK_LENGTHS;
};

export const getCardNumberLengthByBrand = (cardBrand: CardBrand) => {
  if (cardBrand === "visa") {
    return CARD_BRAND.VISA.LENGTH;
  }
  if (cardBrand === "masterCard") {
    return CARD_BRAND.MASTERCARD.LENGTH;
  }
  if (cardBrand === "diners") {
    return CARD_BRAND.DINER.LENGTH;
  }
  if (cardBrand === "amex") {
    return CARD_BRAND.AMEX.LENGTH;
  }
  if (cardBrand === "unionPay") {
    return CARD_BRAND.UNION_PAY.LENGTH;
  }

  return CARD_BRAND.DEFAULT.LENGTH;
};
