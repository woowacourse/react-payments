import { ErrorMessage, TextLength } from "../type/input";

export const LABEL = {
  NUMBER: "카드 번호",
  DATE: "만료일",
  NAME: "카드 소유자 이름(선택)",
  CODE: "보안 코드(CVC/CVV)",
  PASSWORD: "카드 비밀번호",
};

export const PLACEHOLDER = {
  MONTH: "MM",
  YEAR: "YY",
  NAME: "카드에 표시된 이름과 동일하게 입력하세요.",
};

export const TEXT_LENGTH: TextLength = {
  FIRST: 4,
  SECOND: 4,
  THIRD: 4,
  FOURTH: 4,
  MONTH: 1,
  YAER: 2,
  CODE: 3,
  FIRSTPASSWORD: 1,
  SECONDPASSWORD: 1,
  NAME: 0,
};

export const ERROR_MESSAGE: ErrorMessage = {
  FIRST: "4개의 숫자를 입력해주세요",
  SECOND: "4개의 숫자를 입력해주세요",
  THIRD: "4개의 숫자를 입력해주세요",
  FOURTH: "4개의 숫자를 입력해주세요",
  MONTH: "옳바른 날짜를 입력해주세요",
  YAER: "옳바른 날짜를 입력해주세요",
  CODE: "3개의 숫자를 입력해주세요",
  FIRSTPASSWORD: "옳바른 비밀번호를 입력해주세요",
  SECONDPASSWORD: "옳바른 비밀번호를 입력해주세요",
  COMMON: "옳바른 입력값을 넣어주세요.",
};

export const INPUT_TYPE = {
  PASSWORD: "password",
  TEXT: "text",
  BAR: "-",
  MAX_LENGTH: 30,
};
