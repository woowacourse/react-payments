import type { CardNumberChunkType } from "../../../common/types/CardInfoType";
import {
  CARD_NUMBER_CHUNK_LENGTH,
  MASTERCARD_BRAND_PREFIX_LENGTH,
  MASTERCARD_PREFIX_MAX,
  MASTERCARD_PREFIX_MIN,
  UNKNOWN_CARD_NUMBER_CHAR,
  VISA_PREFIX,
} from "../constants";

export const getCardBrandName = (
  cardNumbers: CardNumberChunkType,
): "visa" | "masterCard" | null => {
  const fullNumber = cardNumbers
    .map((chunk) =>
      chunk.padEnd(CARD_NUMBER_CHUNK_LENGTH, UNKNOWN_CARD_NUMBER_CHAR),
    )
    .join("");

  if (fullNumber.startsWith(VISA_PREFIX)) return "visa";

  const prefix = Number(fullNumber.slice(0, MASTERCARD_BRAND_PREFIX_LENGTH));
  if (prefix >= MASTERCARD_PREFIX_MIN && prefix <= MASTERCARD_PREFIX_MAX)
    return "masterCard";

  return null;
};
