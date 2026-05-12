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

  if (
    ((parseInt(cardNumber.slice(0, 6)) >= 622126 &&
      parseInt(cardNumber.slice(0, 6)) <= 622925) ||
      (parseInt(cardNumber.slice(0, 3)) >= 624 &&
        parseInt(cardNumber.slice(0, 3)) <= 626) ||
      (parseInt(cardNumber.slice(0, 4)) >= 6282 &&
        parseInt(cardNumber.slice(0, 4)) <= 6288)) &&
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

export const getCardNumberUnitMaxLengthByBrand = (
  brand: CardBrand | null,
  unitIndex: number,
) => {
  if (!brand) return CARD.UNIT_LENGTHS_BY_BRAND.Visa[unitIndex];
  return CARD.UNIT_LENGTHS_BY_BRAND[brand][unitIndex];
};

export const formatCardNumberUnitByBrand = (
  cardNumberUnit: string,
  brand: CardBrand | null,
): //TODO: 타입 정의해서 사용하기
  [string, string, string, string] | [string, string, string] => {
  if (brand === "AMEX") {
    const firstUnit = cardNumberUnit.slice(
      0,
      CARD.UNIT_LENGTHS_BY_BRAND.AMEX[0],
    );
    const secondUnit = cardNumberUnit.slice(
      CARD.UNIT_LENGTHS_BY_BRAND.AMEX[0],
      CARD.UNIT_LENGTHS_BY_BRAND.AMEX[0] + CARD.UNIT_LENGTHS_BY_BRAND.AMEX[1],
    );
    const thirdUnit = cardNumberUnit.slice(
      CARD.UNIT_LENGTHS_BY_BRAND.AMEX[0] + CARD.UNIT_LENGTHS_BY_BRAND.AMEX[1],
      CARD.UNIT_LENGTHS_BY_BRAND.AMEX[0] +
        CARD.UNIT_LENGTHS_BY_BRAND.AMEX[1] +
        CARD.UNIT_LENGTHS_BY_BRAND.AMEX[2],
    );
    return [firstUnit, secondUnit, thirdUnit];
  }

  if (brand === "Diners") {
    const firstUnit = cardNumberUnit.slice(
      0,
      CARD.UNIT_LENGTHS_BY_BRAND.Diners[0],
    );
    const secondUnit = cardNumberUnit.slice(
      CARD.UNIT_LENGTHS_BY_BRAND.Diners[0],
      CARD.UNIT_LENGTHS_BY_BRAND.Diners[0] +
        CARD.UNIT_LENGTHS_BY_BRAND.Diners[1],
    );
    const thirdUnit = cardNumberUnit.slice(
      CARD.UNIT_LENGTHS_BY_BRAND.Diners[0] +
        CARD.UNIT_LENGTHS_BY_BRAND.Diners[1],
      CARD.UNIT_LENGTHS_BY_BRAND.Diners[0] +
        CARD.UNIT_LENGTHS_BY_BRAND.Diners[1] +
        CARD.UNIT_LENGTHS_BY_BRAND.Diners[2],
    );
    return [firstUnit, secondUnit, thirdUnit];
  }

  const firstUnit = cardNumberUnit.slice(0, CARD.UNIT_LENGTHS_BY_BRAND.Visa[0]);
  const secondUnit = cardNumberUnit.slice(
    CARD.UNIT_LENGTHS_BY_BRAND.Visa[0],
    CARD.UNIT_LENGTHS_BY_BRAND.Visa[0] + CARD.UNIT_LENGTHS_BY_BRAND.Visa[1],
  );
  const thirdUnit = cardNumberUnit.slice(
    CARD.UNIT_LENGTHS_BY_BRAND.Visa[0] + CARD.UNIT_LENGTHS_BY_BRAND.Visa[1],
    CARD.UNIT_LENGTHS_BY_BRAND.Visa[0] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[1] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[2],
  );
  const fourthUnit = cardNumberUnit.slice(
    CARD.UNIT_LENGTHS_BY_BRAND.Visa[0] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[1] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[2],
    CARD.UNIT_LENGTHS_BY_BRAND.Visa[0] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[1] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[2] +
      CARD.UNIT_LENGTHS_BY_BRAND.Visa[3],
  );
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
