import { CARD_EXPIRATION } from './cardConfig';

export const CARD_NUMBER_ERROR = {
  onlyNumbers: '숫자만 입력 가능합니다.',
  invalidFormat: '카드 번호 형식이 올바르지 않습니다.',
};

export const CARD_EXPIRATION_ERROR = {
  onlyNumbers: '숫자만 입력 가능합니다.',
  invalidMonth: `${CARD_EXPIRATION.minMonth}~${CARD_EXPIRATION.maxMonth} 사이의 값을 입력해 주세요.`,
  invalidYear: `${CARD_EXPIRATION.minYear}년 이상의 값을 입력해 주세요.`,
};

export const CARD_CVC_ERROR = {
  onlyNumbers: '숫자만 입력 가능합니다.',
};

export const CARD_PASSWORD_ERROR = {
  onlyNumbers: '숫자만 입력 가능합니다.',
  invalidLength: '비밀번호는 2자리 숫자여야 합니다.',
}
