import { isExactLength, isValidMonth } from './validator';

export const NUMBER_LENGTH = 4;
export const EXPIRY_LENGTH = 2;
export const CVC_LENGTH = 3;
export const PASSWORD_LENGTH = 2;

export const validateCardNumber = (value: string) => {
  if (!isExactLength(value, NUMBER_LENGTH)) {
    return '카드 번호 4자리를 입력해 주세요';
  }

  return null;
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
}: {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
  cvcNumber: string;
}) => {
  const hasCardNumberError = cardNumbers.some(
    (cardNumber) => validateCardNumber(cardNumber) !== null,
  );
  const hasExpiryMonthError = validateExpiryMonth(expiryMonth) !== null;
  const hasExpiryYearError = validateExpiryYear(expiryYear) !== null;
  const hasCvcError = validateCvcNumber(cvcNumber) !== null;

  return (
    hasCardNumberError ||
    hasExpiryMonthError ||
    hasExpiryYearError ||
    hasCvcError
  );
};
