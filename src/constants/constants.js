export const MASKED_CHARACTER = "•";

export const CREATE_MASKED_CHARACTERS = (repeatCount) =>
  `${MASKED_CHARACTER}`.repeat(repeatCount);

export const CARD_REGISTER_SUCCESS_MESSAGE =
  "카드가 정상적으로 등록되었습니다!";

export const BACK_BUTTON_CONFIRM_MESSAGE = `보유 카드 목록으로 이동하시겠어요?
확인 버튼을 누르시면 지금까지 기록한 정보는 사라집니다.`;

export const CARD_INFO_RULES = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
  PASSWORD_UNIT_LENGTH: 1,
};
