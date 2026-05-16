import type {CreateCardRequest} from '@/domain/card/cardApi.types';
import {getBrandName, getFormatByBrand} from '@/domain/card/cardBrand';
import {getCompanyByIssuerCode} from '@/domain/card/cardCompany';

const MIN_CARD_NUMBER_DIGIT = 14;
const MAX_CARD_NUMBER_DIGIT = 16;

const MIN_EXPIRATION_MONTH = 1;
const MAX_EXPIRATION_MONTH = 12;

const MIN_CVC_DIGIT = 3;
const MAX_CVC_DIGIT = 4;

const INVALID_TEST_CVC = '000';

export const ERROR_MESSAGES = {
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
  INVALID_CVC: '유효하지 않은 CVC입니다.',
  INVALID_EXPIRATION_DATE: '유효하지 않은 만료일입니다.',
  INVALID_ISSUER_CODE: '지원하지 않는 카드사입니다.',
};

export type ErrorCode = keyof typeof ERROR_MESSAGES;

// 카드 번호가 브랜드 조건을 충족하고 해당 브랜드 자릿수 규칙을 만족하는지 확인
const isSupportedCardNumber = (number: string) => {
  const digitPattern = new RegExp(`^\\d{${MIN_CARD_NUMBER_DIGIT},${MAX_CARD_NUMBER_DIGIT}}$`);
  if (!digitPattern.test(number)) return false;

  const brand = getBrandName([number]);
  if (!brand) return false;

  const brandDigitCount = getFormatByBrand(brand).reduce((sum, digitCount) => sum + digitCount, 0);
  if (number.length !== brandDigitCount) return false;

  return true;
};

// 만료일이 MM/YY 형식이고 월이 01~12 범위인지 확인
const isValidExpirationDate = (expirationDate: string) => {
  const match = /^(?<month>\d{2})\/\d{2}$/.exec(expirationDate);
  if (!match?.groups) return false;

  const month = Number(match.groups.month);
  return month >= MIN_EXPIRATION_MONTH && month <= MAX_EXPIRATION_MONTH;
};

// CVC가 3~4자리 숫자이고 테스트용 실패 값 000이 아닌지 확인
const isValidCvc = (cvc: string) => {
  const cvcPattern = new RegExp(`^\\d{${MIN_CVC_DIGIT},${MAX_CVC_DIGIT}}$`);

  return cvcPattern.test(cvc) && cvc !== INVALID_TEST_CVC;
};

// 카드 등록 요청을 검증하고 첫 번째 실패 code를 반환
export const validateCreateCardRequest = ({number, expirationDate, cvc, issuerCode}: Partial<CreateCardRequest>) => {
  if (!number || !isSupportedCardNumber(number)) return 'INVALID_CARD_NUMBER';
  if (!cvc || !isValidCvc(cvc)) return 'INVALID_CVC';
  if (!expirationDate || !isValidExpirationDate(expirationDate)) return 'INVALID_EXPIRATION_DATE';
  if (!issuerCode || !getCompanyByIssuerCode(issuerCode)) return 'INVALID_ISSUER_CODE';

  return null;
};
