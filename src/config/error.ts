import { CARD_NUMBER } from './card';

export const ERROR_TYPE = {
  noneCardType: 'noneCardType',
  shortCardSegment: 'shortCardSegment',
} as const;

export type ErrorType = (typeof ERROR_TYPE)[keyof typeof ERROR_TYPE];

export const ERROR_TYPE_TO_MESSAGE: Record<ErrorType, string> = {
  noneCardType: '유효하지 않은 카드 번호입니다. 카드 번호를 확인해주세요',
  shortCardSegment: `카드 번호는 ${CARD_NUMBER.length.max}자리씩 입력해주세요.`,
};
