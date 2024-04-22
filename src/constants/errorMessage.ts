export const ERROR_MESSAGE = {
  EXPIRED_CARD_DATE: "이미 만료된 카드입니다.",
  NAME_SHOULD_CAPITAL: "이름은 영어 대문자로 입력해 주세요.",
  DOUBLE_SPACE: "공백은 2회이상 연속되지 않아야 합니다.",
  INVALID_MONTH: "유효한 2자리의 월을 입력해주세요.",
};

export const INVALID_LENGTH = (validLength: number): string =>
  `${validLength} 자리로 입력해주세요.`;
