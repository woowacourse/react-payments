import type { CardBrand } from "@components/Card";
import type { ValidityPeriod } from "@components/CardValidityPeriodInputField";
import type { CardNumberUnits } from "@components/CardNumberInputField";

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

export const formatValidityPeriod = (nextRaw: string, prev: string) => {
  const onlyNumber = nextRaw.replace(/\D/g, "");

  if (onlyNumber === "") return "";

  if (onlyNumber.length === 1) {
    if (onlyNumber === "0") return "0";

    return `0${onlyNumber}`;
  }

  if (prev === "0") {
    if (onlyNumber === "00") return "0";

    return onlyNumber.slice(0, 2);
  }

  if (onlyNumber.startsWith("0")) {
    return onlyNumber.slice(1, 3);
  }

  return onlyNumber.slice(0, 2);
};
