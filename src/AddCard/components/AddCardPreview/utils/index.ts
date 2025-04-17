export const getCardBrand = (cardNumber: number) => {
  if (cardNumber.toString().startsWith("4")) {
    return "VISA";
  }

  if (cardNumber >= 51 && cardNumber <= 55) {
    return "MASTERCARD";
  }

  return "DEFAULT";
};
