import type { CardNumberChunkType } from "../../../common/types/CardInfoType";

export const getCardBrandName = (
  cardNumbers: CardNumberChunkType,
): "visa" | "masterCard" | null => {
  const fullNumber = cardNumbers.map((chunk) => chunk.padEnd(4, "#")).join("");

  if (fullNumber.startsWith("4")) return "visa";

  const prefix = Number(fullNumber.slice(0, 2));
  if (prefix >= 51 && prefix <= 55) return "masterCard";

  return null;
};
