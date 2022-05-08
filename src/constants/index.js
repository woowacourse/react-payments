export const API_URL = 'https://react-payments-albur.herokuapp.com';

export const ERROR_MESSAGE = {
  SERVICE_NOT_WORKING:
    '현재 홈페이지 사용이 불가능합니다. 관리자에게 문의 바랍니다.',
  INVALID_CARD_NUMBER_LENGTH: '14~16자리를 입력해주세요',
  INVALID_CARD_OWNER_NAME: '영어로만 입력해주세요',
  INVALID_CVC: '카드 뒷면의 2~3자를 입력해주세요!',
  INVALID_VALID_DATE: '유효한 날짜를 입력해주세요!',
};

export const RULE = {
  CARD_NUMBER_MAX_LENGTH: 16,
  CARD_OWNER_NAME_MAX_LENGTH: 30,
};
