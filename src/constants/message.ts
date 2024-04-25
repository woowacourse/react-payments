import { CardType } from "./cardType";

const PLACEHOLDER = {
  CARD_NUMBERS: "1234",
  EXPIRATION_MONTH: "MM",
  EXPIRATION_YEAR: "YY",
  OWNER_NAME: "JOHN DOE",
  CVC: "123",
  PASSWORD: "**",
};

const INPUT_LABEL = {
  CARD_NUMBERS: "카드 번호",
  EXPIRATION_DATE: "유효기간",
  OWNER_NAME: "소유자 이름",
  CVC: "CVC",
  PASSWORD: "비밀번호 앞 2자리",
};

const INPUT_INFO_TITLE = {
  CARD_NUMBERS: "결제할 카드 번호를 입력해 주세요",
  EXPIRATION_DATE: "카드 유효기간을 입력해 주세요",
  OWNER_NAME: "카드 소유자 이름을 입력해 주세요",
  CARD_TYPE: "카드사를 선택해 주세요",
  CVC: "CVC 번호를 입력해 주세요",
  PASSWORD: "비밀번호를 입력해 주세요",
};

const INPUT_INFO_SUBTITLE = {
  CARD_NUMBERS: "본인 명의의 카드만 결제 가능합니다.",
  EXPIRATION_DATE: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  CARD_TYPE: "현재 국내 카드사만 가능합니다.",
  PASSWORD: "앞의 2자리를 입력해주세요",
};

const EXPIRATION_DATE_PLACEHOLDER = [
  PLACEHOLDER.EXPIRATION_MONTH,
  PLACEHOLDER.EXPIRATION_YEAR,
];

const REGISTER_CONFIRM_NUMBERS = (startNumbers: number) =>
  `${startNumbers}로 시작하는`;
const REGISTER_CONFIRM_CARDTYPE = (cardType: CardType) =>
  `${cardType}카드가 등록되었어요.`;

export const MESSAGE = {
  PLACEHOLDER,
  INPUT_LABEL,
  INPUT_INFO_TITLE,
  INPUT_INFO_SUBTITLE,
  EXPIRATION_DATE_PLACEHOLDER,
  REGISTER_CONFIRM_NUMBERS,
  REGISTER_CONFIRM_CARDTYPE,
};
