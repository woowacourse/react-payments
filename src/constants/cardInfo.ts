import Master from "../imgs/Mastercard.png";
import Visa from "../imgs/Visa.png";

export const CARD_BRAND = {
  visa: {
    startNumber: 4,
    logo: Visa,
  },
  master: {
    startNumber: 51,
    endNumber: 55,
    logo: Master,
  },
};

export const MASK_START_INDEX = 2;

export const SYMBOLS = {
  mask: "●",
  slash: "/",
};

export const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

export const CVC_MAX_LENGTH = 3;
export const CARD_NUMBER = 4;

export const CARD_NUMBER_KEYS = ["first", "second", "third", "fourth"] as const;
export const CARD_EXPIRATION_DATE_KEYS = ["month", "year"] as const;
export const CARD_OWNERNAME_KEY = ["ownerName"] as const;
