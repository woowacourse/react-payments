export const selectCardType = (cardNumber: string[]) => {
  const firstNumber = cardNumber[0].substring(0, 1);
  if (firstNumber === "4") return "./src/assets/Visa.svg";

  const firstTwoNumber = cardNumber[0].substring(0, 2);
  if (firstTwoNumber >= "51" && firstTwoNumber <= "55")
    return "./src/assets/Mastercard.svg";

  return "";
};
