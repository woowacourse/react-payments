export const getCardBrand = (
  cardNumbers: string[],
): "visa" | "master" | null => {
  if (cardNumbers[0].length < 1) {
    return null;
  }
  if (cardNumbers[0][0] === "4") return "visa";

  if (cardNumbers[0].length < 2) return null;
  if (cardNumbers[0][0] !== "5") return null;
  const secondNumber = Number(cardNumbers[0][1]);
  return 1 <= secondNumber && secondNumber <= 5 ? "master" : null;
};
