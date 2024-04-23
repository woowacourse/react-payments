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

export const CARD_NUMBER_KEYS = ["first", "second", "third", "fourth"] as const;
export const CARD_EXPIRATION_DATE_KEYS = ["month", "year"] as const;
export const CARD_OWNERNAME_KEY = ["ownerName"] as const;
