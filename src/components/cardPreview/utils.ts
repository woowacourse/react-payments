export function getCardBrandLogoSrc(firstGroup: string): string {
  if (firstGroup.startsWith("4")) return "./src/assets/Visa.svg";

  const num = Number(firstGroup.slice(0, 2));
  if (num >= 51 && num <= 55) return "./src/assets/Mastercard.svg";

  return "";
}
