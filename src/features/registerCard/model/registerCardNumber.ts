import { isNumericString } from '@/core/utils/validator';
import { getCardBrand, validateCardNumber, type CardBrand } from '@/entities/card/model/cardNumber';

export const CARD_NUMBERS_ERROR_MESSAGES = {
  TYPE: '숫자만 입력 가능합니다.',
  LENGTH: '카드 번호를 전부 채워주세요.',
  UNKNOWN: '유효하지 않은 카드번호입니다.',
};

export const CARD_BRAND_FORMAT: Record<CardBrand | 'UNKNOWN', number[]> = {
  VISA: [4, 4, 4, 4],
  MASTERCARD: [4, 4, 4, 4],
  DINERS: [4, 4, 4, 2],
  AMEX: [4, 4, 4, 3],
  UNIONPAY: [4, 4, 4, 4],
  UNKNOWN: [4, 4, 4, 4],
};

export const filterInputCardNumber = (value: string) => {
  return value !== '' && !isNumericString(value);
};

export const updateCardNumberInputs = (
  values: string[],
  inputValue: string,
  index: number,
): string[] => {
  return values.map((value, idx) => (idx === index ? inputValue : value));
};

const getCardBrandFormat = (brand: CardBrand | undefined): number[] => {
  return brand !== undefined ? CARD_BRAND_FORMAT[brand] : CARD_BRAND_FORMAT.UNKNOWN;
};

const getCardNumberErrors = (values: string[], format: number[]) => {
  return values.map((value, idx) => {
    if (value.length !== format[idx]) return CARD_NUMBERS_ERROR_MESSAGES.LENGTH;
    return undefined;
  });
};

const isCompleteCardNumber = (numbers: string[], format: number[]): boolean => {
  return numbers.every((number, index) => {
    return number.length === format[index];
  });
};

const getVisibleFieldErrors = (fieldErrors: (string | undefined)[], touched: boolean[]) => {
  return fieldErrors.map((error, index) => (touched[index] ? error : undefined));
};

const getCardNumberInformation = ({
  isComplete,
  isValid,
  visibleFieldErrors,
}: {
  isComplete: boolean;
  isValid: boolean;
  visibleFieldErrors: (string | undefined)[];
}) => {
  const cardNumberError = isComplete && !isValid ? CARD_NUMBERS_ERROR_MESSAGES.UNKNOWN : undefined;

  const inputErrors = cardNumberError
    ? visibleFieldErrors.map(() => cardNumberError)
    : visibleFieldErrors;

  const totalErrorMessage = cardNumberError ?? visibleFieldErrors.find(Boolean);

  return {
    inputErrors,
    totalErrorMessage,
  };
};

export const getCardNumberFieldState = ({
  numbers,
  touched,
}: {
  numbers: string[];
  touched: boolean[];
}) => {
  const cardNumber = numbers.join('');
  const brand = getCardBrand(cardNumber);
  const format = getCardBrandFormat(brand);

  const isValid = validateCardNumber(cardNumber);
  const isComplete = isCompleteCardNumber(numbers, format);

  const fieldErrors = getCardNumberErrors(numbers, format);
  const visibleFieldErrors = getVisibleFieldErrors(fieldErrors, touched);

  const { inputErrors, totalErrorMessage } = getCardNumberInformation({
    isComplete,
    isValid,
    visibleFieldErrors,
  });

  return {
    format,
    inputErrors,
    totalErrorMessage,
  };
};

export const getNextCardNumberFieldState = (numbers: string[]) => {
  const cardNumber = numbers.join('');
  const brand = getCardBrand(cardNumber);
  const format = getCardBrandFormat(brand);
  const isValid = validateCardNumber(cardNumber);

  return { cardNumber, brand, format, isValid };
};
