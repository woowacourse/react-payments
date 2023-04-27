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

const REGEX = {
  // globalNumber: /[^0-9]/g,
  number: /^[0-9]+$/g,
  english: /^[a-zA-Z]*$/,
} as const;

const CARD_COMPANY: Record<
  string,
  { img?: string; background: string; color: string }
> = {
  카드사선택필요: {
    background: "gray",
    color: "white",
  },
  BC카드: {
    img: BcCard,
    background: "rgb(222, 84, 86)",
    color: "white",
  },
  신한카드: {
    img: ShinhanCard,
    background: "rgb(19, 74, 245)",
    color: "white",
  },
  카카오뱅크: {
    img: KakaoCard,
    background: "rgb(251, 230, 77)",
    color: "black",
  },
  현대카드: { img: HyundaiCard, background: "rgb(51, 51, 51)", color: "white" },
  우리카드: {
    img: WooriCard,
    background: "rgb(187, 223, 245)",
    color: "rgb(51, 122, 194)",
  },
  롯데카드: {
    img: LotteCard,
    background: "rgb(240, 240, 240)",
    color: "rgb(225, 0, 0)",
  },
  하나카드: { img: HanaCard, background: "rgb(64, 146, 143)", color: "white" },
  국민카드: {
    img: KbCard,
    background: "rgb(85, 79, 71)",
    color: "rgb(247, 206, 71)",
  },
} as const;

export {
  CARD_INPUT_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  PASSWORD_DIGIT_INDEX,
  REGEX,
  SEPERATOR_STRING,
  SEPERATED_EXPIRED_DATE_LENGTH,
  CARD_COMPANY,
};
