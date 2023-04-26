import {
  BcCard,
  HanaCard,
  HyundaiCard,
  KakaoCard,
  KbCard,
  LotteCard,
  ShinhanCard,
  WooriCard,
} from "../assets";

const CARD_INPUT_LENGTH: Record<string, number> = {
  cardNumber: 25,
  expiredDate: 7,
  ownerName: 12,
  cvc: 3,
  password: 1,
} as const;

const SEPERATED_CARD_NUMBER_LENGTH: Record<string, number> = {
  FIRST: 4,
  SECOND: 11,
  THIRD: 18,
} as const;

const SEPERATED_EXPIRED_DATE_LENGTH = 2;

const PASSWORD_DIGIT_INDEX: Record<string, number> = {
  FIRST: 0,
  SECOND: 1,
} as const;

const SEPERATOR_STRING = {
  cardNumber: " - ",
  expiredDate: " / ",
};

const CARD_COLOR = [
  "red",
  "pink",
  "green",
  "blue",
  "black",
  "gray",
  "yellow",
  "orange",
  "aqua",
  "lime",
];

const REGEX = {
  number: /^[0-9]+$/,
  english: /^[a-zA-Z]*$/,
} as const;

const CARD_COMPANY: Record<string, string> = {
  BC카드: BcCard,
  신한카드: ShinhanCard,
  카카오뱅크: KakaoCard,
  현대카드: HyundaiCard,
  우리카드: WooriCard,
  롯데카드: LotteCard,
  하나카드: HanaCard,
  국민카드: KbCard,
} as const;

export {
  CARD_INPUT_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  PASSWORD_DIGIT_INDEX,
  CARD_COLOR,
  REGEX,
  SEPERATOR_STRING,
  SEPERATED_EXPIRED_DATE_LENGTH,
  CARD_COMPANY,
};
