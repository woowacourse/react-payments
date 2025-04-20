export const justifyBrandLogo = (cardNumber: number) => {
  if (cardNumber.toString().startsWith("0")) return "default";
  if (cardNumber.toString().startsWith("4")) return "visa";

  if (
    cardNumber.toString().startsWith("51") ||
    cardNumber.toString().startsWith("52")
  )
    return "mastercard";
  if (cardNumber >= 2221 && cardNumber <= 2720) return "mastercard";

  return "default";
};
