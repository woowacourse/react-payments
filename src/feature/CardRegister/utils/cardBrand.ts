import type { CardBrandType } from "../../../common/types/CardBrand";
import type { CardNumberChunkType } from "../../../common/types/CardInfoType";
import {
  CARD,
  CARD_NUMBER_CHUNK_LENGTH,
  UNKNOWN_CARD_NUMBER_CHAR,
} from "../constants";

export const getCardBrandName = (
  cardNumbers: CardNumberChunkType,
): CardBrandType => {
  const fullNumber = cardNumbers
    .map((chunk) =>
      chunk.padEnd(CARD_NUMBER_CHUNK_LENGTH, UNKNOWN_CARD_NUMBER_CHAR),
    )
    .join("");

  if (isVisa(fullNumber)) {
    return "visa";
  }
  if (isMasterCard(fullNumber)) {
    return "masterCard";
  }

  return null;
};

const isVisa = (cardNumbers: string) => {
  if (cardNumbers.startsWith(CARD.VISA.PREFIX)) {
    return true;
  }
};

const isMasterCard = (cardNumbers: string) => {
  const prefix = Number(cardNumbers.slice(0, CARD.MASTERCARD.PREFIX.LENGTH));
  if (
    prefix >= CARD.MASTERCARD.PREFIX.MIN &&
    prefix <= CARD.MASTERCARD.PREFIX.MAX
  ) {
    return true;
  }
};

const isDiner = (cardNumbers: string) => {};
const isAmex = (cardNumbers: string) => {};
const isUnionPay = (cardNumbers: string) => {};
