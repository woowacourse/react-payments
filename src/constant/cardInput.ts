export const INPUT_FULL_LENGTH: Readonly<Record<string, number>> = {
  CARD_NUMBER: 4,
  CARD_NUMBERS: 16,
  CVC: 3,
  EXPIRY_DATE: 4,
  OWNER: 30,
  PASSWORD: 1,
  PASSWORDS: 2,
};

export const ERROR_MESSAGE: Readonly<Record<string, string>> = {
  CARD_NUMBERS: "16자리 숫자를 입력하세요.",
  CVC: "3자리 숫자를 입력하세요.",
  EXPIRY_DATE: "유효한 만료일이 아닙니다. ",
  PASSWORDS: "비밀번호를 입력하세요.",
};
