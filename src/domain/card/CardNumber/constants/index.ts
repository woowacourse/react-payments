import { SequenceType } from '../types';

export const cardNumberInputSequences: SequenceType[] = ['first', 'second', 'third', 'fourth'];
export const CARD_NUMBER_MAX_LENGTH = 4;

export const CARD_NUMBER_ERROR_MESSAGE = {
  minLength: '4자리 숫자를 입력해 주세요',
} as const;
