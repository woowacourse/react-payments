import type { CardNumberUnits } from "../components/CardNumberInputField";

export const detectCardBrand = (cardNumber: CardNumberUnits) => {
  if (cardNumber[0].startsWith("4")) return "Visa";

  if (["51", "52", "53", "54", "55"].includes(cardNumber[0].slice(0, 2)))
    return "MasterCard";

  return null;
};
