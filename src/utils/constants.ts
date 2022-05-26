export const MASKED_CHARACTER = "•";

export const CREATE_MASKED_CHARACTERS = (repeatCount: number) =>
  `${MASKED_CHARACTER} `.repeat(repeatCount).trim();

export const CARD_REGISTER_SUCCESS_MESSAGE =
  "카드가 정상적으로 등록되었습니다!";
export const CARD_REGISTER_FAIL_MESSAGE =
  "카드 정보 저장에 실패했습니다. 잠시 후 다시 시도해주세요!";

export const NICKNAME_REGISTER_SUCCESS_MESSAGE =
  "카드의 별칭이 정상적으로 등록되었습니다!";
export const NICKNAME_REGISTER_FAIL_MESSAGE =
  "카드의 별칭 저장에 실패했습니다. 잠시 후 다시 시도해주세요!";

export const CARD_INFO_RULES = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
};

export const PAGE_NAME = {
  CARD_LIST: "CardList",
  CARD_ADD: "CardAdd",
};
