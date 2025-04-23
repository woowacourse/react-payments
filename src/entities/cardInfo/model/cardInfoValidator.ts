import { isValidCardType } from './cardType';

export interface InputValidationResultProps {
  [key: string]: [number, string];
}

export const cardNumberValidator = (inputs: string[]) => {
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    if (!isNumeric(input)) {
      return [index, '카드 번호는 숫자만 입력 가능합니다.'];
    }
    if (!isFourDigit(Number(input))) {
      return [index, '카드 번호는 4자리어야 합니다.'];
    }
    if (index === 0 && !isValidCardType(input)) {
      return [0, '카드 번호는 4 또는 51~55로 시작해야 합니다.'];
    }
  }

  return [-1, ''];
};

export const cardExpirationDateValidator = (date: { month: string; year: string }) => {
  if (!isNumeric(date.month)) {
    return [0, '유효 월은 숫자만 입력 가능합니다.'];
  }

  if (!isValidExpirationMonth(date.month)) {
    return [0, '유효 월은 1월과 12월 사이만 입력 가능합니다.'];
  }

  if (!isTwoDigit(date.month)) {
    return [0, '유효 월은 2자리 숫자여야 합니다.'];
  }

  if (!isNumeric(date.year)) {
    return [1, '유효 연도는 숫자만 입력 가능합니다.'];
  }

  if (!isTwoDigit(date.year)) {
    return [1, '유효 연도는 2자리 숫자여야 합니다.'];
  }
  return [-1, ''];
};

export const cardCVCValidator = (input: string) => {
  if (!isNumeric(input)) {
    return [0, 'CVC는 숫자만 입력 가능합니다.'];
  }
  return [-1, ''];
};

const isNumeric = (input: string) => {
  const numericRegex = /^\d+$/;
  return numericRegex.test(input);
};

const isFourDigit = (cardNumber: number) => {
  return String(cardNumber).length === 4;
};

const isValidExpirationMonth = (month: string) => {
  const num = Number(month);
  return num >= 1 && num <= 12;
};

const isTwoDigit = (input: string) => {
  return input.length === 2;
};
