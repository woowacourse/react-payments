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
  password: 2,
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
  globalNumber: /[0-9]/g,
  number: /^[0-9]+$/,
  english: /^[a-zA-Z]*$/,
} as const;

const CARD_COMPANY: Record<string, { img?: string }> = {
  BC카드: {
    img: BcCard,
  },
  신한카드: {
    img: ShinhanCard,
  },
  카카오뱅크: {
    img: KakaoCard,
  },
  현대카드: { img: HyundaiCard },
  우리카드: {
    img: WooriCard,
  },
  롯데카드: {
    img: LotteCard,
  },
  하나카드: { img: HanaCard },
  국민카드: {
    img: KbCard,
  },
} as const;

const CARD_COMPANY_NOT_SELECTED_STRING = "카드사선택필요";

const VALID_CARD_INPUT_FORM_LENGTH = 477;

export {
  CARD_INPUT_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  PASSWORD_DIGIT_INDEX,
  REGEX,
  SEPERATOR_STRING,
  SEPERATED_EXPIRED_DATE_LENGTH,
  CARD_COMPANY,
  CARD_COMPANY_NOT_SELECTED_STRING,
  VALID_CARD_INPUT_FORM_LENGTH,
};
