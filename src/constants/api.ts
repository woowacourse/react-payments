import type { AddCardErrorCode } from "../types/api";

export const ERROR_MESSAGE: Record<AddCardErrorCode, string> = {
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
  INVALID_CVC: '유효하지 않은 CVC입니다.',
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다.',
  INVALID_ISSUER_CODE: '지원하지 않는 카드사입니다.',
};