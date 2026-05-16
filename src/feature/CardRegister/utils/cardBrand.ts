import type { CardBrandType } from "../../../common/types/CardBrand";
import type { CardNumberChunkType } from "../../../common/types/CardInfoType";
import {
  CARD,
  type CardNumberChunkLengths,
  UNKNOWN_CARD_NUMBER_CHAR,
} from "../constants";

export const getCardBrandName = (
  cardNumbers: CardNumberChunkType,
): CardBrandType => {
  const fullNumber = cardNumbers
    .map((chunk, index) =>
      chunk.padEnd(CARD.DEFAULT.CHUNK_LENGTHS[index], UNKNOWN_CARD_NUMBER_CHAR),
    )
    .join("");

  if (isVisa(fullNumber)) {
    return "visa";
  }
  if (isMasterCard(fullNumber)) {
    return "masterCard";
  }
  if (isDiner(fullNumber)) {
    return "diners";
  }
  if (isAmex(fullNumber)) {
    return "amex";
  }
  if (isUnionPay(fullNumber)) {
    return "unionPay";
  }

  return null;
};

export const getCardNumberChunkLengths = (
  cardBrand: CardBrandType,
): CardNumberChunkLengths => {
  if (cardBrand === "visa") {
    return CARD.VISA.CHUNK_LENGTHS;
  }
  if (cardBrand === "masterCard") {
    return CARD.MASTERCARD.CHUNK_LENGTHS;
  }
  if (cardBrand === "diners") {
    return CARD.DINER.CHUNK_LENGTHS;
  }
  if (cardBrand === "amex") {
    return CARD.AMEX.CHUNK_LENGTHS;
  }
  if (cardBrand === "unionPay") {
    return CARD.UNION_PAY.CHUNK_LENGTHS;
  }
  return CARD.DEFAULT.CHUNK_LENGTHS;
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

const isDiner = (cardNumbers: string) => {
  if (cardNumbers.startsWith(CARD.DINER.PREFIX)) {
    return true;
  }
};
const isAmex = (cardNumbers: string) => {
  if (CARD.AMEX.PREFIX.some((prefix) => cardNumbers.startsWith(prefix))) {
    return true;
  }
};
const isUnionPay = (cardNumbers: string) => {
  const firstPrefix = Number(
    cardNumbers.slice(0, CARD.UNION_PAY.FIRST_PREFIX.LENGTH),
  );
  if (
    firstPrefix >= CARD.UNION_PAY.FIRST_PREFIX.MIN &&
    firstPrefix <= CARD.UNION_PAY.FIRST_PREFIX.MAX
  ) {
    return true;
  }

  const secondPrefix = Number(
    cardNumbers.slice(0, CARD.UNION_PAY.SECOND_PREFIX.LENGTH),
  );
  if (
    secondPrefix >= CARD.UNION_PAY.SECOND_PREFIX.MIN &&
    secondPrefix <= CARD.UNION_PAY.SECOND_PREFIX.MAX
  ) {
    return true;
  }

  const thirdPrefix = Number(
    cardNumbers.slice(0, CARD.UNION_PAY.THIRD_PREFIX.LENGTH),
  );
  if (
    thirdPrefix >= CARD.UNION_PAY.THIRD_PREFIX.MIN &&
    thirdPrefix <= CARD.UNION_PAY.THIRD_PREFIX.MAX
  ) {
    return true;
  }
};
