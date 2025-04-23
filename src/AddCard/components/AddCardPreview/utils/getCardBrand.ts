import { CardBrand } from "../types";

const getCardBrand = (cardNumber: string): CardBrand => {
  if (cardNumber[0] === "4") {
    return "VISA";
  }

  const prefix = parseInt(cardNumber.slice(0, 2), 10);
  if (prefix >= 51 && prefix <= 55) {
    return "MASTERCARD";
  }

  return "DEFAULT";
};
export default getCardBrand;
