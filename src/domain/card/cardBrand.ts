import {
  UNKNOWN_CARD_NUMBER_CHAR,
  type CardNumber,
  type CardNumberEachChunkLength,
} from "./cardNumber";

export type CardBrand =
  | "visa"
  | "masterCard"
  | "diners"
  | "amex"
  | "unionPay"
  | null;

export const CARD_BRAND = {
  DEFAULT: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberEachChunkLength,
  },
  VISA: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberEachChunkLength,
    PREFIX: "4",
  },
  MASTERCARD: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberEachChunkLength,
    PREFIX: {
      LENGTH: 2,
      MIN: 51,
      MAX: 55,
    },
  },
  DINER: {
    LENGTH: 14,
    CHUNK_LENGTHS: [4, 4, 4, 2] satisfies CardNumberEachChunkLength,
    PREFIX: "36",
  },
  AMEX: {
    LENGTH: 15,
    CHUNK_LENGTHS: [4, 4, 4, 3] satisfies CardNumberEachChunkLength,
    PREFIX: ["34", "37"],
  },
  UNION_PAY: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberEachChunkLength,
    FIRST_PREFIX: {
      LENGTH: 6,
      MIN: 622126,
      MAX: 622925,
    },
    SECOND_PREFIX: {
      LENGTH: 3,
      MIN: 624,
      MAX: 626,
    },
    THIRD_PREFIX: {
      LENGTH: 4,
      MIN: 6282,
      MAX: 6288,
    },
  },
};

export const getCardBrandName = (cardNumbers: CardNumber): CardBrand => {
  const fullNumber = cardNumbers
    .map((chunk, index) =>
      chunk.padEnd(
        CARD_BRAND.DEFAULT.CHUNK_LENGTHS[index],
        UNKNOWN_CARD_NUMBER_CHAR,
      ),
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

const isVisa = (cardNumbers: string) => {
  if (cardNumbers.startsWith(CARD_BRAND.VISA.PREFIX)) {
    return true;
  }
};

const isMasterCard = (cardNumbers: string) => {
  const prefix = Number(
    cardNumbers.slice(0, CARD_BRAND.MASTERCARD.PREFIX.LENGTH),
  );
  if (
    prefix >= CARD_BRAND.MASTERCARD.PREFIX.MIN &&
    prefix <= CARD_BRAND.MASTERCARD.PREFIX.MAX
  ) {
    return true;
  }
};

const isDiner = (cardNumbers: string) => {
  if (cardNumbers.startsWith(CARD_BRAND.DINER.PREFIX)) {
    return true;
  }
};
const isAmex = (cardNumbers: string) => {
  if (CARD_BRAND.AMEX.PREFIX.some((prefix) => cardNumbers.startsWith(prefix))) {
    return true;
  }
};
const isUnionPay = (cardNumbers: string) => {
  const firstPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.UNION_PAY.FIRST_PREFIX.LENGTH),
  );
  if (
    firstPrefix >= CARD_BRAND.UNION_PAY.FIRST_PREFIX.MIN &&
    firstPrefix <= CARD_BRAND.UNION_PAY.FIRST_PREFIX.MAX
  ) {
    return true;
  }

  const secondPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.UNION_PAY.SECOND_PREFIX.LENGTH),
  );
  if (
    secondPrefix >= CARD_BRAND.UNION_PAY.SECOND_PREFIX.MIN &&
    secondPrefix <= CARD_BRAND.UNION_PAY.SECOND_PREFIX.MAX
  ) {
    return true;
  }

  const thirdPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.UNION_PAY.THIRD_PREFIX.LENGTH),
  );
  if (
    thirdPrefix >= CARD_BRAND.UNION_PAY.THIRD_PREFIX.MIN &&
    thirdPrefix <= CARD_BRAND.UNION_PAY.THIRD_PREFIX.MAX
  ) {
    return true;
  }
};
