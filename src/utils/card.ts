import type { CardNumberUnits } from "@/types/card";
import type { CardBrand } from "@components/Card";
import type { ValidityPeriod } from "@/components/feature/CardValidityPeriodInputField/CardValidityPeriodInputField";

export const detectCardBrand = (
  cardNumber: CardNumberUnits,
): CardBrand | null => {
  const VISA_PREFIX = "4";
  const MASTER_CARD_PREFIXES = ["51", "52", "53", "54", "55"];

  if (cardNumber[0].startsWith(VISA_PREFIX)) return "Visa";

  if (MASTER_CARD_PREFIXES.includes(cardNumber[0].slice(0, 2)))
    return "MasterCard";

  return null;
};

export const getFormattedValidityPeriodUnit = (
  validityPeriod: ValidityPeriod,
) => {
  const { month, year } = validityPeriod;
  return `${month ? month + "/" : ""}${year ? year : ""}`;
};

export const padValidityPeriodUnit = (value: string) => {
  if (value.length === 1) return `0${value}`;
  return value;
};
