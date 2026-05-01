import visaSrc from "../../assets/Visa.svg";
import mastercardSrc from "../../assets/Mastercard.svg";

export function getCardBrandLogoSrc(firstGroup: string): string {
  if (firstGroup.startsWith("4")) return visaSrc;

  const num = Number(firstGroup.slice(0, 2));
  if (num >= 51 && num <= 55) return mastercardSrc;

  return "";
}
