import type { CardBrand } from "@components/Card";
import type { ValidityPeriod } from "@components/CardValidityPeriodInputField";
import type { CardNumberUnits } from "@components/CardNumberInputField";

export const detectCardBrand = (
  cardNumber: CardNumberUnits,
): CardBrand | null => {
  if (cardNumber[0].startsWith("4")) return "Visa";

  if (["51", "52", "53", "54", "55"].includes(cardNumber[0].slice(0, 2)))
    return "MasterCard";

  return null;
};

export const getFormattedValidityPeriodUnit = (
  validityPeriod: ValidityPeriod,
) => {
  const { month, year } = validityPeriod;
  return `${month ? month + "/" : ""}${year ? year : ""}`;
};
