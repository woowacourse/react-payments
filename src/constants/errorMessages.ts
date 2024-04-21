import { CARD_NUMBER_UNIT_LENGTH } from './input';

export const ERROR_MESSAGES = {
  EXCESSIVE_WHITE_SPACE: '공백을 연속으로 입력할 수 없습니다.',
  NOT_ENG: '영어만 입력 가능합니다.',
  MISSING_NAME: '이름을 입력해주세요.',

  NOT_NUMBER: '숫자를 입력해주세요.',
  CARD_NUMBER_UNIT_LENGTH: `${CARD_NUMBER_UNIT_LENGTH}개의 숫자를 입력해주세요.`,

  INVALID_DATE: '유효하지 않은 날짜입니다.',
  EXPIRED_DATE: '이미 만료된 카드입니다.',
};
