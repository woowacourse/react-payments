export const getCardBrand = (cardNumber: number) => {
  const cardNumberString = String(cardNumber);

  if (cardNumberString.startsWith("4")) {
    return "VISA";
  }

  const firstTwoDigits = Number(cardNumberString.slice(0, 2));
  if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
    return "MASTERCARD";
  }

  return "DEFAULT";
};
