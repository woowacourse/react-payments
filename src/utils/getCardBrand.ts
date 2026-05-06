export const getCardBrand = (cardNumbers: {
  first: string;
  second: string;
  third: string;
  fourth: string;
}): "visa" | "master" | null => {
  if (cardNumbers.first.length < 1) {
    return null;
  }
  if (cardNumbers.first[0] === "4") return "visa";

  if (cardNumbers.first.length < 2) return null;
  if (cardNumbers.first[0] !== "5") return null;
  const secondNumber = Number(cardNumbers.first[1]);
  return 1 <= secondNumber && secondNumber <= 5 ? "master" : null;
};
