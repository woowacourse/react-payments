import type { CardCompanyId } from '../constant/cardCompanies';
import { getCardNumberSegmentLengths } from './cardInfo';
import { isExactLength, isValidMonth } from './validator';

export const NUMBER_LENGTH = 4;
export const EXPIRY_LENGTH = 2;
export const CVC_LENGTH = 3;
export const PASSWORD_LENGTH = 2;

export const validateCardNumbers = (value: string[]) => {
  const segmentLengths = getCardNumberSegmentLengths(value);

  return value.map((cardNumber, index) => {
    if (!isExactLength(cardNumber, segmentLengths[index])) {
      return `카드 번호 ${segmentLengths[index]}자리를 입력해 주세요`;
    }

    return null;
  });
};

export const hasCardNumbersError = (cardNumbers: string[]) => {
  return validateCardNumbers(cardNumbers).some(
    (errorMessage) => errorMessage !== null,
  );
};

export const validateExpiryMonth = (value: string) => {
  if (!isExactLength(value, EXPIRY_LENGTH)) {
    return '월은 2자리로 입력해 주세요';
  }

  if (!isValidMonth(value)) {
    return '월은 01부터 12까지 입력해 주세요';
  }

  return null;
};

export const validateExpiryYear = (value: string) => {
  if (!isExactLength(value, EXPIRY_LENGTH)) {
    return '년도는 2자리로 입력해 주세요';
  }

  return null;
};

export const validateCvcNumber = (value: string) => {
  if (!isExactLength(value, CVC_LENGTH)) {
    return 'CVC 번호 3자리를 입력해 주세요';
  }

  return null;
};

export const validatePassword = (value: string) => {
  if (!isExactLength(value, PASSWORD_LENGTH)) {
    return '비밀번호 2자리를 입력해 주세요';
  }

  return null;
};

export const hasCardFormError = ({
  cardNumbers,
  expiryMonth,
  expiryYear,
  cvcNumber,
  password,
}: {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cvcNumber: string;
  password: string;
}) => {
  const hasExpiryMonthError = validateExpiryMonth(expiryMonth) !== null;
  const hasExpiryYearError = validateExpiryYear(expiryYear) !== null;
  const hasCvcError = validateCvcNumber(cvcNumber) !== null;
  const hasPasswordError = validatePassword(password) !== null;

  return (
    hasCardNumbersError(cardNumbers) ||
    hasExpiryMonthError ||
    hasExpiryYearError ||
    hasCvcError ||
    hasPasswordError
  );
};

export const getAvailableStep = ({
  cardNumbers,
  cardCompanyId,
  expiryMonth,
  expiryYear,
  cvcNumber,
  password,
}: {
  cardNumbers: string[];
  cardCompanyId: CardCompanyId | null;
  expiryMonth: string;
  expiryYear: string;
  cvcNumber: string;
  password: string;
}) => {
  if (hasCardNumbersError(cardNumbers)) return 0;
  if (cardCompanyId === null) return 1;

  if (
    validateExpiryMonth(expiryMonth) !== null ||
    validateExpiryYear(expiryYear) !== null
  )
    return 2;

  if (validateCvcNumber(cvcNumber) !== null) return 3;
  if (validatePassword(password) !== null) return 4;

  return 5;
};
