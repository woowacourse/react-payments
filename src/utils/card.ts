import {
  CARD_BRANDS,
  type CardBrand,
  type PrefixRange,
} from "@/constants/cardBrands";
import type { ValidityPeriod } from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import type { CardNumberUnits } from "@/components/CardNumberInputField/CardNumberInputField";

export const detectCardBrand = (
  cardNumber: CardNumberUnits,
): CardBrand | null => {
  if (checkPrefixMatches(`${cardNumber[0]}`, CARD_BRANDS.Visa.prefixes))
    return "Visa";

  if (
    checkPrefixRangeMatches(
      `${cardNumber[0]}`,
      CARD_BRANDS.MasterCard.prefixRanges,
    )
  )
    return "MasterCard";

  if (checkPrefixMatches(`${cardNumber[0]}`, CARD_BRANDS.AMEX.prefixes))
    return "AMEX";

  if (checkPrefixMatches(`${cardNumber[0]}`, CARD_BRANDS.Diners.prefixes))
    return "Diners";

  if (
    checkPrefixRangeMatches(
      `${cardNumber[0]}${cardNumber[1]}`,
      CARD_BRANDS.UnionPay.prefixRanges,
    )
  )
    return "UnionPay";

  return null;
};

const checkPrefixMatches = (
  cardNumber: string,
  prefixes: readonly string[],
) => {
  return prefixes.some((prefix) => cardNumber.startsWith(prefix)) ?? false;
};

const checkPrefixRangeMatches = (
  cardNumber: string,
  prefixRanges: readonly PrefixRange[],
) => {
  return (
    prefixRanges.some(({ length, min, max }) => {
      if (cardNumber.length < length) return false;

      const prefix = Number(cardNumber.slice(0, length));
      return prefix >= min && prefix <= max;
    }) ?? false
  );
};

export const getCardNumberFormat = (cardBrand: CardBrand | null) => {
  return cardBrand ? CARD_BRANDS[cardBrand].format : [4, 4, 4, 4];
};

export const isFormatChanged = (
  currentFormat: readonly number[],
  nextFormat: readonly number[],
) => {
  return (
    currentFormat.length !== nextFormat.length ||
    currentFormat.some((length, index) => length !== nextFormat[index])
  );
};

export const getFormattedValidityPeriodUnit = (
  validityPeriod: ValidityPeriod,
) => {
  const { month, year } = validityPeriod;
  return `${month ? month + "/" : ""}${year ? year : ""}`;
};

export const updateCardNumberUnitsFormat = (
  cardNumber: CardNumberUnits,
  format: readonly number[],
): CardNumberUnits => {
  return format.map((_, index) => (index === 0 ? cardNumber[0] : ""));
};

export const getCardNumberPlaceholder = (length: number) => {
  return "1234567890".slice(0, length);
};
