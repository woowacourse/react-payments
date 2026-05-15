import type { CardNetwork } from "./utils/cardNetwork";

export type CardInfo = {
  expiry: string[];
  company: string;
  numbers: string[];
  cvc: string;
  password: string;
};

export type CardDisplayInfo = CardInfo & {
  network: CardNetwork;
};

export type PublicCardInfo = {
  numberHead: string;
  company: string;
};
