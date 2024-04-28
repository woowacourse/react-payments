export const ERROR_MESSAGE = {
  EXPIRED_CARD_DATE: "이미 만료된 카드입니다.",
  INVALID_MONTH: "유효한 달이 아닙니다.",
  NAME_SHOULD_BE_CAPITAL: "이름은 영어 대문자로만 입력할 수 있습니다.",
  DOUBLE_SPACE: "스페이스를 두번 이상 입력할 수 없습니다.",
  ENTER_REQUIRED: "엔터를 쳐야 합니다.",
  CVC_NUMBER: "cvc는 이름으로 입력해야 합니다.",
  IS_NOT_NUMBER: "숫자로 입력해야 합니다.",
};

export const INVALID_LENGTH = (validLength: number): string =>
  `${validLength} 자리로 입력해주세요.`;
