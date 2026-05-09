import {
  CARD_BRANDS,
  type CardBrand,
  type PrefixRange,
} from "@/constants/cardBrands";
import type { ValidityPeriod } from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";

export const detectCardBrand = (cardNumber: string): CardBrand | null => {
  if (checkPrefixMatches(cardNumber, CARD_BRANDS.Visa.prefixes)) return "Visa";

  if (checkPrefixRangeMatches(cardNumber, CARD_BRANDS.MasterCard.prefixRanges))
    return "MasterCard";

  if (checkPrefixMatches(cardNumber, CARD_BRANDS.AMEX.prefixes)) return "AMEX";

  if (checkPrefixMatches(cardNumber, CARD_BRANDS.Diners.prefixes))
    return "Diners";

  if (checkPrefixRangeMatches(cardNumber, CARD_BRANDS.UnionPay.prefixRanges))
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

export const getFormattedValidityPeriodUnit = (
  validityPeriod: ValidityPeriod,
) => {
  const { month, year } = validityPeriod;
  return `${month ? month + "/" : ""}${year ? year : ""}`;
};

export const formatValidityPeriod = (nextRaw: string) => {
  return nextRaw.replace(/\D/g, "").slice(0, 2);
};

export const padValidityPeriodUnit = (value: string) => {
  if (value.length === 1) return `0${value}`;
  return value;
};
