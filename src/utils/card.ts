import type { ValidityPeriod } from "@/types/card";
import CARD, { type CardBrand } from "@constants/card";

export const detectCardBrand = (cardNumber: string): CardBrand | null => {
  const VISA_PREFIX = "4";
  const MASTER_CARD_PREFIXES = ["51", "52", "53", "54", "55"];
  const DINERS_PREFIXES = ["36"];
  const AMEX_PREFIXES = ["34", "37"];

  if (cardNumber.startsWith(VISA_PREFIX)) return "Visa";

  if (
    MASTER_CARD_PREFIXES.includes(cardNumber.slice(0, 2)) &&
    cardNumber.length <= getCardNumberLengthByBrand("MasterCard")
  )
    return "MasterCard";

  if (
    DINERS_PREFIXES.includes(cardNumber.slice(0, 2)) &&
    cardNumber.length <= getCardNumberLengthByBrand("Diners")
  )
    return "Diners";

  if (
    AMEX_PREFIXES.includes(cardNumber.slice(0, 2)) &&
    cardNumber.length <= getCardNumberLengthByBrand("AMEX")
  )
    return "AMEX";

  const unionPayPrefix = parseInt(cardNumber.slice(0, 6));
  if (
    ((unionPayPrefix >= 622126 && unionPayPrefix <= 622925) ||
      (unionPayPrefix >= 624 && unionPayPrefix <= 626)) &&
    cardNumber.length <= getCardNumberLengthByBrand("UnionPay")
  )
    return "UnionPay";

  return null;
};

export const getCardNumberLengthByBrand = (brand: CardBrand | null) => {
  return brand ? CARD.NUMBER_LENGTH_BY_BRAND[brand] : 16;
};

export const getFormattedValidityPeriodUnit = (
  validityPeriod: ValidityPeriod,
) => {
  const { month, year } = validityPeriod;
  return `${month ? month + "/" : ""}${year ? year : ""}`;
};

export const formatCardNumberUnitByBrand = (
  cardNumberUnit: string,
  brand: CardBrand | null,
) => {
  if (brand === "AMEX") {
    const firstUnit = cardNumberUnit.slice(0, 4);
    const secondUnit = cardNumberUnit.slice(4, 10);
    const thirdUnit = cardNumberUnit.slice(10, 15);
    return [firstUnit, secondUnit, thirdUnit];
  }

  if (brand === "Diners") {
    const firstUnit = cardNumberUnit.slice(0, 4);
    const secondUnit = cardNumberUnit.slice(4, 10);
    const thirdUnit = cardNumberUnit.slice(10, 14);
    return [firstUnit, secondUnit, thirdUnit];
  }

  const firstUnit = cardNumberUnit.slice(0, 4);
  const secondUnit = cardNumberUnit.slice(4, 8);
  const thirdUnit = cardNumberUnit.slice(8, 12);
  const fourthUnit = cardNumberUnit.slice(12, 16);
  return [firstUnit, secondUnit, thirdUnit, fourthUnit];
};

export const isCardNumberComplete = (
  cardNumber: string,
  brand: CardBrand | null,
) => {
  const requiredLength = getCardNumberLengthByBrand(brand);
  return cardNumber.length === requiredLength;
};

export const padValidityPeriodUnit = (value: string) => {
  if (value.length === 1) return `0${value}`;
  return value;
};
