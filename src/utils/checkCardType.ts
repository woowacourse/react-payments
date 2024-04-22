export default function checkCardType(firstCardNumber: string) {
  if (firstCardNumber.startsWith("4")) {
    return "Visa";
  }

  const firstTwoNumber = Number(firstCardNumber.slice(0, 2));
  if (firstTwoNumber >= 51 && firstTwoNumber <= 55) {
    return "Mastercard";
  }
}
