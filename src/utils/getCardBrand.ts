import type { CardBrand } from "../types";

export function couldBeValidBrand(input: string): boolean {
  if (!input) return true;

  if (input.startsWith("4")) return true;

  if (input.startsWith("5")) {
    if (input.length === 1) return true;
    return input[1] >= "1" && input[1] <= "5";
  }

  if (input.startsWith("3")) {
    if (input.length === 1) return true;
    return input[1] === "4" || input[1] === "6" || input[1] === "7";
  }

  if (input.startsWith("6")) {
    if (input.length === 1) return true;
    if (!input.startsWith("62")) return false;
    if (input.length === 2) return true;

    const third = input[2];
    if (third >= "4" && third <= "6") return true;
    if (third === "8") {
      if (input.length === 3) return true;
      return input[3] >= "2" && input[3] <= "8";
    }
    if (third === "2") {
      if (input.length === 3) return true;
      const p4 = Number(input.slice(0, 4));
      if (input.length === 4) return p4 >= 6221 && p4 <= 6229;
      const p5 = Number(input.slice(0, 5));
      if (input.length === 5) return p5 >= 62212 && p5 <= 62292;
      return Number(input.slice(0, 6)) >= 622126 && Number(input.slice(0, 6)) <= 622925;
    }
    return false;
  }

  return false;
}

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
