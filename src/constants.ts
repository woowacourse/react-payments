import type { ErrorStatus } from './types';

export const ERROR_MESSAGES: Record<Exclude<ErrorStatus, null>, string> = {
  required: '필수 입력 항목입니다.',
  invalidLength: '입력 길이가 올바르지 않습니다.',
  numberOnly: '숫자만 입력 가능합니다.',
};
