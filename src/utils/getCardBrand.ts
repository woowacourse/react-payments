import type { CardBrand } from "../types";

export function getCardBrand(segments: string[]): CardBrand | undefined {
  const fullNumber = segments.join("");
  if (!fullNumber) return undefined;

  if (fullNumber.startsWith("36")) return "Diners";
  if (fullNumber.startsWith("34") || fullNumber.startsWith("37")) return "AMEX";

  if (fullNumber.length >= 6) {
    const prefix6 = Number(fullNumber.slice(0, 6));
    if (prefix6 >= 622126 && prefix6 <= 622925) return "UnionPay";
  }
  if (fullNumber.length >= 4) {
    const prefix4 = Number(fullNumber.slice(0, 4));
    if (prefix4 >= 6282 && prefix4 <= 6288) return "UnionPay";
  }
  if (fullNumber.length >= 3) {
    const prefix3 = Number(fullNumber.slice(0, 3));
    if (prefix3 >= 624 && prefix3 <= 626) return "UnionPay";
  }

  if (fullNumber.startsWith("4")) return "VISA";
  if (/^5[1-5]/.test(fullNumber)) return "MasterCard";

  return undefined;
}
