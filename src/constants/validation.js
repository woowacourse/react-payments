const CARD_INFOS_LENGTH = {
  CARD: '4',
  EXPIRE_DATE: '2',
  PASSWORD: '1',
  USER_NAME: '30',
  CVC: '3',
};

const VALIDATION_MESSAGE = {
  NUMBER_ONLY: '숫자만 입력가능합니다.',
  MAX_LENGTH: {
    CARD: `최대 ${CARD_INFOS_LENGTH.CARD}자리 정수만 입력가능합니다.`,
    EXPIRE_DATE: `최대 ${CARD_INFOS_LENGTH.EXPIRE_DATE}자리 정수만 입력가능합니다.`,
    PASSWORD: `${CARD_INFOS_LENGTH.PASSWORD}글자만 입력 가능합니다.`,
    USER_NAME: `${CARD_INFOS_LENGTH.USER_NAME}글자 이하만 입력가능합니다.`,
    CVC: `${CARD_INFOS_LENGTH.CVC}글자 초과는 입력할 수 없습니다.`,
  },
};

export { CARD_INFOS_LENGTH, VALIDATION_MESSAGE };
