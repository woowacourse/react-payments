export const MASKED_CHARACTER = "•";

export const CREATE_MASKED_CHARACTERS = (repeatCount) =>
  `${MASKED_CHARACTER}`.repeat(repeatCount);

export const CARD_REGISTER_SUCCESS_MESSAGE =
  "카드가 정상적으로 등록되었습니다!";

export const CARD_INFO_RULES = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
  PASSWORD_UNIT_LENGTH: 1,
};

export const INPUT_KEY_TABLE = {
  cardNumbers: [
    "firstCardNumber",
    "secondCardNumber",
    "thirdCardNumber",
    "fourthCardNumber",
  ],
  passwordNumbers: ["firstPassword", "secondPassword"],
};
